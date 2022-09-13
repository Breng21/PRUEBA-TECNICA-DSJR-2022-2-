import axios from 'axios'
//los dos hooks que utilizaremos
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:9000/fiscalias/'
//componente principal
const CompMostrarFiscalia = () =>{

    //configurar los hooks
    const [fiscaliases, setFiscalia] = useState([])
    useEffect( () => {
        getFiscalias()
    },[]) 

    //procedimiento para mostrar todas las fiscalias

    const getFiscalias = async () => {
        const res = await axios.get(URI)
        setFiscalia(res.data)
}



//procedimiento para eliminar una fiscalia
const deleteFiscalia = async(id) =>{
 await   axios.delete(`${URI}${id}`)
    getFiscalias()

}
//finalmente devolvemos una vista
return(
    <div className='container'>
        <h1>Fiscalías</h1>
         <div className='row'>
            <div className='col'>
               
            <table className="table">
           <thead className='table table-dark table-striped'>
            <tr>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Acciones</th>

            </tr>

            </thead>

            <tbody>
                { fiscaliases.map ((fiscalia) => (
                    <tr key={ fiscalia.id} >
                    <td>{fiscalia.nombre} </td>
                    <td>{ fiscalia.direccion}</td>
                    <td>{fiscalia.telefono}</td>
                       <td>
                        {<Link to={`/edit/${fiscalia.id }`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i>Editar</Link>}
                        <button onClick={ ()=>deleteFiscalia(fiscalia.id)} className='btn btn-danger'><i className="fas fa-trash"></i>Eliminar</button>
                        </td>
                    </tr>
                )
                ) }
            </tbody>
            </table>
            <Link to='/create' className='btn btn-primary mt-2 mb-2'><i className="fas fa-folder-plus"></i>Agregar Fiscalía</Link>
         </div>
                    </div>
    </div>
)
                }
export default CompMostrarFiscalia