/* eslint-disable @next/next/no-img-element */
import styles from '../styles/shareImg.module.css'
import Image from 'next/image'
import facebook from '../../assets/images/share/facebook.png'
import linkedin from '../../assets/images/share/linkedin.png'
import twitter from '../../assets/images/share/facebook.png'
import mail from '../../assets/images/share/mail.png'
import copy from '../../assets/images/share/copy.png'
import apply from '../../assets/images/settings/apply.png'
import QRCode from "react-qr-code";
import close from '../../assets/images/share/close.png' 
import { useState } from 'react'

export const ShareImagePopUp = (props: any) => {
    const [isCopied, setToCopy] = useState(false);

    const copyHandler = (e: any) => {
        navigator.clipboard.writeText(props.aboutImage.imgPath)
        setToCopy(true)
    }

    return (
        <div className={styles.sharePopUp}>
            <div className={styles.shareImgPart}>
                <div>
                    <img src={props.aboutImage.imgPath} alt='imgForShare' className={styles.imgForShare} />
                </div>
            </div>
            <div className={styles.shareOptionsPart}>
                <div className={styles.shareDiv1}>
                    <button className={styles.closeButton} onClick={() => props.setToOpenPopUp(false)}>
                        <Image src={close} alt='close' />
                    </button>
                    <div className={styles.shareHeader}>
                        Share the results
                    </div>
                </div>
                
                <div className={styles.shareLinkPart}>
                    <div>
                        Share download link
                    </div>
                    <div className={styles.urlPart}>
                        <input type="text" disabled defaultValue={props.aboutImage.imgPath} className={styles.inputShareUrl}/>
                        <button className={styles.copyButton} onClick={copyHandler} disabled={isCopied}>
                            {!isCopied ?
                            <> 
                                <Image src={copy} alt='copy' />
                                <div className={styles.copyPgh}>
                                    Copy
                                </div>
                            </>  :
                            <>
                                <Image src={apply} alt='apply' />
                                <div className={styles.copyPgh}>
                                    Copied
                                </div>
                            </>
                        }
                            
                        </button>
                    </div>
                </div>
                <div className={styles.shareToPart}>
                    <div>
                        <Image src={facebook} alt='facebook' />
                    </div>
                    <div>
                        <Image src={linkedin} alt='linkedin' />
                    </div>
                    <div>
                        <Image src={twitter} alt='twitter' />
                    </div>
                    <div>
                        <Image src={mail} alt='mail' />
                    </div>
                </div>
                <div className={styles.shareQrPart}>
                    <div className={styles.qrPgh}>Scan QR code to download!</div>
                    <div className={styles.qrPart}>
                        <QRCode
                            size={256}
                            value={props.aboutImage.imgPath}
                            viewBox={`0 0 256 256`}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}