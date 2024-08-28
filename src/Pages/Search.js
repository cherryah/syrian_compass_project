import React from 'react'
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'
import { BsSearch} from "react-icons/bs";
import img from '../Asstes/photo_2024-07-01_16-09-24.jpg'



const Search = () => {
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
    {
        id: 15,
        name: "Statue of Liberty",
        img: img
    },
    {
        id: 16,
        name: "Colosseum",
        img: img
    },
    {
        id: 17,
        name: "Christ the Redeemer",
        img: img
    },
    {
        id: 18,
        name: "Santorini",
        img: img  
    },
    {
        id: 19,
        name: "Sydney Opera House",
        img: img 
    },
    {
        id: 20,
        name: "Pyramids of Giza",
        img: img
    }
];

  return (
    <div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
        <div className='w-[100%] h-16'>
            <NavBar/>
        </div>
        <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
                    <div className='w-[95%] h-24 flex justify-center items-center gap-4'>
                    <input placeholder='Search' type ="text" className= 'text-white w-[50%] h-10 p-2 outline-none rounded-lg bg-opacity-50 bg-white'/>
                    <button  className='w-10 h-10 bg-[#ffffff58] rounded-full flex justify-center items-center text-[#ffffff] hover:bg-[#ffffff87]'>
              <BsSearch/> 
            </button>
                    </div>
                    <div className='w-[95%] h-20 flex justify-evenly items-center mt-2'>
                      <div className=' w-[20%] h-14 bg-[#ffffff58] rounded-full flex justify-center'>
                      </div>
                      <div className=' w-[20%] h-14 bg-[#ffffff58] rounded-full flex justify-center'>
                      </div>
                    </div>
                    <div>
                    <div className='w-[100%] h-fit flex justify-center items-center flex-col bg-[#d1b798] mt-10'>
            <div className='mt-5 w-[90%]  h-fit gap-14 grid grid-cols-4 pb-5'>
            {sites.map((item, key) => (
                <Card name={item.name} img={item.img}/>
            ))} 
            </div>
            </div>
                    </div>

        </div>
    </div>  
  )
}

export default Search