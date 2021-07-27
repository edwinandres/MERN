import React from 'react'
import Tarea from './Tarea'

const tareasProyecto = [
    {nombre:'Elegir Plataforma', estado:true},
    {nombre:'Elegir dominio', estado:false},
    {nombre:'Elegir hosting', estado:true},
    {nombre:'Diseñar interfaz', estado:false},

]

const ListadoTareas = () => {
    return (
        <>
            <h2>Proyecto : Tienda virtual</h2>
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
