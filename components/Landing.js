import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Landing.module.css'
const Landing = () => {
    return (
        <section id='landing'>
        <section id={styles["hero"]} class="d-flex align-items-center">
            <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
                <h1>Welcome to Cloudxcel</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <a href="#about" class={styles.btn_get_started} scrollto>Get Started</a>
            </div>
            </section>
            </section>
        
    );
}
export default Landing;