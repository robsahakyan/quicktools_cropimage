import {store} from '../components/store/store'
import { AboutImage } from './aboutImage'

export type State = {
    aboutImage: AboutImage,
    isFetching: boolean,
    isReadyToEdit: boolean,
    isReadyToShare: boolean,
    imageProperties: object,
    cropProperties: object,
    cropOptions: object
    error: string,
    popUpIsOpened: number | null,
}
export type RootState = ReturnType<typeof store.getState>

