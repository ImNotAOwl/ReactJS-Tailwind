import { useState } from "react";
import "./BirthdayList.css";

const BirthdayList = ({friendsBirthday}) => {
  const [ person, setPerson] = useState(friendsBirthday);

  return (
    <div className="bg-pink-400 flex justify-center content-center">
      <div className="bg-white flex h-2/3 w-3/12 flex-col justify-center content-center m-20 shadow-medium container rounded-md p-6">
      <h1 className="pb-5 text-3xl capitalize">{person.length} birthdays today</h1>
        {person.map((birthday, index) => (
          <div key={`person-${index}`} className="bg-white h-1/3 flex flex-row justify-start pb-2">
            <img
              src={birthday.image}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center p-4">
              <p className="text-xl font-bold font-titre capitalize">{birthday.name}</p>
              <p className="font-text">{birthday.age} years</p>
            </div>
          </div>
        ))}
        <button className="bg-pink-500 font-semibold text-white h-10 text-xl rounded-md hover:border-2 hover:border-black" onClick={() => setPerson([])}>Clear All</button>
      </div>
    </div>
  );
};

export default BirthdayList;
