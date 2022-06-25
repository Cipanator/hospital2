import styles from "./UltrasoundDiagnostics.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const UltrasoundDiagnostics = () => {
    return (
        <Container>
            <h1>Ультразвуковая диагностика</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                </div>
            </div>
        </Container >
    )
}