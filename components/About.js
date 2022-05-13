import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/About.module.css'
const About = () => {
    return(
        <section id="about" className={styles.about} style={{ padding: "100px 0"}}>
      <div className="content col sm-1 md-1 lg">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2 px-3"   data-aos="fade-left">
            <Image src="/img/about.jpg" className={styles.responsive} alt="about" height="540" width="750" styles={{paddingLeft:".5rem",paddingRight:".5rem"}}/>
            </div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"  data-aos="fade-right" style={{paddingLeft:"2rem",paddingRight:"1rem"}}>
          <div className={styles.content}>
            <h3 className={styles.h3}>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul className='list-unstyled'>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check " viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p className={styles.para}>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          

          </div>
        </div>
        </div>
      </div>
    </section>
    );
}
export default About;