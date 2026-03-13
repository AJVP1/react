import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const codeComponent = `<span class="keyword">import</span> { ChangeEvent, useEffect, useState } <span class="keyword">from</span> <span class="string">"react"</span>;
<span class="keyword">import</span> { useSearchParams } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">type</span> FilterTextProps = {
  param: <span class="keyword">string</span>;
  placeholder?: <span class="keyword">string</span>;
  debounceMs?: <span class="keyword">number</span>;
};

<span class="keyword">export const</span> <span class="function">FilterText</span> = ({ param, placeholder = <span class="string">"Buscar..."</span>, debounceMs = <span class="number">500</span> }: FilterTextProps) => {

  <span class="keyword">const</span> [searchParams, setSearchParams] = <span class="function">useSearchParams</span>();

  <span class="keyword">const</span> initialValue = searchParams.<span class="function">get</span>(param) ?? <span class="string">""</span>;

  <span class="keyword">const</span> [value, setValue] = <span class="function">useState</span>(initialValue);

  <span class="function">useEffect</span>(() => {

    <span class="keyword">const</span> timeout = <span class="function">setTimeout</span>(() => {

      <span class="keyword">const</span> params = <span class="keyword">new</span> URLSearchParams(searchParams);

      <span class="keyword">if</span> (value.trim() === <span class="string">""</span>) {
        params.<span class="function">delete</span>(param);
      } <span class="keyword">else</span> {
        params.<span class="function">set</span>(param, value.trim());
      }

      <span class="function">setSearchParams</span>(params);

    }, debounceMs);

    <span class="keyword">return</span> () => <span class="function">clearTimeout</span>(timeout);

  }, [value]);

  <span class="keyword">const</span> handleChange = (e: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
    <span class="function">setValue</span>(e.target.value);
  };

  <span class="keyword">return</span> (
    &lt;<span class="function">input</span>
      type=<span class="string">"text"</span>
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    /&gt;
  );
};`;

const codeUsage = `<span class="keyword">import</span> { FilterText } <span class="keyword">from</span> <span class="string">"./components/FilterText"</span>;

<span class="keyword">export default function</span> <span class="function">Page</span>() {

  <span class="keyword">return</span> (

    &lt;<span class="function">FilterText</span>
      param=<span class="string">"search"</span>
      placeholder=<span class="string">"Buscar artículo"</span>
    /&gt;

  );
}`;

export const FilterTextDocs = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[4].toc} />
      }
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Filter Text
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        FilterText es un componente que permite modificar parámetros de texto en
        la URL utilizando un campo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          input
        </code>{" "}
        con un sistema de debounce.
      </p>

      <h2
        id="que-es-filter-text"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es FilterText?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Este componente permite sincronizar un campo de búsqueda con los
        parámetros de la URL utilizando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useSearchParams
        </code>{" "}
        de React Router.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        El valor introducido en el input se refleja en la URL después de un
        pequeño retraso para evitar actualizaciones en cada pulsación de tecla.
      </p>

      <Note title="Idea principal">
        El debounce evita actualizar la URL en cada tecla presionada, lo que
        mejora el rendimiento y reduce renders innecesarios.
      </Note>

      <h2
        id="como-funciona"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Cómo funciona
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El componente utiliza el hook{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useSearchParams
        </code>{" "}
        para leer y actualizar los parámetros de la URL.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cuando el usuario escribe en el input:
      </p>

      <ul className="list-disc pl-6 text-base text-[#141414] space-y-2">
        <li>Se actualiza el estado interno del componente</li>
        <li>Se espera el tiempo definido por el debounce</li>
        <li>Se actualiza el parámetro en la URL</li>
      </ul>

      <h2
        id="crear-componente"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear el componente
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El siguiente componente crea un input de búsqueda que actualiza el
        parámetro de la URL utilizando un debounce de 500ms.
      </p>

      <Codeblock code={codeComponent} title="FilterText.tsx" />

      <h2
        id="usar-componente"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Usar el componente
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una vez creado el componente, se puede utilizar en cualquier página para
        filtrar resultados mediante texto.
      </p>

      <Codeblock code={codeUsage} title="Ejemplo de uso" />
    </DocsLayout>
  );
};
