/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import Footer from '../../components/footer'
import '../../index.css'

function Artists() {
    const [artists, setArtists] = useState([
        // {title: 'Sangeetha Sringeri', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/artists-img/sangeetha_sringeri.jpg'},
        {title: 'Mysore Xpress Band', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/artists-img/MysoreXpressBand.webp'},
    ])

    return (
        <div className="">
            <div className="p-5">
                <div className="grid grid-cols-4 gap-x-5 gap-y-10 ">
                    {artists.map((item: any) => (
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
        </div>
    )
}

export default Artists