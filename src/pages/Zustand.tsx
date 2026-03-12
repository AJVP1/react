import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const storeSimpleCode = `import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));`;

const estadoAccionesCode = `import { create } from "zustand";

type ThemeStore = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));`;

const sinProviderCode = `import { useCounterStore } from "../stores/counterStore";

function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}`;

const reactivoHooksCode = `function CounterInfo() {
  const count = useCounterStore((state) => state.count);

  return <p>Valor actual: {count}</p>;
}

function CounterButtons() {
  const increment = useCounterStore((state) => state.increment);

  return <button onClick={increment}>Sumar</button>;
}`;

const propDrillingCode = `function Header() {
  const theme = useThemeStore((state) => state.theme);
  return <h1>Tema actual: {theme}</h1>;
}

function SidebarMenu() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return <button onClick={toggleTheme}>Cambiar tema</button>;
}`;

const multiplesStoresCode = `import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export const useCartStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  clearCart: () => set({ items: [] }),
}));`;

const persistCode = `import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SessionStore = {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
};

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);`;

const middlewaresCode = `import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useAppStore = create()(
  devtools(
    persist(
      (set) => ({
        sidebarOpen: false,
        toggleSidebar: () =>
          set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      }),
      { name: "app-store" }
    )
  )
);`;

const typescriptCode = `import { create } from "zustand";

type User = {
  id: number;
  name: string;
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));`;

const globalLocalCode = `function ProductPage() {
  const user = useUserStore((state) => state.user);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <p>Usuario: {user?.name}</p>
      <p>Cantidad local: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}`;

export const Zustand = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={
        <TableOfContents items={modulosData.sidebar[3].items[3].toc} />
      }
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
        . Allí defines el estado global y las funciones que lo modifican.
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
        Una de las ventajas de Zustand es que puedes definir el estado y sus
        acciones dentro del mismo store. Esto hace que la lógica sea más fácil
        de leer y mantener.
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
    </DocsLayout>
  );
};
