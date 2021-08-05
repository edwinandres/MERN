import React, { useContext, useState } from 'react'
import ProyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(ProyectoContext)
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    const { nombre } = proyecto;

    const onChange = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(nombre == ''){
            mostrarError()
            return
        }
        
        agregarProyecto(proyecto)

        guardarProyecto({nombre:''})

    }


    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={()=>mostrarFormulario()}
            >Nuevo Proyecto</button>
            {formulario
                ?
                    (
                        <form
                            className='formulario-nuevo-proyecto'
                            onSubmit={onSubmit}
                        >
                            <input
                                type="text"
                                className='input-text'
                                placeholder='Nombre Proyecto'
                                name="nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                            <input
                                type="submit"
                                className='btn btn-block btn-primario'
                                name=""
                                value="Agregar Proyecto"
                            />
                        </form>
                    )
                :
                    null
            }
            {errorFormulario
                ?<p className='mensaje error'>El nombre es obligatorio</p>
                :null
            }

        </>
    )
}

export default NuevoProyecto
