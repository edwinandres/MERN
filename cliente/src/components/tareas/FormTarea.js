import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const { agregarTarea, errorTarea, validarTarea, obtenerTareas } = tareasContext;

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre:''
    })

    
    //extraer el nombre de la tarea
    const { nombre } = tarea;

    if(!proyecto) return null;


    //array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //validar tarea
       if(nombre.trim()===''){
           validarTarea()
           return;
       }


        //pasar la validacion

        //agregar la nueva tarea al state
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);
        obtenerTareas(proyectoActual.id)


        //reiniciar el form
        guardarTarea({
            nombre:''
        })
       

    }

    return (
        <div className='formulario'>
            <form onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={nombre}
                        placeholder='Nombre de la tarea..'
                        className='input-text'
                        onChange={handleChange}
                    />
                    
                </div>
                <div className='contenedor-input'>
                    <input 
                        type="submit"                        
                        value="Agregar Tarea"                        
                        className='btn btn-primario btn-block btn-submit'
                    />
                    
                </div>
                {errorTarea?<p className='mensaje error'>Se requiere el nombre de la tarea</p>:null}
            </form>
        </div>
    )
}

export default FormTarea
