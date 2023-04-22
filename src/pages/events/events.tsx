/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import Footer from '../../components/footer'

import '../../index.css'


function Events() {

    const [eventData, setEventData] = useState<any>(
        {
            'Stand Up Comedy': {
                title: 'Stand Up Comedy', loc: '11:30 AM, 24th April, Amphitheatre', data: [
                    'Time Limit: 5 minutes',
                    'Individual Event',
                    'No mimicking teachers or authority of college',
                    'Not allowed to mention any names or political parties or make controversial statements',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Beat Boxing': {
                title: 'Beat Boxing', loc: '2:00 PM, 26th April, Main stage', data: [
                    'Time Limit: 3 minutes',
                    'No musical instruments will be allowed. In case it is found, the participant will be disqualified',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding',
                    'Use of foul language will lead to disqualification'
                ]
            },
            'Dance': {
                title: 'Dance', loc: '24th April, CD Sagar', data: [
                    'Time Limit: 5 minutes',
                    'The performance should be minimum 3 minutes and maximum 5 minutes long (music on to music off)',
                    'All dance forms are allowed',
                    'Judging criteria includes choreography, stage utilization, energy level, innovation, presentation',
                    'Vulgarity of any sort will lead to immediate disqualification',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Singing': {
                title: 'Singing', loc: '24th  April, CD Sagar', data: [
                    'Time limit: 5 minutes',
                    'Participants need to perform a single song in Hindi or English or Kannada and it can be a movie song, an album song, or his/her original composition',
                    'Participants can perform with one instrumental accompaniment',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Content Writing': {
                title: 'Content Writing', loc: '11:00 AM, 24th April, CJMC, Business Block', data: [
                    'Theme: Famous places in Bangalore',
                    'Registrations will be based on first come first serve basis',
                    'Word Limit: 200 words',
                    'Not allowed to mention any names or political parties or make controversial statements',
                    'Plagiarism of any sort will lead to immediate disqualification',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Poetry': {
                title: 'Poetry', loc: '11:00 AM, 24th April, Seminar hall', data: [
                    'Theme will be provided an hour prior to the event',
                    'Individual Event',
                    'Word Limit: 200 words',
                    'The poem must be an original composition in English, Kannada, or Hindi',
                    'Not allowed to mention any names or political parties or make controversial statements',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Essay Writing': {
                title: 'Essay Writing', loc: '2:00 PM, 24th April, Amphitheatre', data: [
                    'Theme: Tribes of India',
                    'Word Limit: 300 words',
                    'Not allowed to mention any names or political parties or make controversial statements',
                    'Plagiarism of any sort will lead to immediate disqualification',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Painting': {
                title: 'Painting', loc: '2:00 PM, 24th April, Food Court', data: [
                    'This is a theme - based event',
                    'Theme will be released on the day of the event',
                    'Time duration: 2 hours',
                    'Use of unfair means, explicit content or references are prohibited and shall lead to immediate disqualification',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Valorant': {
                title: 'Valorant', loc: '', data: [
                    'Team Event (up to 5 members per team)',
                    'All participants are prohibited from using inappropriate language in all text and voice channels, regardless of context',
                    'Participants are encouraged to bring their own gear'
                ]
            },
            'CODM': {
                title: 'CODM', loc: '', data: [
                    'Team Event (4 members per team)',
                    'ONLY mobile phones are allowed, use of other gadgets like tablets and ipads will lead to disqualification',
                    'Rounds will be both Battle Royale and Multiplayer',
                    'All participants are prohibited from using inappropriate language in all text and voice channels, regardless of context'
                ]
            },
            'Group Dance': {
                title: 'Group Dance', loc: '25th  April, Main stage', data: [
                    'Theme: Diversity of India',
                    'Time Limit: 5-8 minutes',
                    'Team size must be within 4-8 people',
                    'Participants may use more than one song in their performance, the length of lyrics (includes voiceovers, dialogues, lyrics of a song and any other verbal parts)',
                    'Usage of props is allowed',
                    'Presentation, formation, usage of props and costumes will be considered for judging criteria',
                    'Vulgarity and obscenity at any point are strictly not allowed. It can lead to immediate disqualification. Songs should be chosen accordingly',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Battle Of Bands': {
                title: 'Battle Of Bands', loc: '3:30 PM, 26th April', data: [
                    'Time limit: 8+2 minutes (Exclusive of band set up)',
                    'Judging criteria will be based on vocal skills, instrumental power, band coordination and most importantly the overall feel of the musical performance',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Treasure Hunt': {
                title: 'Treasure Hunt', loc: '11:00 AM, 24th April, SCMS-UG, Business block', data: [
                    'Maximum 3 members in each team are allowed',
                    'Each team must announce a leader at the time of registration',
                    'Each team will be allotted a particular Number',
                    'Wallets, mobile phones and all the other device of communication or IT devices will be taken away from the participants and will be returned after the event',
                    'The clues are to be found in a particular order. A team cannot skip a clue. Skipping a clue leads to disqualification of the team',
                    'An entire team must stay together. It cannot split up to find different clues. If a team splits, it will be penalized by a point penalty and after 3 penalty points, team will be disqualified',
                    'All the means used by the teams should be fair, in case of any violation of the rules or any use of unfair means, teams will be disqualified from the contest',
                    'All the clues of the teams are different and located at different places but the final destination i.e., the treasure is same. The team which finds the treasure first wins',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Documentary': {
                title: 'Documentary', loc: '', data: [
                    'Theme: Sericulture around Harohalli',
                    'The team size can be 10 to 15 people including actors',
                    'The time range for the short film will be 6 to 8 min',
                    'The movie should be in English only. No other languages are permitted',
                    'The video may be taken with any device',
                    'The Submission will be taken through the drive link provided before the due date',
                    'During the registration the team’s name should be provided and the same should be used to save the file on the drive',
                    'The complete movie must be submitted in .mpeg or .avi formats only',
                    'Obscenity of any kind is not allowed and shall lead to disqualification. Photo animations, slide shows, remixes, spoofs and advertisements must be avoided',
                    'The decision of the judges and the organizing team will be final and binding'
                ]
            },
            'Theatre': {
                title: 'Theatre', loc: '24th April, CD Sagar', data: [
                    'Theme: Awareness and Progress of Women and Children',
                    'Team event',
                    'Number of Participants: 8-10members',
                    'Duration: 10 minutes',
                    'A copy of the script to be submitted to the judges',
                    'Not allowed to mention any names or political parties or make controversial statements',
                    'Entries can be disqualified for misconduct, obscenity or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Reels': {
                title: 'Reels', loc: '', data: [
                    'Individual/team event',
                    'The time range for the reel should not exceed one minute',
                    'The reel must be submitted using the drive link provided before the due date',
                    'The reel must be posted on your social handles using the hashtags provided and tagging the accounts mentioned to you during the briefing',
                    'Obscenity or Vulgarity of any kind is not allowed and shall lead to disqualification. Photo animations, slide shows, remixes and spoofs must be avoided',
                    'The reel will be judged on your creativity and content',
                    'Likes, views and comments will earn you some points too',
                    'The decision of the judges and the organizing team will be final and binding',
                ]
            },
            'Fashion Show': {
                title: 'Fashion Show', loc: '2:00 PM, 25th April, Main stage', data: [
                    'Theme will be announced 15-20 days prior to the event',
                    'Team Size: 6-10 members',
                    'Time Limit: 8+2 minutes',
                    'Presentation, formation, usage of props and costumes will be considered for judging criteria',
                    'Vulgarity of any kind would lead to disqualification of the team from the event. Hence, if the team feels that any stunt or costume design can be considered vulgar, it is strongly advised to consult the organizers. The decision of the organisers will be final in case of any disputes',
                    'No branding on clothes will be allowed',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Face Painting': {
                title: 'Face Painting', loc: '25th April, Food Court, CD Sagar', data: [
                    'This is a theme-based event',
                    'Theme: Spirit of freedom',
                    'Time duration: 2 hours',
                    'Use of unfair means, explicit content or references are prohibited and shall lead to immediate disqualification',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Product Launch': {
                title: 'Product Launch', loc: '3:00 PM, 24th April, Amphitheatre', data: [
                    'Registrations will be based on first come first serve basis',
                    'Team event',
                    'Number of Participants: 2-4 Participants in one team',
                    'Duration: 10 minutes',
                    'Any material used during the pitch to be submitted to the judges',
                    'The product has to be authentic',
                    'Malpractice of any sort will lead to immediate disqualification',
                    'Not allowed to mention any names or political parties or make controversial statements'
                ]
            },
            'Rangoli': {
                title: 'Rangoli', loc: '25th April, Amphitheatre', data: [
                    'Theme: Festivals of India',
                    'Usage of chalk is not allowed',
                    'Time duration: 1 hour',
                    'Use of unfair means, explicit content or references are prohibited and shall lead to immediate disqualification',
                    'Judging criteria is based on creativity and relevance to the theme',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Debate': {
                title: 'Debate', loc: '2:00 PM, Seminar Hall', data: [
                    'No of Participants: 2',
                    'Topic will be given on the spot',
                    'The participants must be prepared both for and against the topic',
                    'Not allowed to mention any names or political parties or make controversial statements',
                    'Entries can be disqualified for misconduct, obscenity, or foul language',
                    'The decision of the judges will be final and binding'
                ]
            },
            'Mr & Miss DSU': {
                title: 'Mr & Miss DSU', loc: '11:00 AM, 26th April, Main stage ', data: [
                    'The event is divided into 3 parts',
                    'Presentation, formation, usage of props and costumes will be considered for judging criteria',
                    'Introduction round – Judging criteria will be based on creativity and confidence',
                    'Talent round – Participants must present the talents they possess',
                    'Questionnaire – Participants will be asked questions by the jury members. Judging criteria will be based on spontaneity and relevance',

                ]
            },
            'E Poster': {
                title: 'E Poster', loc: '', data: [
                    'No of Participants: 1-3',
                    'Theme will be provided on the spot',
                    'The e-posters should be designed using appropriate software and should be easily viewable on various devices, including computers, tablets, and smartphones',
                    'The e-posters should be original and must not infringe on any copyright or intellectual property rights',
                    'Participants are encouraged to use their creativity and originality in creating their e-posters',
                    'The file must be submitted in PNG and PDF format',
                    'The judging criteria may include factors such as creativity, originality, visual impact, and adherence to the theme'
                ]
            }
        },
    )

    const [soloEvents, setSoloEvents] = useState([
        { title: 'Stand Up Comedy', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/stand_up_comedy.jpg', },
        { title: 'Beat Boxing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/beat-boxing.jpg' },
        { title: 'Dance', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/dance-solo.jpg' },
        { title: 'Singing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/singing-solo.jpg' },
        { title: 'Content Writing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/content-writing.jpg' },
        { title: 'Poetry', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/poetry.jpg' },
        { title: 'Essay Writing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/essay-writing.jpg' },
        { title: 'Painting', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/painting.jpg' }
    ])

    const [groupEvents, setGroupEvents] = useState([
        // { title: 'FIFA', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/fifa.jpg' },
        { title: 'Valorant', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/Valorant.jpg' },
        { title: 'CODM', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/codm.jpg' },
        { title: 'Group Dance', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/dance-group.jpg' },
        { title: 'Battle Of Bands', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/battle-of-bands.jpg' },
        { title: 'Treasure Hunt', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/treasure-hunt.jpg' },
        { title: 'Documentary', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/documentary.jpg' },
        { title: 'Theatre', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/theatre.jpg' },
        { title: 'Reels', img: 'https://ik.imagekit.io/pranavSindhanuru/events-img/reels.jpg' },
        { title: 'Fashion Show', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/fasion-show.jpg' },
        { title: 'Face Painting', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/face-painting.jpg' },
        { title: 'Product Launch', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/product-launch.jpg' },
        { title: 'Rangoli', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/rangoli.jpg' },
        { title: 'Debate', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/debate.jpg' },
        { title: 'Mr & Miss DSU', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/mr-miss-dsu.jpg' },
        { title: 'E Poster', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/e-poster.jpg' },
        // { title: 'Hackathon', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/hackathon.jpg' },
        // { title: 'Code Auction', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/code-auction.jpg' }
    ])

    // modal control
    const [modalShow, setModalShow] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(false);
    const [modalData, setModalData] = useState<any>();

    useEffect(() => {
        if (modalShow) {
            setTimeout(() => {
                setModalAnimation(true)
            }, 100)
        }
    }, [modalShow])

    useEffect(() => {
        if (!modalAnimation) {
            setTimeout(() => {
                setModalShow(false)
            }, 100)
        }
    }, [modalAnimation])

    const onClickEventTile = (title: any) => {
        setModalShow(true)
        setModalData(eventData[title])
    }

    var ref = useRef<any>();
    useEffect(() => {
        let handlerLeave = (e: any) => {
            if (ref.current) {
                if (!ref.current.contains(e.target)) {
                    setModalAnimation(false);
                }
            }
        }
        document.addEventListener("mousedown", handlerLeave)
    })

    return (
        <div className="">
            <div className="">
                <div className="p-5">
                    <div className="text-5xl flex justify-center items-center w-full p-5 my-5">
                        SOLO EVENTS
                    </div>
                    <div className="grid grid-cols-4 gap-x-5 gap-y-10">
                        {soloEvents.map((item: any) => (
                            <div className="flex justify-center items-center">
                                <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer" onClick={() => onClickEventTile(item.title)}>
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
                                <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer" onClick={() => onClickEventTile(item.title)}>
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
            {modalShow &&
                <div className="">
                    <div className="fixed top-0 left-0 right-0 z-20">
                        <div className="h-screen w-screen bg-[#000000] opacity-75" />
                    </div>
                    <div className="fixed top-0 left-0 right-0 z-30">
                        <div className="h-screen w-screen flex justify-center items-center">
                            <div ref={ref} className={`max-w-[80vw] max-h-[80vh] rounded-lg bg-[#DEE2E6] p-3 ${modalAnimation ? 'scale-100' : 'scale-0'} transition-all ease-in-out text-[#212529] justif-center items-center`}>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-3xl">{modalData.title}</div>
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 stroke-[#212529] cursor-pointer" onClick={() => setModalAnimation(false)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-lg">{modalData.loc}</div>
                                <div className="overflow-y-auto scrollbar max-h-[60vh] mt-[3vh] mx-1">
                                    {modalData.data.map((item: any) => (
                                        <div className="flex items-center my-2">
                                            <div className="h-[10px] w-[10px] rounded-full bg-[#212529] mr-[10px]"></div>
                                            <div className="text-lg">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Events