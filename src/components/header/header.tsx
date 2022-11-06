import Image from 'next/image'
import styles from '../styles/header.module.css'
import { InitialHeader } from './initialHeader'
import { HeaderForEdition } from './headerForEdition'


export const Header: any = (props: any) => {
    return (
        <>        
        {
            props.isReadyToEdit ?
            <HeaderForEdition/> 
            :
            <InitialHeader />
        }
        </>
    )
}
