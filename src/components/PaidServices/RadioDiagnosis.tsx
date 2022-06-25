import styles from "./RadioDiagnosis.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const RadioDiagnosis = () => {
    return (
        <Container>
            <h1>Лучевая диагностика</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                </div>
            </div>
        </Container >
    )
}