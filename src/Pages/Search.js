import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../Component/NavBar';
import Card from '../Component/Card';
import { BsSearch } from "react-icons/bs";
import img from '../Asstes/photo_2024-07-01_16-09-24.jpg';

const Search = () => {
  const [sites, setSites] = useState([]);
  const [name, setName] = useState(localStorage.getItem('search') || '');
  const [classes, setClasses] = useState(localStorage.getItem('place') || '');
  const [location, setLocation] = useState('');

  const plasces = [
    { "id": 1, "name": "Damascus" },
    { "id": 2, "name": "Aleppo" },
    { "id": 3, "name": "Homs" },
    { "id": 4, "name": "Latakia" },
    { "id": 5, "name": "Daraa" },
    { "id": 6, "name": "Deir ez-Zor" },
    { "id": 7, "name": "Raqqa" },
    { "id": 8, "name": "Idlib" },
    { "id": 9, "name": "Quneitra" },
    { "id": 10, "name": "Hasakah" },
    { "id": 11, "name": "Rural Damascus" }
  ]
  

  const getAPIEndpoint = (name, classification, location) => {
    if (classification === 'event') {
      if (name && location) {
        return `http://127.0.0.1:8000/api/events/search?title=${name}&location=${location}`;
      }
      if (name) {
        return `http://127.0.0.1:8000/api/events/search?title=${name}`;
      }
      if (location) {
        return `http://127.0.0.1:8000/api/events/search?location=${location}`;
      }
      // Default to searching all if no parameters
      return `http://127.0.0.1:8000/api/events/search`;
    }

    // Existing API URL construction for other classifications
    if (name && classification && location) {
      return `http://127.0.0.1:8000/api/categories/search?name=${name}&address=${location}&classification=${classification}`;
    }
    if (name && classification) {
      return `http://127.0.0.1:8000/api/categories/search?name=${name}&classification=${classification}`;
    }
    if (name && location) {
      return `http://127.0.0.1:8000/api/categories/search?name=${name}&address=${location}`;
    }
    if (classification && location) {
      return `http://127.0.0.1:8000/api/categories/search?address=${location}&classification=${classification}`;
    }
    if (name) {
      return `http://127.0.0.1:8000/api/categories/search?name=${name}`;
    }
    if (classification) {
      return `http://127.0.0.1:8000/api/categories/search?classification=${classification}`;
    }
    if (location) {
      return `http://127.0.0.1:8000/api/categories/search?address=${location}`;
    }
    // Default to searching all if no parameters
    return `http://127.0.0.1:8000/api/categories/search`;
  };

  const search = async () => {
    const SearchAPI = getAPIEndpoint(name, classes, location);

    try {
      const response = await axios.get(SearchAPI, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });

      // Update the sites state with the response data
      setSites(response.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  console.log('mm', sites)

  useEffect(() => {
    search()
  }, []);

  return (
    <div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
      <div className='w-[100%] h-16'>
        <NavBar />
      </div>
      <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
        <div className='w-[95%] h-24 flex justify-center items-center gap-4'>
          <input
            placeholder='Search'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='text-white w-[50%] h-10 p-2 outline-none rounded-lg bg-opacity-50 bg-white'
          />
          <button
            onClick={()=>search()}
            className='w-10 h-10 bg-[#ffffff58] rounded-full flex justify-center items-center text-[#ffffff] hover:bg-[#ffffff87]'
          >
            <BsSearch />
          </button>
        </div>
        <div className='w-[95%] h-20 flex justify-evenly items-center mt-2'>
          <div className='w-[20%] h-14 bg-[#ffffff58] rounded-full flex justify-center'>
            <select className='w-[100%] h-[100%] bg-transparent text-black outline-none ' onChange={(e)=>setClasses(e.target.value)}>
                <option value=''></option>
                <option value='tourist_place'>locations</option>
                <option value='hotels'>hotels</option>
                <option value='restaurant'>resturants</option>
                <option value='event'>events</option>
            </select>
          </div>
          <div className='w-[20%] h-14 bg-[#ffffff58] rounded-full flex justify-center'>
          <select className='w-[100%] h-[100%] bg-transparent text-black outline-none ' onChange={(e)=>setClasses(e.target.value)}>
          <option value=''></option>
          {plasces?.map((item) => (
                 <option value={item.name}>{item.name}</option>
              ))}
            </select>

          </div>
        </div>
        <div>
          <div className='w-[100%] h-fit flex justify-center items-center flex-col bg-[#d1b798] mt-10'>
            <div className='mt-5 w-[90%] h-fit gap-14 grid grid-cols-4 pb-5'>
              {sites?.map((item) => (
                <Card key={item.id} name={item.name} img={item.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
