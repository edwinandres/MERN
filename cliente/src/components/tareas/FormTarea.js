import React from 'react'

const FormTarea = () => {
    return (
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input 
                        type="text" 
                        name="nombre" 
                        value=""
                        placeholder='Nombre de la tarea..'
                        className='input-text'
                    />
                    
                </div>
                <div className='contenedor-input'>
                    <input 
                        type="submit" 
                        name="nombre" 
                        value="Agregar Tarea"
                        placeholder='Nombre de la tarea..'
                        className='btn btn-primario btn-block'
                    />
                    
                </div>
            </form>
        </div>
    )
}

export default FormTarea
