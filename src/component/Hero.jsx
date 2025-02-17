import  {ReactTyped}  from "react-typed"



export const Hero=()=>{
    return <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
            <div className="flex justify-center items-center">
                <p className="md:text-5xl py-4 sm:text-4xl tect-xl font-bold">Fast,flexible,financing for</p>
            <ReactTyped  className="md:text-5xl sm:text-4xl tect-xl font-bold pl-2" strings={[
                "BTB",
                "BTC",
                "SaSS"
            ]} typeSpeed={140}
                backSpeed={150}
                loop
                />
            </div>
            <p className="md:text-2xl md:pl-4 text-xl text-gray-500">Monitor your data analytics to increase revenue for BTB,BTC,& SASS platforms</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-md mx-auto py-3 my-6">Get Started</button>
        </div>
    </div>
}