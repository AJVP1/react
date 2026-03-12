import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const instalacionCode = `pnpm add zustand`;

const storeSimpleCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;

<span class="keyword">type</span> CounterStore = {
  count: number;
  increment: () =&gt; void;
  decrement: () =&gt; void;
};

<span class="keyword">export</span> <span class="keyword">const</span> useCounterStore = <span class="function">create</span>&lt;CounterStore&gt;((set) =&gt; ({
  count: <span class="number">0</span>,
  increment: () =&gt; <span class="function">set</span>((state) =&gt; ({ count: state.count + <span class="number">1</span> })),
  decrement: () =&gt; <span class="function">set</span>((state) =&gt; ({ count: state.count - <span class="number">1</span> })),
}));`;

const estadoAccionesCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;

<span class="keyword">type</span> ThemeStore = {
  theme: <span class="string">"light"</span> | <span class="string">"dark"</span>;
  toggleTheme: () =&gt; void;
};

<span class="keyword">export</span> <span class="keyword">const</span> useThemeStore = <span class="function">create</span>&lt;ThemeStore&gt;((set) =&gt; ({
  theme: <span class="string">"light"</span>,
  toggleTheme: () =&gt;
    <span class="function">set</span>((state) =&gt; ({
      theme: state.theme === <span class="string">"light"</span> ? <span class="string">"dark"</span> : <span class="string">"light"</span>,
    })),
}));`;

const sinProviderCode = `<span class="keyword">import</span> { useCounterStore } <span class="keyword">from</span> <span class="string">"../stores/counterStore"</span>;

<span class="keyword">function</span> <span class="function">Counter</span>() {
  <span class="keyword">const</span> count = <span class="function">useCounterStore</span>((state) =&gt; state.count);
  <span class="keyword">const</span> increment = <span class="function">useCounterStore</span>((state) =&gt; state.increment);

  <span class="keyword">return</span> (
    &lt;button onClick={increment}&gt;
      Count: {count}
    &lt;/button&gt;
  );
}`;

const reactivoHooksCode = `<span class="keyword">function</span> <span class="function">CounterInfo</span>() {
  <span class="keyword">const</span> count = <span class="function">useCounterStore</span>((state) =&gt; state.count);

  <span class="keyword">return</span> &lt;p&gt;Valor actual: {count}&lt;/p&gt;;
}

<span class="keyword">function</span> <span class="function">CounterButtons</span>() {
  <span class="keyword">const</span> increment = <span class="function">useCounterStore</span>((state) =&gt; state.increment);

  <span class="keyword">return</span> &lt;button onClick={increment}&gt;Sumar&lt;/button&gt;;
}`;

const propDrillingCode = `<span class="keyword">function</span> <span class="function">Header</span>() {
  <span class="keyword">const</span> theme = <span class="function">useThemeStore</span>((state) =&gt; state.theme);
  <span class="keyword">return</span> &lt;h1&gt;Tema actual: {theme}&lt;/h1&gt;;
}

<span class="keyword">function</span> <span class="function">SidebarMenu</span>() {
  <span class="keyword">const</span> toggleTheme = <span class="function">useThemeStore</span>((state) =&gt; state.toggleTheme);
  <span class="keyword">return</span> &lt;button onClick={toggleTheme}&gt;Cambiar tema&lt;/button&gt;;
}`;

const multiplesStoresCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;

<span class="keyword">export</span> <span class="keyword">const</span> useAuthStore = <span class="function">create</span>((set) =&gt; ({
  user: <span class="keyword">null</span>,
  login: (user) =&gt; <span class="function">set</span>({ user }),
  logout: () =&gt; <span class="function">set</span>({ user: <span class="keyword">null</span> }),
}));

<span class="keyword">export</span> <span class="keyword">const</span> useCartStore = <span class="function">create</span>((set) =&gt; ({
  items: [],
  addItem: (item) =&gt; <span class="function">set</span>((state) =&gt; ({ items: [...state.items, item] })),
  clearCart: () =&gt; <span class="function">set</span>({ items: [] }),
}));`;

const persistCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;
<span class="keyword">import</span> { persist, createJSONStorage } <span class="keyword">from</span> <span class="string">"zustand/middleware"</span>;

<span class="keyword">type</span> SessionStore = {
  token: string | <span class="keyword">null</span>;
  setToken: (token: string) =&gt; void;
  clearToken: () =&gt; void;
};

<span class="keyword">export</span> <span class="keyword">const</span> useSessionStore = <span class="function">create</span>&lt;SessionStore&gt;()(
  <span class="function">persist</span>(
    (set) =&gt; ({
      token: <span class="keyword">null</span>,
      setToken: (token) =&gt; <span class="function">set</span>({ token }),
      clearToken: () =&gt; <span class="function">set</span>({ token: <span class="keyword">null</span> }),
    }),
    {
      name: <span class="string">"session-storage"</span>,
      storage: <span class="function">createJSONStorage</span>(() =&gt; sessionStorage),
    }
  )
);`;

const middlewaresCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;
<span class="keyword">import</span> { devtools, persist } <span class="keyword">from</span> <span class="string">"zustand/middleware"</span>;

<span class="keyword">export</span> <span class="keyword">const</span> useAppStore = <span class="function">create</span>()(
  <span class="function">devtools</span>(
    <span class="function">persist</span>(
      (set) =&gt; ({
        sidebarOpen: <span class="keyword">false</span>,
        toggleSidebar: () =&gt;
          <span class="function">set</span>((state) =&gt; ({ sidebarOpen: !state.sidebarOpen })),
      }),
      { name: <span class="string">"app-store"</span> }
    )
  )
);`;

const typescriptCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;

<span class="keyword">type</span> User = {
  id: number;
  name: string;
};

<span class="keyword">type</span> UserStore = {
  user: User | <span class="keyword">null</span>;
  setUser: (user: User) =&gt; void;
  clearUser: () =&gt; void;
};

<span class="keyword">export</span> <span class="keyword">const</span> useUserStore = <span class="function">create</span>&lt;UserStore&gt;((set) =&gt; ({
  user: <span class="keyword">null</span>,
  setUser: (user) =&gt; <span class="function">set</span>({ user }),
  clearUser: () =&gt; <span class="function">set</span>({ user: <span class="keyword">null</span> }),
}));`;

const accionesAsincronasStoreCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;

<span class="keyword">type</span> UserStore = {
  user: User | <span class="keyword">null</span>;
  loading: boolean;
  error: string | <span class="keyword">null</span>;
  abortFetch: () =&gt; void;
  fetchUser: (id: number) =&gt; <span class="function">Promise</span>&lt;void&gt;;
};

<span class="keyword">export</span> <span class="keyword">const</span> useUserStore = <span class="function">create</span>&lt;UserStore&gt;((set) =&gt; {
  <span class="keyword">let</span> controller: AbortController | <span class="keyword">null</span> = <span class="keyword">null</span>;

  <span class="keyword">return</span> {
    user: <span class="keyword">null</span>,
    loading: <span class="keyword">false</span>,
    error: <span class="keyword">null</span>,
    abortFetch: () =&gt; controller?.<span class="function">abort</span>(),
    fetchUser: <span class="keyword">async</span> (id) =&gt; {
      controller?.<span class="function">abort</span>();
      controller = <span class="keyword">new</span> <span class="function">AbortController</span>();
      <span class="function">set</span>({ loading: <span class="keyword">true</span>, error: <span class="keyword">null</span> });
      <span class="keyword">try</span> {
        <span class="keyword">const</span> res = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">"/api/users/"</span> + id, { signal: controller.signal });
        <span class="keyword">if</span> (!res.ok) <span class="keyword">throw</span> <span class="keyword">new</span> <span class="function">Error</span>(<span class="string">"Error al obtener el usuario"</span>);
        <span class="keyword">const</span> data = <span class="keyword">await</span> res.<span class="function">json</span>();
        <span class="function">set</span>({ user: data, loading: <span class="keyword">false</span> });
      } <span class="keyword">catch</span> (err) {
        <span class="keyword">if</span> (err <span class="keyword">instanceof</span> Error &amp;&amp; err.name === <span class="string">"AbortError"</span>) <span class="keyword">return</span>;
        <span class="keyword">const</span> message = err <span class="keyword">instanceof</span> Error ? err.message : <span class="string">"Error desconocido"</span>;
        <span class="function">set</span>({ error: message, loading: <span class="keyword">false</span> });
      }
    },
  };
});`;

const accionesAsincronasUsoCode = `<span class="keyword">function</span> <span class="function">Profile</span>() {
  <span class="keyword">const</span> { user, loading, error, fetchUser, abortFetch } = <span class="function">useUserStore</span>();

  <span class="function">useEffect</span>(() =&gt; {
    <span class="function">fetchUser</span>(<span class="number">id</span>);
    <span class="keyword">return</span> () =&gt; <span class="function">abortFetch</span>();
  }, []);

  <span class="keyword">if</span> (loading) <span class="keyword">return</span> &lt;p&gt;Cargando...&lt;/p&gt;;
  <span class="keyword">if</span> (error) <span class="keyword">return</span> &lt;p&gt;{error}&lt;/p&gt;;
  <span class="keyword">return</span> &lt;h1&gt;{user?.name}&lt;/h1&gt;;
}`;

const protegerRutasStoreCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;

<span class="keyword">type</span> AuthStore = {
  user: string | <span class="keyword">null</span>;
  login: (user: string) =&gt; void;
  logout: () =&gt; void;
};

<span class="keyword">export</span> <span class="keyword">const</span> useAuthStore = <span class="function">create</span>&lt;AuthStore&gt;((set) =&gt; ({
  user: <span class="keyword">null</span>,
  login: (user) =&gt; <span class="function">set</span>({ user }),
  logout: () =&gt; <span class="function">set</span>({ user: <span class="keyword">null</span> }),
}));`;

const protegerRutasRouterCode = `<span class="keyword">import</span> { createBrowserRouter, redirect } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;
<span class="keyword">import</span> { useAuthStore } <span class="keyword">from</span> <span class="string">"./stores/authStore"</span>;

<span class="keyword">const</span> router = <span class="function">createBrowserRouter</span>([
  {
    path: <span class="string">"/dashboard"</span>,
    element: &lt;Dashboard /&gt;,
    loader: () =&gt; {
      <span class="keyword">const</span> user = useAuthStore.<span class="function">getState</span>().user;
      <span class="keyword">if</span> (!user) <span class="keyword">return</span> <span class="function">redirect</span>(<span class="string">"/login"</span>);
      <span class="keyword">return</span> <span class="keyword">null</span>;
    },
  },
]);`;

const globalLocalCode = `<span class="keyword">function</span> <span class="function">ProductPage</span>() {
  <span class="keyword">const</span> user = <span class="function">useUserStore</span>((state) =&gt; state.user);
  <span class="keyword">const</span> [quantity, setQuantity] = <span class="function">useState</span>(<span class="number">1</span>);

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;p&gt;Usuario: {user?.name}&lt;/p&gt;
      &lt;p&gt;Cantidad local: {quantity}&lt;/p&gt;
      &lt;button onClick={() =&gt; <span class="function">setQuantity</span>(quantity + <span class="number">1</span>)}&gt;+&lt;/button&gt;
    &lt;/div&gt;
  );
}`;

export const Zustand = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Zustand
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Zustand es una librería ligera para manejar estado en React. Permite
        crear stores globales con muy poco código, sin necesidad de providers, y
        con una API simple basada en hooks.
      </p>

      <h2
        id="instalacion-zustand"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Instalación
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Zustand se instala como una dependencia normal. No requiere ninguna
        configuración adicional ni providers.
      </p>

      <Codeblock code={instalacionCode} title="bash" />

      <Note title="Tamaño mínimo">
        Zustand pesa menos de <span className="font-semibold">1 KB</span> y no
        tiene dependencias externas.
      </Note>

      <h2
        id="stores-globales"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear stores globales simples
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En Zustand, un store se crea con la función{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          create
        </code>
        . Allí defines el{" "}
        <span className="font-semibold text-[#141414]">estado global</span> y
        las <span className="font-semibold text-[#141414]">funciones</span> que
        lo modifican.
      </p>

      <Codeblock code={storeSimpleCode} title="TSX" />

      <Note title="Idea clave">
        Zustand permite crear{" "}
        <span className="font-semibold">stores globales simples</span> sin una
        estructura pesada ni demasiado boilerplate.
      </Note>

      <h2
        id="estado-y-acciones"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Definir estado y acciones en un mismo lugar
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una de las ventajas de Zustand es que puedes definir el{" "}
        <span className="font-semibold text-[#141414]">estado</span> y sus{" "}
        <span className="font-semibold text-[#141414]">acciones</span> dentro
        del mismo store. Esto hace que la lógica sea más fácil de leer y
        mantener.
      </p>

      <Codeblock code={estadoAccionesCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, el valor{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          theme
        </code>{" "}
        y la función{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          toggleTheme
        </code>{" "}
        viven en el mismo lugar.
      </p>

      <h2
        id="sin-providers"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Acceder al estado desde cualquier componente sin necesidad de providers
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        A diferencia de Context API, Zustand no requiere envolver la aplicación
        con un Provider para compartir el estado. Solo importas el hook del
        store y lo usas donde lo necesites.
      </p>

      <Codeblock code={sinProviderCode} title="TSX" />

      <h2
        id="actualizacion-reactiva"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Actualizar el estado de forma reactiva usando hooks
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los stores de Zustand se consumen como hooks. Cuando una parte del
        estado cambia, los componentes que dependen de esa parte se vuelven a
        renderizar automáticamente.
      </p>

      <Codeblock code={reactivoHooksCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto permite construir interfaces reactivas con una sintaxis muy
        directa.
      </p>

      <h2
        id="sin-prop-drilling"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Compartir estado entre componentes sin prop drilling
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Como varios componentes pueden leer y modificar el mismo store, no hace
        falta pasar props por muchos niveles de la aplicación.
      </p>

      <Codeblock code={propDrillingCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este enfoque evita el{" "}
        <span className="font-semibold">prop drilling</span> y simplifica la
        comunicación entre componentes lejanos.
      </p>

      <h2
        id="multiples-stores"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear múltiples stores independientes para diferentes partes de la
        aplicación
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        No necesitas poner todo el estado global en un único store. Puedes crear
        stores separados para autenticación, carrito, UI, filtros o cualquier
        otra parte del sistema.
      </p>

      <Codeblock code={multiplesStoresCode} title="TSX" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Mejor organización
          </h3>
          <p className="text-sm text-[#757575]">
            Separar stores ayuda a mantener cada dominio de estado más claro y
            desacoplado.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Escalabilidad
          </h3>
          <p className="text-sm text-[#757575]">
            Es más fácil hacer crecer la aplicación cuando cada store tiene una
            responsabilidad concreta.
          </p>
        </div>
      </div>

      <h2
        id="persistencia"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Persistir el estado en localStorage o sessionStorage mediante
        middlewares
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Zustand incluye middlewares como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          persist
        </code>{" "}
        para guardar automáticamente el estado en{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          localStorage
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          sessionStorage
        </code>
        .
      </p>

      <Codeblock code={persistCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto es útil para conservar sesiones, preferencias del usuario o datos
        de interfaz incluso después de recargar la página.
      </p>

      <h2
        id="middlewares"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Usar middlewares para funcionalidades adicionales
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Además de persistencia, Zustand puede usar middlewares para integrar
        devtools, logging y otras capacidades útiles durante el desarrollo.
      </p>

      <Codeblock code={middlewaresCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esta composición permite extender el comportamiento del store sin volver
        compleja la API principal.
      </p>

      <h2
        id="typescript"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Integrarse fácilmente con TypeScript para tipado del estado y las
        acciones
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Zustand se integra muy bien con TypeScript. Puedes tipar claramente el
        estado, las acciones y los datos que circulan por cada store.
      </p>

      <Codeblock code={typescriptCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto mejora el autocompletado, reduce errores y hace más segura la
        evolución del proyecto.
      </p>

      <h2
        id="global-y-local"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Manejar estado global y local de forma simple y escalable
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Zustand no reemplaza necesariamente el estado local. Lo habitual es usar
        stores para estado compartido y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useState
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useReducer
        </code>{" "}
        para estado específico de un componente.
      </p>

      <Codeblock code={globalLocalCode} title="TSX" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Estado global
          </h3>
          <p className="text-sm text-[#757575]">
            Úsalo para datos compartidos entre muchas partes de la aplicación,
            como usuario, tema o carrito.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Estado local
          </h3>
          <p className="text-sm text-[#757575]">
            Úsalo para datos propios de una vista o componente, como inputs,
            modales o contadores temporales.
          </p>
        </div>
      </div>

      <Note title="Buena práctica">
        Usa Zustand para estado compartido y mantenlo dividido por dominios.
        Combínalo con estado local cuando una pieza de información no necesite
        salir del componente.
      </Note>

      <h2
        id="acciones-asincronas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Acciones asíncronas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las acciones en Zustand pueden ser{" "}
        <span className="font-semibold text-[#141414]">async</span>. Basta con
        declarar la función como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          async
        </code>{" "}
        dentro del store y usar{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">set</code>{" "}
        antes y después de la operación para reflejar el estado de carga.
      </p>

      <Codeblock code={accionesAsincronasStoreCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En el componente, consumes el store normalmente. El estado{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          loading
        </code>{" "}
        permite mostrar un indicador mientras se espera la respuesta.
      </p>

      <Codeblock code={accionesAsincronasUsoCode} title="TSX" />

      <Note title="Sin middleware extra">
        No necesitas librerías adicionales para manejar async en Zustand. Las
        acciones asíncronas funcionan de forma nativa con{" "}
        <span className="font-semibold">async/await</span>.
      </Note>

      <h2
        id="proteger-rutas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Proteger rutas con createBrowserRouter
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Al usar{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          createBrowserRouter
        </code>{" "}
        de React Router, puedes proteger rutas desde el{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          loader
        </code>
        . Dentro del loader no puedes usar hooks, pero Zustand expone{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          getState()
        </code>{" "}
        para acceder al estado directamente sin hooks.
      </p>

      <Codeblock code={protegerRutasStoreCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con el store listo, configuras el router y lees el estado de
        autenticación en el{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          loader
        </code>{" "}
        de cada ruta protegida.
      </p>

      <Codeblock code={protegerRutasRouterCode} title="TSX" />

      <Note title="Idea clave">
        Usa <span className="font-semibold">useAuthStore.getState()</span> en
        los loaders del router, ya que los loaders no son componentes React y no
        pueden llamar hooks.
      </Note>
    </DocsLayout>
  );
};
