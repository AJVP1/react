import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const manejoEventosCode = `<span class="keyword">function</span> Boton() {
  <span class="keyword">const</span> manejarClick = () =&gt; {
    console.log(<span class="string">"Botón presionado"</span>);
  };

  <span class="keyword">return</span> &lt;button onClick={manejarClick}&gt;Click&lt;/button&gt;;
}`;

const onClickCode = `<span class="keyword">function</span> Contador() {
  <span class="keyword">const</span> [count, setCount] = useState(<span class="number">0</span>);

  <span class="keyword">return</span> (
    &lt;button onClick={() =&gt; setCount(count + <span class="number">1</span>)}&gt;
      Contador: {count}
    &lt;/button&gt;
  );
}`;

const pasarFuncionesCode = `<span class="keyword">function</span> Boton({ onSaludar }) {
  <span class="keyword">return</span> &lt;button onClick={onSaludar}&gt;Saludar&lt;/button&gt;;
}

<span class="keyword">function</span> App() {
  <span class="keyword">const</span> saludar = () =&gt; {
    alert(<span class="string">"Hola"</span>);
  };

  <span class="keyword">return</span> &lt;Boton onSaludar={saludar} /&gt;;
}`;

const formularioCode = `<span class="keyword">function</span> Formulario() {
  <span class="keyword">const</span> [nombre, setNombre] = useState(<span class="string">""</span>);

  <span class="keyword">const</span> manejarCambio = (e) =&gt; {
    setNombre(e.target.value);
  };

  <span class="keyword">return</span> (
    &lt;input
      type=<span class="string">"text"</span>
      value={nombre}
      onChange={manejarCambio}
    /&gt;
  );
}`;

const preventDefaultCode = `<span class="keyword">function</span> Formulario() {
  <span class="keyword">const</span> manejarSubmit = (e) =&gt; {
    e.preventDefault();
    console.log(<span class="string">"Formulario enviado"</span>);
  };

  <span class="keyword">return</span> (
    &lt;form onSubmit={manejarSubmit}&gt;
      &lt;button type=<span class="string">"submit"</span>&gt;Enviar&lt;/button&gt;
    &lt;/form&gt;
  );
}`;

export const Eventos = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[1].items[3].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Eventos
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Los eventos permiten que los componentes reaccionen a las interacciones
        del usuario, como hacer clic, escribir en un input o enviar un
        formulario.
      </p>

      <h2
        id="manejo-eventos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Manejo de eventos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En React, los eventos se manejan de forma similar a JavaScript, pero se
        escriben usando la sintaxis de JSX y nombres en camelCase.
      </p>

      <Codeblock code={manejoEventosCode} title="TSX" />

      <Note title="Importante">
        Los manejadores de eventos deben recibir una{" "}
        <span className="font-semibold">función</span>, no el resultado de
        ejecutarla.
      </Note>

      <h2
        id="onclick"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        onClick y eventos comunes
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Uno de los eventos más usados es{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          onClick
        </code>
        , que se dispara cuando el usuario hace clic en un elemento.
      </p>

      <Codeblock code={onClickCode} title="TSX" />

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">onClick</h3>
          <p className="text-sm text-[#757575]">
            Se ejecuta cuando el usuario hace clic en un elemento.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">onChange</h3>
          <p className="text-sm text-[#757575]">
            Se utiliza para detectar cambios en inputs o formularios.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">onSubmit</h3>
          <p className="text-sm text-[#757575]">
            Se dispara cuando se envía un formulario.
          </p>
        </div>
      </div>

      <h2
        id="pasar-funciones"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Pasar funciones como props
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Es común pasar funciones desde un componente padre a uno hijo para
        manejar eventos en distintos niveles de la aplicación.
      </p>

      <Codeblock code={pasarFuncionesCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este patrón permite que los componentes hijos notifiquen al padre cuando
        ocurre una acción.
      </p>

      <h2
        id="formularios"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Eventos en formularios
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En los formularios, el evento{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          onChange
        </code>{" "}
        se usa para capturar lo que escribe el usuario y actualizar el estado.
      </p>

      <Codeblock code={formularioCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este enfoque se conoce como{" "}
        <span className="font-semibold">componentes controlados</span>, donde el
        valor del input depende del estado de React.
      </p>

      <h2
        id="prevent-default"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        preventDefault
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En los formularios, el navegador intenta recargar la página cuando se
        envía un formulario. Para evitar ese comportamiento se usa{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          preventDefault()
        </code>
        .
      </p>

      <Codeblock code={preventDefaultCode} title="TSX" />

      <Note title="Buena práctica">
        Maneja los eventos en funciones separadas cuando la lógica empieza a
        crecer. Esto hace que los componentes sean más fáciles de leer y
        mantener.
      </Note>
    </DocsLayout>
  );
};
