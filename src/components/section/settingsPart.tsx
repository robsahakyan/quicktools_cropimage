import Image from "next/image";
import oneInone from "../../assets/images/settings/1in1.svg";
import custom from "../../assets/images/settings/custom.svg";
import twointhree from "../../assets/images/settings/2in3.svg";
import threeintwo from "../../assets/images/settings/3in2.svg";
import threeinfour from "../../assets/images/settings/3in4.svg";
import fourinthree from "../../assets/images/settings/4in3.svg";
import nineinsixteen from "../../assets/images/settings/9in16.svg";
import sixteeninnine from "../../assets/images/settings/16in9.svg";
import aboutIcon from "../../assets/images/settings/aboutIcon.svg";
import downloadIcon from "../../assets/images/settings/downloadIcon.png";
import measureIcon from "../../assets/images/settings/measureIcon.svg";
import shareIcon from "../../assets/images/settings/shareIcon.png";
import styles from "../styles/settingsPart.module.css";
import { useState } from "react";
import { changeCropSizes } from "../../utils";
import { ShareImagePopUp } from "../popup/shareImg";

export const SettingsPart: any = (props: any) => {
  const [isOpenPopUp, setToOpenPopUp] = useState<boolean>(false);
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

    const inputNumChange = (e: any)  => {
        const {offsetWidth, offsetHeight} = props.imageProperties;
        const {x, y} = props.cropProperties;

        switch(e.target.name) {
            case "width": 
                if ((offsetWidth - x)  < e.target.value) {
                    return;
                }
                break;
            case "height": 
                if ((offsetHeight - y) < e.target.value) {
                    return;
                }
                break;
            default: break;
        }

        props.changeCoordinates({
            ...props.cropProperties,
            [e.target.name]: +e.target.value
        })
    }

  const downloadHandler = (e: any) => {
    fetch(props.aboutImage.imgPath, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpeg"); //or any other extension
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
            <input
              type="radio"
              name="options"
              id="1"
              checked={cropOptions.custom}
              onChange={changeRadio}
              value="custom"
              style={{ display: "none" }}
              className={styles.radioButton}
            ></input>
            <label htmlFor="1" className={styles.radioLabel}>
              <div
                className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}
              >
                <div className={styles.options}>
                  <Image src={custom} alt="custom" className={styles.optionIcons} />
                  <div className={styles.BtnActive}>Custom</div>
                </div>
              </div>
            </label>
            <input
              type="radio"
              name="options"
              id="2"
              checked={cropOptions.oneInOne}
              onChange={changeRadio}
              value="oneInOne"
              style={{ display: "none" }}
              className={styles.radioButton}
            ></input>
            <label htmlFor="2" className={styles.radioLabel}>
              <div
                className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}
              >
                <div className={styles.options}>
                  <Image
                    src={oneInone}
                    alt="oneInone"
                    className={styles.optionIcons}
                  />
                  <div>1:1</div>
                </div>
            </div>
            <div className={styles.settingsDiv3}>
                <input type='radio'  name="options" id='1' checked={cropOptions.custom} onChange={changeRadio} value="custom" style={{display: "none"}} className={styles.radioButton}></input>
                <label htmlFor="1" className={styles.radioLabel}>
                    <div className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}>
                        <div className={styles.options}>
                            <Image src={custom} alt='custom' className={styles.optionIcons}/>
                            <div>Custom</div>
                        </div>
                    </div>
                </label>
                <input type='radio' name="options" id='2' checked={cropOptions.oneInOne} onChange={changeRadio} value="oneInOne" style={{display: "none"}} className={styles.radioButton}></input>
                <label htmlFor="2" className={styles.radioLabel}>
                    <div className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}>
                        <div className={styles.options}>
                            <Image src={oneInone} alt='oneInone' className={styles.optionIcons} />
                            <div>1:1</div>
                        </div>
                    </div>
                </label>
                <input type='radio' name="options" id='3' checked={cropOptions.threeInTwo} onChange={changeRadio} value="threeInTwo" style={{display: "none"}} className={styles.radioButton}></input>
                <label htmlFor="3" className={styles.radioLabel}>
                    <div className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}>
                        <div className={styles.options}>
                            <Image src={threeintwo} alt='threeintwo' className={styles.optionIcons} />
                            <div>3:2</div>
                        </div>
                    </div>
                </label>
                
                <input type='radio' name="options" id='4' checked={cropOptions.twoInThree} onChange={changeRadio} value="twoInThree" style={{display: "none"}} className={styles.radioButton}></input>
                <label htmlFor="4" className={styles.radioLabel}>
                    <div className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}>
                        <div className={styles.options}>
                            <Image src={twointhree} alt='twointhree' className={styles.optionIcons}/>
                            <div>2:3</div>
                        </div>
                    </div>
                </label>
                <input type='radio' name="options" id='5' checked={cropOptions.fourInThree} onChange={changeRadio} value="fourInThree" style={{display: "none"}} className={styles.radioButton}></input>
                <label htmlFor="5" className={styles.radioLabel}>
                    <div className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}>
                        <div className={styles.options}>
                            <Image src={fourinthree} alt='fourinthree' className={styles.optionIcons}/>
                            <div>4:3</div>
                        </div>
                    </div>
                </label>
                <input type='radio' name="options" id='6' checked={cropOptions.threeInFour} onChange={changeRadio} value="threeInFour" style={{display: "none"}} className={styles.radioButton}></input>
                <label htmlFor="6" className={styles.radioLabel}>
                    <div className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}>
                        <div className={styles.options}>
                            <Image src={threeinfour} alt='threeinfour' className={styles.optionIcons} />
                            <div>3:4</div>
                        </div>
                    </div>
                </label>
                <input type='radio' name="options" id='7' checked={cropOptions.nineInSixteen} onChange={changeRadio} value="nineInSixteen" style={{display: "none"}} className={styles.radioButton}></input>
                <label htmlFor="7" className={styles.radioLabel}>
                    <div className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}>
                        <div className={styles.options}>
                            <Image src={nineinsixteen} alt='nineinsixteen' className={styles.optionIcons}/>
                            <div>9:16</div>
                        </div>
                    </div>
                </label>
                <input type='radio' name="options" id='8' checked={cropOptions.sixteenInNine} onChange={changeRadio} value="sixteenInNine" style={{display: "none"}} className={styles.radioButton}></input>
                <label htmlFor="8" className={styles.radioLabel}>
                    <div className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}>
                        <div className={styles.options}>
                            <Image src={sixteeninnine} alt='sixteeninnine' className={styles.optionIcons}/>
                            <div>16:9</div>
                        </div>
                    </div>
                </label>
            </div>
            <div className={styles.settingsDiv4}>
                <div className={styles.measurePart}>
                    <div className={styles.measurePgh}>
                        Enter Width
                    </div>
                    <div className={styles.measureInput}>
                        <input type='number' name='width' className={styles.inputNum} onChange={inputNumChange} value={Math.round(props.cropProperties.width) || 0} step='1'></input>
                        <p className={styles.pixelText}>px</p>
                    </div>
                </div>
              </div>
            </label>

            <input
              type="radio"
              name="options"
              id="4"
              checked={cropOptions.twoInThree}
              onChange={changeRadio}
              value="twoInThree"
              style={{ display: "none" }}
              className={styles.radioButton}
            ></input>
            <label htmlFor="4" className={styles.radioLabel}>
              <div
                className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}
              >
                <div className={styles.options}>
                  <Image
                    src={twointhree}
                    alt="twointhree"
                    className={styles.optionIcons}
                  />
                  <div>2:3</div>
                </div>
                <div className={styles.measurePart}>
                    <div className={styles.measurePgh}>
                        Enter Height
                    </div>
                    <div className={styles.measureInput}>
                        <input type='number' name='height' className={styles.inputNum}  onChange={inputNumChange} value={Math.round(props.cropProperties.height) || 0} step='1'></input>
                        <p className={styles.pixelText}>px</p>
                    </div>
                </div>
              </div>
            </label>
            <input
              type="radio"
              name="options"
              id="6"
              checked={cropOptions.threeInFour}
              onChange={changeRadio}
              value="threeInFour"
              style={{ display: "none" }}
              className={styles.radioButton}
            ></input>
            <label htmlFor="6" className={styles.radioLabel}>
              <div
                className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}
              >
                <div className={styles.options}>
                  <Image
                    src={threeinfour}
                    alt="threeinfour"
                    className={styles.optionIcons}
                  />
                  <div>3:4</div>
                </div>
              </div>
            </label>
            <input
              type="radio"
              name="options"
              id="7"
              checked={cropOptions.nineInSixteen}
              onChange={changeRadio}
              value="nineInSixteen"
              style={{ display: "none" }}
              className={styles.radioButton}
            ></input>
            <label htmlFor="7" className={styles.radioLabel}>
              <div
                className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}
              >
                <div className={styles.options}>
                  <Image
                    src={nineinsixteen}
                    alt="nineinsixteen"
                    className={styles.optionIcons}
                  />
                  <div>9:16</div>
                </div>
              </div>
            </label>
            <input
              type="radio"
              name="options"
              id="8"
              checked={cropOptions.sixteenInNine}
              onChange={changeRadio}
              value="sixteenInNine"
              style={{ display: "none" }}
              className={styles.radioButton}
            ></input>
            <label htmlFor="8" className={styles.radioLabel}>
              <div
                className={props.isEnabled ? styles.optionsPart : styles.disabledDiv}
              >
                <div className={styles.options}>
                  <Image
                    src={sixteeninnine}
                    alt="sixteeninnine"
                    className={styles.optionIcons}
                  />
                  <div>16:9</div>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className={styles.settingsDiv4}>
          <div className={styles.measurePart}>
            <div className={styles.measurePgh}>Enter Width</div>
            <div className={styles.measureInput}>
              <input
                type="number"
                disabled={true}
                className={styles.inputNum}
                onChange={inputNumChange}
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
                disabled={true}
                className={styles.inputNum}
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
          disabled={!props.isReadyToShare}
          onClick={() => setToOpenPopUp(true)}
        >
          <Image src={shareIcon} alt="shareIcon" />
          <div className={styles.settingDiv5Context}>Share image</div>
        </button>
        <button
          className={styles.settingDiv5Button}
          id={styles.downloadButton}
          disabled={!props.isReadyToShare}
          onClick={downloadHandler}
        >
          <Image src={downloadIcon} alt="downloadIcon" />
          <div className={styles.settingDiv5Context} id={styles.downloadContext}>
            Download
          </div>
        </button>
      </div>
      {props.isReadyToShare && isOpenPopUp && (
        <ShareImagePopUp
          aboutImage={props.aboutImage}
          setToOpenPopUp={setToOpenPopUp}
        />
      )}
    </div>
  );
};
