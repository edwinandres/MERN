import React from 'react'
import Proyecto from './Proyecto'


const proyectos = [
    {nombre: 'Tienda virtual'},
    {nombre: 'Dominio'},
    {nombre: 'Backend Java'}
]


const ListadoProyectos = () => {
    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                />
            ))}

            
        </ul>
    )
}

export default ListadoProyectos
