import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../types';

const ProyectoState = props => {

    const initialState = {
        proyectos : [
            {id: 1 , nombre: 'Tienda virtual'},
            {id: 2 , nombre: 'Dominio'},
            {id: 3 , nombre: 'Backend Java'}
        ],        
        formulario : false,

    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para crud
    const mostrarFormulario = ()=>{
        dispatch({type:FORMULARIO_PROYECTO })
    }


    return(
        <proyectoContext.Provider
            value={{
                formulario : state.formulario,               
                proyectos :state.proyectos,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
    
}

export default ProyectoState