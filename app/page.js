import Link from "next/link";

const cards = [
  { href: "/portfolio", title: "Portfolio", text: "Projects I built and loved making." },
  { href: "/about", title: "About", text: "My story, my journey and what I enjoy." },
  { href: "/gallery", title: "Gallery", text: "Little memories worth keeping." },
];

export default function Home() {
  return (
    <main className="pg">
      <span className="star s1" />
      <span className="star s2" />

      <section className="panel hero">
        <span className="tag">welcome to my little corner of the web</span>
        <h1 className="title">
          Hello, I&apos;m
          <br />
          Alrich Pena
        </h1>
        <p className="lead">
          A student who loves building pretty websites and learning something
          new every day. Take a look around.
        </p>
        <div className="row">
          <Link href="/portfolio" className="btn">
            View my work
          </Link>
          <Link href="/about" className="btn alt">
            About me
          </Link>
        </div>
      </section>

      <section className="grid3">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="card hover">
            <h2 className="sub">{c.title}</h2>
            <p>{c.text}</p>
            <b className="more">Open page</b>
          </Link>
        ))}
      </section>
    </main>
  );
}