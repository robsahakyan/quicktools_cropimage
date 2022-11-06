import Image  from 'next/image'
import styles from '../styles/header.module.css'
import colorPart from '../../assets/images/header/color.png'
import convertPart from '../../assets/images/header/convert.png'
import designPart from '../../assets/images/header/design.png'
import imagesPart from '../../assets/images/header/images.png'
import pdfPart from '../../assets/images/header/pdf.png'
import quickToolPart from '../../assets/images/header/quickTool.png'
import searchIcon from '../../assets/images/header/search.png'
import shareIcon from '../../assets/images/header/shared.png'
import videosPart from '../../assets/images/header/videos.png'
import textPart from '../../assets/images/header/text.png'

export const InitialHeader: any = () => {
    return (
        <header className={styles.initialHeader}>
            <div className={styles.headerPart1}>
                <div className={styles.quickToolPart}>
                    <Image src={quickToolPart} alt='quickToolPart' />
                </div>
                <div className={styles.convertPart}>
                    <Image src={convertPart} alt='convertPart' />
                </div>
                <div className={styles.imagesPart}>
                    <Image src={imagesPart} alt='imagesPart' />
                </div>
                <div className={styles.pdfPart}>
                    <Image src={pdfPart} alt='pdf' />
                </div>
                <div className={styles.textPart}>
                    <Image src={textPart} alt='text' />
                </div>
                <div className={styles.videosPart}>
                    <Image src={videosPart} alt='videos' />
                </div>
                <div className={styles.designPart}>
                    <Image src={designPart} alt='design' />
                </div>
                <div className={styles.colorPart}>
                    <Image src={colorPart} alt='color' />
                </div>
            </div>
            <div className={styles.headerPart2}>
                <div className={styles.searchIcon}>
                    <Image src={searchIcon} alt='search' />
                </div>
                <div className={styles.shareIcon}>
                    <Image src={shareIcon} alt='shared' />
                </div>
            </div>
        </header>
    )
}