import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const crearProyectoCode = `npm create vite@latest mi-proyecto-react
cd mi-proyecto-react
npm install
npm run dev`;

const estructuraInicialCode = `mi-proyecto-react/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts`;

export const Instalacion = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[0].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Instalación de React
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Para comenzar a trabajar con React necesitas tener instalado un entorno
        básico de desarrollo. Hoy en día, una de las formas más rápidas y
        recomendadas para iniciar un proyecto es usando Vite.
      </p>

      <h2
        id="requisitos-previos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Requisitos previos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Antes de crear un proyecto React, necesitas tener instalado{" "}
        <span className="font-semibold">Node.js</span>, ya que incluye{" "}
        <span className="font-semibold">npm</span>, el administrador de paquetes
        que permite instalar dependencias y ejecutar scripts.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        También es recomendable contar con un editor de código moderno como
        Visual Studio Code, ya que facilita la escritura, navegación y
        depuración del proyecto.
      </p>

      <Note title="Importante">
        React no se instala globalmente como un programa independiente. Lo
        habitual es crear un proyecto y luego instalar allí sus dependencias.
      </Note>

      <h2
        id="crear-proyecto-vite"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear proyecto con Vite
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Vite es una herramienta moderna de desarrollo frontend que permite crear
        proyectos React de forma rápida, con una configuración inicial liviana y
        un servidor de desarrollo muy veloz.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Puedes crear un nuevo proyecto ejecutando estos comandos en la terminal:
      </p>

      <Codeblock code={crearProyectoCode} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Durante el proceso, Vite puede preguntarte qué framework y variante
        deseas usar. En ese caso, selecciona{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          React
        </code>{" "}
        y luego la variante que prefieras, por ejemplo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          TypeScript
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          JavaScript
        </code>
        .
      </p>

      <h2
        id="estructura-inicial"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Estructura inicial del proyecto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una vez creado el proyecto, verás una estructura de archivos similar a
        esta:
      </p>

      <Codeblock code={estructuraInicialCode} title="Estructura" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">src/</h3>
          <p className="text-sm text-[#757575]">
            Contiene el código principal de la aplicación, incluyendo
            componentes, estilos y archivos de entrada.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">public/</h3>
          <p className="text-sm text-[#757575]">
            Guarda archivos estáticos que se sirven directamente, como imágenes
            o íconos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">App.tsx</h3>
          <p className="text-sm text-[#757575]">
            Suele ser el componente principal de la aplicación, donde comienza a
            construirse la interfaz.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">main.tsx</h3>
          <p className="text-sm text-[#757575]">
            Es el punto de entrada donde React monta la aplicación en el DOM.
          </p>
        </div>
      </div>

      <h2
        id="primer-ejecutar"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Ejecutar por primera vez
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Después de instalar las dependencias, puedes iniciar el servidor de
        desarrollo con:
      </p>

      <Codeblock code={`npm run dev`} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto levantará una dirección local, normalmente algo como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          http://localhost:5173
        </code>
        , donde podrás ver tu proyecto React funcionando en el navegador.
      </p>

      <Note title="Consejo" icon="terminal">
        Cada vez que guardes cambios en tus archivos, Vite actualizará la
        aplicación automáticamente gracias al{" "}
        <span className="font-semibold">hot reload</span>.
      </Note>

      <h2
        id="editor-recomendado"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Editor recomendado
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Uno de los editores más usados para trabajar con React es{" "}
        <span className="font-semibold">Visual Studio Code</span>, porque ofrece
        una gran cantidad de extensiones útiles para JavaScript, TypeScript,
        JSX, TSX, linting y formateo.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Algunas extensiones habituales son Prettier, ESLint y las relacionadas
        con React o Tailwind CSS, ya que ayudan a mejorar la productividad y la
        calidad del código.
      </p>
    </DocsLayout>
  );
};
