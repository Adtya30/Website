import styles from "../styles/Services.module.css"
import  Image  from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
const Services = () => {
    return(
        <section id="services" className={styles.services} style={{ padding: "100px 0"}}>
      <div className="container">

        <div className="section-title">
          <h2 className={styles.h2}>Services</h2>
          <p className={styles.para}>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons.jpg" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <h5 className={styles.h5}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>&nbsp;13.69</h5>
              <p className={styles.p}>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="150">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons-1.png" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Sed ut perspiciatis</a></h4>
              <h5 className={styles.h5}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>&nbsp;12.83</h5>
              <p className={styles.p}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons-2.png" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Magni Dolores</a></h4>
              <h5 className={styles.h5}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>&nbsp;9.64</h5>
              <p className={styles.p}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="450">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons-3.jpg" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Nemo Enim</a></h4>
              <h5 className={styles.h5}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>&nbsp;12.75</h5>
              <p className={styles.p}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="600">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons-4.png" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Dele cardo</a></h4>
              <h5 className={styles.h5}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>&nbsp;8.45</h5>
              <p className={styles.p}>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons-5.png" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Divera don</a></h4>
              <h5 className={styles.h5}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>&nbsp;12.64</h5>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons-6.png" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Divera don</a></h4>
              <h5 className={styles.h5}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>&nbsp;13.9</h5>
              <p className={styles.p}>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons-7.png" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Divera don</a></h4>
              <h5 className={styles.h5}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>&nbsp;15</h5>
              <p className={styles.p}>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
            <div className={styles.icon_box}>
              <div className={styles.icon}><Image src="/img/services/icons-8.jpg" classNameName={styles.responsive} alt="img-fluid" height="180" width="180"/></div>
              <h4><a href="">Divera don</a></h4>
              <h5 className={styles.h5}>18.47</h5>
              <p className={styles.p}>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

     </div>
    </section>
    )
}
export default Services; 