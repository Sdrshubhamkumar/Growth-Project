import React from 'react'

function paraText(props) {
    return (
        <div>
            <div className={`text-container text-[#838383] p-20 ${props.className}`}>
                <h2 className='text-2xl text-black font-bold pb-5'>Innovation 2</h2>
                <p className='pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum corrupti, qui aliquid nostrum blanditiis est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus laudantium soluta quisquam quia, eius blanditiis velit, ab fuga voluptatibus doloremque doloribus dicta dolor alias nam modi nulla hic impedit odit nostrum aspernatur iure ullam. Alias natus dolores quis quibusdam odio.</p>
                <p className='pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum corrupti, qui aliquid nostrum blanditiis est!</p>
                <p className='pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum corrupti, qui aliquid nostrum blanditiis est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repudiandae! Error rerum laboriosam facere eum quo minus placeat. Quidem laborum, est reiciendis a eum rem earum ex cupiditate et expedita.</p>
            </div>
        </div>
    )
}

export default paraText