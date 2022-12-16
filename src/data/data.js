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

