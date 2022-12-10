import "./new.scss";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
const New = ({title, inputs} ) => {

    return (
        <div className="new ">
            <Sidebar />
            
            <div className="newContainer">
                <Navbar />

                <div className="w-[100%] ">
                    <div className="top">
                        <h1>{title}</h1>
                    </div>
            
                    <div className="bottom gap-4 flex 4xs:flex-col md:flex-row justify-between ">
                        <div className="left w-[100%] flex flex-col justify-start content-center items-center ">
                            <img
                                src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt=""
                            />

<                           div className="formInput my-6">
                                    <label htmlFor="file">
                                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                    </label>
                    
                                    <input
                                        type="file"
                                        style={{ display: "none" }}
                                    />
                                </div>
                        </div>
            
                        <div className="right">
                            <form>
                        

                                {inputs.map((input) => (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            id={input.id}
                                        />
                                    </div>
                            ))}
                                
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;
