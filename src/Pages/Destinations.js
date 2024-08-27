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
                <p>
                Damascus, the capital of Syria, is one of the world's oldest continuously inhabited cities, rich with over 4,000 years of history. 
                Known as the "City of Jasmine," it is famous for its ancient landmarks like the Umayyad Mosque, the bustling Al-Hamidiyah Souq, and the beautifully preserved Old City, a UNESCO World Heritage site. The city is a blend of Islamic, Roman, and Ottoman architecture, with traditional houses, gardens, and courtyards.
                Damascus has been a center of culture, religion, and trade throughout history, and despite recent challenges, it remains a symbol of resilience and beauty in the region
                </p>
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