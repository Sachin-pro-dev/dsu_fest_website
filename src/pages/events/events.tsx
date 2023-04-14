/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import EventItemEvents from '../../components/eventItemEvents'
import Footer from '../../components/footer'

import '../../index.css'

// event images
import standUpComedy from '../../events-img/stand_up_comedy.jpg'
import beatBoxing from '../../events-img/beat-boxing.jpg'
import danceSolo from '../../events-img/dance-solo.jpg'
import singing from '../../events-img/singing-solo.jpg'
import contentWriting from '../../events-img/content-writing.jpg'
import poetry from '../../events-img/poetry.jpg'
import essayWriting from '../../events-img/essay-writing.jpg'
import painting from '../../events-img/painting.jpg'

import fifa from '../../events-img/fifa.jpg'
import valorant from '../../events-img/Valorant.jpg'
import codm from '../../events-img/codm.jpg'
import groupDance from '../../events-img/dance-group.jpg'
import battleOfBands from '../../events-img/battle-of-bands.jpg'
import treasureHunt from '../../events-img/treasure-hunt.jpg'
import documentary from '../../events-img/documentary.jpg'
import theatre from '../../events-img/theatre.jpg'
import reels from '../../events-img/reels.jpg'
import fashionShow from '../../events-img/fasion-show.jpg'
import facePainting from '../../events-img/face-painting.jpg'
import productLaunch from '../../events-img/product-launch.jpg'
import rangoli from '../../events-img/rangoli.jpg'
import debate from '../../events-img/debate.jpg'
import mrMissDsu from '../../events-img/mr-miss-dsu.jpg'
import ePoster from '../../events-img/e-poster.jpg'
import hackathon from '../../events-img/hackathon.jpg'
import codeAuction from '../../events-img/code-auction.jpg'

function Events() {

    const [isLoading, setIsLoading] = useState(false)

    const [soloEvents, setSoloEvents] = useState([
        { title: 'Stand Up Comedy', img: standUpComedy },
        { title: 'Beat Boxing', img: beatBoxing },
        { title: 'Dance', img: danceSolo },
        { title: 'Singing', img: singing },
        { title: 'Content Writing', img: contentWriting },
        { title: 'Poetry', img: poetry },
        { title: 'Essay Writing', img: essayWriting },
        { title: 'Painting', img: painting }
    ])

    const [groupEvents, setGroupEvents] = useState([
        { title: 'FIFA', img: fifa },
        { title: 'Valorant', img: valorant },
        { title: 'CODM', img: codm },
        { title: 'Group Dance', img: groupDance },
        { title: 'Battle Of Bands', img: battleOfBands },
        { title: 'Treasure Hunt', img: treasureHunt },
        { title: 'Documentary', img: documentary },
        { title: 'Theatre', img: theatre },
        { title: 'Reels', img: reels },
        { title: 'Fashion Show', img: fashionShow },
        { title: 'Face Painting', img: facePainting },
        { title: 'Product Launch', img: productLaunch },
        { title: 'Rangoli', img: rangoli },
        { title: 'Debate', img: debate },
        { title: 'Mr & Miss DSU', img: mrMissDsu },
        { title: 'E Poster', img: ePoster },
        { title: 'Hackathon', img: hackathon },
        { title: 'Code Auction', img: codeAuction }
    ])

    const loadImage = (image: any) => {
        return new Promise((resolve, reject) => {
            const loadImg = new Image()
            loadImg.src = image
            loadImg.onload = () => resolve(image)
            loadImg.onerror = err => reject(err)
        })
    }

    useEffect(() => {
        Promise.all([...soloEvents, ...groupEvents].map(item => loadImage(item.img)))
            .then(() => setIsLoading(true))
            .catch(err => console.log("Failed to load images", err))
    }, [])

    return (
        <div className="">
            {!isLoading &&
                <div className="">Loading ...</div>
            }
            {isLoading &&
                <div className="">
                    <div className="p-5">
                        <div className="text-5xl flex justify-center items-center w-full p-5 my-5">
                            SOLO EVENTS
                        </div>
                        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
                            {soloEvents.map((item: any) => (
                                <div className="flex justify-center items-center">
                                    <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer">
                                        <div className="h-[225px] rounded-lg transition-all">
                                            <img src={item.img} className={`h-[225px] object-cover`} loading='lazy' alt="event" />
                                        </div>
                                        <div className="text-base flex justify-center my-5">{item.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-5xl flex justify-center items-center w-full p-5 my-5">
                            GROUP EVENTS
                        </div>
                        <div className="grid grid-cols-4 gap-x-5 gap-y-10">
                            {groupEvents.map((item: any) => (
                                <div className="flex justify-center items-center">
                                    <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer">
                                        <div className="h-[225px] rounded-lg transition-all">
                                            <img src={item.img} className={`h-[225px] object-cover`} loading='lazy' alt="event" />
                                        </div>
                                        <div className="text-base flex justify-center my-5">{item.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    < Footer />
                </div>
            }
        </div>
    )
}

export default Events