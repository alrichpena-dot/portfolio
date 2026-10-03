const facts = [
  ["Age", "19"],
  ["Course", "BSIT"],
  ["Hobby", "Dance"],
  ["Email", "alrichpena@email.com"],
];

const journey = [
  {
    t: "The start",
    d: "I started learning about technology and became interested in creating websites.",
  },
  {
    t: "Turning point",
    d: "Working on school projects made me realize that I enjoy coding and designing.",
  },
  {
    t: "Growth",
    d: "I learned to be more patient, creative, and willing to learn from my mistakes.",
  },
  {
    t: "Now",
    d: "I’m continuing to improve my skills by creating projects.",
  },
];

const goals = [
  [
    "Next term",
    "I want to improve my web development skills and create better projects.",
  ],
  [
    "Next step",
    "I want to learn more about React, Next.js, and UI/UX design.",
  ],
  [
    "Long term",
    "I hope to become a skilled developer and build websites and applications that people can enjoy and use.",
  ],
];

const keywords = [
  "Creative",
  "Curious",
  "Kind",
  "Hardworking",
  "Matcha lover",
];

export default function About() {
  return (
    <main className="pg">
      <span className="star s2" />
      <span className="star s3" />

      <h1 className="title">About Me</h1>

      <section className="about-grid">
        <div className="card profile">

          {/* PROFILE IMAGE */}
          <div className="booth">
            <img
              src="/image/alrich.jpg"
              alt="Alrich Pena"
            />
          </div>

          <div>
            <h2 className="sub">Profile</h2>
            <p className="name">Alrich Pena</p>

            <ul className="facts">
              {facts.map(([k, v]) => (
                <li key={k}>
                  <span className="tag">{k}</span> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="panel story">
          <h2 className="sub">My Story</h2>

          <p>
            Hi! I’m Alrich Pena, a student studying Information Technology.
            I’m interested in web development and enjoy creating websites and
            interactive projects that combine creativity and technology. I love
            experimenting with designs, learning new programming skills, and
            turning my ideas into something people can use. One day, I hope to
            become a skilled developer and create meaningful digital
            experiences that I can be proud of.
          </p>

          <p>
            My experiences in school, especially working on projects with my
            classmates, have helped shape who I am today. The challenges I
            encountered while learning how to code taught me to be patient and
            keep trying even when something doesn't work at first. I also enjoy
            spending time with my friends, listening to music, playing games,
            and exploring creative ideas. These experiences continue to inspire
            me to learn, improve, and become better at what I do.
          </p>
        </div>
      </section>

      <section className="sheet">
        <h2 className="sub center big">My Journey</h2>

        <div className="journey">
          {journey.map((j) => (
            <div key={j.t} className="dot">
              <b>{j.t}</b>
              <span>{j.d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sheet">
        <h2 className="sub center big">Where I&apos;m Headed</h2>

        {goals.map(([label, text]) => (
          <div key={label} className="ribbon">
            <span className="tag">{label}</span>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section className="kws">
        <h2 className="sub center big">
          Keywords That Describe Me
        </h2>

        <div className="chips center-row">
          {keywords.map((k) => (
            <span key={k} className="kw">
              {k}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}