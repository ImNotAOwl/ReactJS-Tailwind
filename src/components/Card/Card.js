import logo from "../../assets/img/logo512.png";

const Card = () => {
  return (
    <header className="flex justify-center m-10">
      <div className="flex justify-center items-center content-center w-2/5 bg-slate-100 p-5 m-10 rounded-2xl shadow-lg container">
        <img src={logo} className=" w-40 p-3" alt="logo" />
        <div className="flex flex-col">
          <h1 className=" text-2xl text-cyan-500 p-3 font-titre">
            Learn React
          </h1>
          <p className=" text-orange-500 text-justify text-sm p-3 font-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            officiis architecto enim quia aut iure maxime ducimus dolorum
            commodi voluptatibus ut ipsam, libero pariatur eum impedit est
            blanditiis earum! Possimus?
          </p>
          <a
            className="self-center"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" rounded-2xl border-solid border-cyan-500 border w-36 p-1 my-1 text-cyan-500 hover:bg-cyan-500 hover:text-slate-100 hover:shadow-md transition-all">
              Go to React.org
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Card;
