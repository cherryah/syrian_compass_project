import React from 'react';
import NavBar from '../Component/NavBar';
import main from '../Asstes/main.jpg';
import Card from '../Component/Card';
// Import images
import damascusImage from '../Asstes/Damascus.jpg'; 
import aleppoImage from '../Asstes/Aleppo.jpg';
import homsImage from '../Asstes/Homs.jpg';
import alRakkaImage from '../Asstes/AlRakka.jpg'; 
import idlibImage from '../Asstes/Idlip.jpg';
import daraaImage from '../Asstes/Daraa.jpg';
import tartusImage from '../Asstes/Tartus.jpg';
import lattakiaImage from '../Asstes/Lattakia.jpg';
import qunaitraImage from '../Asstes/Qunaitra.jpg';
import deirezzorImage from '../Asstes/Deirezzor.jpg';
import sweidaImage from '../Asstes/Sweida.jpg';
import palmyraImage from '../Asstes/Palmyra.jpg';
import hamaImage from '../Asstes/Hama.jpg';
import alHasakehImage from '../Asstes/AlHasakah.jpg';

const Main = () => {
  // Array of items with image URLs
  const items = [
    { id: 1, title: 'Damascus', imageUrl: damascusImage },
    { id: 2, title: 'Aleppo', imageUrl: aleppoImage },
    { id: 3, title: 'Homs', imageUrl: homsImage }, 
    { id: 4, title: 'Al-Raqa', imageUrl: alRakkaImage }, 
    { id: 5, title: 'Idlib', imageUrl: idlibImage }, 
    { id: 6, title: 'Daraa', imageUrl: daraaImage }, 
    { id: 7, title: 'Tartus', imageUrl: tartusImage }, 
    { id: 8, title: 'Lattakia', imageUrl: lattakiaImage }, 
    { id: 9, title: 'Al-Qunaitra', imageUrl: qunaitraImage }, 
    { id: 10, title: 'Der ez-Zor', imageUrl: deirezzorImage }, 
    { id: 11, title: 'Sweida', imageUrl: sweidaImage }, 
    { id: 12, title: 'Palmyra', imageUrl: palmyraImage }, 
    { id: 13, title: 'Hama', imageUrl: hamaImage }, 
    { id: 14, title: 'AlHasakeh', imageUrl: alHasakehImage }, 
  ];

  return (
    <div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
        <div className='w-[100%] h-16'>
            <NavBar data={true}/>
        </div>
        <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
            <div className='w-[90%] h-20 flex justify-between items-center'>
                <h2 className='w-[90%] text-4xl font-semibold'>Governorates</h2>
                            </div>
            <div className='w-[100%] h-fit flex justify-center items-center flex-col bg-[#d1b798] mt-10'>
            <div className='mt-5 w-[90%]  h-fit gap-14 grid grid-cols-4 pb-5'>
            {items.map((item, key) => (
                <Card name={item.title} img={item.imageUrl} link={'/destination'}/>
            ))} 
            </div>
            </div>
        </div>
    </div>
  );
};

export default Main;
