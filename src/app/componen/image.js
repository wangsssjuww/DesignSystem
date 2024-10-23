import React from 'react';
import styles from './stylemodule/image.module.css';
import Container from './container';

const ImageGallery = () => {
    return (
        <div className={styles.galleryContainer}>
            {/* First Image */}
            <div className={styles.galleryImage}>
                <img
                    src="https://i0.wp.com/inipasti.com/wp-content/uploads/2021/06/ilustrasi_vaksinasi11260180257190287274.jpg?fit=700%2C700&ssl=1"
                    alt="Gallery Image 1"
                    width={500}
                    height={500}
                />
            </div>
            
            {/* First Container */}
            <div className={styles.container}>
                <Container size="xlarge">
                    <p className={styles.paragraph}>
                    width: 30%;, height: auto;, object-fit: cover;, border-radius: 12px;,    max-width: 500px;, border-radius: 12px;,
                    </p>
                    <p className={styles.paragraphHighlight}>
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);, transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;, transform: scale(1.05);
                    </p>
                </Container>
            </div>
            
            {/* Second Image */}
            <div className={styles.galleryImage}>
                <img
                    src="https://i.pinimg.com/564x/89/8f/14/898f14df25a037b725c607af884a022f.jpg"
                    alt="Gallery Image 2"
                    width={564}
                    height={564}
                />
            </div>
            
            {/* Second Container */}
            <div className={styles.container}>
                <Container size="xlarge">
                    <p className={styles.paragraph}>
                    width: 30%;, height: auto;, object-fit: cover;, border-radius: 12px;,    max-width: 500px;, border-radius: 12px;,
                    </p>
                    <p className={styles.paragraphHighlight}>
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);, transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;, transform: scale(1.05);
                    </p>
                </Container>
            </div>
            
            {/* Third Image */}
            <div className={styles.galleryImage}>
                <img
                    src="https://i.pinimg.com/564x/eb/53/a8/eb53a844192cc64df811b1c3a8ec403c.jpg"
                    alt="Gallery Image 3"
                    width={200}
                    height={200}
                />
            </div>
            
            {/* Third Container */}
            <div className={styles.container}>
                <Container size="xlarge">
                    <p className={styles.paragraph}>
                    width: 30%;, height: auto;, object-fit: cover;, border-radius: 12px;,    max-width: 500px;, border-radius: 12px;,
                    </p>
                    <p className={styles.paragraphHighlight}>
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);, transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;, transform: scale(1.05);
                    </p>
                </Container>
            </div>
        </div>
    );
};

export default ImageGallery;
