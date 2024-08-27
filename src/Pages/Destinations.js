import React from 'react'
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'
import Destinations1 from '../Asstes/Destinations1.jpg';
import Destinations2 from '../Asstes/Destinations2.jpg';
import Destinations3 from '../Asstes/Destinations3.jpg'; 
import Destinations4 from '../Asstes/Destinations4.jpg';

const Destinations = () => {

    const items = [
        { id: 1, title: 'Events', imageUrl: Destinations4 , link : "/events"} , 
        { id: 2, title: 'Hotels', imageUrl: Destinations3 , link : "/hotels"},
        { id: 3, title: 'Locations', imageUrl: Destinations1 , link :  "/locations"}, 
        { id: 4, title: 'Retaurants', imageUrl: Destinations2 , link : "/resturants" },
      ];

  return (
<div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
        <div className='w-[100%] h-16'>
            <NavBar/>
        </div>
        <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
            <div className='w-[90%] h-20 flex justify-between items-center'>
                <h2 className='w-[90%] text-4xl font-semibold'>Destinations</h2>
            </div>
            <div className='w-[100%] h-fit flex justify-center items-center flex-col bg-[#d1b798] mt-10'>
            <div className='mt-5 w-[90%]  h-fit gap-14 grid grid-cols-4 pb-5'>
            {items.map((item, key) => (
                <Card name={item.title} img={item.imageUrl} link={item.link}/>
            ))} 
            </div>
            </div>
        </div>
    </div>  )
}

export default Destinations