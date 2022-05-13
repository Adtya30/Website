import styles from "../styles/Testimonials.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
const Testimonials = () => {
    return(
      
        <section id="testimonials" className={styles.testimonials}  style={{ padding: "100px 0"}}>
      <div className="container">

        <div className="section-title mt-5 pt-4">
          <h2 className={styles.h2}>Testimonials</h2>
          <p className={styles.para}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row portfolio-container my-5 pt-2" data-aos="fade-up" data-aos-delay="150">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className={styles.testimonials_item}>
            <Image src="/img/testimonials/testimonials-1.jpg" className="responsive-img" alt="responsive" height="600" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>App 1</h4>
              <p className={styles.p}>App</p>
              <a href="/img/testimonials/testimonials-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
              </svg></a>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className={styles.testimonials_item}>
          <Image src="/img/testimonials/testimonials-2.jpg" className="responsive-img" alt="responsive"  height="470" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>Web 3</h4>
              <p className={styles.p}>Web</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className={styles.testimonials_item}>
          <Image src="/img/testimonials/testimonials-3.jpg" className="responsive-img" alt="responsive"  height="600" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>App 2</h4>
              <p className={styles.p}>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className={styles.testimonials_item}>
          <Image src="/img/testimonials/testimonials-4.jpg" className="responsive-img" alt="responsive"  height="780" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>Card 2</h4>
              <p className={styles.p}>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className={styles.testimonials_item}>
          <Image src="/img/testimonials/testimonials-5.jpg" className="responsive-img py-5" alt="responsive"  height="600" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>Web 2</h4>
              <p className={styles.p}>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className={styles.testimonials_item}>
          <Image src="/img/testimonials/testimonials-6.jpg" className="responsive-img" alt="responsive"  height="420" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>App 3</h4>
              <p className={styles.p}>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className={styles.testimonials_item}>
          <Image src="/img/testimonials/testimonials-7.jpg" className="responsive-img" alt="responsive"  height="450" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>Card 1</h4>
              <p className={styles.p}>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className={styles.testimonials_item}>
          <Image src="/img/testimonials/testimonials-8.jpg" className="responsive-img" alt="responsive"  height="600" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>Card 3</h4>
              <p className={styles.p}>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className={styles.testimonials_item}>
          <Image src="/img/testimonials/testimonials-9.jpg" className="responsive-img" alt="responsive"  height="450" width="550"/>
            <div className={styles.testimonials_info}>
              <h4 className={styles.h4}>Web 3</h4>
              <p className={styles.p}>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className={styles.details_link} title="More Details"><i className="bx bx-link"></i></a>
            </div>
            </div>
          </div>

        </div>

      </div>
    </section>
 

    );
}
export default Testimonials;