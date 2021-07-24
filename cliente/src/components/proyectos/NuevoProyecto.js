import React from 'react'

const NuevoProyecto = () => {
    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >Nuevo Proyecto</button>
            <form
                className='formulario-nuevo-proyecto'
            >
                <input 
                    type="text" 
                    className='input-text'
                    placeholder='Nombre Proyecto'
                    name="nombre" 
                    value=""
                />
                <input 
                    type="submit" 
                    className='btn btn-block btn-primario'
                    name="" 
                    value="Agregar Proyecto"
                />
            </form>
            
        </>
    )
}

export default NuevoProyecto
