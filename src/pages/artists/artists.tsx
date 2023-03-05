/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import EventItemEvents from '../../components/eventItemEvents'
import Footer from '../../components/footer'
import '../../index.css'

function Artists() {
    const [artists, setArtists] = useState([
        'Artist 1', 'Artist 2', 'Artist 3', 'Artist 4', 'Artist 5', 'Artist 6', 'Artist 7', 'Artist 8', 'Artist 9', 'Artist 10', 'Artist 11', 'Artist 12', 'Artist 13'
    ])

    return (
        <div className="">
            <div className="p-5">
                <div className="grid grid-cols-4 gap-5">
                    {artists.map((item: any) => (
                        <EventItemEvents item={item} />
                    ))}
                </div>
            </div>
            < Footer />
        </div>
    )
}

export default Artists