import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import "./widget.scss"

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

    switch (type) {    
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ReceiptLongIcon
                        className="icon text-[18px] p-[5px] rounded-[5px] self-end "
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                            }}
                    />
                )
            };
        break;
        
        case "product":
            data = {
                title: "PRODUCTS",
                isMoney: false,
                link: "View all products",
                icon: (
                    <ShoppingCartOutlinedIcon
                        className="icon text-[18px] p-[5px] rounded-[5px] self-end "
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                )
            }      
        break;
        
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View total earnings",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="icon text-[18px] p-[5px] rounded-[5px] self-end "
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            }
        break;
        
        default:
        break;
    }


    return (
        <div className="flex justify-between p-[10px] shadow-xl -webkit-shadow-xl rounded-[10px] h-[100%]   ">
            <div className="flex flex-col justify-between  ">
                <span className="text-[14px] font-bold text-[rgb(160, 160, 160)] ">{data.title}</span>
                <span className="text-[28px] font-bold ">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="w-[100%] text-[12px] border-[1px] border-b-gray border-x-transparent border-t-transparent ">{data.link}</span>
            </div >
      
            <div className="flex flex-col justify-between ">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;
