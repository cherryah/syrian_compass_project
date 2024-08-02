import React from 'react'
// import img from '../Asstes/photo_2024-07-01_16-09-24.jpg'

const Card = ({name, img}) => {
  return (
    <div class="relative w-80 h-80 flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg shadow-[#8c6948cf] bg-center bg-cover" style={{ backgroundImage: `url(${img})` }}>
    {/* <img src={img}/> */}
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {name}
    </h5>
  </div>
  <div class="p-6 pt-8">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-[#a5815d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white">
      Read More
    </button>
  </div>
</div>
  )
}

export default Card