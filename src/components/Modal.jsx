import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import namecardImg from '../assets/namecard.png'
import resumeImg from '../assets/resume.png'
import resumePdf from '../assets/resume.pdf'
import appImg1 from '../assets/TCG-Binder-App1.png'
import appImg2 from '../assets/TCG-Binder-App2.png'
import sportsImg from '../assets/sports.png'
import flypastImg from '../assets/flypast.png'
import tokyoImg from '../assets/tokyo.png'
import mycardsImg from '../assets/mycards.png'
import gamesImg from '../assets/games.png'

function Modal({ modal, setModal }) {
    const [copied, setCopied] = useState(null)

    const copy = async (link, id) => {
        navigator.clipboard.writeText(link)
        setCopied(id)
        setTimeout(() => setCopied(null), 8000)
    }

    function renderContent(modal) {
        switch (modal.id) {
            case "laptop":
                return (
                    <>
                        <p className={title}>Coding Projects</p>
                        {laptopProjects.map((project, i) =>
                            <div key={i} className="flex flex-col items-center gap-1.5">
                                <p className="font-body text-[1.7vw] font-bold py-1">{project.name}</p>
                                {project.images &&
                                    <div className="flex flex-row gap-2 flex-wrap justify-center py-1">
                                        {project.images.map((img, j) => <img key={j} src={img} className="w-[32vw] rounded-md" />)}
                                    </div>
                                }
                                <p className={description}>{project.description}</p>
                                <div className="flex flex-row gap-3 py-2">
                                    {project.video &&
                                        <a href={project.video} target="_blank" className={redirectButton}>Watch Demo</a>
                                    }
                                    {project.demo &&
                                        <a href={project.demo} target="_blank" className={redirectButton}>Try on Vercel</a>
                                    }
                                    {project.github &&
                                        <a href={project.github} target="_blank" className={redirectButton}>View on GitHub</a>
                                    }
                                </div>
                            </div>
                        )}
                    </>
                )
            case "cards":
                return (
                    <>
                        <p className={title}>Pokemon Cards</p>
                        <div className="flex flex-row justify-between items-center">
                            <img src={mycardsImg} className="px-3 py-4 w-[20vw] block mx-auto"></img>
                            <p className={description}>I've enjoyed collecting things since I was young, and Pokémon being a large part of my childhood naturally brought me into card collecting at age 10 — before the craze. I focus on filling my binders by era, and I've always sought after vintage cards, which were far cheaper back then than they are now. One of my proudest achievements is completing the "legends" collection — a set built around combining two cards into one stronger card. Organising and looking through my binder is a form of therapy — it calms me during tense situations, takes my mind off things, and keeps me grounded and grateful that I had the privilege to enjoy this hobby before prices spiked.</p>
                        </div>
                    </>
                )
            case "patch":
                return (
                    <>
                        <p className={title}>My National Service Experience</p>
                        <img src={flypastImg} className="px-2 w-[50vw] block mx-auto"></img>
                        <p className={description}>For my national service, I was fortunate to be selected as an Air Crew Specialist (ACS). My role included managing troops and cargo onboard the CH-47 Chinook, as well as training in Search and Rescue (SAR) for peacetime operations. One memorable experience was flying onboard the aircraft as it carried the state flag — a different feeling entirely, seeing the city of Singapore from the sky while carrying the flag I'd seen every day growing up here. All in all, I was fortunate to work in an environment most people would consider a once-in-a-lifetime experience.</p>
                    </>
                )
            case "photo":
                return (
                    <>
                        <p className={title}>Travels</p>
                        <div className="flex flex-row justify-between items-center">
                            <img src={tokyoImg} className="px-3 py-4 w-[15vw] block mx-auto"></img>
                            <p className={description}>My favourite country to visit is Japan — a country rich in culture and history. Having grown up consuming a lot of Japanese media, travelling there felt surreal. Indulging in local delights, walking the city streets at night, and exploring the outskirts with their quiet nature and uneven pavements all made for unforgettable memories. One of my favourite shots from my trips is a sunset over Tokyo, the light catching the city just right as evening set in. Great deals at Japan's department stores are also a rare find in today's economy, cementing it as my favourite country to visit.</p>
                        </div>
                    </>
                )
            case "switch":
                return (
                    <>
                        <p className={title}>Video Games</p>
                        <img src={gamesImg} className="px-2 w-[50vw] block mx-auto"></img>
                        <p className={description}>Gaming has been a casual hobby since I was a child. I enjoy strategy and role-playing games, since they require me to solve problems and think through solutions to take down difficult bosses and levels. Series I particularly enjoy include Pokémon, Persona, and Xenoblade Chronicles — all of which revolve around squad building, where I have to understand each character and work around their weaknesses. After all, a team is only as strong as its weakest member. This is something I apply in group projects, where I take the initiative to lead discussions and play to everyone's strengths to help us reach our best outcome as a team.</p>
                    </>
                )
            case "tennisball":
                return (
                    <>
                        <p className={title}>Sports</p>
                        <img src={sportsImg} className="px-2 w-[40vw] block mx-auto"></img>
                        <p className={description}>Sports has always been an interest of mine. In primary school I played tennis, in secondary school I competed in throwing events (discus and shot put) for track and field, and in IB I played rugby. Outside of competitive sports, I've also played badminton, basketball, pickleball, and NFL recreationally. I was never particularly great at any of them, but I enjoyed playing all the same. I still run and lift weights today to keep improving my fitness. Sports as a whole brought a lot of hardship into my life, but the biggest lesson it taught me was to always keep my head up and keep pushing — tough times always end, and what's left behind is a tougher person.</p>
                    </>
                )
            default:
                return null
        }
    }

    return modal
        ? <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full z-100 modal-overlay modal-bg" style={{ '--origin-x': `${modal.centerX}px`, '--origin-y': `${modal.centerY}px` }}>
            <div className="absolute flex flex-row items-center top-6 left-6 text-[#36230d] group" onClick={() => setModal(null)}>
                <ChevronLeft size={25} className="beckon -mr-2" style={{ animationDelay: '0s' }} />
                <ChevronLeft size={25} className="beckon -mr-2" style={{ animationDelay: '0.2s' }} />
                <ChevronLeft size={25} className="beckon" style={{ animationDelay: '0.4s' }} />
            </div>
            {modal.id === "namecard"
                ? <div className="bg-white flex flex-row items-center gap-5 p-5 w-[43vw] h-[24vw]">
                    <img src={namecardImg} className="w-[8vw] h-[8vw]" />
                    <div className="flex flex-col gap-[0.3vh]">
                        <p className="font-body text-[2vw] text-black font-bold">Gareth Chong</p>
                        <hr />
                        <p className={namecardBase}>CS Undergraduate, NUS</p>
                        <div className="flex flex-row justify-between items-center">
                            <p className={namecardBase}>Email: e1528294@u.nus.edu</p>
                            {
                                copied === "email"
                                    ? <p className={namecardBase}>Copied!</p>
                                    : <button className={copyButton} onClick={() => copy("e1528294@u.nus.edu", "email")}>Copy Email</button>
                            }
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className={namecardBase}>LinkedIn: www.linkedin.com/in/gareth-chong-05754b288</p>
                            {
                                copied === "linkedin"
                                    ? <p className={namecardBase}>Copied!</p>
                                    : <button className={copyButton} onClick={() => copy("www.linkedin.com/in/gareth-chong-05754b288", "linkedin")}>Copy LinkedIn</button>
                            }
                        </div>
                    </div>
                </div>
                : modal.id === "resume"
                    ? <div className="flex flex-col items-center gap-2 group">
                        <img src={resumeImg} className="w-[40vw]" />
                        <a className={`${downloadButton} px-4 py-2`}>
                            Download Resume
                        </a>
                    </div>
                    : modal.id === "postIts"
                        ? <div className="desk-object flex flex-row justify-between gap-[2vw] ">
                            <div className="w-[21vw] h-[21vw] bg-pink-300">
                                <p className={`${postItTitle}`}>Get an internship!!!</p>
                                <p className={`${postItdescription}`}>Work hard for a summer internship in 2027 (May 2027 - Aug 2027)</p>
                            </div>
                            <div className="w-[21vw] h-[21vw] bg-yellow-200">
                                <p className={`${postItTitle}`}>Grow fitter and stronger</p>
                                <p className={`${postItdescription}`}>Achieve more mileage and higher weight lifts</p>
                            </div>
                            <div className="w-[21vw] h-[21vw] bg-green-300">
                                <p className={`${postItTitle}`}>Give back to the community</p>
                                <p className={`${postItdescription}`}>Join a volunteering project to give back and serve the community</p>
                            </div>
                        </div>
                        : <div className="modal-content-bg">
                            <div className="modal-content-inner">
                                {renderContent(modal)}
                            </div>
                        </div>}
        </div>
        : null
}

const downloadButton = "font-body text-[0.9vw] h-[2.5vw] w-[10vw] text-black font-bold border border-black hover:text-[#34962c] hover:border-[#34962c] transition-colors duration-300 whitespace-nowrap flex justify-center"
const namecardBase = "font-body text-[1vw] text-black font-bold"
const redirectButton = "font-body text-[0.9vw] h-[1.5vw] w-[7vw] text-black font-bold border border-black px-2 hover:text-[#8c612b] hover:border-[#8c612b] transition-colors duration-300 whitespace-nowrap flex justify-center"
const copyButton= "font-body text-[0.9vw] h-[1.5vw] w-[7vw] text-black font-bold border border-black px-2 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors duration-300 whitespace-nowrap flex justify-center"
const postItTitle = "font-display text-[2.3vw] text-black font-bold px-2 leading-[1.05]"
const postItdescription = "font-body text-[1.1vw] px-2 py-3"
const title = "font-display text-[3vw] font-bold flex justify-center"
const description = "font-body text-[1.2vw] self-strecth text-left px-3 py-2"

const laptopProjects = [
    {
        name: "TCG Binder App",
        description: "I built the TCG Binder App out of love for the hobby of card collecting and binder organisation. The application gives users the chance to visualise how they'd display their card collections. It also supports the michi style of card collection— displaying cards alongside their original art, with a price-fetching tool and AI suggestions to enrich the user experience.",
        video: "https://drive.google.com/file/d/1xXSrFNJi0v98uizEjaeP3pVDS4WF91Fw/view?usp=sharing",
        demo: "https://tcg-binder-app.vercel.app/",
        github: "https://github.com/GarethChong/TCG-Binder-App",
        images: [appImg1, appImg2],
    },
]

export default Modal