import Image from "next/image"
import { CropOptions } from "../../types/cropOptions"
import { OptionButtonType } from "../../types/optionButton"
import styles from '../styles/settingsPart.module.css'

export const OptionButton = ({changeRadio, cropOptions, image, name, isEnabled, id, pinkImage }: OptionButtonType) => {
    return (
        <>
            <input
                type="radio"
                name="options"
                id={id}
                checked={cropOptions[id as keyof CropOptions]}
                onChange={changeRadio}
                value={id}
                style={{ display: "none" }}
                className={styles.radioButton}
            ></input>
            <label htmlFor={id} className={styles.radioLabel}>
                <div
                className={isEnabled ? styles.optionsPart : styles.disabledDiv}
                >
                <div className={styles.options}>
                    <Image src={cropOptions[id as keyof CropOptions] ? pinkImage : image} alt={name} className={styles.optionIcons} />
                    <div className={styles.BtnActive}>{name}</div>
                </div>
                </div>
            </label>
      </>
    )
}