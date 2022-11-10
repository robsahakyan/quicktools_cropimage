import { Dispatch } from "react";
import { Action } from "redux";
import { LocalStorageService } from "../../shared/localStorageService";
import { ActionTypeEnum } from "../../types/enums";


const SET_IMAGE_PATH = ActionTypeEnum.SET_IMAGE_PATH;
const CHANGE_CROP_COORDINATES = ActionTypeEnum.CHANGE_CROP_COORDINATES;
const TOGGLE_IS_FETCHING = ActionTypeEnum.TOGGLE_IS_FETCHING;
const SET_ERRORS = ActionTypeEnum.SET_ERRORS;
const SET_FOR_SHARE = ActionTypeEnum.SET_FOR_SHARE;
const OPEN_POP_UP = ActionTypeEnum.OPEN_POP_UP;
const SET_FOR_EDIT = ActionTypeEnum.SET_FOR_EDIT;
const CHANGE_CROP_OPTIONS = ActionTypeEnum.CHANGE_CROP_OPTIONS
const SET_IMAGE_PROPERTIES = ActionTypeEnum.SET_IMAGE_PROPERTIES;

const initialState = {
    aboutImage: {
        imgPath: "",
        currentImgIndex: 0,
       
    },
    imageProperties: {
        offsetHeight: null, 
        offsetWidth: null
    },
    isReadyToEdit: false,
    isReadyToShare: false,
    cropProperties: {
        unit: 'px',
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    cropOptions: {
        custom: true,
        oneInOne: false,
        threeInTwo: false,
        twoInThree: false,
        fourInThree: false,
        threeInFour: false,
        nineInSixteen: false,
        sixteenInNine: false
    },
    isFetching: false,
    error: null,
    popUpIsOpened: null,
};

export const imageReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_IMAGE_PATH:
            return {
                    ...state,
                    aboutImage: { 
                        ...state.aboutImage,
                        ...action.data
                    }
                }
        case SET_IMAGE_PROPERTIES: 
            return {
                ...state,
                imageProperties: action.imgOptions
            }
        case CHANGE_CROP_COORDINATES: 
            return {
                ...state,
                cropProperties: action.cropProperties
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_ERRORS: 
            return {
                ...state,
                error: action.error
            }
        case CHANGE_CROP_OPTIONS:
            return {
                ...state,
                cropOptions: action.cropOptions
            }
        case SET_FOR_EDIT: 
            return {
                ...state,
                isReadyToEdit: action.isReadyToEdit
            }
        case OPEN_POP_UP:
            return {
                ...state,
                popUpIsOpened: action.popUpNum
            }
        case SET_FOR_SHARE: 
            return {
                ...state,
                isReadyToShare: action.isReadyToShare
            }
        default:
            return state;
    }
}

export const setImagePathAC = (data: object) => ({type: SET_IMAGE_PATH, data})
export const changeCoordinatesAC = (cropProperties: object) => ({type: CHANGE_CROP_COORDINATES, cropProperties})
export const setToFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setToEdit = (isReadyToEdit: boolean) => ({type: SET_FOR_EDIT, isReadyToEdit})
export const setToShare = (isReadyToShare: boolean) => ({type: SET_FOR_SHARE, isReadyToShare})
export const createErrorAC = (error: string) => ({type: SET_ERRORS, error})
export const openCurrentPopUp = (popUpNum: number) => ({type: OPEN_POP_UP, popUpNum})
export const setImagePropertiesAC = (imgOptions: object) => ({type: SET_IMAGE_PROPERTIES, imgOptions})
export const changeOptionsAC = (cropOptions: object) => ({type: CHANGE_CROP_OPTIONS, cropOptions})

export const uploadImage = (fileAsBinaryString: string) => {
    return (dispatch: Dispatch<any>) => {
        const singleImg = new LocalStorageService(fileAsBinaryString);
        if (singleImg) {
            singleImg.save()
            dispatch(setImagePathAC(singleImg));
            dispatch(setToFetching(false));
        } else {
            dispatch(createErrorAC('Something went wrong!'))
        }
    }
}
