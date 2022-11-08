import React, { useRef, useState } from "react";
import { ProcessPart } from "./processPart";
//import ReactCrop from 'react-image-crop'
import styles from "../styles/processPart.module.css";
import { SettingsPart } from "./settingsPart";
//import {Loader} from "../../shared/loader.jsx"

export const MakeToEdit: any = (props: any) => {
  const [isEnabled, setToCropBut] = useState<boolean>(false);
  // const [cropCoordinates, setCropCoordinates] = useState({
  //     unit: '%',
  //     x: 25,
  //     y: 25,
  //     width: 50,
  //     height: 50
  // });
  // const imageRef = useRef(null);

  // const setToCropImage = (e) => {
  //     setCropCoordinates(e);
  // }

  // const submitHandler = (e) => {
  //     e.preventDefault();
  //     const {offsetWidth, offsetHeight} = imageRef.current;

  //     props.cropImage({...cropCoordinates, offsetWidth, offsetHeight, filename: props.aboutImage.filename});
  //     props.setToFetching(true);
  // }

  // const changeCropValue = (e) => {
  //     switch(e.target.name) {
  //         case "width":
  //             if (imageRef.current.offsetWidth  < e.target.value) {
  //                 e.target.value = cropCoordinates.width;
  //             }
  //             break;
  //         case "height":
  //             if (imageRef.current.offsetHeight < e.target.value) {
  //                 e.target.value = cropCoordinates.height;
  //             }
  //             break;
  //         default: break;
  //     }

  //     return setCropCoordinates({
  //             ...cropCoordinates,
  //             [e.target.name] : e.target.value
  //         })
  // }
  return (
    <>
      <div className={styles.makeToEdit}>
        <ProcessPart {...props} isEnabled={isEnabled} setToCropBut={setToCropBut} />
        <SettingsPart {...props} isEnabled={isEnabled} setToCropBut={setToCropBut} />
      </div>
    </>
  );
};
