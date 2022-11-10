import { useEffect, useRef } from 'react'
import styles from '../styles/startover.module.css'

export const StartOver = (props: any) => {
    const startOverRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        (startOverRef.current as HTMLElement).style.visibility = "visible" 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const startOverHandler = () => {
        window.location.reload()
    }
    const closePopUp = () => {
        props.openCurrentPopUp(null);
    }
    return (
        <div className={styles.startoverWindow} ref={startOverRef}>
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