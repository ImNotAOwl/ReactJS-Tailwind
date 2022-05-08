import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Tour from "../Tour/Tour";

const Tours = () => {
  const [tours, setTours] = useState();

  const url = "https://course-api.com/react-tours-project";
  const fetchTours = async () => {
    try {
      const allTours = await axios.get(url);
      if (allTours) setTours(allTours.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  console.log(tours);

  return !tours ? (
    <Loading />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <h1 className="pt-6 font-titre font-semibold text-3xl">{tours.length === 0 ? 'No tour left' : 'Our Tours'}</h1>
      {tours.length === 0 ? (
        <button className="m-5 self-center p-1 w-52 rounded-lg font-semibold text-white bg-cyan-600 transition-all ease-in" onClick={fetchTours}>Refresh</button>
      ) : (
        tours.map((tour, index) => (
          <Tour key={tour.id} {...tour} removeTours={removeTours} />
        ))
      )}
    </div>
  );
};

export default Tours;
