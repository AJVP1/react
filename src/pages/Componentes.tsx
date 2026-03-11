import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const componenteBasicoCode = `<span class="keyword">function</span> Saludo() {
  <span class="keyword">return</span> &lt;h1&gt;Hola React&lt;/h1&gt;;
}`;

const componentePropsCode = `<span class="keyword">function</span> Saludo(props) {
  <span class="keyword">return</span> &lt;h1&gt;Hola {props.nombre}&lt;/h1&gt;;
}`;

const usoComponenteCode = `<span class="keyword">function</span> App() {
  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;Saludo nombre=<span class="string">"Armando"</span> /&gt;
      &lt;Saludo nombre=<span class="string">"Ana"</span> /&gt;
    &lt;/div&gt;
  );
}`;

const childrenCode = `<span class="keyword">function</span> Card({ children }) {
  <span class="keyword">return</span> (
    &lt;div className=<span class="string">"card"</span>&gt;
      {children}
    &lt;/div&gt;
  );
}

<span class="keyword">function</span> App() {
  <span class="keyword">return</span> (
    &lt;Card&gt;
      &lt;h2&gt;Título&lt;/h2&gt;
      &lt;p&gt;Contenido dentro del componente&lt;/p&gt;
    &lt;/Card&gt;
  );
}`;

export const Componentes = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Componentes
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Los componentes son la base de React. Permiten dividir la interfaz en
        pequeñas piezas reutilizables que pueden combinarse para construir
        aplicaciones complejas.
      </p>

      <h2
        id="que-es-un-componente"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es un componente?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un componente es una función que devuelve JSX. Representa una parte de
        la interfaz de usuario y puede reutilizarse múltiples veces dentro de
        una aplicación.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Gracias a los componentes, es posible organizar el código de forma más
        clara, separar responsabilidades y reutilizar lógica visual.
      </p>

      <Codeblock code={componenteBasicoCode} title="TSX" />

      <Note title="Convención">
        Los nombres de los componentes deben comenzar con{" "}
        <span className="font-semibold">mayúscula</span>. Esto permite que React
        los diferencie de los elementos HTML normales.
      </Note>

      <h2
        id="componentes-funcionales"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Componentes funcionales
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En React moderno, los componentes se escriben principalmente como
        funciones. Estas funciones pueden recibir datos mediante props y
        devolver la estructura de la interfaz en JSX.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Simples</h3>
          <p className="text-sm text-[#757575]">
            Son fáciles de escribir y entender porque se basan en funciones de
            JavaScript.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Reutilizables
          </h3>
          <p className="text-sm text-[#757575]">
            Un mismo componente puede usarse varias veces con distintos datos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Componibles</h3>
          <p className="text-sm text-[#757575]">
            Los componentes pueden combinarse para construir interfaces más
            grandes.
          </p>
        </div>
      </div>

      <h2
        id="props"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Props
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las <span className="font-semibold">props</span> permiten pasar datos de
        un componente padre a un componente hijo. Son similares a los atributos
        en HTML.
      </p>

      <Codeblock code={componentePropsCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Luego el componente puede utilizar esas props para mostrar información
        dinámica.
      </p>

      <Codeblock code={usoComponenteCode} title="TSX" />

      <h2
        id="children"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Children
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La prop <span className="font-semibold">children</span> permite pasar
        contenido dentro de un componente. Esto es útil para crear componentes
        contenedores o layouts reutilizables.
      </p>

      <Codeblock code={childrenCode} title="TSX" />

      <h2
        id="composicion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Composición de componentes
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        React promueve la composición de componentes. Esto significa construir
        interfaces complejas combinando componentes pequeños y especializados.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En lugar de crear componentes gigantes con muchas responsabilidades, es
        mejor dividirlos en piezas reutilizables que puedan integrarse entre sí.
      </p>

      <Note title="Buena práctica">
        Diseña componentes{" "}
        <span className="font-semibold">pequeños, reutilizables y claros</span>.
        Esto facilita el mantenimiento y el crecimiento de la aplicación.
      </Note>
    </DocsLayout>
  );
};
