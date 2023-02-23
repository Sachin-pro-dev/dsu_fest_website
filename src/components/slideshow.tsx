/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import '../index.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function SlideShow() {

    function importAll(r: any) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../db/slideshow', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="slide-container">
            <Fade>
                {images.map((fadeImage: any, index: any) => (
                    <div key={index} className="flex justify-center">
                        <img className='h-[80vh]' src={fadeImage} />
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default SlideShow
