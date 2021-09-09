import { useState, useContext, useReducer } from "react";
import TareaReducer from './tareaReducer';
import TareaContext from './tareaContext';
import { TAREAS_PROYECTO } from "../../types";



const initialState = {
    tareas:[
        {nombre:'Elegir Plataforma', estado:true, proyectoId:1},
        {nombre:'Elegir dominio', estado:false, proyectoId:2},
        {nombre:'Elegir hosting', estado:true, proyectoId:3},
        {nombre:'Diseñar interfaz', estado:false, proyectoId:4},
        {nombre:'Elegir dominio', estado:false, proyectoId:2},
        {nombre:'Elegir hosting', estado:true, proyectoId:3},
        {nombre:'Diseñar interfaz', estado:false, proyectoId:4},
        {nombre:'Elegir dominio', estado:false, proyectoId:2},
        {nombre:'Elegir hosting', estado:true, proyectoId:1},
        {nombre:'Diseñar interfaz', estado:false, proyectoId:2},
        {nombre:'Elegir dominio', estado:false, proyectoId:3},
        {nombre:'Elegir hosting', estado:true, proyectoId:4},
        {nombre:'Diseñar interfaz', estado:false, proyectoId:2},        
    ],
    tareasProyecto:null
}

const TareaState = props => {

    //dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    //Crear funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload:proyectoId
        })
    }



    return(
        <TareaContext.Provider
           value={{
               tareas:state.tareas,
               tareasProyecto :state.tareasProyecto,
               obtenerTareas,
              
           }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState

