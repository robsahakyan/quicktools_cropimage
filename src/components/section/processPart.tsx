/* eslint-disable @next/next/no-img-element */
import styles from '../styles/processPart.module.css'
import Image from 'next/image';
import customPink from '../../assets/images/settings/customForCrop.svg'
import applyIcon from '../../assets/images/settings/apply.png' 
import leftPointer from '../../assets/images/settings/leftPointer.svg'
import rightPointer from '../../assets/images/settings/rightPointer.svg'
import binIcon from '../../assets/images/settings/bin.svg'
import refresh from '../../assets/images/settings/refresh.svg'
import { Loader } from './loader';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { ChangeEvent, MouseEventHandler, useRef } from 'react';
import { StartOver } from '../popup/startover';
import { setDefaultCustomVals, setNullableValls } from '../../utils';
import { LocalStorageService } from '../../shared/localStorageService';
import { ProcessPartProps } from '../../types/processPartProps';

export const ProcessPart = (props: ProcessPartProps ) => {
  const popUpRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const setToCropImage = (e: ChangeEvent) => {
    props.changeCoordinates(e);
  };

  const refreshHandler = () => {
    props.openCurrentPopUp(1)
  };

  const imgOnLoad = (e: React.SyntheticEvent<EventTarget>) => {

    const { offsetHeight, offsetWidth } = e.target as HTMLElement;
    props.setImageProperties({ offsetHeight, offsetWidth });
  };

    const setToCrop = () => {
        props.setToCropBut(true)
        const { offsetHeight, offsetWidth } = props.imageProperties;
        const result = setDefaultCustomVals({ offsetHeight, offsetWidth })
        if (result) {
          props.changeCoordinates(result)
        }
        
    }
    async function cropHandler(e: any) {
        imageRef.current as HTMLElement;
        props.setToFetching(true)
        if (imageRef && props.cropProperties.width && props.cropProperties.height) {
            props.uploadImage(await getCroppedImg(
              imageRef.current,
              props.cropProperties,
            ));
            props.setToCropBut(false)
            props.changeCoordinates(setNullableValls)
            let filteredObject = Object.fromEntries(Object.keys(props.cropOptions).map((key) => [key, false]))
            props.changeOptions({
                ...filteredObject,
                custom: true
            })
            props.setToShare(true)

        }
    }
    const changeImgState = (e: ChangeEvent<any>) => {
        let index: number;
            switch((e.target as HTMLElement).id) {
              case 'prevShift':
                  index = props.aboutImage.currentImgIndex - 1;
                  props.setImagePath({imgPath: `${LocalStorageService.getById(index)}`, currentImgIndex: index});
                  return;
              case 'nextShift':
                  index = props.aboutImage.currentImgIndex + 1;
                  props.setImagePath({imgPath: `${LocalStorageService.getById(index)}`, currentImgIndex: index});
                  return;
              default: 
                  return;
        }
        
    }

    const getCroppedImg = async (image: any, crop: {width: number, height: number, x: number, y: number}): Promise<any> => {
        const canvas = document.createElement('canvas');
        const pixelRatio = window.devicePixelRatio;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext('2d');

        canvas.width = crop.width * pixelRatio * scaleX;
        canvas.height = crop.height * pixelRatio * scaleY;

    if (ctx) {
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = "high";

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
            reject(props.createError('Canvas is empty'));
            return;
          }
          resolve(window.URL.createObjectURL(blob));
        },
        "image/jpeg"
      );
    });
  };

  return (
    <>
      <div className={styles.processPart}>
        {props.isFetching ? (
          <Loader />
        ) : (
          <>
            <div className={styles.processDiv1}>
              <div className={styles.hiddenDiv}></div>
              <div className={styles.cropButtonPart}>
                {props.isEnabled ? (
                  <button className={styles.cropButton}>
                    <Image
                      src={applyIcon}
                      alt="applyIcon"
                      className={styles.applyIcon}
                    />
                    <div className={styles.cropButtonPgh} onClick={cropHandler}>
                      Apply crop
                    </div>
                  </button>
                ) : (
                  <button className={styles.customButPart}>
                    <Image
                      width={24}
                      height={24}
                      src={customPink}
                      alt="customIcon"
                      className={styles.customButton}
                    />
                    <div className={styles.customButtPgh} onClick={setToCrop}>
                      Crop this image
                    </div>
                  </button>
                )}
              </div>
              <div className={styles.imgActionsPart}>
                <div className={styles.leftPointerPart}>
                  <button className={styles.processActionButtons} onClick={(e) => changeImgState(e)} disabled={!props.aboutImage.currentImgIndex}>
                    <Image
                      src={leftPointer}
                      id='prevShift'
                      alt="leftPointer"
                      className={styles.leftButton}
                    />
                  </button>
                </div>
                <div className={styles.rightPointerPart}>
                  <button className={styles.processActionButtons} onClick={(e) => changeImgState(e)} disabled={props.aboutImage.currentImgIndex + 1 === LocalStorageService.getState()?.length} >
                    <Image
                      src={rightPointer}
                      alt="rightPointer"
                      id='nextShift'
                      className={styles.rightButton}
                    />
                  </button>
                </div>
                <div className={styles.refreshPart}>
                  <button
                    className={styles.processActionButtons}
                    onClick={refreshHandler}
                  >
                    <Image
                      src={refresh}
                      alt="refresh"
                      className={styles.refreshIcon}
                    />
                  </button>
                </div>
                <div className={styles.binPart}>
                  <button className={styles.processActionButtons}>
                    <Image src={binIcon} alt="binIcon" className={styles.binIcon} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.processDiv2}>
              <div className={styles.imgPart}>
                <ReactCrop
                  crop={props.cropProperties}
                  onChange={() => setToCropImage}
                  className={styles.parentImgForCrop}
                  disabled={!props.isEnabled}
                >
                  <img
                    className={styles.imgForEdit}
                    src={props.aboutImage.imgPath}
                    alt="imgForCropping"
                    onLoad={imgOnLoad}
                    ref={imageRef}
                  />
                </ReactCrop>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}