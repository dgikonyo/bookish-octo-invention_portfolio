// import Image from "next/image";
import Link from "next/link";
import styles from "../../public/assets/css/page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className="row">
          <h1 className="col text-center heading_text">Gikonyo Kimani</h1>
        </div>
        {/* links */}
        <div className="row mb-5">
          <div className="col text-end" id="links">
            <Link
              href="https://www.linkedin.com/in/gikonyo-kimani-05328211b/"
              className="nav-link px-2 text-body-secondary"
            >
              <span>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#636365" }}
                  size="2xl"
                  shake
                />
              </span>
            </Link>
          </div>

          <div className="col text-start" id="links">
            <Link
              href="https://github.com/dgikonyo"
              className="nav-link px-2 text-body-secondary"
            >
              <span>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "#636365" }}
                  size="2xl"
                  spinPulse
                />
              </span>
            </Link>
          </div>
        </div>
        {/* introduce your self */}
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="about-detail">
              <div className="about-header">
                <h2><b>About Me</b></h2>
              </div>
              <div className="description">
                <p>I am a Software Engineer based ni Nairobi, Kenya. I specialize in backend development and my key focus is on building products ontop of AI.

                  I am currently building <Link href="">Jirani Crowdfund</Link> to create awareness for and assist startups and creatives to get funding from their projects.
                </p>
              </div>
              <div>
                <p>Outside work I like engaging in FPS games, community projects and taking care of my dog...I'm looking for hobbies though!</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="location-detail">
              <div className="items">
                <h3 className='about-location'><b>Location</b></h3>
                {/* add Kenyan logo */}
                <p>Nairobi, Kenya</p>
              </div>
              <div id="items">
                <h3 id="about_item"><b>Email</b></h3>
                <p id="description">kd.gikonyo@gmail.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Projects */}
        <div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
