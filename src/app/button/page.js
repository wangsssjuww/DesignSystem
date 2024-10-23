import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import Button from '../componen/button';
import Container from '../componen/container';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Clinica</h1>
                <Button state="login">Login</Button>
                <br/>
                <div className={styles.container}>
                <Container size="xlarge">
                    <p>color: #FFF;, background: #66D9A3;, border: none;</p>
                </Container>
                <br/>
                </div>
                <Button state="call">Call to action</Button>
                <br/>
                <Container size="xlarge">
                    <p>color: #FFF;, background: #66D9A3;, border: none;</p>
                </Container>
                <br/>
                <Button state="danger">Detail</Button>
                <br/>
                <Container size="xlarge">
                    <p>color: #FFF;, background: #66D9A3;, border: none;</p>
                </Container>
            </div>
        </Layout>
    );
}
export default Page;