import styles from "./MolecularGeneticStudy.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const MolecularGeneticStudy = () => {
    return (
        <Container>
            <h1>Молекулярно-генетические исследования</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                </div>
            </div>
        </Container >
    )
}