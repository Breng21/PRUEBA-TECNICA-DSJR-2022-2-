//importamos el modelo
import FModel from '../models/FModel.js';


//metodos para el crud

export const getAllFiscalias = async (req, res) => {
    try {
        const fiscalias = await FModel.findAll()
        res.json(fiscalias)
    } catch (error){
        res.json( {message: error.message} )
    }
}


//mostrar un registro
export const getFiscalia = async (req, res) =>{
    try{
       const fiscalia = await FModel.findAll({
            where:{ id:req.params.id}
            })
            res.json(fiscalia[0])
        }catch (error){
            res.json({message: error.message})

        }
    }


//crear un registro

export const createFiscalia = async (req, res) => {
    try{
      await  FModel.create(req.body)
      res.json({
        'message':'Fiscalia creada correctamente'
      })
    } catch (error) {
        res.json({message: error.message})
    }
}


//actualizar un registro
export const updateFiscalia = async (req, res) => {
    try{
        await FModel.update(req.body,{
            where: { id: req.params.id}
        })
        res.json({
            'message':'Fiscalia actualizada correctamente'
          })
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un registro
export const deleteFiscalia = async (req, res) =>{
    try{
        await FModel.destroy({
            where: { id: req.params.id}
        })
        res.json({
            'message':'Fiscalia eliminada correctamente'
          })
    }catch (error){
        res.json({message: error.message})
    }
}