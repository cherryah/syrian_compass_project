import React from 'react'
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'
import img from '../Asstes/photo_2024-07-01_16-09-24.jpg'


const Hotels = () => {

   const sites =  [
        {
            name: "Eiffel Tower",
            img: img
        },
        {
            name: "Great Wall of China",
            img: img
        },
        {
            name: "Taj Mahal",
            img: img
        },
        {
            name: "Machu Picchu",
            img: img
        },
        {
            name: "Statue of Liberty",
            img: img
        },
        {
            name: "Colosseum",
            img: img
        },
        {
            name: "Christ the Redeemer",
            img: img
        },
        {
            name: "Santorini",
            img: img  
        },
        {
            name: "Sydney Opera House",
            img: img 
        },
        {
            name: "Pyramids of Giza",
            img: img
        },
        {
            name: "Eiffel Tower",
            img: img
        },
        {
            name: "Great Wall of China",
            img: img
        },
        {
            name: "Taj Mahal",
            img: img
        },
        {
            name: "Machu Picchu",
            img: img
        },
        {
            name: "Statue of Liberty",
            img: img
        },
        {
            name: "Colosseum",
            img: img
        },
        {
            name: "Christ the Redeemer",
            img: img
        },
        {
            name: "Santorini",
            img: img  
        },
        {
            name: "Sydney Opera House",
            img: img 
        },
        {
            name: "Pyramids of Giza",
            img: img
        }
    ]
    

  return (
    <div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
        <div className='w-[100%] h-16'>
            <NavBar/>
        </div>
        <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
            <div className='w-[90%] h-20 flex justify-between items-center'>
                <h2 className='w-[90%] text-4xl font-semibold'>Hotels</h2>
                <button className='w-40 h-[60%] text-lg hover:bg-[#8c69488c] bg-[#8c6948b6] rounded-2xl'>Add hotel</button>
            </div>
            <div className='w-[100%] h-fit flex justify-center items-center flex-col bg-[#d1b798] mt-10'>
            <div className='mt-5 w-[90%]  h-fit gap-14 grid grid-cols-4 pb-5'>
            {sites.map((site, key) => (
                <Card name={site.name} img={site.img} id={site.id}/>
            ))} 
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hotels