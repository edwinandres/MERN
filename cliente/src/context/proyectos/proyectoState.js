import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO } from '../../types';
import {v4 as uuid} from "uuid"; 



const ProyectoState = props => {

    const proyectos = [
        {id: 1 , nombre: 'Tienda virtual'},
        {id: 2 , nombre: 'Dominio'},
        {id: 3 , nombre: 'Backend Java'}
    ]

    const initialState = {
        proyectos : [],        
        formulario : false,

    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para crud
    const mostrarFormulario = ()=>{
        dispatch({type:FORMULARIO_PROYECTO })
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();

        //insertar proyecto en el state
        dispatch({
            type:AGREGAR_PROYECTO,
            payload:proyecto
        })
    }


    return(
        <proyectoContext.Provider
            value={{
                formulario : state.formulario,               
                proyectos :state.proyectos,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
    
}

export default ProyectoState