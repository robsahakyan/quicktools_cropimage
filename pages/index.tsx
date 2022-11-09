import Head from 'next/head'
import { Header } from '../src/components/header/header'
import { Section } from '../src/components/section/section'
import { connect } from 'react-redux'
import { uploadImage, setToFetching, setToEdit,  deleteImagesThunk, changeOptionsAC, changeCoordinatesAC, setImagePropertiesAC, setToShare, setImagePathAC } from '../src/components/store/image-reducer'
import type { SetImagePath, SetToEdit, SetToFetching, DeleteImg, ChangeOptions, ChangeCoordinates, SetImageProperties, SetToShare, UploadImage } from '../src/types/actions'

export type GlobalProps = {
    aboutImage: {imgPath: any, filename: any },
    isFetching: boolean,
    isReadyToEdit: boolean,
    isReadyToShare: boolean,
    imageProperties: object,
    cropProperties: any,
    cropOptions: object,
    error: any,
    setToEdit: SetToEdit,
    setImagePath: SetImagePath,
    uploadImage: UploadImage, 
    setToShare: SetToShare,
    setToFetching: SetToFetching,
    deleteImg: DeleteImg,
    changeOptions: ChangeOptions,
    changeCoordinates: ChangeCoordinates,
    setImageProperties: SetImageProperties
}

const Home: any = (props: GlobalProps) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header {...props} />
        <Section {...props} />
      </main>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    aboutImage: state.image.aboutImage,
    cropProperties: state.image.cropProperties,
    isFetching: state.image.isFetching,
    imageProperties: state.image.imageProperties,
    cropOptions: state.image.cropOptions,
    isReadyToEdit: state.image.isReadyToEdit,
    isReadyToShare: state.image.isReadyToShare,
    error: state.image.error,
  };
};

export default connect(mapStateToProps, {
  setImagePath: setImagePathAC,
  // cropImage: cropImageThunk,
  // getResult: getCroppedImageThunk,
  changeOptions: changeOptionsAC,
  changeCoordinates: changeCoordinatesAC,
  deleteImg: deleteImagesThunk,
  setImageProperties: setImagePropertiesAC,
  setToFetching,
  uploadImage,
  setToShare,
  setToEdit,
})(Home);
