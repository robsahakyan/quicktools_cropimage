import Head from 'next/head'
import { Header } from '../src/components/header/header'
import { Section } from '../src/components/section/section'
import { connect } from 'react-redux'
import { uploadImage, setToFetching, setToEdit, changeOptionsAC, changeCoordinatesAC, setImagePropertiesAC, setToShare, setImagePathAC, openCurrentPopUp, createErrorAC } from '../src/components/store/image-reducer'
import { PopUpPart } from '../src/components/popup/popUpPart'
import { RootState } from '../src/types/state'
import { GlobalProps } from '../src/types/globalProps'

const Home: any = (props: GlobalProps) => {
  return (
    <div className='rootDiv'>
      {props.popUpIsOpened && 
      <PopUpPart 
        aboutImage={props.aboutImage} 
        isReadyToShare={props.isReadyToShare} 
        popUpIsOpened={props.popUpIsOpened} 
        openCurrentPopUp={props.openCurrentPopUp}
        />
      }
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

const mapStateToProps = (state: RootState) =>  {
  return {
    aboutImage: state.image.aboutImage,
    cropProperties: state.image.cropProperties,
    isFetching: state.image.isFetching,
    imageProperties: state.image.imageProperties,
    cropOptions: state.image.cropOptions,
    isReadyToEdit: state.image.isReadyToEdit,
    popUpIsOpened: state.image.popUpIsOpened,
    isReadyToShare: state.image.isReadyToShare,
    error: state.image.error,
  };
};

export default connect(mapStateToProps, {
  setImagePath: setImagePathAC,
  changeOptions: changeOptionsAC,
  changeCoordinates: changeCoordinatesAC,
  setImageProperties: setImagePropertiesAC,
  setToFetching,
  createError: createErrorAC,
  openCurrentPopUp,
  uploadImage,
  setToShare,
  setToEdit,
})(Home);
