/* eslint-disable @next/next/no-img-element */
import styles from '../styles/processPart.module.css'
import Image from 'next/image';
import customPink from '../../assets/images/settings/customPink.png'
import applyIcon from '../../assets/images/settings/apply.png' 
import leftPointer from '../../assets/images/settings/leftPointer.png'
import rightPointer from '../../assets/images/settings/rightPointer.png'
import binIcon from '../../assets/images/settings/bin.png'
import refresh from '../../assets/images/settings/refresh.png'
import { Loader } from './loader';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { useRef } from 'react';
import { StartOver } from '../popup/startover';
import { setDefaultCustomVals, setNullableValls } from '../../utils';

export const ProcessPart: any = (props: any) => {

    const popUpRef = useRef<HTMLElement>(null)
    // useEffect(() => {
    //     setCropCoordinates(props.cropProperties)
    // },[props.cropProperties])
    // const [cropCoordinates, setCropCoordinates] = useState<Crop>(props.cropProperties);
    const imageRef = useRef<any>(null);

    const setToCropImage = (e: any) => {
        props.changeCoordinates(e)
    }

  

    const refreshHandler = () => {
        if (popUpRef.current) {
            popUpRef.current.style.visibility = "visible";
        }
    }

    const imgOnLoad = (e: any) => {
        const { offsetHeight, offsetWidth } = e.target;
        props.setImageProperties({offsetHeight, offsetWidth})

    }


    const setToCrop = () => {
        props.setToCropBut(true)
        const { offsetHeight, offsetWidth } = props.imageProperties;
        props.changeCoordinates(setDefaultCustomVals({ offsetHeight, offsetWidth }))
        
    }
    async function cropHandler(e: any) {
        props.setToFetching(true)
        if (imageRef && props.cropProperties.width && props.cropProperties.height) {
            props.setImagePath(await getCroppedImg(
              imageRef.current,
              props.cropProperties,
              '1'
            ));
            props.setToCropBut(false)
            props.changeCoordinates(setNullableValls)
            let filteredObject = Object.fromEntries(Object.keys(props.cropOptions).map((key) => [key, false]))
            props.changeOptions({
                ...filteredObject,
            })
            props.setToShare(true)

        }
    }

    const getCroppedImg = async (image: any, crop: {width: number, height: number, x: number, y: number}, fileName: string) => {
        const canvas = document.createElement('canvas');
        const pixelRatio = window.devicePixelRatio;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');
        console.log(pixelRatio, scaleX, scaleY, ctx)

        canvas.width = crop.width * pixelRatio * scaleX;
        canvas.height = crop.height * pixelRatio * scaleY;
    
        if (ctx) {
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.imageSmoothingQuality = 'high';
        
            ctx.drawImage(
              image,
              crop.x * scaleX,
              crop.y * scaleY,
              crop.width * scaleX,
              crop.height * scaleY,
              0,
              0,
              crop.width * scaleX,
              crop.height * scaleY
            );
        }
     
        return new Promise((resolve, reject) => {
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                //reject(new Error('Canvas is empty'));
                console.error('Canvas is empty');
                return;
              }
              resolve(window.URL.createObjectURL(blob));
            },
            'image/jpeg',
            1
          );
        });
      }

    return (
        <div className={styles.processPart}>
            {props.isFetching ? <Loader/> :
                <>            
                    <div className={styles.processDiv1}>
                        <div className={styles.cropButtonPart}>
                            {
                                props.isEnabled ? 
                                <button className={styles.cropButton}>
                                    <Image src={applyIcon} alt='applyIcon'className={styles.applyIcon} />
                                    <div className={styles.cropButtonPgh} onClick={cropHandler}>
                                        Apply crop
                                    </div>
                                </button> :
                                <button className={styles.customButPart}>
                                    <Image src={customPink} alt='customIcon'className={styles.customButton} />
                                    <div className={styles.customButtPgh} onClick={setToCrop}>
                                        Crop this image
                                    </div>
                                </button>
                            }
                        </div>
                        <div className={styles.imgActionsPart}>
                            <div className={styles.leftPointerPart}>
                                <button className={styles.processActionButtons}>
                                    <Image src={leftPointer} alt="leftPointer" className={styles.leftButton}/>
                                </button>
                            </div>
                            <div className={styles.rightPointerPart}>
                                <button className={styles.processActionButtons}>
                                    <Image src={rightPointer} alt="rightPointer" className={styles.rightButton}/>
                                </button>
                            </div>
                            <div className={styles.refreshPart}>
                                <button className={styles.processActionButtons} onClick={refreshHandler}>
                                    <Image src={refresh} alt="refresh" className={styles.refreshIcon}/>
                                </button>
                            </div>
                            <div className={styles.binPart}>
                                <button className={styles.processActionButtons}>
                                    <Image src={binIcon} alt="binIcon" className={styles.binIcon}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.processDiv2}>
                        <div className={styles.imgPart}>
                        <ReactCrop crop={props.cropProperties} onChange={setToCropImage} className={styles.parentImgForCrop} disabled={!props.isEnabled} >
                            <img className={styles.imgForEdit} src={props.aboutImage.imgPath} alt="imgForCropping" onLoad={imgOnLoad} ref={imageRef} />
                        </ReactCrop>
                        </div>
                        
                    </div>
                </>
            }
            <StartOver popUpRef={popUpRef} aboutImage={props.aboutImage} deleteImg={props.deleteImg} />
        </div>
    )
}