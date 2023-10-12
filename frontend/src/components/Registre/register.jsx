import axios from "axios";
import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import './styles.css'
import { useForm } from "../hooks/useForm";
import logo from '../../Assets/img/kario.svg';




export default function CreateRegistro() {
    const navigate = useNavigate();
    const { form, getFieldProps } = useForm({});

    const postData = () => {
        axios.post(`http://localhost:5050/auth/register`, {
            nombre: form.nombre,
            apellido: form.apellido,
            correo: form.correo,
            cargo: form.cargo,
            avatar: form.avatar,
            userName: form.userName,
            contrasena: form.contrasena,
        }).then(() => {
            navigate('/login');
        });
    }

    return (
        <div className="caja1">
            <div className="caja">
                <div className="card3">
                    <div className='divImg'>
                        <img src={logo} alt="" width={80} />
                    </div>

                    <div className='divText'>
                        <h2 className='title'>Bienvenido al panel digital de  KARIO Media</h2>

                    </div>

                    <div >
                        <Form className="create">
                            

                            <Form.Field>
                            <div className="mb-0">
                                <label for="exampleInputPassword1" class="form-label">Nombre</label>
                                <input type="text" className="form-control inputPassword" {...getFieldProps("nombre")} />
                            </div>
                        </Form.Field>


                        <Form.Field>
                            <div className="mb-0">
                                <label for="exampleInputPassword1" class="form-label">Apellido</label>
                                <input type="text" className="form-control inputPassword" {...getFieldProps("apellido")} />
                            </div>
                        </Form.Field>

                            <Form.Field>
                            <div className="mb-0">
                                <label for="exampleInputPassword1" class="form-label">Email</label>
                                <input type="text" className="form-control inputPassword" {...getFieldProps("correo")} />
                            </div>
                        </Form.Field>




                        



                        <Form.Field>
                            <div className="mb-0">
                                <label for="exampleInputPassword1" class="form-label">Avatar</label>
                                <input type="file" id="file0" className="form-control inputPassword" {...getFieldProps("avatar")} />
                            </div>
                        </Form.Field>


                        <Form.Field>
                            <div className="mb-0">
                                <label for="exampleInputPassword1" class="form-label">UserName</label>
                                <input type="text" className="form-control inputPassword" {...getFieldProps("userName")} />
                            </div>
                        </Form.Field>




                        <Form.Field>
                            <div className="mb-0">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" className="form-control inputPassword" {...getFieldProps("contrasena")} />
                            </div>
                        </Form.Field>



                        
                            <Button type="submit" onClick={postData}>Crear</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
}