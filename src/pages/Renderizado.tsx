import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const cicloRenderCode = `<span class="keyword">function</span> Saludo() {
  console.log(<span class="string">"Render del componente"</span>);

  <span class="keyword">return</span> &lt;h1&gt;Hola React&lt;/h1&gt;;
}`;

const reRenderCode = `<span class="keyword">import</span> { useState } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> Contador() {
  <span class="keyword">const</span> [count, setCount] = useState(<span class="number">0</span>);

  <span class="keyword">return</span> (
    &lt;button onClick={() =&gt; setCount(count + <span class="number">1</span>)}&gt;
      Contador: {count}
    &lt;/button&gt;
  );
}`;

const memoCode = `<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">const</span> Tarjeta = React.memo(<span class="keyword">function</span> Tarjeta({ nombre }) {
  console.log(<span class="string">"Render de Tarjeta"</span>);
  <span class="keyword">return</span> &lt;p&gt;{nombre}&lt;/p&gt;;
});`;

const useMemoUseCallbackCode = `<span class="keyword">import</span> { useMemo, useCallback, useState } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> App() {
  <span class="keyword">const</span> [count, setCount] = useState(<span class="number">0</span>);

  <span class="keyword">const</span> valorCalculado = useMemo(() =&gt; {
    <span class="keyword">return</span> count * <span class="number">2</span>;
  }, [count]);

  <span class="keyword">const</span> manejarClick = useCallback(() =&gt; {
    console.log(<span class="string">"Click"</span>);
  }, []);

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;p&gt;{valorCalculado}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + <span class="number">1</span>)}&gt;Incrementar&lt;/button&gt;
      &lt;button onClick={manejarClick}&gt;Acción&lt;/button&gt;
    &lt;/div&gt;
  );
}`;

export const Renderizado = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Renderizado
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        El renderizado en React es el proceso mediante el cual un componente
        genera su interfaz y React decide qué cambios aplicar en el DOM para
        mantener la pantalla sincronizada con los datos.
      </p>

      <h2
        id="ciclo-render"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Ciclo de renderizado
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cada vez que React renderiza un componente, ejecuta su función para
        obtener el JSX que describe la interfaz. Luego compara el resultado con
        el render anterior para decidir qué cambios debe reflejar en el DOM.
      </p>

      <Codeblock code={cicloRenderCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El render no significa necesariamente que React vuelva a dibujar toda la
        página. Normalmente solo actualiza los elementos que cambiaron.
      </p>

      <Note title="Idea clave">
        Renderizar significa que React{" "}
        <span className="font-semibold">ejecuta el componente</span> para
        calcular cómo debe verse la interfaz.
      </Note>

      <h2
        id="re-render"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué provoca un re-render?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un componente puede volver a renderizarse cuando cambia su estado,
        cuando recibe nuevas props o cuando el componente padre se vuelve a
        renderizar.
      </p>

      <Codeblock code={reRenderCode} title="TSX" />

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Estado</h3>
          <p className="text-sm text-[#757575]">
            Cuando cambia el estado con useState o useReducer, React vuelve a
            renderizar el componente.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Props</h3>
          <p className="text-sm text-[#757575]">
            Si un componente recibe nuevas props, React evalúa nuevamente su
            render.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Padre renderizado
          </h3>
          <p className="text-sm text-[#757575]">
            Cuando el componente padre se renderiza, sus hijos también pueden
            renderizarse.
          </p>
        </div>
      </div>

      <h2
        id="memo"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        React.memo
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">React.memo</span> permite memorizar un
        componente para evitar renders innecesarios cuando sus props no han
        cambiado.
      </p>

      <Codeblock code={memoCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto puede ser útil en componentes que reciben las mismas props muchas
        veces y cuyo render es costoso.
      </p>

      <h2
        id="usememo-usecallback"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        useMemo y useCallback
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">useMemo</span> memoriza valores
        calculados y <span className="font-semibold">useCallback</span> memoriza
        funciones. Ambos hooks ayudan a evitar trabajo innecesario en ciertos
        casos.
      </p>

      <Codeblock code={useMemoUseCallbackCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Estas herramientas no son necesarias en todos los componentes. Se usan
        cuando hay problemas reales de rendimiento o cuando necesitas mantener
        referencias estables.
      </p>

      <h2
        id="optimizar-render"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Optimización de render
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Optimizar el renderizado consiste en reducir renders innecesarios,
        dividir la interfaz en componentes pequeños y controlar mejor qué datos
        hacen que cada parte de la aplicación cambie.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Componentes pequeños
          </h3>
          <p className="text-sm text-[#757575]">
            Dividir la UI en piezas pequeñas facilita controlar qué parte se
            renderiza cuando cambia algo.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Evitar optimizar de más
          </h3>
          <p className="text-sm text-[#757575]">
            No toda app necesita memoización. Primero conviene entender dónde
            está el problema real.
          </p>
        </div>
      </div>

      <Note title="Buena práctica">
        Primero construye componentes claros y correctos. Después, si detectas
        renders innecesarios o lentitud, aplica optimizaciones como{" "}
        <span className="font-semibold">React.memo</span>,{" "}
        <span className="font-semibold">useMemo</span> o{" "}
        <span className="font-semibold">useCallback</span>.
      </Note>
    </DocsLayout>
  );
};
