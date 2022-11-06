import styles from '../styles/startover.module.css'

export const StartOver = (props: any) => {
    const startOverHandler = () => {
            if (window.localStorage.getItem('1')) {
                window.localStorage.removeItem('1')
                window.location.reload()
            }

    }

    const closePopUp = () => {
        props.popUpRef.current.style.visibility = "hidden";
    }
    return (
        <div className={styles.startoverWindow} ref={props.popUpRef}>
            <div className={styles.startOverDiv1}>
                Start over with a new file?
            </div>
            <div className={styles.startOverDiv2}>
                <button className={styles.startOverCancel} onClick={closePopUp}>
                    Cancel
                </button>
                <button className={styles.startOverAcception} onClick={startOverHandler}>
                    Start over
                </button>
            </div>
        </div>
    )
} 