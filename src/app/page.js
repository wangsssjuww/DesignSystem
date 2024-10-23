// "use client";  // Add this to make the file a Client Component

// import { useState } from 'react';  // Import useState hook
// import Head from 'next/head';
// import styles from './styles/Home.module.css';
// import Layout from './componen/layout';

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);  // State for toggling menu

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);  // Toggle menu visibility
//   };

//   return (
//     <Layout>
//       <div className={styles.container}>
//         <Head>
//           <title>Next.js Layout Example</title>
//           <meta name="description" content="Next.js layout example with grid system" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>

//         {/* Header Section */}
//         {/* <header className={styles.header}>
//           <div className={styles.logo}>Logo</div>
//           <div className={styles.rightSection}>
//             <nav className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
//               <a href="#">Home</a>
//               <a href="#">Layanan</a>
//               <a href="#">Blog</a>
//               <a href="#">Kontak</a>
//             </nav>
//             <div className={styles.login}>
//               <button>Login</button>
//             </div>
//             <div className={styles.hamburger} onClick={toggleMenu}>
//               &#9776;
//             </div>
//           </div>
//         </header> */}

//         {/* Main Section with Grid Layout */}
//         <main className={styles.main}>
//           <div className={styles.gridContainer}>
//             <div className={styles.gridItem}>Grid 2</div>
//             <div className={styles.heroImage}>Hero Image</div>
//           </div>
//         </main>

//         {/* Footer Section */}
//         <footer className={styles.footer}>
//           Footer Content
//         </footer>
//       </div>
//     </Layout>
//   );
// }

// pages/index.js
import Button from '../app/componen/button';
import Container from "../app/componen/container";
const HomePage = () => {
  return (
      <div>
          <Container size="small">
              <h2>Small Container</h2>
              <p>This is a small container.</p>
          </Container>

          <Button state="login">Login</Button>
          <Button state="call">Call to Action</Button>
          <Button state="danger">Danger</Button>
          <Button state="default">Default</Button>
          <Button state="warning">Warning</Button>
      </div>
  );
};
export default HomePage;


