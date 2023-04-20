/* eslint-disable @typescript-eslint/no-unused-vars */
import '../index.css'
import 'react-slideshow-image/dist/styles.css'
import { useEffect, useState } from 'react';

function SlideShow() {

    const images = [
        'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/slideshow/1.JPG',
        'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/slideshow/2.jpg',
        'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/slideshow/3.jpg',
        'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/slideshow/4.jpg',
        'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/slideshow/5.JPG',
        'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/slideshow/6.JPG'
    ]

    return (
        <div className="">
            <div className="h-[80vh] flex items-center">
                <ImgItem item={images} />
            </div>
            {/* <div className="slide-container">
                <Fade>
                    {images.map((fadeImage: any, index: any) => (
                        <div key={index} className="flex justify-center">
                            <img alt='slideshow' className='h-[80vh]' src={fadeImage} />
                        </div>
                    ))}
                </Fade>
            </div> */}
        </div>
    )
}

function ImgItem(props: { item: any }) {

    const [locLeftImg, setLocLeftImg] = useState(0);
    const [locMidImg, setLocMidImg] = useState(1);
    const [locRightImg, setLocRightImg] = useState(2);

    const [imgLeftShift, setImgLeftShift] = useState(false);

    const moveTransitionLeft = () => {
        
    }

    useEffect(() => {

    }, [imgLeftShift])

    const mod = (n: any, m: any) => ((n % m) + m) % m;

    const onClickLeftImg = () => {
        setLocLeftImg(mod(locLeftImg - 1, props.item.length))
        setLocMidImg(mod(locMidImg - 1, props.item.length))
        setLocRightImg(mod(locRightImg - 1, props.item.length))
    }

    const onClickRightImg = () => {
        setLocLeftImg(mod(locLeftImg + 1, props.item.length))
        setLocMidImg(mod(locMidImg + 1, props.item.length))
        setLocRightImg(mod(locRightImg + 1, props.item.length))
    }

    return (
        <div className="flex justify-center items-center w-full">
            <div className="h-[30vh] w-[24vw] rounded-lg cursor-pointer" onClick={onClickLeftImg}>
                <img alt='slideshow' className={`h-[30vh] w-[24vw] object-cover`} src={props.item[locLeftImg]} />
            </div>
            <div className="h-[60vh] w-[50vw] mx-[0.5vw] rounded-lg">
                <img alt='slideshow' className={`h-[60vh] w-[50vw] object-cover`} src={props.item[locMidImg]} />
            </div>
            <div className="h-[30vh] w-[24vw] rounded-lg cursor-pointer" onClick={onClickRightImg}>
                <img alt='slideshow' className={`h-[30vh] w-[24vw] object-cover`} src={props.item[locRightImg]} />
            </div>
        </div>
    )
}

export default SlideShow

