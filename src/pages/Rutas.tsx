import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const instalarRouterCode = `npm install react-router-dom`;

const definirRutasCode = `<span class="keyword">import</span> { BrowserRouter, Routes, Route } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> App() {
  <span class="keyword">return</span> (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path=<span class="string">"/"</span> element={&lt;Inicio /&gt;} /&gt;
        &lt;Route path=<span class="string">"/about"</span> element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}`;

const linkNavLinkCode = `<span class="keyword">import</span> { Link, NavLink } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> Menu() {
  <span class="keyword">return</span> (
    &lt;nav&gt;
      &lt;Link to=<span class="string">"/"</span>&gt;Inicio&lt;/Link&gt;
      &lt;NavLink to=<span class="string">"/about"</span>&gt;Acerca de&lt;/NavLink&gt;
    &lt;/nav&gt;
  );
}`;

const parametrosRutaCode = `<span class="keyword">import</span> { useParams } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> Usuario() {
  <span class="keyword">const</span> { id } = useParams();

  <span class="keyword">return</span> &lt;h2&gt;Usuario {id}&lt;/h2&gt;;
}`;

const rutasAnidadasCode = `<span class="keyword">import</span> { Outlet } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> Layout() {
  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;header&gt;Header&lt;/header&gt;
      &lt;Outlet /&gt;
    &lt;/div&gt;
  );
}`;

export const Rutas = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        React Router
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        React Router es la biblioteca más utilizada para manejar navegación y
        rutas dentro de aplicaciones React de una sola página (SPA).
      </p>

      <h2
        id="que-es-react-router"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es React Router?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        React Router permite cambiar entre diferentes vistas de una aplicación
        sin recargar la página. Cada vista se asocia a una ruta específica de la
        URL.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto permite construir aplicaciones con múltiples páginas utilizando un
        único archivo HTML.
      </p>

      <Codeblock code={instalarRouterCode} title="Terminal" />

      <Note title="Idea clave">
        React Router permite crear navegación entre componentes usando{" "}
        <span className="font-semibold">rutas basadas en la URL</span>.
      </Note>

      <h2
        id="definir-rutas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Definir rutas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para definir rutas se utilizan los componentes{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          BrowserRouter
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Routes
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Route
        </code>
        .
      </p>

      <Codeblock code={definirRutasCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Cada ruta tiene una propiedad{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">path</code>{" "}
        y el componente que debe renderizarse.
      </p>

      <h2
        id="link-navlink"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Link y NavLink
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para navegar entre páginas se utilizan los componentes{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">Link</code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          NavLink
        </code>
        .
      </p>

      <Codeblock code={linkNavLinkCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        A diferencia de un enlace HTML normal, estos componentes cambian la URL
        sin recargar la página.
      </p>

      <h2
        id="parametros"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Parámetros de ruta
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las rutas pueden incluir parámetros dinámicos que permiten mostrar
        información según la URL.
      </p>

      <Codeblock code={parametrosRutaCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Por ejemplo, la ruta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          /usuarios/:id
        </code>{" "}
        permite acceder a distintos usuarios usando el parámetro{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">id</code>.
      </p>

      <h2
        id="rutas-anidadas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Rutas anidadas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las rutas también pueden organizarse de forma jerárquica. Esto permite
        compartir layouts o estructuras entre distintas páginas.
      </p>

      <Codeblock code={rutasAnidadasCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El componente{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Outlet
        </code>{" "}
        indica dónde se renderizarán las rutas hijas dentro del layout.
      </p>

      <Note title="Buena práctica">
        Organiza las rutas usando layouts y rutas anidadas para mantener una
        estructura clara y reutilizable en aplicaciones grandes.
      </Note>
    </DocsLayout>
  );
};
