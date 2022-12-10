import Sidebar from "../../components/sidebar/"
import Navbar from "../../components/navbar/"
import DataTable from "../../components/dataTable/"
import { userColumns, userRows } from "../../data/data"

const Users = () => {
  return (
    <div className="list w-[100%] min-h-[100%] flex flex-row">
      <Sidebar/>
      <div className="listContainer w-[100%] h-[100%] overflow-hidden">
        <Navbar/>
        <DataTable columns={userColumns} rows={userRows} />
      </div>
    </div>
  )
}

export default Users