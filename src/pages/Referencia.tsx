import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const useRefBasicoCode = `<span class="keyword">import</span> { useRef } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> App() {
  <span class="keyword">const</span> inputRef = useRef(<span class="keyword">null</span>);

  <span class="keyword">return</span> &lt;input ref={inputRef} /&gt;;
}`;

const referenciasDOMCode = `<span class="keyword">import</span> { useRef } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> InputFocus() {
  <span class="keyword">const</span> inputRef = useRef(<span class="keyword">null</span>);

  <span class="keyword">const</span> enfocar = () =&gt; {
    inputRef.current.focus();
  };

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;input ref={inputRef} /&gt;
      &lt;button onClick={enfocar}&gt;Enfocar input&lt;/button&gt;
    &lt;/div&gt;
  );
}`;

const persistirValoresCode = `<span class="keyword">import</span> { useRef, useState } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> Contador() {
  <span class="keyword">const</span> contador = useRef(<span class="number">0</span>);
  <span class="keyword">const</span> [render, setRender] = useState(<span class="number">0</span>);

  <span class="keyword">const</span> incrementar = () =&gt; {
    contador.current += <span class="number">1</span>;
    console.log(contador.current);
  };

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;button onClick={incrementar}&gt;Incrementar&lt;/button&gt;
      &lt;button onClick={() =&gt; setRender(render + <span class="number">1</span>)}&gt;
        Forzar render
      &lt;/button&gt;
    &lt;/div&gt;
  );
}`;

const focusInputCode = `<span class="keyword">function</span> Busqueda() {
  <span class="keyword">const</span> inputRef = useRef(<span class="keyword">null</span>);

  <span class="keyword">const</span> manejarClick = () =&gt; {
    inputRef.current.focus();
  };

  <span class="keyword">return</span> (
    &lt;&gt;
      &lt;input ref={inputRef} placeholder=<span class="string">"Buscar..."</span> /&gt;
      &lt;button onClick={manejarClick}&gt;Buscar&lt;/button&gt;
    &lt;/&gt;
  );
}`;

export const UseRef = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[2].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        useRef
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        El hook <span className="font-semibold">useRef</span> permite crear una
        referencia que persiste entre renders sin provocar una nueva
        renderización del componente.
      </p>

      <h2
        id="que-es-useref"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es useRef?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        useRef devuelve un objeto con una propiedad llamada{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          current
        </code>
        . Este valor puede mantenerse entre renders sin provocar que el
        componente vuelva a renderizarse.
      </p>

      <Codeblock code={useRefBasicoCode} title="TSX" />

      <Note title="Idea clave">
        useRef mantiene valores persistentes entre renders sin causar una nueva
        renderización del componente.
      </Note>

      <h2
        id="referencias-dom"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Referencias al DOM
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Uno de los usos más comunes de useRef es acceder directamente a
        elementos del DOM, como inputs, botones o contenedores.
      </p>

      <Codeblock code={referenciasDOMCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, el botón enfoca el input usando la referencia al
        elemento DOM.
      </p>

      <h2
        id="persistir-valores"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Persistir valores entre renders
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        También puedes usar useRef para almacenar valores que no deben provocar
        una actualización del componente.
      </p>

      <Codeblock code={persistirValoresCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        A diferencia del estado, modificar{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          ref.current
        </code>{" "}
        no provoca un nuevo render.
      </p>

      <h2
        id="focus-input"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Enfocar un input
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un caso muy común es enfocar automáticamente un input cuando ocurre una
        acción del usuario.
      </p>

      <Codeblock code={focusInputCode} title="TSX" />

      <h2
        id="cuando-usarlo"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Cuándo usarlo?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Acceso al DOM
          </h3>
          <p className="text-sm text-[#757575]">
            Manipular directamente elementos como inputs o contenedores.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Valores persistentes
          </h3>
          <p className="text-sm text-[#757575]">
            Guardar datos que deben mantenerse entre renders sin causar
            actualizaciones.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Integración externa
          </h3>
          <p className="text-sm text-[#757575]">
            Conectar con librerías externas que requieren acceso directo al DOM.
          </p>
        </div>
      </div>

      <Note title="Buena práctica">
        Usa useRef cuando necesites guardar una referencia o valor persistente
        que no deba provocar renderizados adicionales.
      </Note>
    </DocsLayout>
  );
};
