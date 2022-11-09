import React, { useRef, useState } from 'react';
import { ProcessPart } from './processPart';
//import ReactCrop from 'react-image-crop'
import styles from '../styles/section.module.css'
import { SettingsPart } from './settingsPart';
//import {Loader} from "../../shared/loader.jsx"

export const MakeToEdit: any = (props: any) => {
    const [isEnabled, setToCropBut] = useState<boolean>(false);

    return (
        <div className={styles.makeToEdit}>
           <ProcessPart 
                {...props}
                isEnabled={isEnabled}
                setToCropBut={setToCropBut}
            />
           <SettingsPart 
                {...props}
                isEnabled={isEnabled}
                setToCropBut={setToCropBut}
           />
        </div>
    )
}