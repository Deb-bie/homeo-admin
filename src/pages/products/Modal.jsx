import {MdClose} from "react-icons/md"


const Modal = (
    {
        row,
        handleClose,
        type
    }
) => {
    let data;

    switch (type) {
        case "update":
            data = {
                title: "Update Product",
                button: "Update"
            };
        break;
        
        case "view":
            data = {
                title: "Product Information",
            }      
        break;
        
        default:
        break;
    }
    
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none overflow-auto bg-[#00000059] ">
            <div className="relative 4xs:w-[90%] sm:w-[80%] h-[100%]  my-2 4xs:mx-2 sm:mx-12 flex  overflow-scroll bg-white pb-[10px] shadow-lg ">
                <div className="border-0 relative flex flex-col w-full h-[100%] outline-none focus:outline-none rounded-[10px]">
                    <div className="w-[100%] h-full flex flex-col justify-start ">
                        <div className="w-[100%] flex flex-row justify-end ">
                            <div className=" h-auto 4xs:mr-[10px] sm:mr-[30px] mt-[10px] p-2 rounded-[50%] text-3xl bg-gray-300 " >
                                <MdClose onClick={()=> handleClose()} className="cursor-pointer" />
                            </div>
                        </div>

                        <div className="w-[100%] h-[100%] 4xs:pl-4 sm:pl-32 flex flex-col justify-start p-4 " >
                            <h1 className="w-[100%] text-3xl font-semibold 4xs:mb-2 sm:mb-6 flex ">{data.title}</h1>

                            <div className="w-[100%] h-[100%] flex flex-col   ">
                                <form className="4xs: w-[100%] sm:w-[80%] h-[100%] flex flex-col items-start content-center  ">
                               
                                    {
                                        type === 'view' ? 
                                            <>
                                                
                                                <div className="w-[100%] flex flex-row justify-center items-center content-center ">
                                                    <img src={row.image} alt="product" className="w-[200px] h-auto object-contain " />
                                                </div>

                                                <label className="text-2xl py-2 ">Product Name</label>
                                                <p className="text-base pb-8 text-sky-700">{row.name}</p>

                                                <label className="text-2xl py-2 ">Description</label>
                                                <p className="text-base pb-8 text-sky-700">{row.description}</p>

                                                <label className="text-2xl py-2 ">Category</label>
                                                <p className="text-base pb-8 text-sky-700">{row.category}</p>

                                                <label className="text-2xl py-2 ">Price</label>
                                                <p className="text-base pb-8 text-sky-700">{row.price}</p>

                                                <label className="text-2xl py-2 ">Stock</label>
                                                <p className="text-base pb-8 text-sky-700">{row.stock}</p>

                                                <label className="text-2xl py-2 ">Availability</label>
                                                <p className="text-base pb-8 text-sky-700">{row.availability}</p>

                                                <label className="text-2xl py-2 ">Additional Information</label>
                                                <p className="text-base pb-8 text-sky-700">{row.additionalInformation}</p>
                                            </>
                                        :  ""
                                    }

                                    {/* {
                                        type === "update" ? 
                                            <>
                                                <div className="w-[100%] flex flex-col items-center gap-y-4">
                                                    <img 
                                                        className="w-[100px] h-[100px] rounded-[50%] object-cover "
                                                        src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" 
                                                    />

                                                    <input
                                                        type="file"
                                                        accept="image/*" 
                                                        name="image" 
                                                        id="file"
                                                        onChange={(e) => setImage(e.target.files[0])}
                                                        style={{display: "none"}}
                                                    />

                                                    <label htmlFor="file" >
                                                        Image: <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
                                                    </label>
                                                </div>

                                                <div className="w-[100%] flex flex-col items-center ">
                                                    <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Product Name</label>
                                                    <input 
                                                        required 
                                                        type="text" 
                                                        name="name" 
                                                        value={name}
                                                        onChange={handleChange}
                                                        placeholder="eg. Berkins"
                                                        className="py-2 px-4 4xs:w-[100%] sm:w-[70%] outline-none border-[1px] border-black rounded-[5px] " 
                                                    />

                                                    <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Product Description</label>
                                                    <textarea
                                                        rows="6"
                                                        required
                                                        name="description"
                                                        value={description}
                                                        onChange={handleChange}
                                                        placeholder=" eg. lorem-2 "
                                                        className="py-2 px-4 4xs:w-[100%] sm:w-[70%] outline-none border-[1px] border-black rounded-[5px] " 
                                                    ></textarea>

                                                    <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Category</label>
                                                    <select 
                                                        name="selectList" 
                                                        id="selectList" 
                                                        required
                                                        className="py-2 px-4 4xs:w-[100%] sm:w-[70%] outline-none border-[1px] border-black rounded-[5px] " 
                                                        onChange={handleCategory}
                                                    >
                                                        <option value="" >Select Category</option>   
                                                        <option value="beds">Beds</option>
                                                        <option value="couches">Couches</option>
                                                        <option value="tables">Tables</option>
                                                        <option value="dining-sets">Dining Sets</option>
                                                        <option value="chairs">Chairs</option>
                                                        <option value="lights">Lights</option>
                                                    </select>

                                                    <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Availability</label>
                                                    <select 
                                                        name="selectList" 
                                                        id="selectList" 
                                                        required
                                                        className="py-2 px-4 4xs:w-[100%] sm:w-[70%] outline-none border-[1px] border-black rounded-[5px] " 
                                                        onChange={handleAvailability}
                                                    >
                                                        <option value="" >Select Availability</option>   
                                                        <option value="in-stock">In Stock</option>
                                                        <option value="out-of-stock">Out of Stock</option>
                                                    </select>

                                                    <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Price</label>
                                                    <input 
                                                        required 
                                                        type="number" 
                                                        name="price" 
                                                        value={price}
                                                        onChange={handleChange}
                                                        placeholder="eg. $200"
                                                        className="py-2 px-4 4xs:w-[100%] sm:w-[70%] outline-none border-[1px] border-black rounded-[5px] " 
                                                    />

                                                    <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Number in stock</label>
                                                    <input 
                                                        required 
                                                        type="number" 
                                                        name="stock" 
                                                        value={stock}
                                                        onChange={handleChange}
                                                        placeholder="eg. 2"
                                                        className="py-2 px-4 4xs:w-[100%] sm:w-[70%] outline-none border-[1px] border-black rounded-[5px] " 
                                                    />

                                                    <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Additional Information</label>
                                                    <textarea
                                                        rows="6"
                                                        placeholder=" eg. lorem-2 "
                                                        name="additionalInformation"
                                                        value={additionalInformation}
                                                        onChange={handleChange}
                                                        className="py-2 px-4 4xs:w-[100%] sm:w-[70%] outline-none border-[1px] border-black rounded-[5px] " 
                                                    ></textarea>


                                                </div>

                                                <div className="w-[100%] flex flex-row justify-center my-20 rounded-[5px] ">
                                                    <button onClick={(e) => addProduct(e)} type="submit" className="bg-[teal] text-white w-[50%] py-4 flex flex-row justify-center items-center rounded-[3px] ">Place Order</button>
                                                </div>
                                            </>
                                        
                                        : ""
                                    } */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal