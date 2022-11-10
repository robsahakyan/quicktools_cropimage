import React, { useState } from "react";
import { ProcessPart } from "./processPart";
import styles from "../styles/processPart.module.css";
import { SettingsPart } from "./settingsPart";
import { GlobalProps } from "../../types/globalProps";

export const MakeToEdit = (props: GlobalProps) => {
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
