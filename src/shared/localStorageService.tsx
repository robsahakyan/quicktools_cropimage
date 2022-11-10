export class LocalStorageService {
    imgPath: string;
    currentImgIndex: number;
    constructor(imgPath: string) {
        this.imgPath = imgPath;
        this.currentImgIndex = this.getLength();
    }

    static getState() {
        let aboutImage: string | null = window.localStorage.getItem('aboutImage'); 
        if (aboutImage) {
            let arrAbout: string[] = JSON.parse(aboutImage);
            let arrayOfImages: string[] = [];

            arrAbout.forEach(el => {
                arrayOfImages.push(window.localStorage.getItem(el) ?? '')
            })
            
            return arrayOfImages;
        }
    }

    getLength() {
        let aboutImage: string | null = window.localStorage.getItem('aboutImage'); 
        if (aboutImage) {
            let arrAbout: string[] = JSON.parse(aboutImage) || [];
            return arrAbout.length;
        }
        return 0;
    }

    static getById(index: number): string | null {
        let result = window.localStorage.getItem(index.toString());
        if (result) {
            return result;
        }
        return null
    }

    static clearAll() {
        let aboutImage: string | null = window.localStorage.getItem('aboutImage'); 

        if (aboutImage) {
            let arrAbout: string[] = JSON.parse(aboutImage);
            arrAbout.forEach(el => {
                window.localStorage.removeItem(el)
            })
            
            window.localStorage.removeItem('aboutImage');
        }
    }

    save() {
        let aboutImage: string | null = window.localStorage.getItem('aboutImage'); 

        if (!aboutImage) {
            let arrJson = JSON.stringify([]);
            window.localStorage.setItem('aboutImage',arrJson)
            aboutImage = arrJson;
            
        } 
        let arrAbout: number[] = JSON.parse(aboutImage) || [];
        arrAbout.push(this.currentImgIndex);
        window.localStorage.setItem(this.currentImgIndex.toString(), this.imgPath)
        window.localStorage.setItem('aboutImage', JSON.stringify(arrAbout))
       
    }
}