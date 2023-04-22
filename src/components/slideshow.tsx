/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '../index.css'
import 'react-slideshow-image/dist/styles.css'
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

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
            <div className="flex items-center">
                <ImgItem item={images} />
            </div>
        </div>
    )
}

function ImgItem(props: { item: any }) {

    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

    const helperList = Array.from(Array(props.item.length * 4 + 2).keys())
    const [imgShow, setImgShow] = useState([props.item[props.item.length - 1], ...props.item, ...props.item, ...props.item, ...props.item, props.item[0]])

    const [locLeftImg, setLocLeftImg] = useState(0);
    const [locMidImg, setLocMidImg] = useState(1);
    const [locRightImg, setLocRightImg] = useState(2);
    const [imgUpdate, setImgUpdate] = useState(false);
    const [loadUpdate, setLoadUpdate] = useState(true);

    useEffect(() => {
        if (imgUpdate) {
            setTimeout(() => {
                setImgUpdate(!imgUpdate)
            }, 150)
        }
    }, [imgUpdate])

    useEffect(() => {
        const moveSlide = setTimeout(() => {
            setLocLeftImg(mod(locLeftImg + 1, imgShow.length))
            setLocMidImg(mod(locMidImg + 1, imgShow.length))
            setLocRightImg(mod(locRightImg + 1, imgShow.length))
        }, 4000)
        if (!loadUpdate) {
            return function () {
                clearTimeout(moveSlide)
            }
        }
        return function () {
            clearTimeout(moveSlide)
        }
    })

    useEffect(() => {
        if (!loadUpdate) {
            setTimeout(() => {
                setLoadUpdate(true)
            }, 4000)
        }
    })

    useEffect(() => {
        if (locMidImg === imgShow.length - 1) {
            setLocLeftImg(0)
            setLocMidImg(1)
            setLocRightImg(2)
            setImgUpdate(!imgUpdate)
        }
        if (locMidImg === 0) {
            setLocLeftImg(imgShow.length - 3)
            setLocMidImg(imgShow.length - 2)
            setLocRightImg(imgShow.length - 1)
            setImgUpdate(!imgUpdate)
        }
    }, [locMidImg])

    const applyStyle = (i: any) => {
        if (isDesktopOrLaptop) {
            if (i === locLeftImg || i === locRightImg) {
                return 'h-[30vh] w-[24vw] rounded-lg cursor-pointer'
            }
            else if (i === locMidImg) {
                return 'h-[60vh] w-[50vw] mx-[0.5vw] rounded-lg'
            }
            else {
                return 'h-0 w-0'
            }
        }
        else if (isTabletOrMobile && !isPortrait) {
            if (i === locLeftImg || i === locRightImg) {
                return 'h-[30vh] w-[24vw] rounded-lg cursor-pointer'
            }
            else if (i === locMidImg) {
                return 'h-[60vh] w-[50vw] mx-[0.5vw] rounded-lg'
            }
            else {
                return 'h-0 w-0'
            }
        }
        else if (isTabletOrMobile && isPortrait) {
            if (i === locLeftImg || i === locRightImg) {
                return 'h-[10vh] w-[10vw] rounded-lg cursor-pointer'
            }
            else if (i === locMidImg) {
                return 'h-[25vh] w-[78vw] mx-[0.5vw] rounded-lg'
            }
            else {
                return 'h-0 w-0'
            }
        } else {
            return ''
        }
    }

    const onClickAction = (i: any) => {
        if (i === locLeftImg) {
            setLocLeftImg(mod(locLeftImg - 1, imgShow.length))
            setLocMidImg(mod(locMidImg - 1, imgShow.length))
            setLocRightImg(mod(locRightImg - 1, imgShow.length))
            setLoadUpdate(false)
        }
        else if (i === locRightImg) {
            setLocLeftImg(mod(locLeftImg + 1, imgShow.length))
            setLocMidImg(mod(locMidImg + 1, imgShow.length))
            setLocRightImg(mod(locRightImg + 1, imgShow.length))
            setLoadUpdate(false)
        }
    }

    const mod = (n: any, m: any) => ((n % m) + m) % m;

    return (
        <div className="flex justify-center items-center w-full">
            {helperList.map((i: any) => (
                <div className={`${applyStyle(i)} transition-all ${imgUpdate ? 'opacity-0' : 'opacity-100'}`} onClick={() => onClickAction(i)}>
                    <img alt='slideshow' className={`h-full w-full object-cover rounded-lg`} src={imgShow[i]} />
                </div>
            ))}
        </div>
    )
}

export default SlideShow

