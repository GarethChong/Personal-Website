import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'
import namecardImg from '../assets/namecard.png'

function NameCard({ onClick }) {
    const myRef = useRef(null)

    return (
        <div ref={myRef} className="absolute left-[8%] top-[2%] w-[16vw] cursor-pointer group must-click" onClick={() => onClick(getClickOrigin("namecard", myRef, onClick))}>
            <div className="desk-object bg-white flex flex-row items-center gap-2 p-2 h-[9vw]">
                <img src={namecardImg} className="w-[2vw] h-[2vw]"/>
                <div className="flex flex-col gap-[0.2vh]">
                    <p className="font-body text-[0.7vw] text-black font-bold">Gareth Chong</p>
                    <hr />
                    <p className={namecardBase}>CS Undergraduate, NUS</p>
                    <p className={namecardBase}>Email: e1528294@u.nus.edu</p>
                    <p className={namecardBase}>LinkedIn: www.linkedin.com/in/gareth-chong-05754b288</p>
                </div>
            </div>
        </div>
    )
}

const namecardBase = "font-body text-[0.5vw] text-black font-medium"

export default NameCard