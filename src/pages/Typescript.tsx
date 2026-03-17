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
  bigint: <span class="keyword">12345678901234567890n</span>;
  simbolos: symbol = <span class="keyword">Symbol()</span>;
};`;

const codeUnionTypes = `<span class="keyword">type</span> Status = <span class="string">"loading"</span> | <span class="string">"success"</span> | <span class="string">"error"</span>;

<span class="keyword">type</span> ID = <span class="keyword">number</span> | <span class="keyword">string</span>;

<span class="keyword">function</span> <span class="function">printId</span>(id: ID) {
  console.<span class="function">log</span>(id);
}

<span class="function">printId</span>(42);
<span class="function">printId</span>(<span class="string">"abc-123"</span>);`;

const codeArrays = `<span class="comment">// Dos sintaxis equivalentes</span>
<span class="keyword">const</span> names: <span class="keyword">string</span>[] = [<span class="string">"Ana"</span>, <span class="string">"Luis"</span>, <span class="string">"Carlos"</span>];
<span class="keyword">const</span> ids: Array&lt;<span class="keyword">number</span>&gt; = [1, 2, 3];

<span class="comment">// Array de objetos tipados</span>
<span class="keyword">type</span> User = { id: <span class="keyword">number</span>; name: <span class="keyword">string</span> };
<span class="keyword">const</span> users: User[] = [
  { id: 1, name: <span class="string">"Ana"</span> },
  { id: 2, name: <span class="string">"Luis"</span> },
];

<span class="comment">// Array de union types</span>
<span class="keyword">const</span> mixed: (<span class="keyword">string</span> | <span class="keyword">number</span>)[] = [<span class="string">"hola"</span>, 42, <span class="string">"mundo"</span>];`;

const codeObjetos = `<span class="comment">// Tipo inline</span>
<span class="keyword">const</span> user: { id: <span class="keyword">number</span>; name: <span class="keyword">string</span> } = { id: 1, name: <span class="string">"Ana"</span> };

<span class="comment">// Con type alias</span>
<span class="keyword">type</span> Product = {
  id: <span class="keyword">number</span>;
  title: <span class="keyword">string</span>;
  price: <span class="keyword">number</span>;
  available?: <span class="keyword">boolean</span>; <span class="comment">// propiedad opcional</span>
};

<span class="keyword">const</span> product: Product = {
  id: 1,
  title: <span class="string">"Laptop"</span>,
  price: 999,
};`;

const codeReadonly = `<span class="comment">// readonly en propiedades de un objeto</span>
<span class="keyword">type</span> User = {
  <span class="keyword">readonly</span> id: <span class="keyword">number</span>;
  name: <span class="keyword">string</span>;
};

<span class="keyword">const</span> user: User = { id: 1, name: <span class="string">"Ana"</span> };
user.name = <span class="string">"Luis"</span>;  <span class="comment">// ✅ permitido</span>
user.id = 2;      <span class="comment">// ❌ Error: id es readonly</span>

<span class="comment">// readonly en arrays</span>
<span class="keyword">const</span> ids: <span class="keyword">readonly</span> <span class="keyword">number</span>[] = [1, 2, 3];
ids.<span class="function">push</span>(4); <span class="comment">// ❌ Error: no se puede mutar</span>

<span class="comment">// Object.freeze — inmutabilidad en runtime</span>
<span class="keyword">const</span> config = Object.<span class="function">freeze</span>({
  apiUrl: <span class="string">"https://api.example.com"</span>,
  timeout: 5000,
});

config.timeout = 3000; <span class="comment">// ❌ falla en runtime (y TypeScript lo infiere readonly)</span>`;

const codeIntersectionTypes = `<span class="keyword">type</span> Person = {
  name: <span class="keyword">string</span>;
  age: <span class="keyword">number</span>;
};

<span class="keyword">type</span> Employee = {
  company: <span class="keyword">string</span>;
  role: <span class="keyword">string</span>;
};

<span class="comment">// Intersection: combina ambos tipos</span>
<span class="keyword">type</span> EmployedPerson = Person & Employee;

<span class="keyword">const</span> worker: EmployedPerson = {
  name: <span class="string">"Ana"</span>,
  age: 30,
  company: <span class="string">"Acme"</span>,
  role: <span class="string">"developer"</span>,
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

      <Note title="TypeScript solo funciona en compilación">
        TypeScript no funciona en tiempo de ejecución, sino que se compila a
        JavaScript antes de ser ejecutado. Es decir, TypeScript mejora tu
        experiencia como developer, te avisa de errores antes de ejecutar, y te
        ayuda a escribir mejor código… pero no añade validaciones cuando el
        programa ya está corriendo.
      </Note>

      <h2
        id="tipos-basicos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Tipos primitivos
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

      <Note title="tipo number">
        El tipo number en TypeScript representa números enteros, decimales,
        negativos, hexadecimales e Infinity.
      </Note>

      <h2
        id="union-types"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Union Types
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un <strong>union type</strong> permite que una variable acepte más de un
        tipo de valor, usando el operador{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">|</code>.
      </p>

      <Codeblock code={codeUnionTypes} title="Union Types" />

      <Note title="Union types con literales">
        Puedes combinar valores literales para crear tipos más precisos, como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          "loading" | "success" | "error"
        </code>
        , evitando strings arbitrarios.
      </Note>

      <h2
        id="arrays"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Arrays
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En TypeScript puedes tipar arrays usando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          tipo[]
        </code>{" "}
        o la sintaxis genérica{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Array&lt;tipo&gt;
        </code>
        .
      </p>

      <Codeblock code={codeArrays} title="Arrays tipados" />

      <Note title="Arrays de objetos">
        Lo más común en React es manejar arrays de objetos tipados, por ejemplo
        al obtener listas de datos desde una API.
      </Note>

      <h2
        id="objetos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Objetos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Puedes tipar objetos directamente o usando un{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">type</code>{" "}
        alias. Las propiedades opcionales se marcan con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">?</code>.
      </p>

      <Codeblock code={codeObjetos} title="Objetos tipados" />

      <Note title="Propiedades opcionales">
        Marcar una propiedad como opcional con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">?</code>{" "}
        significa que puede estar ausente sin causar un error de tipos.
      </Note>

      <h2
        id="readonly"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Readonly y Object.freeze
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">readonly</code>{" "}
        evita que una propiedad sea reasignada a nivel de tipos en compilación.{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">Object.freeze</code>{" "}
        hace lo mismo pero en tiempo de ejecución.
      </p>

      <Codeblock code={codeReadonly} title="readonly y Object.freeze" />

      <Note title="readonly vs Object.freeze">
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">readonly</code>{" "}
        es una garantía solo en TypeScript y desaparece al compilar.{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">Object.freeze</code>{" "}
        protege el objeto en JavaScript real, pero solo de forma superficial (no congela objetos anidados).
      </Note>

      <h2
        id="intersection-types"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Intersection Types
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un <strong>intersection type</strong> combina múltiples tipos en uno
        usando el operador{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">&</code>.
        El resultado debe cumplir con todas las propiedades de los tipos
        involucrados.
      </p>

      <Codeblock code={codeIntersectionTypes} title="Intersection Types" />

      <Note title="Intersection vs Union">
        Con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">&</code>{" "}
        el valor debe tener <strong>todas</strong> las propiedades. Con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">|</code>{" "}
        basta con cumplir <strong>uno</strong> de los tipos.
      </Note>

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
