import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:9000/fiscalias/'

//creamos nuestro componente principal 

const CompEditarFiscalia = () =>{
    const [nombre,setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

//definir una constante, porque vamos a trabajar con el id del registro que vamos a editar
    const update = async (e) =>{
        e.preventDefault()
        await axios.put(URI+id,{
            nombre: nombre,
            direccion: direccion,
            telefono: telefono
        })
        navigate('/')
    }
    useEffect( ()=>{
        getFiscaliaById()

    },[])

    const getFiscaliaById = async () =>{
   const res = await axios.get(URI+id)
    setNombre(res.data.nombre)
    setDireccion(res.data.direccion)
    setTelefono(res.data.telefono)
}
//vista para el componente
 return (
    <div>
        <h3>Editar Datos Fiscalía</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre Fiscalía</label>
                <input
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                        type='text'
                        className='form-control'
 />
                </div>
                <div className='mb-3'>
                <label className='form-label'>Dirección Fiscalía</label>
                <input
                        value={direccion}
                        onChange={(e)=> setDireccion(e.target.value)}
                        type='text'
                        className='form-control'
                />
                </div>
                <div className='mb-3'>
                <label className='form-label'>Teléfono</label>
                <input
                        value={telefono}
                        onChange={(e)=> setTelefono(e.target.value)}
                        type='text'
                        className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
       </div> 
 )
}
export default CompEditarFiscalia