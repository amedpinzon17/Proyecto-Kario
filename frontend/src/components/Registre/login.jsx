import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'semantic-ui-react';
import './styles.css'
import logo from '../../Assets/img/kario.svg';
import { Alert } from 'bootstrap';


function Login() {
    const navigate = useNavigate();

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const postData = (e) => {
        e.preventDefault();
        const usuario = {
            correo: correo,
            contrasena: contrasena
        };
        console.log(usuario);


        axios.post('http://localhost:5050/auth/login', usuario).then((response) => {
            console.log('Usuario autenticado:', response.data);
            alert('Usuario autenticado');
            navigate('/indicadores');
        }).catch((error) => {
            console.log(error);
            console.error('Error al iniciar sesión:', error.response.data);
        });
    };

    return (
        <div className='caja1'>
            <div className='caja'>
                
                <div className='card'>
                    <div className='divImg'>
                        <img src={logo} alt="" width={80}/>
                    </div>
                    
                    <div className='divText'>
                        <h2 className='title'>Bienvenido al panel digital de  KARIO Media</h2>
                        <p className='message'>ingrese los siguientes datos para ingresar a la plataforma</p>
                    </div>


                    <Form className='create' >
                        <Form.Field>
                            <label for="exampleInputPassword1" class="form-label">Email</label>
                            <input type="text" className="form-control inputEmail" value={correo} onChange={(e) => setCorreo(e.target.value)}  />
                           
                        </Form.Field>
                        


                        <Form.Field>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" className="form-control inputPassword" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                            </div>
                        </Form.Field>


                        <Button className='desactivate' type='submit' onClick={postData}>Iniciar Sesión</Button>
                    </Form>
                </div>
            </div>
        </div>



    );
}

export default Login;
