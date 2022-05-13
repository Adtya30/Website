import styles from "../styles/Action.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Action = () => {
    return(
        <section id="cta" className={styles.cta}>
      <div class="container " data-aos="zoom-in">

        <div class="text-center">
          <h3 className={styles.h3}>Call To Action</h3>
          <p className={styles.p}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className={styles.cta_btn} href="#" >Call To Action</a>
      </div>
      </div>
    </section>
    );
}
export default Action;