// importar librerias
import { HashRouter, Routes, Route } from "react-router-dom";

// importar paginas
import { Introduccion } from "./pages/Introduccion";
import { Instalacion } from "./pages/Instalacion";
import { JSX } from "./pages/Jsx";
import { Componentes } from "./pages/Componentes";
import { Estado } from "./pages/Estado";
import { Eventos } from "./pages/Eventos";
import { UseEffect } from "./pages/Efectos";
import { UseRef } from "./pages/Referencia";
import { UseId } from "./pages/Identificacion";
import { Rutas } from "./pages/Rutas";
import { Formularios } from "./pages/Formularios";
import { Zustand } from "./pages/Zustand";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Introduccion />} />
        <Route path="/instalacion" element={<Instalacion />} />
        <Route path="/jsx" element={<JSX />} />
        <Route path="/componentes" element={<Componentes />} />
        <Route path="/estado" element={<Estado />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-id" element={<UseId />} />
        <Route path="/rutas" element={<Rutas />} />
        <Route path="/formularios" element={<Formularios />}></Route>
        <Route path="/zustand" element={<Zustand />} />

        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
