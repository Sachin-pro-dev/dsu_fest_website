/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
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

function EventsTablet() {

    const [soloEvents, setSoloEvents] = useState([
        { title: 'Stand Up Comedy', img: standUpComedy, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Beat Boxing', img: beatBoxing, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Dance', img: danceSolo, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Singing', img: singing, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Content Writing', img: contentWriting, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Poetry', img: poetry, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Essay Writing', img: essayWriting, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Painting', img: painting, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' }
    ])

    const [groupEvents, setGroupEvents] = useState([
        { title: 'FIFA', img: fifa, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Valorant', img: valorant, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'CODM', img: codm, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Group Dance', img: groupDance, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Battle Of Bands', img: battleOfBands, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Treasure Hunt', img: treasureHunt, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Documentary', img: documentary, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Theatre', img: theatre, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Reels', img: reels, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Fashion Show', img: fashionShow, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Face Painting', img: facePainting, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Product Launch', img: productLaunch, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Rangoli', img: rangoli, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Debate', img: debate, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Mr & Miss DSU', img: mrMissDsu, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'E Poster', img: ePoster, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Hackathon', img: hackathon, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' },
        { title: 'Code Auction', img: codeAuction, hash: 'LXF}.?xtNZs.00IUWVof~q%2jZRj' }
    ])

    return (
        <div className="">
            <div className="p-5">
                <div className="text-5xl flex justify-center items-center w-full p-5">
                    SOLO EVENTS
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {soloEvents.map((item: any) => (
                        <EventItemEvents item={item} />
                    ))}
                </div>
                <div className="text-5xl flex justify-center items-center w-full p-5">
                    GROUP EVENTS
                </div>
                <div className="grid grid-cols-2 gap-5">
                    {groupEvents.map((item: any) => (
                        <EventItemEvents item={item} />
                    ))}
                </div>
            </div>
            < Footer />
        </div>
    )
}

export default EventsTablet