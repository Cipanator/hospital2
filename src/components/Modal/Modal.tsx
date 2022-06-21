import styles from "../Modal/Modal.module.css"
type Props = {
    active: boolean;
    setActive: (arg: boolean) => void;
}
export const Modal = ({ active, setActive }: Props) => {
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.content}></div>
            </div>
        </>
    )
}