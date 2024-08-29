import React, { useState } from 'react';
import { BsStarFill } from "react-icons/bs";

const AddData = ({ visible, onClose }) => {
  const [dragging, setDragging] = useState(false);
  const [size, setSize] = useState(false);
  const [type, setType] = useState(false);
  const [imgs, setImgs] = useState([]); // Changed from object to array

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0]; // Only consider the first dropped file
    if (droppedFile) {
      if (droppedFile.size > 2 * 1024 * 1024) {
        setSize(true);
      }
      if (!droppedFile.type.startsWith("image/")) {
        setType(true);
      }
      if (
        droppedFile.size <= 2 * 1024 * 1024 &&
        droppedFile.type.startsWith("image/")
      ) {
        setSize(false);
        setType(false);
        setImgs((prevImgs) => [...prevImgs, droppedFile]); // Append the image to the array
      }
    }
  };

  const handleFileInputChange = (e) => {
    const { files } = e.target;
    const newFiles = Array.from(files); // Convert FileList to an array
    const validFiles = newFiles.filter(file => file.size <= 2 * 1024 * 1024 && file.type.startsWith("image/"));

    setImgs((prevImgs) => [...prevImgs, ...validFiles]); // Append valid images to the array
  };

  const handleRemoveImage = (index) => {
    setImgs((prevImgs) => {
      const updatedImgs = [...prevImgs];
      updatedImgs.splice(index, 1); // Remove the image at the given index
      return updatedImgs;
    });
  };

  console.log('ss', imgs)

  if (!visible) return null;

  return (
    <div className={`w-screen h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center`}>
      <div className='w-[50%] h-[90%] flex justify-evenly items-center flex-col mt-8 bg-white rounded-2xl'>
        <div className='w-[95%] h-[10%] flex justify-between items-center'>
          <p className='text-2xl font-semibold'>Add Destination</p>
          <p className='text-3xl font-thin cursor-pointer' onClick={onClose}>X</p>
        </div>
        <div className='w-[95%] h-[70%] overflow-y-scroll scrollbar-thin scrollbar-track-[#d1b798] scrollbar-thumb-[#8c6948b6]'>
          <div className='w-[100%] h-fit flex justify-evenly items-center flex-col pt-7'>
            <div className='w-[100%] h-24 relative flex justify-center items-center'>
              <label className='text-lg absolute top-0 left-[10%]'>
                Title
              </label>
              <input type='text' className='w-[80%] h-10 border-2 border-[#8c6948b6] rounded-lg p-2 outline-none'/>
            </div>
            <div className='w-[100%] h-48 relative flex justify-center items-end mb-5'>
              <label className='text-lg absolute top-0 left-[10%]'>
                Description
              </label>
              <textarea className='w-[80%] h-40 border-2 border-[#8c6948b6] rounded-lg p-2 outline-none resize-none'/>
            </div>
            <div className='w-[100%] h-24 relative flex justify-center items-center mb-8'>
              <label className='text-lg absolute top-0 left-[10%]'>
                Location
              </label>
              <input type='text' className='w-[80%] h-10 border-2 border-[#8c6948b6] rounded-lg p-2 outline-none'/>
            </div>
            <div
              className="w-[80%] h-44 border-2 border-[#8c6948b6] border-dashed rounded-xl flex justify-center items-center flex-col relative"
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label className='text-lg absolute -top-8 left-0'>Imges</label>
              <input
                accept="image/*"
                type="file"
                id='imgs'
                multiple
                onChange={handleFileInputChange}
                className='hidden'
              />
              {size && <p style={{ color: "red" }}>يجب أن يكون الملف أصغر من 2 ميجابايت</p>}
              {type && <p style={{ color: "red" }}>يجب أن يكون الملف صورة</p>}
              <label htmlFor='imgs' className='cursor-pointer text-lg'>قم بسحب وإسقاط الملفات هنا</label>
              <label htmlFor='imgs' className='cursor-pointer text-lg'>أو</label>
              <label htmlFor='imgs' className='cursor-pointer text-lg font-semibold text-[#8c6948b6]'>انقر لتحديد الملفات</label>
            </div>

            {/* Display the selected images */}
            {imgs.length > 0 && (
              <div className="w-[80%] flex flex-wrap justify-center items-center mt-4 border-2 border-dashed border-[#8c6948b6] rounded-xl">
                {imgs.map((img, index) => (
                  <div key={index} className="relative m-2">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Uploaded Image ${index}`}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className='w-[80%] h-24 relative flex justify-start items-center'>
              <label className='text-lg absolute top-0 left-0'>
                Stars rating
              </label>
              <input type='text' className='w-[20%] h-10 border-2 border-[#8c6948b6] rounded-lg p-2 outline-none'/>
              <label className='text-lg flex justify-center items-center absolute left-[22%]'>
                <span>/5</span> <BsStarFill color='#FFFF00'/>
              </label>
            </div>
            {/* <div className='w-[100%] h-24 mb-10 relative flex justify-center items-center'>
              <label className='text-lg absolute -top-6 left-[10%]'>
                Name
              </label>
              <input type='text' className='w-[80%] h-10 border-2 border-[#8c6948b6] rounded-lg p-2 outline-none'/>
            </div> */}
          </div>
        </div>
        <button className='w-[75%] h-[8%] rounded-xl text-white text-xl hover:bg-[#8c69488c] bg-[#8c6948b6] flex justify-evenly items-center'>Add</button>
      </div>
    </div>
  );
};

export default AddData;
