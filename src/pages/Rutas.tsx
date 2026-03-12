import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const instalacionCode = `pnpm install react-router-dom@latest`;

const tiposRoutersCode = `<span class="keyword">import</span> {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
} <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">App</span>() {
  <span class="keyword">return</span> (
    &lt;BrowserRouter&gt;
      &lt;div&gt;Mi aplicación&lt;/div&gt;
    &lt;/BrowserRouter&gt;
  );
}`;

const linkNavLinkCode = `<span class="keyword">import</span> { Link, NavLink } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">Menu</span>() {
  <span class="keyword">return</span> (
    &lt;nav&gt;
      &lt;Link to=<span class="string">"/"</span>&gt;Inicio&lt;/Link&gt;

      &lt;NavLink to=<span class="string">"/about"</span>&gt;
        Acerca de
      &lt;/NavLink&gt;
    &lt;/nav&gt;
  );
}`;

const rutasDinamicasCode = `<span class="keyword">import</span> { useParams } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">UsuarioDetalle</span>() {
  <span class="keyword">const</span> { id } = <span class="function">useParams</span>();

  <span class="keyword">return</span> &lt;h2&gt;Usuario con id: {id}&lt;/h2&gt;;
}`;

const rutasDinamicasDefinicionCode = `<span class="keyword">import</span> { createBrowserRouter } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  { path: <span class="string">"/"</span>, element: &lt;Home /&gt; },
  { path: <span class="string">"/usuarios/:id"</span>, element: &lt;UsuarioDetalle /&gt; },
]);`;

const rutasDinamicasJSXCode = `<span class="keyword">import</span> { BrowserRouter, Routes, Route } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">App</span>() {
  <span class="keyword">return</span> (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path=<span class="string">"/"</span> element={&lt;Home /&gt;} /&gt;
        &lt;Route path=<span class="string">"/usuarios/:id"</span> element={&lt;UsuarioDetalle /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}`;

const rutasAnidadasCode = `<span class="keyword">import</span> { Outlet } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">DashboardLayout</span>() {
  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;header&gt;Panel&lt;/header&gt;
      &lt;aside&gt;Sidebar&lt;/aside&gt;
      &lt;main&gt;
        &lt;Outlet /&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
}`;

const rutasAnidadasJSXCode = `<span class="keyword">import</span> { BrowserRouter, Routes, Route } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">App</span>() {
  <span class="keyword">return</span> (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path=<span class="string">"/dashboard"</span> element={&lt;DashboardLayout /&gt;}&gt;
          &lt;Route path=<span class="string">"inicio"</span> element={&lt;Inicio /&gt;} /&gt;
          &lt;Route path=<span class="string">"perfil"</span> element={&lt;Perfil /&gt;} /&gt;
          &lt;Route path=<span class="string">"ajustes"</span> element={&lt;Ajustes /&gt;} /&gt;
        &lt;/Route&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}`;

const rutasAnidadasRegistroCode = `<span class="keyword">import</span> { createBrowserRouter, RouterProvider } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  {
    path: <span class="string">"/dashboard"</span>,
    element: &lt;DashboardLayout /&gt;,
    children: [
      { path: <span class="string">"inicio"</span>, element: &lt;Inicio /&gt; },
      { path: <span class="string">"perfil"</span>, element: &lt;Perfil /&gt; },
      { path: <span class="string">"ajustes"</span>, element: &lt;Ajustes /&gt; },
    ],
  },
]);`;

const createBrowserRouterCode = `<span class="keyword">import</span> { createBrowserRouter, RouterProvider } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;
<span class="keyword">import</span> Home <span class="keyword">from</span> <span class="string">"./pages/Home"</span>;
<span class="keyword">import</span> About <span class="keyword">from</span> <span class="string">"./pages/About"</span>;

<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  { path: <span class="string">"/"</span>, element: &lt;Home /&gt; },
  { path: <span class="string">"/about"</span>, element: &lt;About /&gt; },
]);

<span class="keyword">function</span> <span class="function">App</span>() {
  <span class="keyword">return</span> &lt;RouterProvider router={router} /&gt;;
}`;

const useNavigateCode = `<span class="keyword">import</span> { useNavigate } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">Login</span>() {
  <span class="keyword">const</span> navigate = <span class="function">useNavigate</span>();

  <span class="keyword">const</span> <span class="function">manejarLogin</span> = () =&gt; {
    <span class="function">navigate</span>(<span class="string">"/dashboard"</span>);
  };

  <span class="keyword">return</span> &lt;button onClick={manejarLogin}&gt;Entrar&lt;/button&gt;;
}`;

const useLocationCode = `<span class="keyword">import</span> { useLocation } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">RutaActual</span>() {
  <span class="keyword">const</span> location = <span class="function">useLocation</span>();

  <span class="keyword">return</span> &lt;p&gt;Ruta actual: {location.pathname}&lt;/p&gt;;
}`;

const navigateRedirectCode = `<span class="keyword">import</span> { Navigate } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">RutaPrivada</span>({ usuario }) {
  <span class="keyword">if</span> (!usuario) {
    <span class="keyword">return</span> &lt;Navigate to=<span class="string">"/login"</span> replace /&gt;;
  }

  <span class="keyword">return</span> &lt;h2&gt;Contenido privado&lt;/h2&gt;;
}`;

const searchParamsCode = `<span class="keyword">import</span> { useSearchParams } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">Productos</span>() {
  <span class="keyword">const</span> [searchParams, setSearchParams] = <span class="function">useSearchParams</span>();
  <span class="keyword">const</span> categoria = searchParams.<span class="function">get</span>(<span class="string">"categoria"</span>);

  <span class="keyword">const</span> <span class="function">cambiarCategoria</span> = () =&gt; {
    <span class="function">setSearchParams</span>({ categoria: <span class="string">"tecnologia"</span> });
  };

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;p&gt;Categoría: {categoria}&lt;/p&gt;
      &lt;button onClick={cambiarCategoria}&gt;Cambiar categoría&lt;/button&gt;
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
        React Router permite crear navegación dentro de una aplicación React
        usando rutas asociadas a la URL, sin necesidad de recargar la página en
        cada cambio de vista.
      </p>

      <h2
        id="estructura"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Estructura
      </h2>
      <p className="text-base leading-7 text-[#141414] my-6">
        La estructura básica de React Router se compone de varios elementos
        fundamentales que trabajan en conjunto:
      </p>

      <ul className="list-disc list-inside space-y-3 text-base leading-7 text-[#141414] my-6 ml-4">
        <li>
          <span className="font-semibold">Router (Provider):</span> El
          componente contenedor principal (BrowserRouter, HashRouter, etc.) que
          proporciona el contexto de navegación a toda la aplicación. Similar a
          React Context, permite que los componentes hijos accedan a la
          información de rutas.
        </li>
        <li>
          <span className="font-semibold">Routes:</span> Contenedor que agrupa
          todas las rutas de la aplicación. Solo renderiza la primera ruta que
          coincida con la URL actual.
        </li>
        <li>
          <span className="font-semibold">Route:</span> Define una ruta
          específica usando las props{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            path
          </code>{" "}
          (URL) y{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            element
          </code>{" "}
          (componente a renderizar).
        </li>
        <li>
          <span className="font-semibold">Link/NavLink:</span> En lugar de
          etiquetas{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            &lt;a&gt;
          </code>
          , React Router usa estos componentes para crear enlaces que navegan
          sin recargar la página.
        </li>
        <li>
          <span className="font-semibold">Outlet:</span> Placeholder para
          renderizar rutas anidadas dentro de un componente padre.
        </li>
      </ul>

      <p className="text-base leading-7 text-[#141414] my-6">
        Además, los Routers permiten incluir componentes persistentes como Menús
        o Footers que se mantienen visibles en todas las vistas, asegurando una
        estructura consistente en la aplicación.
      </p>

      <h2
        id="instalacion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Instalación
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para usar React Router, primero debes instalar la librería{" "}
        <span className="font-semibold">react-router-dom</span>.
      </p>

      <Codeblock code={instalacionCode} title="Terminal" />

      <Note title="Idea clave">
        React Router agrega navegación del lado del cliente, permitiendo cambiar
        de vista según la <span className="font-semibold">URL</span>.
      </Note>

      <h2
        id="tipos-de-routers"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Tipos de routers
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        React Router ofrece distintos tipos de routers según el entorno donde se
        ejecuta la aplicación.
      </p>

      <Codeblock code={tiposRoutersCode} title="TSX" />

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            BrowserRouter
          </h3>
          <p className="text-sm text-[#757575]">
            Es el más usado en aplicaciones web. Utiliza el historial normal del
            navegador.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">HashRouter</h3>
          <p className="text-sm text-[#757575]">
            Usa el fragmento de la URL con <code>#</code>. Suele servir cuando
            el servidor no está preparado para manejar rutas.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            MemoryRouter
          </h3>
          <p className="text-sm text-[#757575]">
            Guarda el historial en memoria. Es común en pruebas o entornos no
            basados en navegador.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold mt-10 mb-4 text-[#141414]">
        Comparación
      </h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f4f4f4]">
              <th className="px-4 py-3 font-semibold text-[#141414] border-b border-[#e5e5e5]">
                Router
              </th>
              <th className="px-4 py-3 font-semibold text-[#141414] border-b border-[#e5e5e5]">
                URL
              </th>
              <th className="px-4 py-3 font-semibold text-[#141414] border-b border-[#e5e5e5]">
                Config. servidor
              </th>
              <th className="px-4 py-3 font-semibold text-[#141414] border-b border-[#e5e5e5]">
                Uso principal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#f2f2f2]">
              <td className="px-4 py-3 font-semibold text-[#141414]">
                BrowserRouter
              </td>
              <td className="px-4 py-3">
                <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">
                  /about
                </code>
              </td>
              <td className="px-4 py-3 text-[#141414]">Sí</td>
              <td className="px-4 py-3 text-[#141414]">Apps web modernas</td>
            </tr>
            <tr className="border-b border-[#f2f2f2] bg-[#fafafa]">
              <td className="px-4 py-3 font-semibold text-[#141414]">
                HashRouter
              </td>
              <td className="px-4 py-3">
                <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded">
                  /#/about
                </code>
              </td>
              <td className="px-4 py-3 text-[#141414]">No</td>
              <td className="px-4 py-3 text-[#141414]">
                GitHub Pages, estáticas
              </td>
            </tr>
            <tr className="border-b border-[#f2f2f2]">
              <td className="px-4 py-3 font-semibold text-[#141414]">
                MemoryRouter
              </td>
              <td className="px-4 py-3 text-[#757575]">(no cambia)</td>
              <td className="px-4 py-3 text-[#141414]">No aplica</td>
              <td className="px-4 py-3 text-[#141414]">
                Testing, React Native
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2
        id="enlaces-link-y-navlink"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Enlaces (Link y NavLink)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para moverte entre rutas se usan componentes como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">Link</code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          NavLink
        </code>
        .
      </p>

      <Codeblock code={linkNavLinkCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Link</span> permite navegar sin recargar
        la página, mientras que <span className="font-semibold">NavLink</span>{" "}
        añade información útil para detectar si la ruta actual está activa.
      </p>

      <h2
        id="rutas-dinamicas-useparams"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Rutas dinámicas (useParams)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las rutas dinámicas permiten capturar partes variables de la URL usando
        el prefijo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">:</code>.
        Son útiles para páginas de detalle como perfiles de usuario, artículos o
        productos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Puedes definir la ruta con el segmento dinámico de dos formas. Con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          &lt;Route&gt;
        </code>{" "}
        en JSX:
      </p>

      <Codeblock code={rutasDinamicasJSXCode} title="App.tsx" />

      <p className="text-base leading-7 text-[#141414] my-6">
        O usando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createBrowserRouter
        </code>{" "}
        con un array de objetos:
      </p>

      <Codeblock code={rutasDinamicasDefinicionCode} title="router/index.tsx" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Luego, dentro del componente, usas el hook{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useParams
        </code>{" "}
        para leer el valor capturado:
      </p>

      <Codeblock code={rutasDinamicasCode} title="TSX" />

      <Note title="Tip">
        Puedes tener múltiples segmentos dinámicos en una misma ruta, por
        ejemplo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          /equipos/:equipoId/jugadores/:jugadorId
        </code>
        . Cada uno estará disponible como una clave en el objeto que devuelve{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useParams
        </code>
        .
      </Note>

      <h2
        id="create-browser-router"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Browser Router
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        A partir de React Router v6.4,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createBrowserRouter
        </code>{" "}
        es la forma recomendada de definir rutas. En lugar de JSX, las rutas se
        declaran como un array de objetos y se conectan a la aplicación mediante{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          RouterProvider
        </code>
        .
      </p>

      <Codeblock code={createBrowserRouterCode} title="router/index.tsx" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esta API habilita características avanzadas como{" "}
        <span className="font-semibold">loaders</span>,{" "}
        <span className="font-semibold">actions</span> y manejo de errores por
        ruta con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          errorElement
        </code>
        , que no están disponibles con la sintaxis JSX clásica.
      </p>

      <Note title="¿Cuál usar?">
        Para proyectos nuevos o que necesiten data fetching integrado usa{" "}
        <span className="font-semibold">createBrowserRouter</span>. Para
        proyectos sencillos o migraciones desde v5, la sintaxis con{" "}
        <span className="font-semibold">&lt;BrowserRouter&gt;</span> sigue
        siendo válida.
      </Note>

      <h2
        id="rutas-anidadas-outlet"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Rutas anidadas (Outlet)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las rutas anidadas permiten compartir una estructura común entre varias
        páginas: un layout con header, sidebar o footer que se mantiene fijo
        mientras el contenido interior cambia según la ruta activa.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        El componente layout usa{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Outlet
        </code>{" "}
        para marcar dónde se renderizará la ruta hija. Este es el mismo en ambas
        formas:
      </p>

      <Codeblock code={rutasAnidadasCode} title="DashboardLayout.tsx" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Sin{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          BrowserRouter
        </code>
        , las rutas hijas se anidan como elementos{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          &lt;Route&gt;
        </code>{" "}
        dentro del padre:
      </p>

      <Codeblock code={rutasAnidadasJSXCode} title="App.tsx" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createBrowserRouter
        </code>
        , se usa la propiedad{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          children
        </code>{" "}
        en el objeto de la ruta padre:
      </p>

      <Codeblock code={rutasAnidadasRegistroCode} title="router/index.tsx" />

      <Note title="Cómo funciona">
        Al navegar a{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          /dashboard/perfil
        </code>
        , React Router renderiza{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          DashboardLayout
        </code>{" "}
        y coloca{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Perfil
        </code>{" "}
        exactamente donde está el{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Outlet
        </code>
        .
      </Note>

      <h2
        id="direccionar-usenavigate"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Direccionar (useNavigate)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El hook{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useNavigate
        </code>{" "}
        permite navegar mediante código, en lugar de depender solo de enlaces
        visibles en pantalla.
      </p>

      <Codeblock code={useNavigateCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Es útil después de un login, al enviar un formulario o cuando quieres
        redirigir al usuario tras una acción.
      </p>

      <h2
        id="ubicacion-actual-uselocation"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Ubicación actual (useLocation)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El hook{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useLocation
        </code>{" "}
        devuelve información sobre la ubicación actual, como el pathname, la
        búsqueda y otros datos del historial.
      </p>

      <Codeblock code={useLocationCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto puede servir para resaltar secciones, registrar navegación o tomar
        decisiones según la ruta activa.
      </p>

      <h2
        id="redireccion-navigate"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Redirección (Navigate)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El componente{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Navigate
        </code>{" "}
        permite redirigir declarativamente desde el render de un componente.
      </p>

      <Codeblock code={navigateRedirectCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Es muy común usarlo para proteger rutas privadas o redirigir cuando un
        usuario no cumple cierta condición.
      </p>

      <h2
        id="parametros-de-busqueda-usesearchparams"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Parámetros de búsqueda (useSearchParams)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los parámetros de búsqueda son los valores que aparecen en la URL
        después del signo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">?</code>,
        por ejemplo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          /productos?categoria=tecnologia
        </code>
        .
      </p>

      <Codeblock code={searchParamsCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El hook{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useSearchParams
        </code>{" "}
        permite leer y actualizar esos valores fácilmente.
      </p>

      <Note title="Buena práctica">
        Usa <span className="font-semibold">Link</span> y{" "}
        <span className="font-semibold">NavLink</span> para navegación visible,
        <span className="font-semibold"> useNavigate</span> para navegación por
        lógica, y <span className="font-semibold">Navigate</span> cuando
        necesites una redirección declarativa en el render.
      </Note>
    </DocsLayout>
  );
};
