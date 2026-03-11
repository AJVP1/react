// importar librerias
import { HashRouter, Routes, Route } from "react-router-dom";

// importar paginas
import { Introduccion } from "./pages/Introduccion";
import { Instalacion } from "./pages/Instalacion";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Introduccion />} />
        <Route path="/instalacion" element={<Instalacion />} />

        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
