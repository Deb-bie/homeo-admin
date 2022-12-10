import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import "./dataTable.scss"


const DataTable = ({columns, rows}) => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                <Link to={`/${path}/new`} className="link">
                    Add New
                </Link>
            </div>
      
            <DataGrid
                className="datagrid"
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row) => row._id}
             />
        </div>
    )
}

export default DataTable;
