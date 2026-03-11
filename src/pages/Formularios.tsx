import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const inputsControladosCode = `<span class="keyword">import</span> { useState } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> Formulario() {
  <span class="keyword">const</span> [nombre, setNombre] = useState(<span class="string">""</span>);

  <span class="keyword">return</span> (
    &lt;input
      type=<span class="string">"text"</span>
      value={nombre}
      onChange={(e) =&gt; setNombre(e.target.value)}
      placeholder=<span class="string">"Escribe tu nombre"</span>
    /&gt;
  );
}`;

const textareaSelectCode = `<span class="keyword">import</span> { useState } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> Formulario() {
  <span class="keyword">const</span> [mensaje, setMensaje] = useState(<span class="string">""</span>);
  <span class="keyword">const</span> [pais, setPais] = useState(<span class="string">"argentina"</span>);

  <span class="keyword">return</span> (
    &lt;form&gt;
      &lt;textarea
        value={mensaje}
        onChange={(e) =&gt; setMensaje(e.target.value)}
      /&gt;

      &lt;select
        value={pais}
        onChange={(e) =&gt; setPais(e.target.value)}
      &gt;
        &lt;option value=<span class="string">"argentina"</span>&gt;Argentina&lt;/option&gt;
        &lt;option value=<span class="string">"mexico"</span>&gt;México&lt;/option&gt;
        &lt;option value=<span class="string">"colombia"</span>&gt;Colombia&lt;/option&gt;
      &lt;/select&gt;
    &lt;/form&gt;
  );
}`;

const validacionesCode = `<span class="keyword">function</span> Formulario() {
  <span class="keyword">const</span> [email, setEmail] = useState(<span class="string">""</span>);
  <span class="keyword">const</span> [error, setError] = useState(<span class="string">""</span>);

  <span class="keyword">const</span> validar = () =&gt; {
    <span class="keyword">if</span> (!email.includes(<span class="string">"@"</span>)) {
      setError(<span class="string">"Ingresa un email válido"</span>);
      <span class="keyword">return</span> <span class="keyword">false</span>;
    }

    setError(<span class="string">""</span>);
    <span class="keyword">return</span> <span class="keyword">true</span>;
  };

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;input
        type=<span class="string">"email"</span>
        value={email}
        onChange={(e) =&gt; setEmail(e.target.value)}
      /&gt;
      {error &amp;&amp; &lt;p&gt;{error}&lt;/p&gt;}
      &lt;button onClick={validar}&gt;Validar&lt;/button&gt;
    &lt;/div&gt;
  );
}`;

const manejoSubmitCode = `<span class="keyword">function</span> Formulario() {
  <span class="keyword">const</span> [nombre, setNombre] = useState(<span class="string">""</span>);

  <span class="keyword">const</span> manejarSubmit = (e) =&gt; {
    e.preventDefault();
    console.log(<span class="string">"Formulario enviado:"</span>, nombre);
  };

  <span class="keyword">return</span> (
    &lt;form onSubmit={manejarSubmit}&gt;
      &lt;input
        type=<span class="string">"text"</span>
        value={nombre}
        onChange={(e) =&gt; setNombre(e.target.value)}
      /&gt;
      &lt;button type=<span class="string">"submit"</span>&gt;Enviar&lt;/button&gt;
    &lt;/form&gt;
  );
}`;

const libreriasFormCode = `npm install react-hook-form`;

export const Formularios = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Formularios
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Los formularios en React permiten capturar, validar y enviar datos del
        usuario. Generalmente se controlan mediante el estado del componente.
      </p>

      <h2
        id="inputs-controlados"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Inputs controlados
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un input controlado es aquel cuyo valor depende del estado de React.
        Cada cambio en el campo actualiza el estado, y el estado vuelve a
        reflejarse en la interfaz.
      </p>

      <Codeblock code={inputsControladosCode} title="TSX" />

      <Note title="Idea clave">
        En un componente controlado, React mantiene el{" "}
        <span className="font-semibold">control del valor del input</span>.
      </Note>

      <h2
        id="textarea-select"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Textarea y select
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El mismo enfoque se aplica a elementos como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          textarea
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          select
        </code>
        . Ambos pueden vincularse al estado usando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          value
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          onChange
        </code>
        .
      </p>

      <Codeblock code={textareaSelectCode} title="TSX" />

      <h2
        id="validaciones"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Validaciones básicas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Antes de enviar un formulario, es habitual validar que los datos tengan
        el formato esperado. Por ejemplo, verificar que un email incluya un
        símbolo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">@</code>.
      </p>

      <Codeblock code={validacionesCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Las validaciones pueden mostrar mensajes de error y evitar el envío
        hasta que los datos sean correctos.
      </p>

      <h2
        id="manejo-submit"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Manejo de submit
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para controlar el envío del formulario se utiliza el evento{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          onSubmit
        </code>
        . Normalmente se llama a{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          preventDefault()
        </code>{" "}
        para evitar que el navegador recargue la página.
      </p>

      <Codeblock code={manejoSubmitCode} title="TSX" />

      <h2
        id="librerias-form"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Librerías de formularios
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En formularios simples, useState suele ser suficiente. Pero en
        formularios grandes o complejos, muchas aplicaciones usan librerías
        especializadas para manejar validaciones, errores y envío de datos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una de las más populares es{" "}
        <span className="font-semibold">react-hook-form</span>.
      </p>

      <Codeblock code={libreriasFormCode} title="Terminal" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Formularios simples
          </h3>
          <p className="text-sm text-[#757575]">
            Puedes controlarlos fácilmente con useState y algunos manejadores de
            eventos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Formularios complejos
          </h3>
          <p className="text-sm text-[#757575]">
            Librerías como react-hook-form ayudan a reducir código repetitivo y
            mejorar la escalabilidad.
          </p>
        </div>
      </div>

      <Note title="Buena práctica">
        Empieza con formularios controlados simples. Cuando el formulario crece
        en complejidad, evalúa usar una librería como{" "}
        <span className="font-semibold">react-hook-form</span>.
      </Note>
    </DocsLayout>
  );
};
