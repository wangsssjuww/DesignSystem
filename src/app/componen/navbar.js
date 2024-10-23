// app/componen/Navbarnya header.js
import Link from 'next/link';
import styles from '../componen/stylemodule/cardNavbar.module.css'; // Gaya untuk Navbar
import Container from './container';

const Navbar = () => {
    return (
        <><div>
            <nav className={styles.navbar}>
                <div className={styles.navbar__container}>
                    <Link href="/" className={styles.navbar__brand}>
                        Clinica
                    </Link>
                    <div className={styles.navbar__buttons}>
                        <Link href="/info/home">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_primary}`}>
                                Home
                            </button>
                        </Link>
                        <Link href="/info/layanan">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_secondary}`}>
                                Layanan
                            </button>
                        </Link>
                        <Link href="/info/blog">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_login}`}>
                                Blog
                            </button>
                        </Link>
                        <Link href="/info/kontak">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_danger}`}>
                                Kontak
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        <br/>
        <div className={styles.container}>
                <Container size="xlarge">
                    <p>background-color: #ebebeb;, padding: 10px 20px;, color: black;,font-size: 24px;,text-decoration: none;,opacity:, background-color: #66D9A3;,color: white;</p>
                </Container>
        </div></>

    );
};

export default Navbar;
