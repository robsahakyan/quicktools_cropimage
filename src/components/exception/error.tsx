import closeIcon from '../../assets/images/share/close.png'
import Image from 'next/image'

export const ErrorComponent = (props: any) => {

    const closeErrorPopUp = () => {
        props.setError(null)
    }
    return (
        <div className="errorComponent">
            <div className="errorPgh">
                {props.error}
            </div>
            <div onClick={closeErrorPopUp}>
                <Image src={closeIcon} alt='closeIcon' />
            </div>
        </div>
    )
}