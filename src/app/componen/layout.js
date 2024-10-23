// components/Layout.js
import styles from './stylemodule/layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <nav>
                    <ul>
                        <li>Bagian Bagian Website</li>
                        <li><a href="navbar">Navbar</a></li>
                        <li><a href="button">Button</a></li>
                        <li><a href="image">Image</a></li>
                        <li><a href="home">Home</a></li>
                    </ul>
                </nav>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
