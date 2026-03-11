import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";

export const Introduccion = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[0].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Introducción a React
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        React es una biblioteca de JavaScript desarrollada por Meta para crear
        interfaces de usuario modernas, dinámicas y reutilizables mediante el
        uso de componentes.
      </p>

      <h2
        id="que-es-react"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es React?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        React es una biblioteca enfocada en la construcción de interfaces de
        usuario basadas en componentes. Cada componente representa una parte de
        la interfaz y puede reutilizarse en distintas partes de la aplicación.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        A diferencia de otros enfoques tradicionales, React utiliza un sistema
        llamado <span className="font-semibold">Virtual DOM</span>, que permite
        actualizar la interfaz de forma eficiente cuando cambian los datos.
      </p>

      <Note title="Idea principal">
        React divide la interfaz en{" "}
        <span className="font-semibold">componentes reutilizables</span>, lo que
        permite construir aplicaciones complejas a partir de pequeñas piezas de
        código.
      </Note>

      <h2
        id="por-que-react"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Por qué usar React?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        React es una de las herramientas más utilizadas para el desarrollo
        frontend debido a su flexibilidad, rendimiento y gran ecosistema de
        librerías.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Componentes reutilizables
          </h3>
          <p className="text-sm text-[#757575]">
            Permite construir interfaces reutilizando piezas de código, lo que
            facilita el mantenimiento y la escalabilidad.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Virtual DOM</h3>
          <p className="text-sm text-[#757575]">
            Optimiza las actualizaciones de la interfaz reduciendo el trabajo
            que debe realizar el navegador.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Gran ecosistema
          </h3>
          <p className="text-sm text-[#757575]">
            React cuenta con miles de librerías, herramientas y una comunidad
            muy activa.
          </p>
        </div>
      </div>

      <h2
        id="como-funciona-react"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Cómo funciona React?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        React utiliza un modelo declarativo. En lugar de manipular directamente
        el DOM, el desarrollador describe cómo debe verse la interfaz según el
        estado de la aplicación.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cuando el estado cambia, React calcula la diferencia entre la versión
        anterior y la nueva utilizando el Virtual DOM y actualiza únicamente los
        elementos necesarios en el DOM real.
      </p>

      <h2
        id="primer-componente"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Primer componente
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En React, la interfaz se construye mediante componentes. Un componente
        es simplemente una función que devuelve JSX.
      </p>

      <pre className="bg-[#f7f7f7] p-4 rounded-lg text-sm overflow-x-auto">
        {`function App() {
  return <h1>Hola React</h1>;
}`}
      </pre>

      <p className="text-base leading-7 text-[#141414] my-6">
        Este componente devuelve un elemento JSX que React renderiza en el
        navegador.
      </p>

      <h2
        id="renderizado"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Renderizado en pantalla
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para mostrar el componente en el navegador, React lo monta dentro de un
        elemento del DOM, normalmente un contenedor con id{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">root</code>
        .
      </p>

      <pre className="bg-[#f7f7f7] p-4 rounded-lg text-sm overflow-x-auto">
        {`import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);`}
      </pre>
    </DocsLayout>
  );
};
