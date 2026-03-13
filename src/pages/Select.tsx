import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const codeComponent = `<span class="keyword">import</span> { ChangeEvent } <span class="keyword">from</span> <span class="string">"react"</span>;
<span class="keyword">import</span> { useSearchParams } <span class="keyword">from</span> <span class="string">"react-router-dom"</span>;

<span class="keyword">type</span> Option = {
  value: <span class="keyword">string</span>;
  label: <span class="keyword">string</span>;
};

<span class="keyword">type</span> FilterSelectProps = {
  param: <span class="keyword">string</span>;
  options: Option[];
  placeholder?: <span class="keyword">string</span>;
};

<span class="keyword">export const</span> <span class="function">FilterSelect</span> = ({ param, options, placeholder = <span class="string">"Seleccionar"</span> }: FilterSelectProps) => {

  <span class="keyword">const</span> [searchParams, setSearchParams] = <span class="function">useSearchParams</span>();

  <span class="keyword">const</span> value = searchParams.<span class="function">get</span>(param) ?? <span class="string">""</span>;

  <span class="keyword">const</span> handleChange = (e: ChangeEvent&lt;HTMLSelectElement&gt;) =&gt; {

    <span class="keyword">const</span> newValue = e.target.value;

    <span class="keyword">const</span> params = <span class="keyword">new</span> URLSearchParams(searchParams);

    <span class="keyword">if</span> (newValue === <span class="string">""</span>) {
      params.<span class="function">delete</span>(param);
    } <span class="keyword">else</span> {
      params.<span class="function">set</span>(param, newValue);
    }

    <span class="function">setSearchParams</span>(params);
  };

  <span class="keyword">return</span> (
    &lt;<span class="function">select</span> value={value} onChange={handleChange}&gt;

      &lt;<span class="function">option</span> value=<span class="string">""</span>&gt;{placeholder}&lt;/<span class="function">option</span>&gt;

      {options.<span class="function">map</span>((option) =&gt; (
        &lt;<span class="function">option</span> key={option.value} value={option.value}&gt;
          {option.label}
        &lt;/<span class="function">option</span>&gt;
      ))}

    &lt;/<span class="function">select</span>&gt;
  );
};`;

const codeUsage = `<span class="keyword">import</span> { FilterSelect } <span class="keyword">from</span> <span class="string">"./components/FilterSelect"</span>;

<span class="keyword">export default function</span> <span class="function">Page</span>() {

  <span class="keyword">return</span> (

    &lt;<span class="function">FilterSelect</span>
      param=<span class="string">"categoria"</span>
      placeholder=<span class="string">"Filtrar categoría"</span>
      options={[
        { value: <span class="string">"react"</span>, label: <span class="string">"React"</span> },
        { value: <span class="string">"backend"</span>, label: <span class="string">"Backend"</span> },
        { value: <span class="string">"frontend"</span>, label: <span class="string">"Frontend"</span> }
      ]}
    /&gt;

  );
}`;

export const FilterSelectDocs = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={
        <TableOfContents
          items={modulosData.sidebar[3].items[3].toc}
        />
      }
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Filter Select
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        FilterSelect es un componente reutilizable que permite modificar los
        parámetros de búsqueda de la URL utilizando un elemento{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          select
        </code>
        .
      </p>

      <h2
        id="que-es-filter-select"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es FilterSelect?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Este componente permite sincronizar un filtro con los parámetros de la
        URL utilizando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useSearchParams
        </code>{" "}
        de React Router.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cada vez que el usuario cambia el valor del select, el parámetro
        correspondiente se actualiza en la URL.
      </p>

      <Note title="Idea principal">
        Los filtros en la URL permiten compartir enlaces, mantener el estado de
        los filtros y facilitar la navegación entre páginas.
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
        Cuando el usuario cambia el valor del select:
      </p>

      <ul className="list-disc pl-6 text-base text-[#141414] space-y-2">
        <li>Se obtiene el valor seleccionado</li>
        <li>Se actualizan los parámetros de la URL</li>
        <li>React Router actualiza la navegación automáticamente</li>
      </ul>

      <h2
        id="crear-componente"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear el componente
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El siguiente componente crea un select que actualiza un parámetro de la
        URL cuando cambia su valor.
      </p>

      <Codeblock code={codeComponent} title="FilterSelect.tsx" />

      <h2
        id="usar-componente"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Usar el componente
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una vez creado el componente, se puede utilizar en cualquier página para
        modificar parámetros de la URL.
      </p>

      <Codeblock code={codeUsage} title="Ejemplo de uso" />
    </DocsLayout>
  );
};
