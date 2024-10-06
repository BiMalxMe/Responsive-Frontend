

export const Newsletter=()=>{
    return <div className="text-white w-full py-16 px-4 ">
       <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
            <h1 className="md:text-4xl sm:text-text-3xl text-2xl font-bold py-2">Want tips and tricks to optimise your flow?</h1>
            <p>Signup to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input type="email" placeholder="Enter Email" className="w-full p-3 flex rounded-md text-black"/>
                    <button  className=" text-black bg-[#00df9a] w-[200px] rounded-md font-md ml-4  py-3 my-6 px-6">Notify me</button>
             </div>
             <p>We care bout the protection of your data.Read our<span className="text-[#00df9a]"> Privacy Policy</span>.</p>
          </div>
       </div>
    </div>
}