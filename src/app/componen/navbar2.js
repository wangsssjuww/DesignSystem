// app/componen/Footer.js
import styles from '../componen/stylemodule/cardNavbar.module.css'; // Import styles
import Container from './container';

const Footer = () => {
    return (
        <><footer className={styles.footer}>
            <Container size="large">
                <p style={{ backgroundColor: '#66D9A3', color: 'white', padding: '10px', textAlign: 'center' }}>
                    © {new Date().getFullYear()} Clinica. All rights reserved.
                </p>
            </Container>
            <br/>
        </footer><div className={styles.container}>
                <Container size="xlarge">
                    <p>backgroundColor: '#ebebeb', color: 'black', padding: '10px', textAlign: 'center' </p>
                </Container>
            </div></>
    );
};

export default Footer;
