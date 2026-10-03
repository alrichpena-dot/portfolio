// Edit your projects here. Leave link as "" if there is no link yet.
const projects = [
  {
    title: "Cuddle Fluff",
    tags: ["HTML", "CSS"],
    text: "A cute online store website for stuffed toys, made as a school project.",
    link: "/cuddlefluff/index.html",
    emoji: "🐻",
  },
  
];

export default function Portfolio() {
  return (
    <main className="pg">
      <span className="star s1" />
      <span className="star s3" />

      <h1 className="title">My Portfolio</h1>
      <p className="lead center">Cuddle Fluff is an innovative e-commerce website that recommends teddy bears based on the user’s current mood, creating a more personal and emotional shopping experience.</p>

      <section className="grid3">
        {projects.map((p) => (
          <article key={p.title} className="card proj">
            <div className="proj-img">{p.emoji}</div>
            <h2 className="sub">{p.title}</h2>
            <div className="chips">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p>{p.text}</p>
            {p.link ? (
              <a href={p.link} target="_blank" rel="noreferrer" className="btn">
                Open project
              </a>
            ) : (
              <span className="btn off">Coming soon</span>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}