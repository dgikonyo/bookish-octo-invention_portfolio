import styles from "../../../public/assets/css/page.module.scss";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-location"></div>
        </div>
      </div>
    </section>
  );
}
