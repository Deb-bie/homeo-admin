import Sidebar from "../../components/sidebar/"
import Navbar from "../../components/navbar/"
import DataTable from "../../components/dataTable/"
import { productColumns, productRows } from "../../data/data"

const Products = () => {
  return (
    <div className="list w-[100%] min-h-[100%] flex flex-row">
      <Sidebar/>
      <div className="listContainer w-[100%] h-[100%] overflow-hidden">
        <Navbar/>
        <DataTable columns={productColumns} rows={productRows} />
      </div>
    </div>
  )
}

export default Products