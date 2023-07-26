import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Categories, Footer } from "./Components";
import styles from "./Home.module.css";
import { scrollToTop } from "../../Utils";

const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <main className={styles.lpMain}>
        <section className={styles.heroImgContainer}>
          <Link to="/products">
            <img
              src="https://images.unsplash.com/photo-1660150912355-83e1298d0115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="HeroImg"
              className={styles.heroImg}
            />
          </Link>
        </section>
        <section>
          <div className={styles.lpTextContainer}>
            <h3>New Releases</h3>
            <Link to="/products">View All</Link>
          </div>
          <Carousel />
        </section>
        <section className={styles.lpCategory}>
          <h3>Featured Categories</h3>
          <Categories />
        </section>
        <div className={styles.lpCta}>
          <Link to="/products">Explore More</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { Home };
