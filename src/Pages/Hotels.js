import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'
import img from '../Asstes/photo_2024-07-01_16-09-24.jpg'
import AddData from '../Models/AddData'


const Hotels = () => {

//    const sites =  [
//         {
//             name: "Eiffel Tower",
//             img: img
//         },
//         {
//             name: "Great Wall of China",
//             img: img
//         },
//         {
//             name: "Taj Mahal",
//             img: img
//         },
//         {
//             name: "Machu Picchu",
//             img: img
//         },
//         {
//             name: "Statue of Liberty",
//             img: img
//         },
//         {
//             name: "Colosseum",
//             img: img
//         },
//         {
//             name: "Christ the Redeemer",
//             img: img
//         },
//         {
//             name: "Santorini",
//             img: img  
//         },
//         {
//             name: "Sydney Opera House",
//             img: img 
//         },
//         {
//             name: "Pyramids of Giza",
//             img: img
//         },
//         {
//             name: "Eiffel Tower",
//             img: img
//         },
//         {
//             name: "Great Wall of China",
//             img: img
//         },
//         {
//             name: "Taj Mahal",
//             img: img
//         },
//         {
//             name: "Machu Picchu",
//             img: img
//         },
//         {
//             name: "Statue of Liberty",
//             img: img
//         },
//         {
//             name: "Colosseum",
//             img: img
//         },
//         {
//             name: "Christ the Redeemer",
//             img: img
//         },
//         {
//             name: "Santorini",
//             img: img  
//         },
//         {
//             name: "Sydney Opera House",
//             img: img 
//         },
//         {
//             name: "Pyramids of Giza",
//             img: img
//         }
//     ]

    const [show,setShow] = useState(false)
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
        localStorage.setItem('place', 'hotels')
      }, []);
    

  return (
    <div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
        <div className='w-[100%] h-16'>
            <NavBar/>
        </div>
        <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
            <div className='w-[90%] h-20 flex justify-between items-center'>
                <h2 className='w-[90%] text-4xl font-semibold'>Hotels</h2>
                <button className='w-40 h-[60%] text-lg hover:bg-[#8c69488c] bg-[#8c6948b6] rounded-2xl' onClick={()=>setShow(true)}>Add hotel</button>
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

export default Hotels