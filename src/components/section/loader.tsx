import { NextPage } from "next"
import Image from "next/image"
import styles from '../styles/loader.module.css'
import loaderBackground from '../../assets/images/loader/loaderBackground.png'
import toggle from '../../assets/images/loader/toggle.gif'

export const Loader: NextPage = () => {
    return (
        <div className={styles.loaderPart}>
            <div className={styles.loaderPgh}>
                Processing...
            </div>
            <div className={styles.loader}>
                <Image src={loaderBackground} alt='loaderBackground' className={styles.loaderBackground}/> 
                <div className={styles.loaderToggle}>
                    <Image src={toggle} alt="loader" width={90} height={90}  />            
                </div>   
            </div>
        </div>
    )
}