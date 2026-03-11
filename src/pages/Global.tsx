import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const contextApiCode = `<span class="keyword">import</span> { createContext, useContext, useState } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">const</span> TemaContext = createContext(<span class="keyword">null</span>);

<span class="keyword">function</span> TemaProvider({ children }) {
  <span class="keyword">const</span> [tema, setTema] = useState(<span class="string">"claro"</span>);

  <span class="keyword">return</span> (
    &lt;TemaContext.Provider value={{ tema, setTema }}&gt;
      {children}
    &lt;/TemaContext.Provider&gt;
  );
}

<span class="keyword">function</span> BotonTema() {
  <span class="keyword">const</span> { tema, setTema } = useContext(TemaContext);

  <span class="keyword">return</span> (
    &lt;button onClick={() =&gt; setTema(tema === <span class="string">"claro"</span> ? <span class="string">"oscuro"</span> : <span class="string">"claro"</span>)}&gt;
      Tema actual: {tema}
    &lt;/button&gt;
  );
}`;

const useReducerCode = `<span class="keyword">import</span> { useReducer } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> contadorReducer(state, action) {
  <span class="keyword">switch</span> (action.type) {
    <span class="keyword">case</span> <span class="string">"incrementar"</span>:
      <span class="keyword">return</span> { count: state.count + <span class="number">1</span> };
    <span class="keyword">case</span> <span class="string">"reiniciar"</span>:
      <span class="keyword">return</span> { count: <span class="number">0</span> };
    <span class="keyword">default</span>:
      <span class="keyword">return</span> state;
  }
}

<span class="keyword">function</span> Contador() {
  <span class="keyword">const</span> [state, dispatch] = useReducer(contadorReducer, { count: <span class="number">0</span> });

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;p&gt;{state.count}&lt;/p&gt;
      &lt;button onClick={() =&gt; dispatch({ type: <span class="string">"incrementar"</span> })}&gt;
        Incrementar
      &lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: <span class="string">"reiniciar"</span> })}&gt;
        Reiniciar
      &lt;/button&gt;
    &lt;/div&gt;
  );
}`;

const reduxIntroCode = `npm install @reduxjs/toolkit react-redux`;

const zustandIntroCode = `<span class="keyword">import</span> { create } <span class="keyword">from</span> <span class="string">"zustand"</span>;

<span class="keyword">const</span> useContadorStore = create((set) =&gt; ({
  count: <span class="number">0</span>,
  incrementar: () =&gt; set((state) =&gt; ({ count: state.count + <span class="number">1</span> })),
}));

<span class="keyword">function</span> Contador() {
  <span class="keyword">const</span> { count, incrementar } = useContadorStore();

  <span class="keyword">return</span> &lt;button onClick={incrementar}&gt;Count: {count}&lt;/button&gt;;
}`;

export const EstadoGlobal = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[3].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Estado global
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        El estado global permite compartir información entre múltiples
        componentes de una aplicación sin necesidad de pasar props manualmente a
        través de muchos niveles.
      </p>

      <h2
        id="context-api"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Context API
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Context API es la solución incorporada en React para compartir datos
        globales como el tema visual, el usuario autenticado o configuraciones
        generales.
      </p>

      <Codeblock code={contextApiCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con Context puedes evitar el{" "}
        <span className="font-semibold">prop drilling</span>, es decir, pasar
        props por muchos componentes intermedios que realmente no las usan.
      </p>

      <Note title="Idea clave">
        Context API funciona muy bien para compartir{" "}
        <span className="font-semibold">datos globales simples</span> dentro de
        una aplicación React.
      </Note>

      <h2
        id="reducer"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        useReducer
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cuando la lógica del estado empieza a crecer,{" "}
        <span className="font-semibold">useReducer</span> puede ser una mejor
        opción que useState. Permite centralizar los cambios del estado mediante
        acciones.
      </p>

      <Codeblock code={useReducerCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este patrón hace que la lógica sea más predecible, especialmente cuando
        existen múltiples formas de actualizar el mismo estado.
      </p>

      <h2
        id="redux-intro"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Introducción a Redux
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Redux es una librería de manejo de estado ampliamente usada en
        aplicaciones grandes. Permite centralizar el estado en una única tienda
        global y actualizarlo mediante acciones y reducers.
      </p>

      <Codeblock code={reduxIntroCode} title="Terminal" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Estado centralizado
          </h3>
          <p className="text-sm text-[#757575]">
            Redux concentra el estado en un único lugar para facilitar su
            trazabilidad y control.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Escalabilidad
          </h3>
          <p className="text-sm text-[#757575]">
            Es útil en aplicaciones grandes donde muchos componentes necesitan
            acceder o modificar los mismos datos.
          </p>
        </div>
      </div>

      <h2
        id="zustand-intro"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Introducción a Zustand
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Zustand es una alternativa moderna y más liviana para manejar estado
        global. Su API suele ser más simple que Redux y requiere menos código
        para casos comunes.
      </p>

      <Codeblock code={zustandIntroCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Es una opción popular cuando quieres una solución sencilla, flexible y
        con poco boilerplate.
      </p>

      <h2
        id="elegir-opcion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué opción elegir?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Context API</h3>
          <p className="text-sm text-[#757575]">
            Ideal para estados globales simples como temas, idioma o usuario.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Redux</h3>
          <p className="text-sm text-[#757575]">
            Recomendado en aplicaciones grandes con flujos complejos y mucha
            lógica compartida.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Zustand</h3>
          <p className="text-sm text-[#757575]">
            Muy útil cuando buscas estado global simple con menos complejidad y
            mejor ergonomía.
          </p>
        </div>
      </div>

      <Note title="Buena práctica">
        Empieza con la solución más simple. Usa{" "}
        <span className="font-semibold">Context API</span> para necesidades
        básicas, y considera <span className="font-semibold">Redux</span> o{" "}
        <span className="font-semibold">Zustand</span> cuando la aplicación
        crezca en complejidad.
      </Note>
    </DocsLayout>
  );
};
