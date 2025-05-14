import React from 'react'

function paraImage(props) {
    return (
        <div>
            <div className={`images grid grid-cols-1 gap-5 p-20 place-items-center sm:grid-cols-2 md:grid-cols-2 ${props.className}`}>
                {props.images &&
                    props.images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt="" className='h-[250px] w-[280px]' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default paraImage