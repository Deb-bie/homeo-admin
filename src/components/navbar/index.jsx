import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {FaStream} from "react-icons/fa"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Badge from '@mui/material/Badge';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";




import {MdCategory} from "react-icons/md"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";




const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    const handleMobile = () => {setMobile(!mobile)}
    const activeStyle = {backgroundColor: "#ece8ff"}
    const { dispatch } = useContext(DarkModeContext);

    return (
        <header className="navbar w-[100%] h-[51.5px] border-[0.5px] border-b-[rgb(231, 228, 228)] border-x-transparent border-t-transparent flex items-center text-[14px] text-[#555] overflow-hidden ">
            <div className="wrapper w-[100%] p-[20px] flex items-center justify-between ">
                <div onClick={()=>handleMobile()} className="4xs:flex sm:hidden">
                    <FaStream />
                </div>

                <div className="4xs:hidden sm:flex items-center border-[0.5px] border-[lightgray] ">
                    <input className="outline-none bg-transparent placeholder:text-[12px]  " type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>

                <div className="items flex items-center ">
                    
                    <div className="4xs:hidden sm:flex items-center relative 4xs:mr-[10px] sm:mr-[20px] ">
                        <LanguageOutlinedIcon className="icon text-[20px] " />
                        English
                    </div>

                    <div className="item  flex items-center relative 4xs:mr-[10px] sm:mr-[20px]">
                        <DarkModeOutlinedIcon
                            onClick={() => dispatch({ type: "TOGGLE" })}
                            className="icon  text-[20px]" />
                    </div>

                    <div className="item  flex items-center relative 4xs:mr-[10px] sm:mr-[20px]">
                        <Badge badgeContent={4} color="primary">
                            <NotificationsNoneOutlinedIcon color="action" className="icon  text-[20px]" />
                        </Badge>
                    </div>

                    <div className="item  flex items-center mr-[20px] relative">
                        <img
                            src="https://images.pexels.com/photos/13143554/pexels-photo-13143554.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            className="w-[30px] h-[30px] rounded-[50%]  "
                        />
                    </div>
                </div>

                {
                    (mobile) ? 

                    <div className="4xs:w-full xs:w-[30vw] h-full  absolute left-0 top-0 bottom-0 overflow-x-hidden z-50  ">
                        <div className="w-[100%] min-h-[100vh] bg-white">
                            <div className="h-[50px] flex flex-row items-center justify-end content-center mr-8  ">
                                <span onClick={()=>handleMobile()}><FaStream className="text-gray-400 cursor-pointer " /> </span>   
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
                                    <NavLink to="/products" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                        <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                            <StoreIcon className="text-[18px] text-[#7451f8] " />
                                            <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Products</span>
                                        </li>
                                    </NavLink>

                                    <NavLink to="/category" style={({ isActive }) => isActive ? activeStyle : undefined}>
                                        <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                            <MdCategory className="text-[18px] text-[#7451f8] " />
                                            <span className="text-[13px] font-bold text-[#888] ml-[10px]  ">Categories</span>
                                        </li>
                                    </NavLink>

                                    <NavLink to="/users" onClick={()=>handleMobile()} style={({ isActive }) => isActive ? activeStyle : undefined}>
                                        <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                            <PersonOutlineIcon className="text-[18px] text-[#7451f8] "/>
                                            <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Users</span>
                                        </li>
                                    </NavLink>
                                
                                    <p className="title text-[10px] font-bold text-[#999] mt-[15px] mb-[5px]">USEFUL</p>
                                    <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                        <InsertChartIcon className="text-[18px] text-[#7451f8] "/>
                                        <span className="text-[13px] font-bold text-[#888] ml-[10px]  " >Orders</span>
                                    </li>
                                    
                                    <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff] ">
                                        <NotificationsNoneIcon className="text-[18px] text-[#7451f8] " />
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
                                <div className="colorOption w-[20px] h-[20px] rounded-[5px] border-[1px] border-[#7451f8] cursor-pointer m-[5px] bg-white "></div>
                                <div className="colorOption w-[20px] h-[20px] rounded-[5px] border-[1px] border-[#7451f8] cursor-pointer m-[5px] bg-black  "></div>
                            </div>
                        </div>
                </div>
                    
                    : ""
                }
            </div>
        </header>
    )
}

export default Navbar