import React from 'react';

const EducationCard = ({ course, branch, year }) => (
  <div className="bg-[#022623] h-[35%] w-full rounded-md flex items-center justify-between p-7 text-sm">
    <div>
      <p className="course font-bold text-white">{course}</p>
      <p className="Branch text-green-300">{branch}</p>
    </div>
    <div className="year text-green-400 hover:text-green-100 border bg-green-800 rounded-full px-2 py-1">
      {year}
    </div>
  </div>
);

export default EducationCard;
