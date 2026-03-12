import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const verificarNode = `node -v # Verificar versión de Node.js
pnpm -v # Verificar versión de pnpm`;

const crearProyectoCode = `pnpm create vite@latest`;

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

const envFileCode = `# .env
VITE_API_URL=https://api.ejemplo.com
VITE_APP_TITLE=Mi Aplicación`;

const envUsageCode = `<span class="keyword">const</span> apiUrl = import.meta.env.<span class="string">VITE_API_URL</span>;
<span class="keyword">const</span> title = import.meta.env.<span class="string">VITE_APP_TITLE</span>;`;

const twInstallCode = `pnpm install -D tailwindcss @tailwindcss/vite`;

const twViteConfigCode = `<span class="keyword">import</span> { defineConfig } <span class="keyword">from</span> 'vite'
<span class="keyword">import</span> react <span class="keyword">from</span> '@vitejs/plugin-react'
<span class="keyword">import</span> tailwindcss <span class="keyword">from</span> '@tailwindcss/vite'

<span class="keyword">export default</span> <span class="function">defineConfig</span>({
  plugins: [<span class="function">react</span>(), <span class="function">tailwindcss</span>()],
})`;

const twCssCode = `<span class="keyword">@import</span> <span class="string">"tailwindcss"</span>;`;

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
        Asegúrate de tener instalado Node.js (versión 18 o superior) y un gestor
        de paquetes como pnpm, npm o yarn. Puedes verificarlo ejecutando estos
        comandos en tu terminal:
      </p>
      <Codeblock code={verificarNode} title="Terminal" />

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
        Puedes crear un nuevo proyecto ejecutando este comando en la terminal:
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
        Algunas extensiones recomendadas para trabajar con React son:
      </p>

      <ul className="list-disc list-inside space-y-2 text-base leading-7 text-[#141414] my-6 ml-4">
        <li>
          <span className="font-semibold">Prettier</span> — formatea el código
          automáticamente al guardar, manteniendo un estilo consistente.
        </li>
        <li>
          <span className="font-semibold">ESLint</span> — detecta errores y
          malas prácticas en el código JavaScript y TypeScript.
        </li>
        <li>
          <span className="font-semibold">
            ES7+ React/Redux/React-Native snippets
          </span>{" "}
          — aporta atajos para generar componentes, hooks y otras estructuras de
          React rápidamente.
        </li>
        <li>
          <span className="font-semibold">Tailwind CSS IntelliSense</span> —
          ofrece autocompletado, vista previa de colores y documentación de las
          clases de Tailwind.
        </li>
        <li>
          <span className="font-semibold">Auto Rename Tag</span> — renombra
          automáticamente la etiqueta de cierre al modificar la de apertura en
          JSX y HTML.
        </li>
        <li>
          <span className="font-semibold">Path Intellisense</span> —
          autocompleta rutas de archivos al escribir importaciones.
        </li>
        <li>
          <span className="font-semibold">GitLens</span> — enriquece la
          integración con Git mostrando el historial y la autoría de cada línea
          de código.
        </li>
      </ul>

      <h2
        id="tailwind"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Tailwind CSS v4
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La versión 4 simplifica el proceso de instalación:
      </p>

      <Codeblock code={twInstallCode} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Luego registra el plugin en{" "}
        <span className="font-semibold">vite.config.ts</span>:
      </p>

      <Codeblock title="vite.config.ts" code={twViteConfigCode} />

      <p className="text-base leading-7 text-[#141414] my-6">
        Finalmente, en tu archivo CSS principal (por ejemplo{" "}
        <span className="font-semibold">index.css</span>), añade la siguiente
        directiva en lugar de las tres anteriores de Tailwind v3:
      </p>

      <Codeblock title="index.css" code={twCssCode} />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con esto ya puedes usar las clases de Tailwind en todos tus componentes
        de React sin configuración adicional.
      </p>

      <h2
        id="variables-de-entorno"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Variables de entorno
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Vite permite usar variables de entorno mediante archivos{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">.env</code>
        . Las variables deben comenzar con el prefijo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          VITE_
        </code>{" "}
        para ser accesibles en el cliente:
      </p>

      <Codeblock title=".env" code={envFileCode} />

      <p className="text-base leading-7 text-[#141414] my-6">
        Para acceder a estas variables en tu código:
      </p>

      <Codeblock code={envUsageCode} />
    </DocsLayout>
  );
};
