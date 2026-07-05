import { useRef } from 'react'
import getClickOrigin from '../utils/getClickOrigin.js'

function PostIts({ onClick }) {
    const myRef = useRef(null)
    
    return (
        <div ref={myRef} className="absolute top-[3%] right-[3%] cursor-pointer group" onClick={() => onClick(getClickOrigin("postIts", myRef, onClick))}>
            <div className="desk-object flex flex-row justify-between gap-[1vw] ">
                <div className={`${postItBase} bg-pink-300`}>Get an internship!!!</div>
                <div className={`${postItBase} bg-yellow-200`}>Grow fitter and stronger</div>
                <div className={`${postItBase} bg-green-300`}>Give back to the community</div>
            </div>
        </div>
    )
}

const postItBase = "w-[8vw] h-[8vw] font-display text-[1vw] text-black p-2 font-semibold"

export default PostIts