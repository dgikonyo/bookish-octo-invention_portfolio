import styles from "../../../public/assets/css/page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <section className={styles.footer}>
            <footer className="row py-3">
                <div className="col-md-12 col-xs-12">
                    <p className="text-start text-body-secondary">
                        © 2023 <Link href="https://choroastudios.vercel.app/">Choroa Design Studios</Link>
                    </p>
                </div>
            </footer>
        </section>
    );
}