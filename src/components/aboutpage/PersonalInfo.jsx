import React from 'react';

const PersonalInfo = () => (
  <div className="lext-box-down flex items-center justify-start mt-5">
    <div className="name&phone w-1/2 flex flex-col gap-2">
      <div>
        <p className="text-white/60 text-sm">Name</p>
        <a href="#" className="text-white font-semibold">Vishal Parmar</a>
      </div>
      <div>
        <p className="text-white/60 text-sm">Phone No:</p>
        <a href="#" className="text-white font-semibold">+916353928547</a>
      </div>
    </div>
    <div className="email&avain w-1/2 flex flex-col gap-2">
      <div>
        <p className="text-white/60 text-sm">Email:</p>
        <a href="#" className="text-white font-semibold">imvishu221@gmail.com</a>
      </div>
      <div>
        <p className="text-white/60 text-sm">Availabilty:</p>
        <a href="#" className="text-white font-semibold">Full Time/Permanent</a>
      </div>
    </div>
  </div>
);

export default PersonalInfo;
