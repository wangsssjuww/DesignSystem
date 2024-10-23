import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import CardNavbar from '../componen/navbar';
import Navbar2 from '../componen/navbar2';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Button Header</h1>
                <CardNavbar /> {/* Menampilkan CardNavbar di halaman */}
                <br/>
                <h1>Footer</h1>
                <Navbar2 />
            </div>
        </Layout>
    );
}
export default Page;