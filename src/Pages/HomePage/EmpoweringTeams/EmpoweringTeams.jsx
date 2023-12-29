/* eslint-disable react/no-unescaped-entities */
import { BiSolidFoodMenu, BiSolidShoppingBags } from "react-icons/bi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdEngineering, MdOutlineSupportAgent } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";



const EmpoweringTeams = () => {
    return (
        <div className="container mx-auto px-5 mb-20">
            <div className="flex justify-center">
                <div className="mb-8">
                    <p className='text-xl font-bold mb-5 text-center text-[#fc5a03]'>work smarter</p>
                    <div className="flex justify-center">
                        <h2 className='mb-5 text-3xl lg:text-5xl font-bold text-center w-1/2'>Empowering Teams of <br /> <span className="text-[#fc5a03]">All Sizes to Achieve More</span></h2>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-center w-2/3">Empowering Teams is a dynamic and transformative approach to collaboration, fostering an environment where every team member is not just a participant but an active contributor. </p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-2xl p-10 rounded-xl">
                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <BiSolidFoodMenu className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></BiSolidFoodMenu>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Marketing</h3>
                        <p>Crafting compelling narratives and strategies to connect products with target audiences, driving brand awareness and customer engagement.</p>
                    </div>
                </div>


                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <BsFillMenuButtonWideFill className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></BsFillMenuButtonWideFill>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Product</h3>
                        <p>Innovating and refining offerings to meet customer needs, usability, and market trends for a seamless user experience.</p>
                    </div>
                </div>


                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <CgIfDesign className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></CgIfDesign>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Design</h3>
                        <p>Bringing ideas to life through visual and user-centric creativity, designing intuitive that resonate with the target audience.</p>
                    </div>
                </div>


                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <TfiMenuAlt className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></TfiMenuAlt>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Operations</h3>
                        <p>Streamlining processes, optimizing efficiency, and ensuring smooth day-to-day functioning to enhance overall organizational performance.</p>
                    </div>
                </div>

                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <MdEngineering className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></MdEngineering>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Engineering</h3>
                        <p>Developing leveraging cutting-edge technologies to build products that meet the highest standards of quality and reliability.</p>
                    </div>
                </div>

                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <MdOutlineSupportAgent className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></MdOutlineSupportAgent>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Support</h3>
                        <p>Providing exceptional customer service and cultivating positive interactions to build lasting relationships and brand loyalty.</p>
                    </div>
                </div>

                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <BiSolidShoppingBags className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></BiSolidShoppingBags>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">HR</h3>
                        <p>Nurturing a thriving workplace culture, attracting top talent, and fostering employee development for a motivated workforce.</p>
                    </div>
                </div>

                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <FaHandshake className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></FaHandshake>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">Sales</h3>
                        <p>Driving revenue growth by identifying opportunities, and effectively communicating the value of products.</p>
                    </div>
                </div>

                <div className="bg-gray-100 flex gap-3 p-5 rounded-xl">
                    <div>
                        <FaUsers className="text-[#fc5a03] text-5xl bg-white rounded-lg p-2"></FaUsers>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl mb-2">And many more</h3>
                        <p>Collaborating across diverse functions, and ensuring alignment to achieve organizational goals and success.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpoweringTeams;