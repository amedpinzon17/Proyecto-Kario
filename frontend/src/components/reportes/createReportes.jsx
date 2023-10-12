import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Example2() {

  const [APIData, setAPIData] = useState([]);
  const [usuarios, setUsuarios] = useState([]);


  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [idUsuario, setIdUsuario] = useState([]);
  const [estado, setEstado] = useState('');

  
  const [show, setShow] = useState(false);

  useEffect(()=>{
    axios.get(`http://localhost:5050/api/getUsuarios`)
    .then((response)=>{
      setUsuarios(response.data);
    })
  })


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postData = (e) => {
    e.preventDefault();
    const reporte = {
      titulo: titulo,
      descripcion: descripcion,
      fechaCreacion: fechaCreacion,
      idUsuario: idUsuario,
      estado: estado,
    };

    axios.post('http://localhost:5050/api/postReporte', reporte)
      .then(() => {
        window.location = 'http://localhost:3000/reportes'; 
      })
  };

  return (
    <>
      <Button variant="" onClick={handleShow}>
        Añadir
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Reporte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>



            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el título" value={titulo} onChange={(e) => setTitulo(e.target.value)} autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha Creacion</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la fecha de creación" value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)} />
            </Form.Group>

        
            <Form.Select value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)}>
            <option value="">Seleccione un usuario</option>
            {usuarios.map((usuario) => (
              <option key={usuario._id} value={usuario._id}>
                {usuario.nombre} 
              </option>
            ))}
          </Form.Select>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={postData}>
            Añadir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example2;
