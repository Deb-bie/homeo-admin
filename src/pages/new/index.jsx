import {useState} from "react"
import "./new.scss";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from 'axios'


const New = () => {
    const urls = `https://homeo-api.onrender.com/api/products`;
    const [category, setCategory] = useState("")
    const [availability, setAvailability] = useState("")
    const [image, setImage] = useState("")

    const [form, setForm] = useState(
        {
            name: "",
            description: "",
            stock: 0,
            price: 0,
            additionalInformation: ""
        }
    )

    const {name, description, stock, price, additionalInformation} = form;

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    }

    const handleCategory = (e) => {
        console.log(e.target.value)
        setCategory(e.target.value)
    }

    const handleAvailability = (e) => {
        console.log(e.target.value)
        setAvailability(e.target.value)
    }

    const addProduct = async (e) => {
        e.preventDefault();
        console.log("vibe")
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "Debbie");
        data.append("cloud_name","dbedwytfr");
        try {
            const uploadImage = await axios.post("https://api.cloudinary.com/v1_1/dbedwytfr/image/upload", data);
            const { url } = uploadImage.data;

            await axios.post( 
                urls, 
                { 
                    image: url,
                    name: name,
                    description: description,
                    stock: stock,
                    price: price,
                    additionalInformation: additionalInformation,
                    category: category,
                    availability: availability
                               
                }
            ).then((res) =>         
                setForm({
                    ...form,
                    name: "",
                    description: "",
                    stock: "",
                    price: "",
                    additionalInformation: "",
                }),
                setCategory(""),
                setAvailability(""),
                setImage(""),
            ).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="new ">
            <Sidebar />
            
            <div className="newContainer">
                <Navbar />

                <div className="w-[100%] h-[100%] ">
                    <div className="w-[100%] h-[100%]">
                        <div className="p-[10px] m-[20px] shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] ">
                            <h1 className="text-[lightgray] text-[20px] ">Add a New Project</h1>
                        </div>

                        <div className="w-[100%] h-[100%] flex flex-row justify-center p-[10px] m-[20px] gap-4  ">
                            <form className="4xs:w-[100%] sm:w-[70%] h-[100%] 4xs:p-2 sm:p-[20px] flex flex-col shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] ">
                                <div className="w-[100%] flex flex-col items-center gap-y-4">
                                    <img 
                                        className="w-[100px] h-[100px] rounded-[50%] object-cover "
                                        src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" 
                                    />

                                    <input
                                        type="file"
                                        accept="image/*" 
                                        name="image" 
                                        // name="file"
                                        id="file"
                                        // value={image}
                                        // onChange={handleImage}
                                        onChange={(e) => setImage(e.target.files[0])}
                                        // style={{display: "none"}}
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
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default New;
