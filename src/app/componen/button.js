'use_client'
// components/Button.js
import styles from './stylemodule/button.module.css';
import Container from './container';

const Button = ({ children, state = 'default' }) => {
    return (
        <>
            <button className={`${styles.button} ${styles[`button--state-${state}`]}`}>
                {children}
            </button>

            
        </>
        
    );
};

export default Button;
