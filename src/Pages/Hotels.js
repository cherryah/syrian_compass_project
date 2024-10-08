import React,{useState, useEffect} from 'react'
import axios from 'axios';
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'
import damascusImage from '../Asstes/Damascus.jpg'; 
import aleppoImage from '../Asstes/Aleppo.jpg';
import homsImage from '../Asstes/Homs.jpg';
import alRakkaImage from '../Asstes/AlRakka.jpg'; 
import idlibImage from '../Asstes/Idlip.jpg';
import alQamishliImage from '../Asstes/Alqamshli.png';

const Hotels = () => {

    // const items = [
    //     { id: 1, title: 'Damascus', imageUrl: damascusImage },
    //     { id: 2, title: 'Aleppo', imageUrl: aleppoImage },
    //     { id: 3, title: 'Homs', imageUrl: homsImage }, 
    //     { id: 4, title: 'Al-Raqa', imageUrl: alRakkaImage }, 
    //     { id: 5, title: 'Idlib', imageUrl: idlibImage }, 
    //     { id: 6, title: 'Al-Qamishli', imageUrl: alQamishliImage }, 
    //   ];
    const [sites, setSites] = useState([])

    const catagoryAPI='http://127.0.0.1:8000/api/categories/search?classification=hotels'
    async function catagory(){
      console.log('ssss')
         try{
          const response = await axios.get(catagoryAPI, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`,
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*"
            }
          });
            console.log(response.data.data)
            setSites(response.data.data)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        catagory()
      }, []);

  return (
<div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
        <div className='w-[100%] h-16'>
            <NavBar data1={true}/>
        </div>
        <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
            <div className='w-[90%] h-20 flex justify-between items-center'>
                <h2 className='w-[90%] text-4xl font-semibold'>Hotels</h2>
            </div>
            <div className='w-[100%] h-fit flex justify-center items-center flex-col bg-[#d1b798] mt-10'>
            <div className='mt-5 w-[90%]  h-fit gap-14 grid grid-cols-4 pb-5'>
            {sites.map((item, key) => (
                <Card name={item.title} img={item.imageUrl} id={item.id} link={`/details/${item.id}`}/>
            ))} 
            </div>
            </div>
        </div>
    </div>  
    )
}

export default Hotels