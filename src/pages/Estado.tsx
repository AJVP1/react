import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const useStateCode = `<span class="keyword">import</span> { useState } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> Contador() {
  <span class="keyword">const</span> [count, setCount] = useState(<span class="number">0</span>);

  <span class="keyword">return</span> (
    &lt;button onClick={() =&gt; setCount(count + <span class="number">1</span>)}&gt;
      Contador: {count}
    &lt;/button&gt;
  );
}`;

const actualizarEstadoCode = `<span class="keyword">function</span> Contador() {
  <span class="keyword">const</span> [count, setCount] = useState(<span class="number">0</span>);

  <span class="keyword">const</span> incrementar = () =&gt; {
    setCount((prev) =&gt; prev + <span class="number">1</span>);
  };

  <span class="keyword">return</span> &lt;button onClick={incrementar}&gt;Sumar&lt;/button&gt;;
}`;

const estadoAnidadoCode = `<span class="keyword">function</span> Perfil() {
  <span class="keyword">const</span> [usuario, setUsuario] = useState({
    nombre: <span class="string">"Armando"</span>,
    edad: <span class="number">25</span>,
  });

  <span class="keyword">const</span> cambiarEdad = () =&gt; {
    setUsuario((prev) =&gt; ({
      ...prev,
      edad: prev.edad + <span class="number">1</span>,
    }));
  };

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;p&gt;{usuario.nombre}&lt;/p&gt;
      &lt;p&gt;{usuario.edad}&lt;/p&gt;
      &lt;button onClick={cambiarEdad}&gt;Actualizar edad&lt;/button&gt;
    &lt;/div&gt;
  );
}`;

const propsVsEstadoCode = `<span class="keyword">function</span> Saludo({ nombre }) {
  <span class="keyword">const</span> [mensaje, setMensaje] = useState(<span class="string">"Hola"</span>);

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;p&gt;{mensaje}, {nombre}&lt;/p&gt;
      &lt;button onClick={() =&gt; setMensaje(<span class="string">"Bienvenido"</span>)}&gt;
        Cambiar mensaje
      &lt;/button&gt;
    &lt;/div&gt;
  );
}`;

export const Estado = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Estado
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        El estado permite que un componente almacene información cambiante y
        vuelva a renderizarse automáticamente cuando esos datos se actualizan.
      </p>

      <h2
        id="que-es-el-estado"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es el estado?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El estado es información interna de un componente que puede cambiar con
        el tiempo. Por ejemplo, un contador, el valor de un input, si un modal
        está abierto o los datos cargados desde una API.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cuando el estado cambia, React vuelve a renderizar el componente para
        reflejar los nuevos datos en la interfaz.
      </p>

      <Note title="Idea clave">
        El estado representa{" "}
        <span className="font-semibold">datos dinámicos</span> dentro de un
        componente. Si esos datos cambian, la interfaz también cambia.
      </Note>

      <h2
        id="use-state"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        useState
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El hook <span className="font-semibold">useState</span> permite agregar
        estado a un componente funcional. Devuelve un valor actual y una función
        para actualizarlo.
      </p>

      <Codeblock code={useStateCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          count
        </code>{" "}
        contiene el valor actual y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          setCount
        </code>{" "}
        se usa para actualizarlo.
      </p>

      <h2
        id="actualizacion-estado"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Actualización del estado
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para cambiar el estado, debes usar siempre la función actualizadora que
        devuelve <span className="font-semibold">useState</span>. No debes
        modificar el valor directamente.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cuando el nuevo valor depende del anterior, es recomendable usar la
        forma con callback para evitar errores en actualizaciones consecutivas.
      </p>

      <Codeblock code={actualizarEstadoCode} title="TSX" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            No modificar directamente
          </h3>
          <p className="text-sm text-[#757575]">
            React necesita que uses la función actualizadora para detectar los
            cambios y volver a renderizar correctamente.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Usar el valor previo
          </h3>
          <p className="text-sm text-[#757575]">
            Cuando el siguiente estado depende del anterior, la función con{" "}
            callback es la forma más segura.
          </p>
        </div>
      </div>

      <h2
        id="estado-anidado"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Objetos y arrays en estado
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El estado también puede contener objetos o arrays. En esos casos, debes
        crear una nueva copia al actualizarlo, en lugar de modificar la
        referencia original.
      </p>

      <Codeblock code={estadoAnidadoCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El operador{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">...</code>{" "}
        permite copiar las propiedades existentes y actualizar solo la que
        necesitas cambiar.
      </p>

      <h2
        id="estado-vs-props"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Estado vs props
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Las props son datos que un componente recibe desde afuera, normalmente
        desde un componente padre. El estado, en cambio, es información interna
        que el propio componente controla.
      </p>

      <Codeblock code={propsVsEstadoCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          nombre
        </code>{" "}
        llega como prop, mientras que{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          mensaje
        </code>{" "}
        pertenece al estado interno del componente.
      </p>

      <Note title="Buena práctica">
        Usa <span className="font-semibold">props</span> para datos externos y{" "}
        <span className="font-semibold">estado</span> para datos internos que
        cambian con la interacción del usuario o el ciclo de vida del
        componente.
      </Note>
    </DocsLayout>
  );
};
