import React, { useState } from 'react'
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'
import img from '../Asstes/photo_2024-07-01_16-09-24.jpg'
import AddData from '../Models/AddData'


const Locations = () => {

    const sites = [
        {
            id: 1,
            name: "Eiffel Tower",
            img: img
        },
        {
            id: 2,
            name: "Great Wall of China",
            img: img
        },
        {
            id: 3,
            name: "Taj Mahal",
            img: img
        },
        {

            id: 4,
            name: "Machu Picchu",
            img: img
        },
        {
            id: 5,
            name: "Statue of Liberty",
            img: img
        },
        {
            id: 6,
            name: "Colosseum",
            img: img
        },
        {
            id: 7,
            name: "Christ the Redeemer",
            img: img
        },
        {
            id: 8,
            name: "Santorini",
            img: img  
        },
        {
            id: 9,
            name: "Sydney Opera House",
            img: img 
        },
        {
            id: 10,
            name: "Pyramids of Giza",
            img: img
        },
        {
            id: 11,
            name: "Eiffel Tower",
            img: img
        },
        {
            id: 12,
            name: "Great Wall of China",
            img: img
        },
        {
            id: 13,
            name: "Taj Mahal",
            img: img
        },
        {
            id: 14,
            name: "Machu Picchu",
            img: img
        },
    ]
    const [show,setShow] = useState(false)
    

  return (
    <div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
        <div className='w-[100%] h-16'>
            <NavBar/>
        </div>
        <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
            <div className='w-[90%] h-20 flex justify-between items-center'>
                <h2 className='w-[90%] text-4xl font-semibold'>Locations</h2>
                <button className='w-40 h-[60%] text-lg hover:bg-[#8c69488c] bg-[#8c6948b6] rounded-2xl' onClick={()=>setShow(true)}>Add location</button>
            </div>
            <div className='w-[100%] h-fit flex justify-center items-center flex-col bg-[#d1b798] mt-10'>
            <div className='mt-5 w-[90%]  h-fit gap-14 grid grid-cols-4 pb-5'>
            {sites.map((site, key) => (
                <Card name={site.name} img={site.img} id={site.id}/>
            ))} 
            </div>
            </div>
        </div>
        <AddData onClose={()=>setShow(false)} visible={show}/>
    </div>
  )
}

export default Locations