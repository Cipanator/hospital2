import styles from "./Reviews.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Reviews = () => {
    return (
        <Container>
            <h1>Отзывы пациентов</h1>
            <div className={styles.wrapper}>
                <p className={styles.content}>
                    <ul>
                        <p className={styles.text}>Мы стремимся оказывать качественные услуги с высоким уровнем сервиса. Мы благодарны нашим пациентам за оказанное доверие и положительные отзывы о совместной работе. </p>
                    </ul>
                </p>
            </div>
        </Container>

    )
}