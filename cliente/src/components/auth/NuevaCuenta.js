import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    //*State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:'',
        nombre:'',
        confirmar:''
    });

    //*extraer de usuario
    const {email, password, nombre, confirmar} = usuario;

    //*inicio de sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //*validar campos vacios

        //*password minimo 6 caracteres

        //*los 2 password sean iguales

        //*pasarlo al action
    }


    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <div className='form-usuario'>
                <div className='contenedor-form sombra-dark'>
                <h1>Crear una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id='nombre'
                            name="nombre" 
                            placeholder='Tu nombre'
                            value={nombre}
                            onChange={onChange}
                        />
                        
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id='email'
                            name="email" 
                            placeholder='Tu email'
                            value={email}
                            onChange={onChange}
                        />
                        
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id='password'
                            name="password" 
                            placeholder='Tu password'
                            value={password}
                            onChange={onChange}
                        />
                        
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            id='confirmar'
                            name="confirmar" 
                            placeholder='Tu confirmacion de password'
                            value={confirmar}
                            onChange={onChange}
                        />
                        
                    </div>
                    <div className='campo-form'>
                        <input 
                            type="submit"
                            className='btn btn-primario btn-block' 
                            name="" 
                            value="Registrarme"
                        />
                    </div>
                    
                </form>
                <Link to='/' className='enlace-cuenta'>
                    Iniciar sesion
                </Link>
                
                </div>
                
            </div>
            
        </div>
    )
}

export default NuevaCuenta
