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

const lazyLoadingCode = `<span class="keyword">import</span> { createBrowserRouter } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;
<span class="keyword">import</span> { lazy, Suspense } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">const</span> Dashboard = <span class="function">lazy</span>(() => <span class="keyword">import</span>(<span class="string">"./pages/Dashboard"</span>));

<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  {
    path: <span class="string">"/dashboard"</span>,
    element: (
      &lt;Suspense fallback={&lt;p&gt;Cargando...&lt;/p&gt;}&gt;
        &lt;Dashboard /&gt;
      &lt;/Suspense&gt;
    ),
  },
]);`;

const redirectCode = `<span class="keyword">import</span> { createBrowserRouter, redirect } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  {
    path: <span class="string">"/admin"</span>,
    element: &lt;Admin /&gt;,
    loader: <span class="keyword">async</span> () =&gt; {
      <span class="keyword">const</span> autenticado = <span class="keyword">await</span> <span class="function">verificarSesion</span>();
      <span class="keyword">if</span> (!autenticado) <span class="keyword">return</span> <span class="function">redirect</span>(<span class="string">"/login"</span>);
      <span class="keyword">return</span> <span class="keyword">null</span>;
    },
  },
]);`;

const loaderCode = `<span class="comment">// router/index.tsx</span>
<span class="keyword">import</span> { createBrowserRouter } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  {
    path: <span class="string">"/usuarios/:id"</span>,
    element: &lt;UsuarioDetalle /&gt;,
    loader: <span class="keyword">async</span> ({ params }) =&gt; {
      <span class="keyword">const</span> res = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">\`/api/usuarios/\${params.id}\`</span>);
      <span class="keyword">return</span> res.<span class="function">json</span>();
    },
  },
]);

<span class="comment">// UsuarioDetalle.tsx</span>
<span class="keyword">import</span> { useLoaderData } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">UsuarioDetalle</span>() {
  <span class="keyword">const</span> usuario = <span class="function">useLoaderData</span>();

  <span class="keyword">return</span> &lt;h2&gt;{usuario.nombre}&lt;/h2&gt;;
}`;

const actionCode = `<span class="comment">// router/index.tsx</span>
<span class="keyword">import</span> { createBrowserRouter, redirect } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  {
    path: <span class="string">"/contacto"</span>,
    element: &lt;Contacto /&gt;,
    action: <span class="keyword">async</span> ({ request }) =&gt; {
      <span class="keyword">const</span> data = <span class="keyword">await</span> request.<span class="function">formData</span>();
      <span class="keyword">await</span> <span class="function">enviarMensaje</span>(data);
      <span class="keyword">return</span> <span class="function">redirect</span>(<span class="string">"/gracias"</span>);
    },
  },
]);

<span class="comment">// Contacto.tsx</span>
<span class="keyword">import</span> { Form } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">Contacto</span>() {
  <span class="keyword">return</span> (
    &lt;Form method=<span class="string">"post"</span>&gt;
      &lt;input name=<span class="string">"mensaje"</span> /&gt;
      &lt;button type=<span class="string">"submit"</span>&gt;Enviar&lt;/button&gt;
    &lt;/Form&gt;
  );
}`;

const errorBoundaryCode = `<span class="keyword">import</span> { useRouteError } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">function</span> <span class="function">ErrorPage</span>() {
  <span class="keyword">const</span> error = <span class="function">useRouteError</span>();

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;h2&gt;Algo salió mal&lt;/h2&gt;
      &lt;p&gt;{error.message}&lt;/p&gt;
    &lt;/div&gt;
  );
}

<span class="comment">// router/index.tsx</span>
<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  {
    path: <span class="string">"/usuarios/:id"</span>,
    element: &lt;UsuarioDetalle /&gt;,
    loader: fetchUsuario,
    errorElement: &lt;ErrorPage /&gt;,
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
      toc={<TableOfContents items={modulosData.sidebar[3].items[0].toc} />}
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
        Con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createBrowserRouter
        </code>
        , la estructura se define como un array de objetos y se conecta a la
        aplicación mediante{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          RouterProvider
        </code>
        . Sus elementos principales son:
      </p>

      <ul className="list-disc list-inside space-y-3 text-base leading-7 text-[#141414] my-6 ml-4">
        <li>
          <span className="font-semibold">createBrowserRouter:</span> Recibe un
          array de objetos de ruta, cada uno con{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            path
          </code>{" "}
          y{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            element
          </code>
          . También admite{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            loader
          </code>
          ,{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            action
          </code>
          ,{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            children
          </code>{" "}
          y{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            errorElement
          </code>{" "}
          por ruta.
        </li>
        <li>
          <span className="font-semibold">RouterProvider:</span> Componente que
          recibe el router creado y lo conecta a la aplicación. Reemplaza al
          clásico{" "}
          <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
            &lt;BrowserRouter&gt;
          </code>
          .
        </li>
        <li>
          <span className="font-semibold">Link/NavLink:</span> Componentes para
          navegar entre rutas sin recargar la página.
        </li>
        <li>
          <span className="font-semibold">Outlet:</span> Marca el lugar dentro
          de un layout donde se renderiza la ruta hija activa.
        </li>
      </ul>

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
        id="create-browser-router"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Create Browser Router
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
      <Note title="createHashRouter y createMemoryRouter">
        Se pueden crear routers de tipo hash o memory usando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createHashRouter
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createMemoryRouter
        </code>
        respectivamente, siguiendo la misma estructura de rutas. Se usan las
        mismas características avanzadas que con createBrowserRouter.
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
        para marcar dónde se renderizará la ruta hija:
      </p>

      <Codeblock code={rutasAnidadasCode} title="DashboardLayout.tsx" />

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
        Puedes definirla con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createBrowserRouter
        </code>{" "}
        usando un array de objetos:
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

      <h2
        id="loader"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Cargar datos antes del render (loader)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una de las ventajas principales de este router es que permite cargar
        datos antes de renderizar una ruta usando la propiedad{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          loader
        </code>
        .
      </p>

      <Codeblock code={loaderCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El loader se ejecuta antes del render de la página, por lo que el
        componente puede recibir la información ya preparada.
      </p>

      <h2
        id="action"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Manejar acciones de formularios (action)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        React Router también permite manejar envíos de formularios con la
        propiedad{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          action
        </code>
        . Esto resulta útil para procesar datos, validar formularios o redirigir
        después de un envío.
      </p>

      <Codeblock code={actionCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este enfoque, la lógica del formulario queda asociada directamente a
        la ruta.
      </p>

      <h2
        id="errores-por-ruta"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Manejar errores por ruta
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cada ruta puede definir su propia interfaz de error usando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          errorElement
        </code>
        . Esto permite mostrar mensajes específicos cuando falla un loader, un
        action o el render de la ruta.
      </p>

      <Codeblock code={errorBoundaryCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        De esta forma, cada sección de la aplicación puede manejar sus errores
        de forma independiente.
      </p>

      <h2
        id="lazy-loading"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Lazy loading de rutas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Con <span className="font-semibold">lazy loading</span> puedes cargar
        componentes de rutas solo cuando se necesitan. Esto ayuda a reducir el
        tamaño inicial de la aplicación.
      </p>

      <Codeblock code={lazyLoadingCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esta estrategia mejora el rendimiento inicial, especialmente en
        aplicaciones grandes con muchas vistas.
      </p>

      <h2
        id="redirecciones"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Redirecciones desde el router
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las redirecciones pueden hacerse directamente desde loaders o actions
        usando la función{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          redirect
        </code>
        .
      </p>

      <Codeblock code={redirectCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto es útil para proteger rutas, reenviar usuarios no autenticados o
        moverlos a otra página después de una acción.
      </p>
    </DocsLayout>
  );
};
