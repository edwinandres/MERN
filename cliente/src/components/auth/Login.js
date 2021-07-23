import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    //*State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    });

    //*extraer de usuario
    const {email, password} = usuario;

    //*inicio de sesion
    const onSubmit = (e) => {
        e.preventDefault();

        //*validar campos vacios

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
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
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
                        <input 
                            type="submit"
                            className='btn btn-primario btn-block' 
                            name="" 
                            value="Ingresar"
                        />
                    </div>
                    
                </form>
                <Link to='/nueva-cuenta' className='enlace-cuenta'>
                    Obtener cuenta
                </Link>
                
                </div>
                
            </div>
            
        </div>
    )
}

export default Login
