import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill, BsStarFill } from "react-icons/bs";
import NavBar from '../Component/NavBar';
import image1 from '../Asstes/photo_2024-07-01_16-09-24.jpg';
import image2 from '../Asstes/background.webp';
import image3 from '../Asstes/Landing.png';

const Details = () => {
   const classes = localStorage.getItem('place')       // Your images array
//     const images = [
//         {
//             id: 1,
//             name: "Eiffel Tower",
//             img: image1
//         },
//         {
//             id: 2,
//             name: "Great Wall of China",
//             img: image2
//         },
//         {
//             id: 3,
//             name: "Taj Mahal",
//             img: image3
//         },
//         {
//             id: 4,
//             name: "Great Wall of China",
//             img: image2
//         },
//         {
//             id: 5,
//             name: "Taj Mahal",
//             img: image3
//         },
//     ];

//    const reviews = [
//           {
//             "id": 1,
//             "user": {
//               "name": "John Doe",
//               "profilePicture": "https://example.com/profiles/johndoe.jpg"
//             },
//             "rating": 4.5,
//             "date": "2024-08-20",
//             "review": "Amazing experience! The views were breathtaking, and the staff was incredibly friendly. The only downside was the long waiting time."
//           },
//           {
//             "id": 2,
//             "user": {
//               "name": "Jane Smith",
//               "profilePicture": "https://example.com/profiles/janesmith.jpg"
//             },
//             "rating": 5,
//             "date": "2024-07-15",
//             "review": "Absolutely fantastic! This was a dream come true, and everything was perfect. Highly recommend to anyone who loves adventure and history."
//           },
//           {
//             "id": 3,
//             "user": {
//               "name": "Michael Johnson",
//               "profilePicture": "https://example.com/profiles/michaeljohnson.jpg"
//             },
//             "rating": 3.8,
//             "date": "2024-06-30",
//             "review": "Good overall experience, but it was a bit crowded. I would suggest visiting during off-peak hours for a more enjoyable time."
//           }
//         ]

// const [sites, setSites] = useState([])
const [site, setSite] = useState([])

const catagoryAPI=`http://127.0.0.1:8000/api/categories/search?classification=${classes}`
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
        // setSites(response.data.data)
        const filtered = response.data.data.filter(item => item.id == id);
        setSite(filtered);

    }catch(err){
        console.log(err)
    }
}

useEffect(() => {
    catagory()
  }, []);

// Get the `id` param from the route
const { id } = useParams();

// Track the current image index in state
const [currentIndex, setCurrentIndex] = useState(0);

// Function to go to the next image
// const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// };

// // Function to go to the previous image
// const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
// };

// // Function to select an image by clicking on the thumbnail
// const selectImage = (index) => {
//     setCurrentIndex(index);
// };

// const filterDataById = () => {
//     const filtered = sites.filter(item => item.id === id);
//     setSite(filtered[0] || null);
//   };

//   useEffect(() => {
//     filterDataById()
//   }, [sites]);

console.log('oo', site)

    return (
        <div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
            <div className='w-[100%] h-16'>
                <NavBar />
            </div>
            <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
                <div className='w-[95%] h-[500px] flex justify-between items-center border-b-2 border-[#8c6948cf] relative'>
                    <div className='w-[43%] h-[100%] flex justify-between items-center flex-col'>
                    <div className='w-[100%] h-[80%] flex relative justify-center items-center'>
                    {/* Previous Button */}
                    {/* <button 
                        onClick={goToPrevious}
                        className="absolute left-0 p-4  bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
                    >
                        <BsArrowLeftSquareFill size={35} className='text-black opacity-70  hover:opacity-100'/>
                    </button> */}

                    {/* Image */}
                    <img 
                        src={site[0]?.images} 
                        alt={site[0]?.name}
                        className='w-[100%] h-[90%] rounded-xl shadow-xl shadow-[#8c6948cf]'
                    />

                    {/* Next Button */}
                    {/* <button 
                        onClick={goToNext}
                        className="absolute right-0 p-4  bg-opacity-50 text-white rounded-full hover:bg-opacity-75"
                    >
                        <BsArrowRightSquareFill size={35} className='text-black opacity-70  hover:opacity-100'/>
                    </button> */}
                    </div>
                    {/* Thumbnails */}
                <div className='flex justify-center space-x-4 -mt-3'>
                {site?.map((image, index) => (
                        <img 
                            key={image.id} 
                            src={`http://127.0.0.1:8000${image.image}`} 
                            alt={image.title}
                            className={`w-[100px] h-[75px] object-cover cursor-pointer rounded-md 
                                        ${currentIndex === index ? 'border-4 border-[#8c6948cf]' : 'border-2 border-transparent'}`}
                            // onClick={() => selectImage(index)}
                        />
                    ))}
                </div>
                    </div>
                </div>

                <div className='w-[95%] h-fit min-h-[400px] flex justify-evenly items-center flex-col border-b-2 border-[#8c6948cf]'>
                    {/* <div className='w-[100%] flex justify-between items-center'>
                    <h2 className='w-[48%] text-start text-4xl font-semibold flex justify-start items-center gap-5'>{site[0]?.title}<span className='text-gray-200 flex justify-center items-center gap-3'> <BsStarFill color='#FFFF00' size={26}/></span></h2>
                    <button className='w-[18%] h-12 bg-[#a45454cf] text-lg font-semibold rounded-xl'>Delete</button>
                    </div>
                    <p className='text-2xl text-center'>
                    {site[0]?.description}
                    </p> */}
                    <div className='w-[100%] flex justify-between flex-col'>
                    <h2 className='w-[48%] text-start text-4xl font-semibold flex justify-start items-center gap-5'>{site[0]?.name}<span className='text-gray-200 flex justify-center items-center gap-3'>{site[0]?.rate} <BsStarFill color='#FFFF00' size={26}/></span></h2>
                    <p className='text-2xl min-h-72 h-fit mt-5'>
                        {site[0]?.description}
                    </p>
                    </div>
                </div>
                <div className='w-[95%] min-h-40 h-fit flex justify-evenly items-center flex-col border-b-2 border-[#8c6948cf]'>
                <div className='w-[100%] flex justify-between items-center mb-5'>
                    <h2 className='text-start text-4xl font-semibold mb-5'>Users Reviews</h2>
                    <p className='w-[17%] text-xl flex justify-start items-center gap-2'>
                                {/* {reviews[0].rating} */}
                            <BsStarFill color='#FFFF00' size={26}/>
                            </p>
                    </div>
                    {/* {reviews.map((review, index) => (
                        <div className='w-[95%] h-fit min-h-24 mt-2 border-b-2 border-[#8c6948cf]'>
                            <div className='w-[100%] flex justify-between mb-3'>
                            <p className='w-[75%] text-lg font-bold'>{review.user.name}</p>
                            <div className='w-[25%]'>
                            <p className='flex justify-center items-center gap-2'>
                                {review.rating}
                            <BsStarFill color='#FFFF00' size={18}/>
                            </p>
                            </div>
                            </div>
                            <p>{review.review}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default Details;
