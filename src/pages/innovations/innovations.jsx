import React from 'react'
import ParaText from './para-text/paraText'
import ParaImage from './para-image/paraImage'
import image1 from '../../assets/innovation.jpg'
import image2 from '../../assets/innovation.jpg'
import image3 from '../../assets/innovation.jpg'
import image4 from '../../assets/innovation.jpg'

function innovations() {
    return (
        <div>
            <div className="header pt-5 text-center h-25 w-full bg-[#6a5f97]">
                <h1 className='text-4xl font-bold text-white'>Innovations</h1>
            </div>
            <ParaText className="pt-15 pb-15"/>
            <ParaImage className="md:grid-cols-4 sm:grid-cols-4 pt-0 pb-0" images={[image1, image2, image3, image4]} />
            <ParaText className="pt-15 pb-10"/>
            <div className="book-links p-25 pt-0 pb-15">
                <h2 className='text-2xl text-gray-700'>Hard Copies</h2>
                <ul>
                    <li className="list-disc">
                        <a href="#" className="underline text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    </li>
                    <li className="list-disc">
                        <a href="#" className="underline text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    </li>
                    <li className="list-disc">
                        <a href="#" className="underline text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    </li>
                    <li className="list-disc">
                        <a href="#" className="underline text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    </li>
                    <li className="list-disc">
                        <a href="#" className="underline text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    </li>
                </ul>
                <h2 className='text-2xl text-gray-700 mt-2'>eBooks</h2>
                <ul>
                    <li className="list-disc">
                        <a href="#" className="underline text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    </li>
                    <li className="list-disc">
                        <a href="#" className="underline text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    </li>
                    <li className="list-disc">
                        <a href="#" className="underline text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                    </li>
                </ul>
            </div>
            <ParaImage className="pt-0 pb-0" images={[image1, image2, image3]}/>
            <ParaText className="pt-10 pb-5"/>
            <ParaText className="pt-0 pb-5"/>
            <ParaText className="pt-0 pb-5"/>
            <ParaImage className="pt-0 pb-0" images={[image1, image2, image3]}/>
        </div>
    )
}

export default innovations