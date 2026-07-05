import { useState } from 'react'
import Laptop from './Laptop'
import Resume from './Resume'
import NameCard from './NameCard'
import Cards from './Cards'
import Photo from './Photo'
import PostIts from './PostIts'
import Switch from './Switch'
import CallSignPatch from './CallSignPatch'
import Modal from './Modal'
import TennisBall from './TennisBall'

function Desk() {
    const [modal, setModal] = useState(null)

    return (
        <div>
        <div className="desk-scene w-screen h-screen absolute wall-surface overflow-hidden">
            <div className="desk-surface w-screen absolute top-[15%] h-[85vh]" style={{ boxShadow:'0 -8px 24px rgba(0,0,0,0.15)' }}>
                <Laptop onClick={setModal} />
                <Resume onClick={setModal} />
                <NameCard onClick={setModal} />
                <Cards onClick={setModal} />
                <Photo onClick={setModal} />
                <PostIts onClick={setModal} />
                <Switch onClick={setModal} />
                <CallSignPatch onClick={setModal} />
                <TennisBall onClick={setModal} />
            </div>
        </div>
        <div>
            <Modal modal={modal} setModal={setModal}></Modal>
        </div>
        </div>
    )
}

export default Desk