import styles from '../styles/header.module.css'
import cropIcon from '../../assets/images/header/cropIcon.png'
import shareIcon from '../../assets/images/header/shared.png'
import Image from 'next/image'

export const HeaderForEdition: any = () => {
    return (
        <header className={styles.editionHeader}>
            <div>
                <Image src={cropIcon} alt='cropIcon'/>
            </div>
            <div>
                <Image src={shareIcon} alt='shareIcon'/>
            </div>
        </header>
    )
}