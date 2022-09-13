import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:9000/fiscalias/'

const CompCrearFiscalia = () => {
    const [nombre, setNombre]=useState('')
    const [direccion, setDireccion]=useState('')
    const [telefono, setTelefono]=useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async(e) =>{
        e.preventDefault()
    await    axios.post(URI,{nombre: nombre, direccion: direccion, telefono: telefono, })
    navigate('/')
    }

    return (
       <div>
        <h3>Crear Fiscalía</h3>
        <form onSubmit={store}>
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

            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
       </div> 
    )
}

export default CompCrearFiscalia