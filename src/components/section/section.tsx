import type { NextPage } from 'next'
import { GlobalProps } from '../../../pages'
import { ActionTypeEnum } from '../../types/enums'
import { FileUpload } from './fileUpload'
import { MakeToEdit } from './makeToEdit'
import styles from '../styles/section.module.css'


export const Section: any = (props: GlobalProps ) => {
    return (
        <div className={styles.sectionPart}>
                {props.isReadyToEdit ? 
                    <MakeToEdit 
                        {...props}
                    />
                :
                    <FileUpload 
                        setToEdit = {props.setToEdit} 
                        setImagePath={props.setImagePath} 
                        setToFetching = {props.setToFetching}/>
                }
            {/* {error ? 
            <ErrorComponent error ={error} deleteImg={deleteImg} aboutImage={aboutImage}
            />  
          : isReadyForShare ? 
            <MakeForShare 
              aboutImage={aboutImage} 
              isFetching={isFetching}
              deleteImg={deleteImg}
              getResult={getResult}
            /> :
          isReadyForEdit ? 
            <MakeToEdit 
              aboutImage={aboutImage} 
              isFetching={isFetching}
              cropImage={cropImage}
              setToFetching={setToFetching}
            /> : 
            <FileUpload 
              setImagePath={setImagePath} 
              setForEdit={setForEdit} 
              setToFetching={setToFetching}
            />
          } */}
        </div>
    )
}


