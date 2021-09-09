import React, { useContext } from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'



const ListadoTareas = () => {

    //extraer proyectos del stateInitial
    const proyectosContext = useContext(proyectoContext)
    const {proyecto} = proyectosContext

    const tareaContext = useContext(TareaContext)
    const { tareasProyecto } = tareaContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    const [proyectoActual] = proyecto

    

    return (
        <>
            <h2>Proyecto : {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {tareasProyecto.length === 0
                    ?(<li>No hay tareas</li>)
                    :tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))

                }
                
            </ul>
            <button type="button" className='btn btn-eliminar'>Eliminar Proyecto &times;</button>
        </>
    )
}

export default ListadoTareas
