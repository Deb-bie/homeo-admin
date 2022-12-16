import React, {useEffect, useState} from "react"
import axios from "axios"
import Modal from "./Modal.jsx"
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {FiEdit2} from "react-icons/fi"
import {MdOutlineDeleteOutline} from "react-icons/md"

import "./Product.scss"

const Product = () => {
    const urls = `https://homeo-api.onrender.com/api/products`;
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const navigate = useNavigate();

    const [products, setProducts] = useState([])
    const [updateModal, setUpdateModal] = useState(null)
    const [viewModal, setViewModal] = useState(null)
    const handleViewModal= () => {setViewModal(!viewModal)}


    useEffect(() => {
        const fetchProducts = async () => {
            const results = await axios.get(urls)
            setProducts(results.data)
        }
        fetchProducts()
    }, [products, urls])

    const getProduct = async (id) => {
        setViewModal(id)
        await axios.get(urls.concat(`/${id}`))
    }

    const updateProduct = async (id, name, description, category, price, stock, availability, additionalInformation, image) => {
        navigate("/products/" + id, {
            state: {
              id: id,
              name: name,
              description: description,
              category: category,
              price:price,
              stock: stock,
              availability: availability,
              additionalInformation: additionalInformation,
              image: image

            }
        })
    }

    const deleteProduct = async (id) => {
        await axios.delete(urls.concat(`/${id}`))
    }




    const columns = [
        { field: "_id", headerName: "ID", width: 70},
        { field: "image", headerName: "Product Image", width: 130,
            renderCell: (params) => {
              return (
                <div className="cellWithImg">
                  <img className="cellImg" src={params.row.image || "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="avatar" />
                </div>
              );
            },
        },
        { field: "name", headerName: "Product Name", width: 150,
            renderCell: (params) => {
              return (
                <div onClick={()=>getProduct(params.row._id)} className="text-sky-600 underline cursor-pointer ">
                  {params.row.name}
                </div>
              )
            }
        },
        { field: "description", headerName: "Product Description", width: 250,},
        { field: "category", headerName: "Category", width: 150,},
        { field: "price", headerName: "Price", width: 100,},
        { field: "stock", headerName: "Stock", width: 100,},
        { field: "availability", headerName: "Product Availability", width: 150,},
        { field: "additionalInformation", headerName: "Additional Information", width: 250,},
        { field: "update", headerName: "Update", width: 150,
            renderCell: (params) => {
                return (
                    <div 
                        onClick={ ()=> updateProduct(
                            params.row._id,
                            params.row.name,
                            params.row.description,
                            params.row.category,
                            params.row.price,
                            params.row.stock,
                            params.row.availability,
                            params.row.additionalInformation,
                            params.row.image,
                        )} 
                        className="text-green-700 cursor-pointer "
                    >
                        <FiEdit2/>
                    </div>
              );
            },
        },
        { field: "delete", headerName: "Delete", width: 150,
            renderCell: (params) => {
                return (
                    <div onClick={()=> deleteProduct(params.row._id)} className=" text-red-400 cursor-pointer ">
                        <MdOutlineDeleteOutline />
                    </div>
                );
            },
        },
    ];

    const rows = products.map((product, id) =>(
        {
            key: id,
            _id: product._id,
            image: product.image ,
            name: product.name,
            description: product.description,
            category: product.category ,
            price: product.price,
            stock: product.stock,
            availability: product.availability,
            additionalInformation: product.additionalInformation,
        }
    ))


    return (
        <div className="datatable">
            <div className="datatableTitle">
                <Link to={`/${path}/new`} className="link">
                    Add New
                </Link>
            </div>


            {
                products.length > 0 ? 
                    <DataGrid
                        className="datagrid"
                        rows={rows}
                        columns={columns}
                        pageSize={9}
                        rowsPerPageOptions={[5]}
                        getRowId={(row) => row._id}
                    />
                
                :
                    <div className="w-[100%] h-[80vh] flex flex-col justify-center content-center items-center">
                            Sorry, there are no available prducts.
                    </div>
            }

            {
                products.map((product, id) => (
                    <>
                        {viewModal === product._id ?  
                            <Modal 
                                key={id}
                                handleClose={handleViewModal}
                                type="view"
                                row={product}
                            />
                        : null}

                    {updateModal === product._id ?  
                            <Modal 
                                key={id}
                                handleClose={handleViewModal}
                                type="view"
                                row={product}
                            />
                        : null}
                    </>
                ))
            }
        </div>

    )
}

export default Product