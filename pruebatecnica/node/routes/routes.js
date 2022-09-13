import  express  from 'express'
import { createFiscalia, deleteFiscalia, getAllFiscalias, getFiscalia, updateFiscalia } from '../controllers/FController.js';
const router = express.Router()

//primer metodo vamos a traer todas las fiscalias
router.get('/', getAllFiscalias)

//mostrar una sola fiscalia
router.get('/:id', getFiscalia )

//crear
router.post('/',createFiscalia)

//metodo para actualizar

router.put('/:id',updateFiscalia)

//metodo para eliminar

router.delete('/:id', deleteFiscalia)

export default router

