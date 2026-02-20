import React from 'react'

const TestimonialsCard = ({ comments, userImg, name, designation }) => {
  return (
    <div className="aspect-auto p-8 border border-[#B4B4B4] rounded-[35px]">
      <p className="font-[400] text-[16px] text-[#7A7A7A]">{comments}</p>
      <div className="flex gap-4 mt-8">
        <img
          className="w-12 h-12 rounded-full"
          src={userImg}
          alt="user avatar"
          width="400"
          height="400"
          loading="lazy"
        />
        <div>
          <h6 className="text-[16px] font-[600] text-[#272727]">{name}</h6>
          <p className="text-[16px] font-[400] text-[#A0A0A0]">{designation}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCard