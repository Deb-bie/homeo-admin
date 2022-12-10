import React from 'react'
import Sidebar from "../../components/sidebar/"
import Navbar from "../../components/navbar"


const Category = () => {
  return (
    <div className="w-[100%] flex flex-row ">
        <Sidebar />

        <main className="w-[100%] h-full ">
            <Navbar />
            <div>pro</div>
        </main>
    </div>
  )
}

export default Category