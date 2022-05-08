import { useState } from "react";

const Tour = ({ id, info, name, price, image, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="w-1/3 flex flex-col m-12 bg-white shadow-medium rounded-md">
      <img
        src={image}
        alt={name}
        className="object-cover h-80 rounded-t-md"
      />
      <div className="flex flex-col justify-center p-6">
        <div className="flex justify-between pt-2 pb-4">
          <p className="font-titre font-semibold text-xl">{name}</p>
          <p className="pl-1 pr-1 font-titre text-xl font-semibold bg-cyan-100 text-cyan-500 uppercase">{`$${price}`}</p>
        </div>
        <p className="pb-4">
          {readMore ? info : `${info.substring(0, 200)}...`}{" "}
          <button
            className="text-cyan-500"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "less more" : "read more"}
          </button>
        </p>
        <button
          className="self-center text-red-600 border-2 border-red-600 p-1 w-52 rounded-lg font-semibold hover:text-white hover:bg-red-600 transition-all ease-in"
          onClick={() => removeTours(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
