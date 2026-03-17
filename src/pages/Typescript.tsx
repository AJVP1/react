import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const codeTypes = `<span class="keyword">type</span> User = {
  id: <span class="keyword">number</span>;
  name: <span class="keyword">string</span>;
  active: <span class="keyword">boolean</span>;
};`;

const codeProps = `<span class="keyword">type</span> ButtonProps = {
  label: <span class="keyword">string</span>;
  onClick: () =&gt; <span class="keyword">void</span>;
};

<span class="keyword">export const</span> <span class="function">Button</span> = ({ label, onClick }: ButtonProps) =&gt; {
  <span class="keyword">return</span> (
    &lt;<span class="function">button</span> onClick={onClick}&gt;
      {label}
    &lt;/<span class="function">button</span>&gt;
  );
};`;

const codeUseState = `<span class="keyword">import</span> { useState } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">export default function</span> <span class="function">Counter</span>() {

  <span class="keyword">const</span> [count, setCount] = <span class="function">useState</span>&lt;<span class="keyword">number</span>&gt;(0);

  <span class="keyword">return</span> (
    &lt;<span class="function">button</span> onClick={() =&gt; setCount(count + 1)}&gt;
      {count}
    &lt;/<span class="function">button</span>&gt;
  );
}`;

const codeApi = `<span class="keyword">type</span> Product = {
  id: <span class="keyword">number</span>;
  title: <span class="keyword">string</span>;
};

<span class="keyword">const</span> <span class="function">fetchProducts</span> = <span class="keyword">async</span> (): <span class="keyword">Promise</span>&lt;Product[]&gt; =&gt; {
  <span class="keyword">const</span> res = <span class="keyword">await</span> fetch(<span class="string">"/api/products"</span>);
  <span class="keyword">return</span> res.<span class="function">json</span>();
};`;

export const Typescript = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[4].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        TypeScript
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        TypeScript es una extensión de JavaScript que añade tipado estático para
        mejorar la calidad del código y prevenir errores.
      </p>

      <h2
        id="que-es-typescript"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es TypeScript?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        TypeScript permite definir tipos para variables, funciones y objetos,
        ayudando a detectar errores antes de ejecutar el código.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Es ampliamente utilizado en proyectos React por su capacidad de mejorar
        la mantenibilidad y escalabilidad.
      </p>

      <Note title="Idea principal">
        TypeScript agrega seguridad al código mediante tipos, sin cambiar cómo
        funciona JavaScript en el navegador.
      </Note>

      <h2
        id="tipos-basicos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Tipos básicos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Puedes definir tipos personalizados usando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">type</code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          interface
        </code>
        .
      </p>

      <Codeblock code={codeTypes} title="Tipos" />

      <h2
        id="tipar-componentes"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Tipar componentes
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En React, puedes tipar las props de un componente para asegurar que
        recibe los datos correctos.
      </p>

      <Codeblock code={codeProps} title="Componente tipado" />

      <h2
        id="hooks"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        TypeScript con hooks
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los hooks como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useState
        </code>{" "}
        pueden tiparse para mayor seguridad.
      </p>

      <Codeblock code={codeUseState} title="useState tipado" />

      <h2
        id="api"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Tipar datos de API
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Es recomendable tipar las respuestas de APIs para evitar errores al
        consumir datos externos.
      </p>

      <Codeblock code={codeApi} title="Fetch tipado" />
    </DocsLayout>
  );
};
