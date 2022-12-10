import React, {useState, useContext} from "react"
import {NavLink,} from "react-router-dom";
import {FaStream} from "react-icons/fa"
import {MdCategory} from "react-icons/md"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { DarkModeContext } from "../../context/darkModeContext";



const Sidebar = () => {
    const [small, setSmall] = useState(false)
    const handleSmall = () => {setSmall(!small)}
    const activeStyle = {backgroundColor: "#ece8ff"}

    const { dispatch } = useContext(DarkModeContext);

    return (

        <>
            {
                small ? 
                <div className="">
                    <div className="sidebar 4xs:hidden sm:flex flex-col overflow-x-hidden border-[0.5px] border-r-[rgb(230, 227, 227)] h-[100%] bg-white ">
                        <div className=" top h-[50px] flex flex-row items-center justify-evenly content-center  ">
                            <span onClick={()=>handleSmall()}><FaStream className="text-gray-400 cursor-pointer " /> </span>   
                        </div>

                        <hr className="h-0 border-[0.5px] border-[rgb(230, 227, 227)] " />
                        
                        <div className=" pl-[10px] ">
                            <ul className="list-none m-0 p-0 ">
                                <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px] ">MAIN</p>
                                <NavLink to="/"
                                    style={({ isActive }) => isActive ? activeStyle : undefined}
                                    className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                        <DashboardIcon className="text-[18px] text-[#7451f8] " />
                                </NavLink>

                                <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px] ">LISTS</p>
                                <NavLink to="/products"  style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                        <ShoppingCartOutlinedIcon className="text-[18px] text-[#7451f8] " />
                                    </li>
                                </NavLink>

                                <NavLink to="#"  style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                        <MdCategory className="text-[18px] text-[#7451f8] " />
                                    </li>
                                </NavLink>
                            
                                <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">USEFUL</p>
                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <ReceiptLongIcon className="text-[18px] text-[#7451f8] "/>
                                </li>
                                
                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <MonetizationOnOutlinedIcon className="text-[18px] text-[#7451f8] " />
                                </li>

                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <LocalShippingIcon className="text-[18px] text-[#7451f8] "/>
                                </li>

                                <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">USER</p>
                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <SettingsApplicationsIcon className="text-[18px] text-[#7451f8] " />
                                </li>
            
                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <ExitToAppIcon className="text-[18px] text-[#7451f8] " />
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bottom flex items-center m-[10px] ">
                            <div onClick={() => dispatch({ type: "LIGHT" })} className="colorOption w-[20px] h-[20px] rounded-[5px] border-[1px] border-[#7451f8] cursor-pointer m-[5px] bg-white "></div>
                            <div onClick={() => dispatch({ type: "DARK" })} className="colorOption w-[20px] h-[20px] rounded-[5px] border-[1px] border-[#7451f8] cursor-pointer m-[5px] bg-black  "></div>
                        </div>
                    </div>
                </div>
                
                :                 
                <div className="4xs:hidden sm:flex flex-col ">
                    <div className="sidebar border-[0.5px] border-r-[rgb(230, 227, 227)] h-[100%] bg-white">
                        <div className=" top h-[50px] flex flex-row items-center justify-evenly content-center  ">
                            <span className="text-[20px] font-bold text-[#6439ff]  ">Homeo</span>
                            <span onClick={()=>handleSmall()}><FaStream className="text-gray-400 cursor-pointer " /> </span>   
                        </div>

                        <hr className="h-0 border-[0.5px] border-[rgb(230, 227, 227)] " />
                        
                        <div className=" pl-[10px] ">
                            <ul className="list-none m-0 p-0 ">
                                <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px] ">MAIN</p>
                                <NavLink to="/"
                                    style={({ isActive }) => isActive ? activeStyle : undefined}
                                    className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                        <DashboardIcon className="text-[18px] text-[#7451f8] " />
                                        <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Dashboard</span>
                                </NavLink>

                                <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px] ">LISTS</p>
                                <NavLink to="/products"  style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                        <ShoppingCartOutlinedIcon className="text-[18px] text-[#7451f8] " />
                                        <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Products</span>
                                    </li>
                                </NavLink>

                                <NavLink to="#"  style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                        <MdCategory className="text-[18px] text-[#7451f8] " />
                                        <span className="text-[13px] font-bold text-[#888] ml-[10px]  ">Categories</span>
                                    </li>
                                </NavLink>
                            
                                <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">USEFUL</p>
                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <ReceiptLongIcon className="text-[18px] text-[#7451f8] "/>
                                    <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Orders</span>
                                </li>
                                
                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <MonetizationOnOutlinedIcon className="text-[18px] text-[#7451f8] " />
                                    <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Transactions</span>
                                </li>

                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <LocalShippingIcon className="text-[18px] text-[#7451f8] "/>
                                    <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Delivery</span>
                                </li>

                                <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">USER</p>
                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <SettingsApplicationsIcon className="text-[18px] text-[#7451f8] " />
                                    <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Settings</span>
                                </li>
            
                                <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                    <ExitToAppIcon className="text-[18px] text-[#7451f8] " />
                                    <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Logout</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bottom flex items-center m-[10px] ">
                            <div onClick={() => dispatch({ type: "LIGHT" })} className="colorOption w-[20px] h-[20px] rounded-[5px] border-[1px] border-[#7451f8] cursor-pointer m-[5px] bg-white "></div>
                            <div onClick={() => dispatch({ type: "DARK" })} className="colorOption w-[20px] h-[20px] rounded-[5px] border-[1px] border-[#7451f8] cursor-pointer m-[5px] bg-black  "></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Sidebar;