import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

/* import { useNavigate  } from 'react-router-dom' */

function Example() {

    /* const navigate = useNavigate(); */

    const [indicador, setIndicador] = useState();
    const [descripcion, setDescripcion] = useState();
    const [fechaInicio, setFechaInicio] = useState();
    const [fechaFinal, setFechaFinal] = useState();
    const [metodologia, setMetodo] = useState();
    const [frecuencia, setFrecuencia] = useState();
    const [cumplimiento, setCumplimiento] = useState();
    const [area, setArea] = useState();

    const postData = (e) => {
        e.preventDefault();
        const indicado = {
            indicador: indicador,
            descripcion: descripcion,
            fechaInicio: fechaInicio,
            fechaFinal: fechaFinal,
            metodologia: metodologia,
            frecuencia: frecuencia,
            cumplimiento: cumplimiento,
            area: area,
        }
        console.log(indicado);
        axios.post('http://localhost:5050/api/postIndicador', indicado)

        .then(() => {
            window.location = 'http://localhost:3000/indicadores'
        })


    }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        Añadir
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Indicador</Form.Label>
              <Form.Control type="Text" placeholder="Indicador" value={indicador} onChange={(e) => setIndicador(e.target.value)} autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control type="email" placeholder="Indicador" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}  autoFocus />
            </Form.Group>


            <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de inicio</Form.Label>
              <Form.Control type="email" placeholder="Indicador" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)}  autoFocus />
            </Form.Group>


            <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha Final</Form.Label>
              <Form.Control type="email" placeholder="Indicador" value={fechaFinal} onChange={(e) => setFechaFinal(e.target.value)}  autoFocus />
            </Form.Group>

            <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
              <Form.Label>Metodología</Form.Label>
              <Form.Control type="email" placeholder="Indicador" value={metodologia} onChange={(e) => setMetodo(e.target.value)}  autoFocus />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Frecuencia</Form.Label>
              <Form.Control type="email" placeholder="Indicador" value={frecuencia} onChange={(e) => setFrecuencia(e.target.value)}  autoFocus />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cumplimiento</Form.Label>
              <Form.Control type="email" placeholder="Indicador" value={cumplimiento} onChange={(e) => setCumplimiento(e.target.value)}  autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Area</Form.Label>
              <Form.Control type="email" placeholder="Indicador" value={area} onChange={(e) => setArea(e.target.value)}  autoFocus />
            </Form.Group>



          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={postData}>
            Anadir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;