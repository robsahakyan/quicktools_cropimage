import { sendImageRequest, deleteImg } from "../../api/api";
import { ActionTypeEnum } from "../../types/enums";


const SET_IMAGE_PATH = ActionTypeEnum.SET_IMAGE_PATH;
const CHANGE_CROP_COORDINATES = ActionTypeEnum.CHANGE_CROP_COORDINATES;
const TOGGLE_IS_FETCHING = ActionTypeEnum.TOGGLE_IS_FETCHING;
const SET_ERRORS = ActionTypeEnum.SET_ERRORS;
const SET_FOR_SHARE = ActionTypeEnum.SET_FOR_SHARE;
const SET_FOR_EDIT = ActionTypeEnum.SET_FOR_EDIT;
const CHANGE_CROP_OPTIONS = ActionTypeEnum.CHANGE_CROP_OPTIONS
const SET_IMAGE_PROPERTIES = ActionTypeEnum.SET_IMAGE_PROPERTIES;

const initialState = {
    aboutImage: {
        imgPath: null,
        currentImgIndex: null,
       
    },
    imageProperties: {
        offsetHeight: null, 
        offsetWidth: null
    },
    isReadyToEdit: false,
    isReadyToShare: false,
    cropProperties: {
        unit: 'px',
        x: null,
        y: null,
        width: null,
        height: null
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
    error: null
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
export const setImagePropertiesAC = (imgOptions: object) => ({type: SET_IMAGE_PROPERTIES, imgOptions})
export const changeOptionsAC = (cropOptions: object) => ({type: CHANGE_CROP_OPTIONS, cropOptions})

export const uploadImage = (fileAsBinaryString: any) => {
    const data = new FormData();

    return (dispatch: any) => {
        dispatch(setImagePathAC({imgPath: fileAsBinaryString, filename: '1'}));
        dispatch(setToFetching(false));
        window.localStorage.setItem('1', fileAsBinaryString)
        window.localStorage.setItem('aboutImage', JSON.stringify(['1']))
    }
}

// export const cropImageThunk = (cropProperties) => {
//     return (dispatch) => {
//         cropImagePostRequest(cropProperties).then(res => {
//             dispatch(cropImageAC(cropProperties))
//             dispatch(setToShare(true))
//         }).catch(res => {
//             dispatch(createErrorAC(res.response.data.message));
//             dispatch(setToFetching(false));
//         })
//     }
// }

// export const getCroppedImageThunk = (filename) => {
//     return (dispatch) => {
//         return getCroppedImage(filename).then(res => {
//           dispatch(setImagePathAC({imgPath: res.request.responseURL}))
//           dispatch(setToFetching(false))
//         })
//     }
// }

export const deleteImagesThunk = (currentImgIndex: string) => {
    return (dispatch: any) => {
        return deleteImg(currentImgIndex)
    }
}
