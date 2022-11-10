import { AboutImage } from "./aboutImage"
import { SetToEdit, SetImagePath, UploadImage, SetToShare, SetToFetching, OpenCurrentPopUp, ChangeOptions, ChangeCoordinates, SetImageProperties, CreateError } from "./actions"
import { UnitType } from "./enums"

export type GlobalProps = {
    aboutImage: AboutImage,
    isFetching: boolean,
    isReadyToEdit: boolean,
    isReadyToShare: boolean,
    imageProperties: {
        offsetHeight: null | number, 
        offsetWidth: null | number,
    },
    cropProperties: {
        width: number,
        height: number,
        x: number,
        y: number,
        unit: UnitType
    },
    cropOptions: object,
    error: string,
    popUpIsOpened: number | null,
    setToEdit: SetToEdit,
    setImagePath: SetImagePath,
    uploadImage: UploadImage, 
    setToShare: SetToShare,
    setToFetching: SetToFetching,
    openCurrentPopUp: OpenCurrentPopUp,
    changeOptions: ChangeOptions,
    createError: CreateError,
    changeCoordinates: ChangeCoordinates,
    setImageProperties: SetImageProperties
}