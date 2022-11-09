import Image from "next/image";
import styles from "../styles/section.module.css";
import uploadIcon from "../../assets/images/uploadPage/uploadIcon.png";
import descriptionImg from "../../assets/images/uploadPage/1.png";
import dropboxImg from "../../assets/images/uploadPage/dropbox.svg";
import googledriveImg from "../../assets/images/uploadPage/googledrive.svg";
import { useRef } from "react";
import type { SetImagePath, SetToEdit, SetToFetching } from "../../types/actions";

type FileUploadProps = {
  setToEdit: SetToEdit;
  setImagePath: SetImagePath;
  setToFetching: SetToFetching;
};

export const FileUpload: any = (props: FileUploadProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const clickOnTheInputFile = () => {
    return inputFileRef.current?.click();
  };
  const fileInputHandler = (e: React.SyntheticEvent<EventTarget>) => {
    const file = (e.target as HTMLFormElement).files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      props.setImagePath(fileReader.result);
    };

    props.setToEdit(true);
    props.setToFetching(true);
  };

  const dragOver = (e: React.SyntheticEvent<EventTarget>) => {
    // e.preventDefault();
    (e.target as HTMLFormElement).draggable = true;
    // e.target.textContent = 'Release to Upload';
  };

  const dragLeaveHandler = (e: React.SyntheticEvent<EventTarget>) => {
    // e.target.classList.remove('active');
    // e.target.textContent = 'Drag & Drop';
    (e.target as HTMLFormElement).draggable = false;
  };

  const dropHandler = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    // const file = e.dataTransfer.files[0];
    // props.setImagePath(file);
    // props.setToEdit(true);
    // props.setToFetching(true);
  };

  return (
    <div className={styles.generalDiv}>
      <div className={styles.fileUpload}>
        <div className={styles.descriptionPart}>
          <div className={styles.descriptionIconPart}>
            <Image
              src={descriptionImg}
              alt="descriptionImg"
              width={158.36}
              height={122.36}
            />
          </div>
          <div className={styles.descriptionContent}>
            <h2 className={styles.descriptionHeaderPart}>
              Crop image in a few clicks
            </h2>
            <div className={styles.descriptionPghPart}>
              Remove unwanted parts of your videos easily. Just add, choose a
              starting and a finish point, adjust and export in a selection of
              formats. All done in a few clicks.
            </div>
          </div>
        </div>
        <div
          className={styles.uploadPart}
          onDragOver={dragOver}
          onDragLeave={dragLeaveHandler}
        >
          <div className={styles.uploadDescription}>
            Upload an image or drop it here.
          </div>
          <div className={styles.uploadButtonPart}>
            <input
              type="file"
              accept="image/*"
              ref={inputFileRef}
              onChange={fileInputHandler}
              style={{ display: "none" }}
            ></input>
            <button className={styles.uploadButton} onClick={clickOnTheInputFile}>
              <Image src={uploadIcon} alt="uploadIcon" />
              Upload Image
            </button>
          </div>
          <div className={styles.dropAndDrive}>
            <button className={styles.dropboxButton}>
              <Image src={dropboxImg} alt="dropboxImg" />
              <div>Dropbox</div>
            </button>
            <button className={styles.googleDriveButton}>
              <Image src={googledriveImg} alt="googledriveImg" />
              <div>Google Drive</div>
            </button>
          </div>
        </div>
      </div>
      {/* <div className='upPartUpload'>
            <input type='file' accept='image/*' ref={inputFileRef} onChange={fileInputHandler} style={{"display": "none"}}></input>
            <button className="btn" onClick={clickOnTheInputFile}>Select Image From Local Drive<span className="fas fa-chevron-right"></span></button>
            <button className="btn">
            <DropboxChooser
                appKey={dropboxApyKey}
                success={dropboxSuccess}
                linkType="direct"
                multiselect={false}
                extensions={['.jpg','.png','.jpeg']} >Select Image From Dropbox<span className="fas fa-chevron-right"></span>
            </DropboxChooser>
            </button>

            <button className="btn" onClick={handleOpenPicker}> Select Image From Google Drive <span className="fas fa-chevron-right"></span> </button>
        </div> */}
      {/* <div className="dragDiv">
            <h3>Drop your file here</h3>
            <div onDragOver={dragOver} onDragLeave={dragLeaveHandler} onDrop={dropHandler} className="drag-area">
                <div className="icon">
                <i className="fas fa-images"></i>
                </div>

                <span className="header">Drag & Drop</span>
                <span className="support">Supports: JPEG, JPG, PNG</span>
            </div> */}
      {/* </div> */}
    </div>
  );
};
