/* eslint-disable @typescript-eslint/no-unused-vars */
import '../index.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import useOnScreen from './checkOnScreen';
import { useRef } from 'react';

function SlideShow() {

    function importAll(r: any) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../db/slideshow', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="">
            <div className="overflow-x-scroll scrollbar h-[80vh] flex items-center">
                {images.map((item: any) => (
                    <ImgItem item={item} />
                ))}
            </div>
            <div className="slide-container">
                <Fade>
                    {images.map((fadeImage: any, index: any) => (
                        <div key={index} className="flex justify-center">
                            <img alt='slideshow' className='h-[80vh]' src={fadeImage} />
                        </div>
                    ))}
                </Fade>
            </div>
        </div>
    )
}

function ImgItem(props: { item: any }) {

    var ref = useRef<any>();
    const isVisible = useOnScreen(ref)

    return (
        <img ref={ref} alt='slideshow' className={`h-[75vh] w-[90vw] m-3 ${isVisible ? 'opacity-100' : 'opacity-0'} duration-700`} src={props.item} />
    )
}

export default SlideShow

