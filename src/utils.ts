export const changeCropSizes = (target: string, imgProperties: {offsetHeight: number, offsetWidth: number }): object | undefined => {
    const {offsetHeight, offsetWidth} = imgProperties;
    let x: number;
    let y: number;
    let width: number;
    let height: number;
    let aspect = decisionOfAspect(target);

    if (!aspect) {
        return;
    }

    if (offsetHeight > offsetWidth) {
        if (aspect >= 1) {
            x = 0;
            width = offsetWidth;
            height = Math.round(width * 1 / aspect);
            y = Math.round((offsetHeight - height) / 2);
        } else {
            height = offsetWidth;
            width = Math.round(height * aspect);
            x = Math.round((offsetWidth - width) / 2);
            y = Math.round((offsetHeight - height) / 2)
        }
    } else {
        if (aspect >= 1) {
            width = offsetHeight;
            height = Math.round(width * 1 / aspect);
            y = Math.round((offsetHeight - height) / 2)
            x = Math.round((offsetWidth - width) / 2)
        } else {
            y = 0;
            height = offsetHeight;
            width = Math.round(height * aspect);
            x = Math.round((offsetWidth - width) / 2);
        }
    }
    return {
        y,
        height,
        width,
        x,
        aspect,
        unit: 'px'
    }

}


function decisionOfAspect(target: string): number | undefined {
    switch(target) {
        case 'oneInOne': 
            return 1;
        case 'threeInTwo':
            return 3 / 2;
        case 'fourInThree':
            return 4 / 3;
        case 'sixteenInNine':
            return 16 / 9;
        case 'nineInSixteen':
            return 9 / 16;
        case 'threeInFour':
            return 3 / 4;
        case 'twoInThree':
            return 2 / 3;
        default :
            return;
    }
}


export function setDefaultCustomVals(imgProperties: {offsetHeight: number | null, offsetWidth: number | null }) {
    const {offsetHeight, offsetWidth } = imgProperties;

    if (offsetHeight && offsetWidth) {
        return {
            unit: 'px',
            x: Math.round(offsetWidth / 4),
            y: Math.round(offsetHeight / 4),
            width: Math.round(offsetWidth / 2),
            height: Math.round(offsetHeight / 2)
        }
    }
}

export function setNullableValls() {
    return {
        unit: 'px',
        x: null,
        y: null,
        width: null,
        height: null
    }
}