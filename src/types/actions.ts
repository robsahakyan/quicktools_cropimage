import { ActionTypeEnum } from "./enums";

export type SetToEdit = (isReadyToEdit: boolean) => {type: ActionTypeEnum.SET_FOR_EDIT, isReadyToEdit: boolean}
export type SetImagePath = (aboutImage: any) => {type: ActionTypeEnum.SET_IMAGE_PATH, aboutImage: any} 
export type SetToFetching = (isFetching: boolean) => {type: ActionTypeEnum.TOGGLE_IS_FETCHING, isFetching: boolean}
export type ChangeCoordinates = (cropProperties: object) => {type: ActionTypeEnum.CHANGE_CROP_COORDINATES, cropProperties: object}
export type ChangeOptions = (cropOptions: object) => {type: ActionTypeEnum.CHANGE_CROP_OPTIONS, cropOptions: object}
export type UploadImage = (fileAsBinaryString: any) => void
export type SetImageProperties = (imgOptions: object) => {type: ActionTypeEnum.SET_IMAGE_PROPERTIES, imgOptions: object}
export type SetToShare = (isReadyToShare: boolean) => {type: ActionTypeEnum.SET_FOR_SHARE, isReadyToShare: boolean}
export type DeleteImg = (currentImgIndex: string) => () => any

