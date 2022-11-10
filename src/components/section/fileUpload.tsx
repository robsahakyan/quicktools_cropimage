import Image from "next/image";
import styles from "../styles/section.module.css";
import uploadIcon from "../../assets/images/uploadPage/uploadIcon.png";
import descriptionImg from "../../assets/images/uploadPage/1.png";
import dropboxImg from "../../assets/images/uploadPage/dropbox.svg";
import googledriveImg from "../../assets/images/uploadPage/googledrive.svg";
import { useRef } from "react";
import { FileUploadProps } from "../../types/fileupload";

export const FileUpload = (props: FileUploadProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const clickOnTheInputFile = () => {
    return inputFileRef.current?.click();
  };
  const fileInputHandler = (e: React.SyntheticEvent<EventTarget>) => {
    const file = (e.target as HTMLFormElement).files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
        props.uploadImage(fileReader.result);
    }
    
    props.setToEdit(true);
    props.setToFetching(true);
    }

  const dragOver = (e: React.SyntheticEvent<EventTarget>) => {
    (e.target as HTMLFormElement).draggable = true;
  };

  const dragLeaveHandler = (e: React.SyntheticEvent<EventTarget>) => {
    (e.target as HTMLFormElement).draggable = false;
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
    </div>
  );
};
