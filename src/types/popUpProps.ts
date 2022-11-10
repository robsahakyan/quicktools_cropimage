import { AboutImage } from './aboutImage';
import { OpenCurrentPopUp } from './actions';

export type PopUpPartProps = {
    aboutImage: AboutImage,
    isReadyToShare: boolean,
    popUpIsOpened: number | null,
    openCurrentPopUp: OpenCurrentPopUp 
}