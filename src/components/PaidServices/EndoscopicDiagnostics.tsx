import styles from "./EndoscopicDiagnostics.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const EndoscopicDiagnostics = () => {
    return (
        <Container>
            <h1>Эндоскопическая диагностика</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                </div>
            </div>
        </Container >
    )
}