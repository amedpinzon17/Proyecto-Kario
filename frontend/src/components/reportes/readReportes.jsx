import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import '../../Assets/css/table.css'

import Example2 from './createReportes';


import logo from "../../Assets/img/KARIO_LOGO.png";
import reloadSvg from "../../Assets/img/arrow-clockwise.svg";
import addSvg from "../../Assets/img/plus-circle-fill.svg";
import trashSvg from "../../Assets/img/trash-fill.svg";
import helpSvg from "../../Assets/img/question-circle-fill.svg";
import bugSvg from "../../Assets/img/bug-fill.svg";
import personSvg from "../../Assets/img/person-circle.svg";
import bellSvg from "../../Assets/img/bell-fill.svg";
import gearSvg from "../../Assets/img/gear-fill.svg";



export default function ReadReportes() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/api/getReporte').then((response) => {
      setAPIData(response.data)
    })
  }, []);

  const onDelete = (_id) => {
    axios.delete(`http://localhost:5050/api/deleteReporte/${_id}`)
      .then((response) => {
        console.log('elemento eliminado', response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error('error al eliminar el elemento', error)
      });

  };


  return (

    <div>




      <nav class="navbar navbar-expand-lg border-bottom">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="btnToggleNav"
            onClick={setAPIData}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class={APIData ? "d-none" : "d-block"}>
            <a
              class="navbar-brand"
              id="logo"
              href="/"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img src={logo} alt='logo' width="35px" />
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <div class="d-flex flex-wrap justify-content-around w-100">
              <div>
                <ul
                  class="navbar-nav me-auto mb-2 mb-lg-0 gap-4"
                  style={{ margin: "auto -2rem" }}
                >
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      <i class="bi bi-plus-circle-fill"></i>
                    </a>
                  </li>
                  <li class="nav-item"><img src={addSvg} alt="" width="22px" />
                    <Example2></Example2>
                    <a
                      class="nav-link d-flex gap-2 fw-semibold text-black"
                      href="/"

                    >

                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link d-flex gap-2 fw-semibold text-black"
                      href="http://localhost:3000/reportes"
                    >
                      <img src={reloadSvg} alt="" width="22px" />
                      <div>Refrescar</div>


                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link d-flex gap-2 fw-semibold text-black"
                      href="/"
                    >
                      <img src={trashSvg} alt="" width="22px" />
                      <div>Eliminar</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                  <li class="nav-item">
                    <img src={logo} alt="" width="42px" style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }} />
                    <a
                      class="nav-link d-flex gap-2 fw-semibold text-black"
                      aria-current="page"
                      href="/"
                    >
                      <i class="bi bi-plus-circle-fill"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link d-flex gap-2 fw-semibold text-black"
                      href="http://localhost:3000/indicadores"
                    >
                      <img src={bugSvg} alt="" width="22px" />
                      <div>Indicadores</div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link d-flex gap-2 fw-semibold text-black"
                      href="/reportes"
                    >
                      <img src={helpSvg} alt="" width="22px" />
                      <div>Ayuda</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="d-flex justify-content-between my-2">
              <img
                src={gearSvg}
                alt=""
                width="14px"
                style={{ margin: "auto .6rem" }}
              />
              <img
                src={bellSvg}
                alt=""
                width="14px"
                style={{ margin: "auto .6rem" }}
              />
              <img
                src={personSvg}
                alt=""
                width="30px"
                style={{ margin: "auto .6rem" }}
              />
            </div>
          </div>
        </div>
      </nav>



      <div className='titulo'>
        <h1>Panel de Indicadores</h1>
        <p>Aqui puedes visualizar todos los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver mas detalles, dale click  a uno de ellos para mas informacion</p>
      </div>




      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <div className="table-responsive-xxl">
          <Table className="tablitaa table table-hover table-borderless">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>delete</Table.HeaderCell>
                <Table.HeaderCell>Titulo</Table.HeaderCell>
                <Table.HeaderCell>Descripcion</Table.HeaderCell>
                <Table.HeaderCell>Fecha Reporte</Table.HeaderCell>
                <Table.HeaderCell>Usuario</Table.HeaderCell>
                <Table.HeaderCell>Estado</Table.HeaderCell>


              </Table.Row>
            </Table.Header>
            <Table.Body>
              {APIData.map((data) => (
                <Table.Row key={data._id}>
                  <Table.Cell>
                    <Button onClick={() => onDelete(data._id)} colorScheme="red" variant="solid">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        class="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </Button>
                  </Table.Cell>
                  <Table.Cell className="text-truncate">{data.titulo}</Table.Cell>
                  <Table.Cell className="text-truncate">{data.descripcion}</Table.Cell>
                  <Table.Cell className="text-truncate">{data.fechaCreacion}</Table.Cell>
                  <Table.Cell className="text-truncate">{data.idUsuario[0].nombre} {data.idUsuario[0].apellido}</Table.Cell>
                  <Table.Cell className="text-truncate">{data.estado}</Table.Cell>
                  <Table.Cell></Table.Cell>

                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>










  );

}