import styles from './BeforeHeader.module.css';
import Container from 'react-bootstrap/Container'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';

export const BeforeHeader = () => {
    const [modalActive, setModalActive] = useState(false)    
    return (
        <Container>
            <div className={styles.wrapper}>
                <Link to="/"><div className={styles.logo}><img src='./image/logo.png'></img></div></Link>
                <div className={styles.number}><span className={styles.icon}><FaPhoneAlt /></span><a className={styles.phone} href='tel:+79218491015'>+7(921)849-10-15</a></div>
                <div className={styles.getServiceBtn}><a className={styles.btn} onClick={() => setModalActive(true)}>Запись на прием</a></div>
                <Modal active={modalActive} setActive={setModalActive}>
                    ХУЕСОСЫ
                    </Modal>
            </div>
        </Container>
    )
}