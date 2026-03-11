import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const jsxBasicoCode = `<span class="keyword">function</span> App() {
  <span class="keyword">const</span> nombre = <span class="string">"Armando"</span>;

  <span class="keyword">return</span> &lt;h1&gt;Hola, {nombre}&lt;/h1&gt;;
}`;

const atributosCode = `&lt;img src=<span class="string">"/react.png"</span> alt=<span class="string">"Logo de React"</span> /&gt;
&lt;button className=<span class="string">"boton"</span>&gt;Click&lt;/button&gt;`;

const condicionalCode = `<span class="keyword">function</span> Mensaje() {
  <span class="keyword">const</span> estaLogueado = <span class="keyword">true</span>;

  <span class="keyword">return</span> (
    &lt;div&gt;
      {estaLogueado ? &lt;p&gt;Bienvenido&lt;/p&gt; : &lt;p&gt;Inicia sesión&lt;/p&gt;}
    &lt;/div&gt;
  );
}`;

const listasCode = `<span class="keyword">function</span> ListaFrutas() {
  <span class="keyword">const</span> frutas = [<span class="string">"Manzana"</span>, <span class="string">"Banana"</span>, <span class="string">"Naranja"</span>];

  <span class="keyword">return</span> (
    &lt;ul&gt;
      {frutas.map((fruta) =&gt; (
        &lt;li key={fruta}&gt;{fruta}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}`;

export const JSX = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        JSX
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        JSX es una extensión de sintaxis que permite escribir estructuras
        parecidas a HTML dentro de JavaScript o TypeScript para describir la
        interfaz de usuario en React.
      </p>

      <h2
        id="que-es-jsx"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es JSX?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        JSX significa <span className="font-semibold">JavaScript XML</span>. No
        es HTML real, aunque su sintaxis se le parece mucho. React transforma
        JSX en llamadas de JavaScript que luego utiliza para construir la
        interfaz.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Gracias a JSX, es más sencillo combinar lógica y estructura visual
        dentro de un mismo componente, manteniendo el código más legible.
      </p>

      <Codeblock code={jsxBasicoCode} title="TSX" />

      <Note title="Idea clave">
        JSX se parece a HTML, pero en realidad es{" "}
        <span className="font-semibold">JavaScript con sintaxis especial</span>{" "}
        que React interpreta para renderizar elementos en pantalla.
      </Note>

      <h2
        id="expresiones-en-jsx"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Expresiones en JSX
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Dentro de JSX puedes insertar expresiones de JavaScript usando llaves{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">{`{}`}</code>
        . Esto permite mostrar variables, resultados de operaciones, llamadas a
        funciones y valores dinámicos.
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Variables</h3>
          <p className="text-sm text-[#757575]">
            Puedes interpolar datos almacenados en variables directamente dentro
            de la interfaz.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Operaciones</h3>
          <p className="text-sm text-[#757575]">
            También puedes usar sumas, concatenaciones o cualquier expresión
            válida de JavaScript.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Funciones</h3>
          <p className="text-sm text-[#757575]">
            JSX permite ejecutar funciones para transformar o mostrar contenido
            dinámico.
          </p>
        </div>
      </div>

      <h2
        id="atributos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Atributos y props básicas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        JSX usa atributos parecidos a HTML, pero algunos cambian de nombre
        porque siguen las reglas de JavaScript. Por ejemplo, en lugar de{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          class
        </code>{" "}
        se utiliza{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          className
        </code>
        .
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Estos atributos permiten pasar información a los elementos o a otros
        componentes mediante props.
      </p>

      <Codeblock code={atributosCode} title="TSX" />

      <h2
        id="renderizado-condicional"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Renderizado condicional
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En React, es muy común mostrar un contenido u otro según una condición.
        Esto se puede hacer usando operadores como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">?</code> y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">&&</code>.
      </p>

      <Codeblock code={condicionalCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este patrón permite construir interfaces dinámicas según el estado de la
        aplicación o los datos disponibles.
      </p>

      <h2
        id="listas-en-jsx"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Renderizar listas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para renderizar listas en JSX normalmente se utiliza{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          map()
        </code>
        . Cada elemento generado debe incluir una prop{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">key</code>{" "}
        única para ayudar a React a identificar los cambios.
      </p>

      <Codeblock code={listasCode} title="TSX" />

      <Note title="Buena práctica">
        Usa una <span className="font-semibold">key estable y única</span> en
        cada elemento de una lista. Esto ayuda a React a renderizar de forma más
        eficiente y evita errores visuales.
      </Note>
    </DocsLayout>
  );
};
