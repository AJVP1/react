import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const basicUseIdCode = `<span class="keyword">import</span> { useId } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> CampoEmail() {
  <span class="keyword">const</span> id = <span class="function">useId</span>();

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;label htmlFor={id}&gt;Email&lt;/label&gt;
      &lt;input id={id} type=<span class="string">"email"</span> /&gt;
    &lt;/div&gt;
  );
}`;

const multipleIdsCode = `<span class="keyword">import</span> { useId } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> Formulario() {
  <span class="keyword">const</span> id = <span class="function">useId</span>();

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;label htmlFor={id + <span class="string">"-name"</span>}&gt;Nombre&lt;/label&gt;
      &lt;input id={id + <span class="string">"-name"</span>} /&gt;

      &lt;label htmlFor={id + <span class="string">"-email"</span>}&gt;Email&lt;/label&gt;
      &lt;input id={id + <span class="string">"-email"</span>} /&gt;
    &lt;/div&gt;
  );
}`;

const reusableComponentCode = `<span class="keyword">import</span> { useId } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> Input({ label, type }) {
  <span class="keyword">const</span> id = <span class="function">useId</span>();

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;label htmlFor={id}&gt;{label}&lt;/label&gt;
      &lt;input id={id} type={type} /&gt;
    &lt;/div&gt;
  );
}

<span class="keyword">function</span> Formulario() {
  <span class="keyword">return</span> (
    &lt;&gt;
      &lt;Input label=<span class="string">"Nombre"</span> type=<span class="string">"text"</span> /&gt;
      &lt;Input label=<span class="string">"Email"</span> type=<span class="string">"email"</span> /&gt;
    &lt;/&gt;
  );
}`;

const accessibilityCode = `<span class="keyword">import</span> { useId } <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">function</span> CampoPassword() {
  <span class="keyword">const</span> id = <span class="function">useId</span>();

  <span class="keyword">return</span> (
    &lt;div&gt;
      &lt;label htmlFor={id}&gt;Contraseña&lt;/label&gt;
      &lt;input id={id} type=<span class="string">"password"</span> aria-describedby={id + <span class="string">"-hint"</span>} /&gt;
      &lt;p id={id + <span class="string">"-hint"</span>}&gt;
        Debe contener al menos 8 caracteres
      &lt;/p&gt;
    &lt;/div&gt;
  );
}`;

export const UseId = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={
        <TableOfContents
          items={modulosData.sidebar[2].items[2].toc}
        />
      }
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        useId
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        <span className="font-semibold">useId</span> es un hook de React que
        genera identificadores únicos y estables. Se usa principalmente para
        asociar elementos HTML como <code>label</code> e <code>input</code>,
        mejorando la accesibilidad de los formularios.
      </p>

      <h2
        id="que-es-useid"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es useId?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Este hook genera un identificador único que permanece estable entre
        renders. Es útil cuando necesitas relacionar elementos mediante
        atributos como <code>htmlFor</code>, <code>id</code> o{" "}
        <code>aria-describedby</code>.
      </p>

      <Note title="Idea clave">
        <span className="font-semibold">useId</span> ayuda a generar IDs únicos
        sin tener que crearlos manualmente.
      </Note>

      <h2
        id="uso-basico"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Uso básico
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El caso más común es conectar un <code>label</code> con un{" "}
        <code>input</code>. Esto mejora la accesibilidad y permite que el
        navegador enfoque el campo cuando se hace clic en el label.
      </p>

      <Codeblock code={basicUseIdCode} title="TSX" />

      <h2
        id="multiples-ids"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Generar múltiples ids
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        A partir de un ID base puedes generar otros IDs derivados para
        diferentes elementos relacionados dentro del mismo componente.
      </p>

      <Codeblock code={multipleIdsCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este patrón es útil cuando un campo necesita varios elementos asociados,
        como etiquetas, hints o mensajes de error.
      </p>

      <h2
        id="componentes-reutilizables"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Componentes reutilizables
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        useId es especialmente útil en componentes reutilizables, ya que cada
        instancia generará automáticamente un identificador único.
      </p>

      <Codeblock code={reusableComponentCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto evita conflictos de IDs cuando el mismo componente aparece varias
        veces en la interfaz.
      </p>

      <h2
        id="accesibilidad"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Accesibilidad
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        useId también se utiliza para mejorar la accesibilidad mediante
        atributos ARIA como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          aria-describedby
        </code>
        .
      </p>

      <Codeblock code={accessibilityCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto permite asociar mensajes de ayuda o error con un campo específico,
        lo que facilita la navegación para lectores de pantalla.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Formularios accesibles
          </h3>
          <p className="text-sm text-[#757575]">
            Conecta etiquetas, campos y mensajes de ayuda correctamente.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Componentes reutilizables
          </h3>
          <p className="text-sm text-[#757575]">
            Cada instancia del componente genera un ID único automáticamente.
          </p>
        </div>
      </div>

      <Note title="Buena práctica">
        Usa <span className="font-semibold">useId</span> cuando necesites
        relacionar elementos del DOM de forma segura, especialmente en
        componentes reutilizables o formularios accesibles.
      </Note>
    </DocsLayout>
  );
};
