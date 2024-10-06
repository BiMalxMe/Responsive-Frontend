import{
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGitSquare,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa"

export const Footer=()=>{
    return <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]"> BiMalxMe.</h1>
      <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consequatur!hi hi ih ih kisti i am bimal ha ha ha ha</p>
     <div className="flex justify-between md:w-[75%] my-6">
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaGitSquare size={30} />
        <FaDribbbleSquare size={30} />
     </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6 className="font-md text-gray-400">Solutions</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
            <div>
                <h6 className="font-md text-gray-400">Solutions</h6>
                <ul>
                    <li className="py-2 text-sm">Analytics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insights</li>
                </ul>
            </div>
            <div>
                <h6 className="font-md text-gray-400">Support</h6>
                <ul>
                    <li className="py-2 text-sm">Pricing</li>
                    <li className="py-2 text-sm">Documentation</li>
                    <li className="py-2 text-sm">Guides</li>
                    <li className="py-2 text-sm">Api Status</li>
                </ul>
            </div>
            <div>
                <h6 className="font-md text-gray-400">Company</h6>
                <ul>
                    <li className="py-2 text-sm">About</li>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">Jobs</li>
                    <li className="py-2 text-sm">Press</li>
                    <li className="py-2 text-sm">Careers</li>
                </ul>
            </div>
            <div>
                <h6 className="font-md text-gray-400">Legal</h6>
                <ul>
                    <li className="py-2 text-sm">Claim</li>
                    <li className="py-2 text-sm">Policy</li>
                    <li className="py-2 text-sm">Terms</li>
                </ul>
            </div>
        </div>
    </div>
}