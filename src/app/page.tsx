import Image from "next/image";
import Link from "next/link";
import styles from "../../public/assets/css/styles.module.scss";

export default function Home() {
  return (
    <main className="">
      {/* salutations */}
      <div>
        <div className="heading-section">
          <h1 id="heading">Hello</h1>
        </div>
      </div>
      {/* links */}
      <div className="links-section">
        <div id="links">
          <Link href="https://www.linkedin.com/in/gikonyo-kimani-05328211b/">Linkedin</Link>
        </div>
        <div id="links">
          <Link href="https://github.com/dgikonyo">@dgikonyo</Link>
        </div>
      </div>
      {/* introduce your self */}
      <div className="about-section">
        <div className="about-me">
          <div id="about-header">
            <h2>About Me</h2>
          </div>
          <div id="description">
            <p>I am a Software Engineer based ni Nairobi, Kenya. I specialize in backend development and my key focus is on building products ontop of AI.

              I am currently building <Link href="">Jirani Crowdfund</Link> to create awareness for and assist startups and creatives to get funding from their projects.
            </p>
          </div>
        </div>
        <div className="details">
          <div id="items">
            <h3 id='about-item'>Location</h3>
            {/* add Kenyan logo */}
            <p>Nairobi, Kenya</p>
          </div>
          <div id="items">
            <h3 id="about-item">Linked In</h3>
            <Link id="links" href="https://github.com/dgikonyo">@dgikonyo</Link>
          </div>
          <div id="items">
            <h3 id="about-item">Github</h3>
            <Link id="links" href="https://www.linkedin.com/in/gikonyo-kimani-05328211b/">Gikonyo Kimani</Link>
          </div>
          <div id="items">
            <h3 id="about-item">Email</h3>
            <p id="description">kd.gikonyo@gmail.com</p>
          </div>
        </div>

      </div>
      {/* Projects */}
      <div>
        <div></div>
      </div>
    </main>
  );
}
