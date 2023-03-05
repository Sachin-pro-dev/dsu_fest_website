/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import EventItemEvents from '../../components/eventItemEvents'
import Footer from '../../components/footer'

import '../../index.css'

function Events() {

    const [events, setEvents] = useState([
        'Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7', 'Event 8', 'Event 9', 'Event 10', 'Event 11', 'Event 12', 'Event 13'
    ])

    return (
        <div className="">
            <div className="p-5">
                <div className="grid grid-cols-4 gap-5">
                    {events.map((item: any) => (
                        <EventItemEvents item={item} />
                    ))}
                </div>
            </div>
            < Footer />
        </div>
    )
}

export default Events