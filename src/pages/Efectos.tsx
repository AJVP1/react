import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const useEffectBasicoCode = `<span class="keyword">import</span> { useEffect } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> App() {
  useEffect(() =&gt; {
    console.log(<span class="string">"El componente se montó"</span>);
  }, []);

  <span class="keyword">return</span> &lt;h1&gt;Hola React&lt;/h1&gt;;
}`;

const dependenciasCode = `useEffect(() =&gt; {
  console.log(<span class="string">"El valor cambió"</span>);
}, [valor]);`;

const cleanupCode = `useEffect(() =&gt; {
  <span class="keyword">const</span> intervalo = setInterval(() =&gt; {
    console.log(<span class="string">"Ejecutando..."</span>);
  }, <span class="number">1000</span>);

  <span class="keyword">return</span> () =&gt; {
    clearInterval(intervalo);
  };
}, []);`;

const fetchDatosCode = `<span class="keyword">import</span> { useState, useEffect } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> Usuarios() {
  <span class="keyword">const</span> [usuarios, setUsuarios] = useState([]);

  useEffect(() =&gt; {
    fetch(<span class="string">"https://jsonplaceholder.typicode.com/users"</span>)
      .then((res) =&gt; res.json())
      .then((data) =&gt; setUsuarios(data));
  }, []);

  <span class="keyword">return</span> (
    &lt;ul&gt;
      {usuarios.map((user) =&gt; (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}`;

export const UseEffect = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[2].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        useEffect
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        El hook <span className="font-semibold">useEffect</span> permite
        ejecutar efectos secundarios en los componentes de React, como llamadas
        a APIs, suscripciones, temporizadores o manipulaciones del DOM.
      </p>

      <h2
        id="que-es-useeffect"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es useEffect?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        useEffect se ejecuta después de que el componente se renderiza. Permite
        ejecutar lógica que no pertenece directamente al renderizado de la
        interfaz.
      </p>

      <Codeblock code={useEffectBasicoCode} title="TSX" />

      <Note title="Idea clave">
        useEffect se utiliza para manejar{" "}
        <span className="font-semibold">efectos secundarios</span>, es decir,
        operaciones externas al renderizado del componente.
      </Note>

      <h2
        id="dependencias"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Array de dependencias
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El segundo argumento de useEffect es un array de dependencias. React
        ejecutará el efecto solo cuando alguno de esos valores cambie.
      </p>

      <Codeblock code={dependenciasCode} title="TSX" />

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Sin array</h3>
          <p className="text-sm text-[#757575]">
            El efecto se ejecuta en cada render del componente.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Array vacío</h3>
          <p className="text-sm text-[#757575]">
            El efecto se ejecuta solo una vez cuando el componente se monta.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Con dependencias
          </h3>
          <p className="text-sm text-[#757575]">
            El efecto se ejecuta cuando cambian los valores indicados.
          </p>
        </div>
      </div>

      <h2
        id="cleanup"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Funciones de limpieza
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Algunas veces es necesario limpiar recursos cuando el componente se
        desmonta, por ejemplo cancelar intervalos o suscripciones.
      </p>

      <Codeblock code={cleanupCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        La función que devuelve useEffect se ejecuta antes de desmontar el
        componente o antes de volver a ejecutar el efecto.
      </p>

      <h2
        id="fetch-datos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Consumir datos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un uso muy común de useEffect es cargar datos desde una API cuando el
        componente se monta.
      </p>

      <Codeblock code={fetchDatosCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, los datos se obtienen con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          fetch()
        </code>{" "}
        y luego se almacenan en el estado del componente.
      </p>

      <h2
        id="errores-comunes"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Errores comunes
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Olvidar dependencias
          </h3>
          <p className="text-sm text-[#757575]">
            Si usas variables dentro de useEffect, debes incluirlas en el array
            de dependencias.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Ejecutar lógica en render
          </h3>
          <p className="text-sm text-[#757575]">
            Operaciones como llamadas a APIs o temporizadores deben hacerse en
            useEffect y no directamente en el render del componente.
          </p>
        </div>
      </div>

      <Note title="Buena práctica">
        Usa useEffect para manejar{" "}
        <span className="font-semibold">efectos secundarios</span>, manteniendo
        el render del componente enfocado únicamente en describir la interfaz.
      </Note>
    </DocsLayout>
  );
};
