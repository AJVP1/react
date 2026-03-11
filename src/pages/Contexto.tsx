import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const queEsContextCode = `<span class="keyword">import</span> { createContext } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">const</span> TemaContext = createContext(<span class="string">"light"</span>);`;

const crearContextoCode = `<span class="keyword">import</span> { createContext } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">export</span> <span class="keyword">const</span> UsuarioContext = createContext(<span class="keyword">null</span>);`;

const providerCode = `<span class="keyword">import</span> { UsuarioContext } <span class="keyword">from</span> <span class="string">"./UsuarioContext"</span>;

<span class="keyword">function</span> App() {
  <span class="keyword">const</span> usuario = { nombre: <span class="string">"Armando"</span> };

  <span class="keyword">return</span> (
    &lt;UsuarioContext.Provider value={usuario}&gt;
      &lt;Perfil /&gt;
    &lt;/UsuarioContext.Provider&gt;
  );
}`;

const consumirContextoCode = `<span class="keyword">import</span> { useContext } <span class="keyword">from</span> <span class="string">"react"</span>;
<span class="keyword">import</span> { UsuarioContext } <span class="keyword">from</span> <span class="string">"./UsuarioContext"</span>;

<span class="keyword">function</span> Perfil() {
  <span class="keyword">const</span> usuario = useContext(UsuarioContext);

  <span class="keyword">return</span> &lt;h2&gt;Hola {usuario.nombre}&lt;/h2&gt;;
}`;

export const UseContext = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[2].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        useContext
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        El hook <span className="font-semibold">useContext</span> permite
        compartir datos entre múltiples componentes sin necesidad de pasar props
        manualmente a través de muchos niveles de la aplicación.
      </p>

      <h2
        id="que-es-context"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es Context?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Context es una característica de React que permite compartir información
        global dentro de una aplicación, como el usuario autenticado, el tema de
        la interfaz o configuraciones generales.
      </p>

      <Codeblock code={queEsContextCode} title="TSX" />

      <Note title="Idea clave">
        Context permite evitar el problema conocido como{" "}
        <span className="font-semibold">prop drilling</span>, donde los datos
        deben pasarse manualmente a través de muchos componentes intermedios.
      </Note>

      <h2
        id="crear-contexto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear un contexto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para crear un contexto se utiliza la función{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createContext
        </code>
        . Esto genera un objeto que puede ser compartido en la aplicación.
      </p>

      <Codeblock code={crearContextoCode} title="TSX" />

      <h2
        id="provider"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Provider
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El <span className="font-semibold">Provider</span> es el componente que
        permite suministrar el valor del contexto a todos los componentes hijos.
      </p>

      <Codeblock code={providerCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Cualquier componente dentro del Provider puede acceder a ese valor.
      </p>

      <h2
        id="consumir-contexto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Consumir contexto con useContext
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para leer el valor de un contexto se utiliza el hook{" "}
        <span className="font-semibold">useContext</span>.
      </p>

      <Codeblock code={consumirContextoCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este hook devuelve el valor actual del contexto más cercano definido por
        un Provider.
      </p>

      <h2
        id="casos-de-uso"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Casos de uso
      </h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Autenticación
          </h3>
          <p className="text-sm text-[#757575]">
            Compartir la información del usuario autenticado en toda la
            aplicación.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Tema visual</h3>
          <p className="text-sm text-[#757575]">
            Manejar temas como modo claro u oscuro en toda la interfaz.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Configuración global
          </h3>
          <p className="text-sm text-[#757575]">
            Compartir configuraciones o datos que muchos componentes necesitan.
          </p>
        </div>
      </div>

      <Note title="Buena práctica">
        Usa Context para datos verdaderamente globales. Para estados locales o
        específicos de pocos componentes, las props suelen ser suficientes.
      </Note>
    </DocsLayout>
  );
};
