"use client";

import { useEffect, useState } from "react";

const filters = ["All", "Events", "Campus", "Friends"];


const items = [
  { title: "Foundation Day", tag: "Random", emoji: "🎉", size: "big", src: "/image/azuela.jpg" },
  { title: "Campus Gate", tag: "Campus", emoji: "🏫", size: "wide", src: "/image/campus.jpg" },
  { title: "Classmates", tag: "Friends", emoji: "🤝", size: "tall", src: "/image/BSIT1F.jpg", },
  { title: "Intramurals", tag: "Events", emoji: "🏅", size: "", src: "/image/school.jpg" },
  
  
  
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);
  const shown = items.filter((i) => active === "All" || i.tag === active);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <main className="pg">
      <span className="star s2" />
      <span className="star s3" />

      <div className="gal">
        <aside className="panel gal-side">
          <h1 className="title small">Gallery</h1>
          <p>Snapshots from school, events and good company.</p>

          <div className="gal-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`gal-filter ${active === f ? "on" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <span className="tag">{shown.length} memories</span>
        </aside>

        <section className="mosaic">
          {shown.map((i) => (
            <button
              key={i.title}
              className={`tile ${i.size}`}
              style={i.src ? { backgroundImage: `url(${i.src})` } : {}}
              onClick={() => setOpen(i)}
              aria-label={`Open ${i.title}`}
            >
              {!i.src && i.emoji}
              <span className="cap">{i.title}</span>
            </button>
          ))}
        </section>
      </div>

      {open && (
        <div className="lb" onClick={() => setOpen(null)}>
          <div className="lb-box" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setOpen(null)} aria-label="Close">
              ✕
            </button>
            <div
              className="lb-shot"
              style={open.src ? { backgroundImage: `url(${open.src})` } : {}}
            >
              {!open.src && open.emoji}
            </div>
            <h2 className="sub">{open.title}</h2>
            <span className="tag">{open.tag}</span>
          </div>
        </div>
      )}
    </main>
  );
}