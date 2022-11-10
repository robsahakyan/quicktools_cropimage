import { PopUpPartProps } from "../../types/popUpProps"
import { ShareImagePopUp } from "./shareImg"
import { StartOver } from "./startover"

export const PopUpPart = (props: PopUpPartProps) => {

    return (
        <div className="divForPopUp">
            {props.popUpIsOpened === 1 && <StartOver {...props} /> }
            {props.popUpIsOpened === 2 && <ShareImagePopUp {...props} /> }
        </div>
        )
}