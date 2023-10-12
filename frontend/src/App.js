import { Routes, Route} from 'react-router-dom';
import ReadIndicadores from './components/indicadores/readIndicadores';
import ReadReportes from './components/reportes/readReportes';
import Login from './components/Registre/login';
import CreateRegistro from './components/Registre/register';

function App() {
  return (
    <div>

 
      <Routes>
        <Route path="/indicadores" element={<ReadIndicadores />} />
      </Routes>

      <Routes>
        <Route path="/reportes" element={<ReadReportes />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<CreateRegistro />} />
      </Routes>
    </div>
  )
}



export default App;