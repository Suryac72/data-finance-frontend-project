import React from 'react'
import Laptop from '../assets/laptop.jpg';
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-justify">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className = "w-[500px] mx-auto my-4"src={Laptop} alt="/" />
            <div className="flex flex-col justify-center mr-10">
                <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium porro dolorum eligendi quibusdam corrupti eius hic officia voluptatibus quae, consequatur vitae minus temporibus labore magni provident, quas eveniet non! Vero, ipsum.
                </p>
                <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics