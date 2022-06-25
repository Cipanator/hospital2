import styles from "./Consultations.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Сonsultations = () => {
    return (
        <Container>
            <h1>Цены на консультацию специалистов</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                </div>
            </div>
        </Container >
    )
}