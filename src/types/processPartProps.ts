import { GlobalProps } from './globalProps';

export type RestType = {
    isEnabled: boolean,
    setToCropBut: (e: boolean) => any
}

export type ProcessPartProps = GlobalProps & RestType
