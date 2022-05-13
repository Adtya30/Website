import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Clients.module.css'
const Clients = () => {
    return(
        <section id="clients" class={styles.clients}>
      <div class="container" data-aos="zoom-in">

        <div class="row d-flex align-items-center">

          <div class="col-lg-2 col-md-4 col-6">
            <Image src="/img/clients/client-1.png" class={styles.img_fluid} alt="responsive" height="100" width="120"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <Image src="/img/clients/client-2.png" class={styles.img_fluid} alt="responsive"  height="100" width="120"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <Image src="/img/clients/client-3.png" class={styles.img_fluid} alt="responsive"  height="100" width="120"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <Image src="/img/clients/client-4.png" class={styles.img_fluid} alt="responsive"  height="100" width="120"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <Image src="/img/clients/client-5.png" class={styles.img_fluid} alt="responsive"  height="100" width="120"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <Image src="/img/clients/client-6.png" class={styles.img_fluid} alt="responsive" height="100" width="120"/>
          </div>

        </div>

      </div>
    </section>
    );
}
export default Clients;