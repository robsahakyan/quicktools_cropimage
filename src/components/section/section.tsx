import type { NextPage } from 'next'
import { GlobalProps } from '../../../pages'
import { ActionTypeEnum } from '../../types/enums'
import { FileUpload } from './fileUpload'
import { MakeToEdit } from './makeToEdit'
import styles from '../styles/section.module.css'
import { ErrorComponent } from '../exception/error'
import { LocalStorageService } from '../../shared/localStorageService'

export const Section: any = (props: GlobalProps ) => {
    if (typeof window !== 'undefined') {
        window.onbeforeunload = function () {
            LocalStorageService.clearAll()
        }.bind(this);
    }
    
    return (
        <div className={styles.sectionPart}>
                {props.isReadyToEdit ? 
                    <MakeToEdit 
                        {...props}
                    />
                :
                    <FileUpload 
                        setToEdit = {props.setToEdit} 
                        uploadImage={props.uploadImage} 
                        setToFetching = {props.setToFetching}/>
                }
                {props.error && <ErrorComponent />}
        </div>
    )
}


