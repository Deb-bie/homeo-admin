export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "country",
      headerName: "Country",
      width: 100,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 100,
    },
];


export const userRows = [
  {
    _id: 1,
    user: "John Doe",
    email: "john@doe.com",
    country: "Ireland",
    city: "Vancouver",
    phone: "233000000000",
  },
  {
    _id: 2,
    user: "John Doe",
    email: "john@doe.com",
    country: "Ireland",
    city: "Vancouver",
    phone: "233000000000",
  },
  {
    _id: 3,
    user: "John Doe",
    email: "john@doe.com",
    country: "Ireland",
    city: "Vancouver",
    phone: "233000000000",
  },
  {
    _id: 4,
    user: "John Doe",
    email: "john@doe.com",
    country: "Ireland",
    city: "Vancouver",
    phone: "233000000000",
  },
  {
    _id: 5,
    user: "John Doe",
    email: "john@doe.com",
    country: "Ireland",
    city: "Vancouver",
    phone: "233000000000",
  },
];



export const productColumns = [
    { field: "_id", headerName: "ID", width: 50 },
    {
      field: "image",
      headerName: "Product Image",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "desc",
      headerName: "Description",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 100,
    },
];


export const productRows = [
  {
    _id: 1,
    image: "Nancy Chair",
    name: "Nancy Chair",
    category: "Chairs",
    title: "The Best Chair in 2022",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    price: "12",
    stock: "15"
  },
  {
    _id: 2,
    image: "Nancy Chair",
    name: "Nancy Chair",
    category: "Chairs",
    title: "The Best Chair in 2022",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    price: "12",
    stock: "15"
  },
  {
    _id: 3,
    image: "Nancy Chair",
    name: "Nancy Chair",
    category: "Chairs",
    title: "The Best Chair in 2022",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    price: "12",
    stock: "15"
  },
  {
    _id: 4,
    image: "Nancy Chair",
    name: "Nancy Chair",
    category: "Chairs",
    title: "The Best Chair in 2022",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    price: "12",
    stock: "15"
  },
  {
    _id: 5,
    image: "Nancy Chair",
    name: "Nancy Chair",
    category: "Chairs",
    title: "The Best Chair in 2022",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    price: "12",
    stock: "15"
  },
];


export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
    {
    id: 6,
    label: "Availability",
    type: "text",
    placeholder: "in stock",
  },
];