// import Image from "next/image";
import Link from "next/link";
import styles from "../../public/assets/css/page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "../app/components/Footer";

//add countdown timer to uploading next project

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className="row mt-5">
          <h1 className="col-sm-12 text-start">Hujambo,</h1>
        </div>
        {/* introduce your self */}
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="about-detail">
              <div className="fullname">
                <h2>
                  My name is <b> Gikonyo Kimani</b>
                </h2>
              </div>
              <div className="description">
                <p>
                  I am a software developer based in Nairobi, Kenya. I
                  specialize in backend development and my key focus is on
                  building products that will disrupt the technology markets in
                  Africa.
                </p>
                <p>
                  I am currently building projects in Machine Learning and
                  finance. Some of the projects I have done can be found in my
                  github link attached below.
                </p>
                <p>
                  Most of my projects can be found in my{" "}
                  <Link className="links" href="https://github.com/dgikonyo">
                    GitHub
                  </Link>{" "}
                  page. This is my{" "}
                  <Link
                    className="links"
                    href="https://www.linkedin.com/in/gikonyo-kimani-05328211b/"
                  >
                    LinkedIn
                  </Link>{" "}
                  page if you would want to connect and view my past work
                  experiences.
                </p>
              </div>
              <div>
                <p>
                  Outside work I like engaging in FPS games, community projects
                  and creating paracords!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
