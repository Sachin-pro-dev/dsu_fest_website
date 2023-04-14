/* eslint-disable react-hooks/exhaustive-deps */
import '../index.css'
import useOnScreen from './checkOnScreen'
import { useEffect, useRef, useState } from 'react'
import { Blurhash } from 'react-blurhash';

function EventItemEvents(props: { item: any }) {

    const [imageLoaded, setImageLoaded] = useState(false);

    var ref = useRef<any>();
    const isVisible = useOnScreen(ref)

    // useEffect(() => {
    //     const img = new Image()
    //     img.onload = () => {
    //         setImageLoaded(true)
    //     }
    //     img.src = props.item.img
    // }, [props.item.img])

    // refer https://codesandbox.io/s/react-image-preload-ptosn?file=/src/App.js

    useEffect(() => {
        const loadImage = (image: any) => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image.url
                loadImg.onload = () =>
                    resolve(image.url)
                loadImg.onerror = err => reject(err)
            })
        }

        Promise.all(props.item.img.map((image: any) => loadImage(image)))
            .then(() => setImageLoaded(true))
            .catch(err => console.log("Failed to load images", err))
    }, [])

    return (
        <div ref={ref} className="p-3">
            {!imageLoaded &&
                <div className={`flex justify-center relative ${isVisible ? 'opacity-100 scale-100' : 'opacity-25 scale-0'} duration-500`}>
                    <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer">
                        <div className="h-[225px] rounded-lg transition-all">
                            <Blurhash hash={props.item.hash} height={225} width='100%' />
                        </div>
                        <div className="text-base flex justify-center my-5">{props.item.title}</div>
                    </div>
                </div>
            }
            {imageLoaded && (
                props.item.img.map((item: any) => (
                    <div className={`flex justify-center relative ${isVisible ? 'opacity-100 scale-100' : 'opacity-25 scale-0'} duration-500`}>
                        <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer">
                            <div className="h-[225px] rounded-lg transition-all">
                                <img src={item} className={`h-[225px] object-cover`} loading='lazy' alt="event" />
                            </div>
                            <div className="text-base flex justify-center my-5">{props.item.title}</div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default EventItemEvents