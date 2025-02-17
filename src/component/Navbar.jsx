import { useState } from "react";
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";
export const Navbar=()=>{
    const [nav,setNav]=useState(true)
    const handleNav=()=>{
        setNav(!nav)
    }
    return <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]"> <a href="https://github.com/BiMalxMe" target="_blank">BiMalxMe.</a></h1>
        <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contacts</li>
        </ul>
        <div className="md:hidden" onClick={handleNav}>
        {!nav? <AiOutlineClose size={20} />: <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500":"fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-5"> BiMalxMe.</h1>

            <ul className="p-4 uppercase" >
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4 border-b border-gray-600">Contacts</li>
            </ul>
        </div>
    </div>
}