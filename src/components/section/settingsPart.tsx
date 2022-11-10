import Image from "next/image";
import oneInone from "../../assets/images/settings/1in1.svg";
import custom from "../../assets/images/settings/custom.svg";
import twointhree from "../../assets/images/settings/2in3.svg";
import threeintwo from "../../assets/images/settings/3in2.svg";
import threeinfour from "../../assets/images/settings/3in4.svg";
import fourinthree from "../../assets/images/settings/4in3.svg";
import nineinsixteen from "../../assets/images/settings/9in16.svg";
import sixteeninnine from "../../assets/images/settings/16in9.svg";
import oneInonePink from "../../assets/images/settings/1in1pink.svg";
import customPink from "../../assets/images/settings/custompink.svg";
import twointhreePink from "../../assets/images/settings/2in3pink.svg";
import threeintwoPink from "../../assets/images/settings/3in2pink.svg";
import threeinfourPink from "../../assets/images/settings/3in4pink.svg";
import fourinthreePink from "../../assets/images/settings/4in3pink.svg";
import nineinsixteenPink from "../../assets/images/settings/9in16pink.svg";
import sixteeninninePink from "../../assets/images/settings/16in9pink.svg";
import aboutIcon from "../../assets/images/settings/aboutIcon.svg";
import downloadIcon from "../../assets/images/settings/downloadIcon.png";
import measureIcon from "../../assets/images/settings/measureIcon.svg";
import shareIcon from "../../assets/images/settings/shareIcon.png";
import styles from "../styles/settingsPart.module.css";
import { changeCropSizes } from "../../utils";
import { OptionButton } from "./optionButton";
import { ChangeEvent } from "react";

export const SettingsPart = (props: any) => {
  const { cropOptions } = props;

  function changeRadio(e: any) {
    if (!props.isEnabled) {
      return;
    }

    let filteredObject = Object.fromEntries(
      Object.keys(cropOptions).map((key) => [key, false])
    );
    props.changeOptions({
      ...filteredObject,
      [e.target.value]: true,
    });
    let result = changeCropSizes(e.target.value, props.imageProperties);

    if (result) {
      props.changeCoordinates(
        changeCropSizes(e.target.value, props.imageProperties)
      );
    }
  }

    const inputNumChange = (e: ChangeEvent)  => {
        const {offsetWidth, offsetHeight} = props.imageProperties;
        const {x, y} = props.cropProperties;

        switch(e.target.name) {
            case "width": 
                if ((offsetWidth - x)  < (e.target as HTMLFormElement).value) {
                    return;
                }
                break;
            case "height": 
                if ((offsetHeight - y) < (e.target as HTMLFormElement).value) {
                    return;
                }
                break;
            default: break;
        }

        props.changeCoordinates({
            ...props.cropProperties,
            [e.target.name]: +(e.target as HTMLFormElement).value
        })
    }

  const downloadHandler = () => {
    fetch(props.aboutImage.imgPath, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpeg");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.settingsPart}>
      <div className={styles.settingsDiv1}>Format settings</div>
      <div>
        <div className={styles.settingsDiv}>
          <div className={styles.settingsDiv2}>
            <div className={styles.settingsDiv2Pgh}>Crop Aspect Ratio</div>
            <div className={styles.settingsDiv2Icon}>
              <Image src={aboutIcon} alt="aboutIcon" />
            </div>
          </div>
          <div className={styles.settingsDiv3}>
            <OptionButton changeRadio={changeRadio} image={custom} pinkImage={customPink} name='Custom' id='custom' isEnabled={props.isEnabled} cropOptions = {props.cropOptions}/>
            <OptionButton changeRadio={changeRadio} image={oneInone} pinkImage={oneInonePink} name='1:1' id='oneInOne' isEnabled={props.isEnabled} cropOptions = {props.cropOptions}/>
            <OptionButton changeRadio={changeRadio} image={threeintwo} pinkImage={threeintwoPink} name='3:2' id='threeInTwo' isEnabled={props.isEnabled} cropOptions = {props.cropOptions}/>
            <OptionButton changeRadio={changeRadio} image={twointhree} pinkImage={twointhreePink} name='2:3' id='twoInThree' isEnabled={props.isEnabled} cropOptions = {props.cropOptions}/>
            <OptionButton changeRadio={changeRadio} image={fourinthree} pinkImage={fourinthreePink} name='4:3' id='fourInThree' isEnabled={props.isEnabled} cropOptions = {props.cropOptions}/>
            <OptionButton changeRadio={changeRadio} image={threeinfour} pinkImage={threeinfourPink} name='3:4' id='threeInFour' isEnabled={props.isEnabled} cropOptions = {props.cropOptions}/>
            <OptionButton changeRadio={changeRadio} image={nineinsixteen} pinkImage={nineinsixteenPink} name='9:16' id='nineInSixteen' isEnabled={props.isEnabled} cropOptions = {props.cropOptions}/>
            <OptionButton changeRadio={changeRadio} image={sixteeninnine} pinkImage={sixteeninninePink} name='16:9' id='sixteenInNine' isEnabled={props.isEnabled} cropOptions = {props.cropOptions}/>
          </div>
        </div>
        <div className={styles.settingsDiv4}>
          <div className={styles.measurePart}>
            <div className={styles.measurePgh}>Enter Width</div>
            <div className={styles.measureInput}>
              <input
                type="number"
                disabled={!props.isEnabled}
                className={styles.inputNum}
                onChange={inputNumChange}
                name='width'
                value={Math.round(props.cropProperties.width) || 0}
                step="1"
              ></input>
              <p className={styles.pixelText}>px</p>
            </div>
          </div>
          <div className={styles.measureIconPart}>
            <Image
              src={measureIcon}
              alt="measureIcon"
              className={styles.measureIcon}
            />
          </div>
          <div className={styles.measurePart}>
            <div className={styles.measurePgh}>Enter Height</div>
            <div className={styles.measureInput}>
              <input
                type="number"
                disabled={!props.isEnabled}
                className={styles.inputNum}
                name='height'
                onChange={inputNumChange}
                value={Math.round(props.cropProperties.height) || 0}
                step="1"
              ></input>
              <p className={styles.pixelText}>px</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.settingsDiv5}>
        <button
          className={styles.settingDiv5Button}
          disabled={!props.isReadyToShare || !props.aboutImage.currentImgIndex}
          onClick={() => props.openCurrentPopUp(2)}
        >
          <Image src={shareIcon} alt="shareIcon" />
          <div className={styles.settingDiv5Context}>Share image</div>
        </button>
        <button
          className={styles.settingDiv5Button}
          id={styles.downloadButton}
          disabled={!props.isReadyToShare || !props.aboutImage.currentImgIndex}
          onClick={downloadHandler}
        >
          <Image src={downloadIcon} alt="downloadIcon" />
          <div className={styles.settingDiv5Context} id={styles.downloadContext}>
            Download
          </div>
        </button>
      </div>
    </div>
  );
};

