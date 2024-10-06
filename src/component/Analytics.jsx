import laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="/" className="w=[500px] mx-auto my-4"/>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            provident atque aliquam, distinctio doloribus fuga aut rerum
            molestiae illum neque possimus, voluptates dignissimos cum. Vel fuga
            necessitatibus labore alias cupiditate.
          </p>
          <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-md mx-auto md:mx-0 py-3 my-6 px-6">Get Started</button>
        </div>
      </div>
    </div>
  );
};
