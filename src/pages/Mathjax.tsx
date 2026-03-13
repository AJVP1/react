import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const codeInstall = `pnpm add better-react-mathjax`;

const codeProvider = `<span class="keyword">import</span> { MathJaxContext } <span class="keyword">from</span> <span class="string">"better-react-mathjax"</span>;
<span class="keyword">import</span> <span class="function">Router</span> <span class="keyword">from</span> <span class="string">"./Router"</span>;

<span class="keyword">export default function</span> <span class="function">App</span>() {
  <span class="keyword">return</span> (
    &lt;<span class="function">MathJaxContext</span>
      config={{
        tex: {
          inlineMath: [[<span class="string">"$"</span>, <span class="string">"$"</span>]]
        }
      }}
    &gt;
      &lt;<span class="function">Router</span> /&gt;
    &lt;/<span class="function">MathJaxContext</span>&gt;
  );
}`;

const codeUsage = `<span class="keyword">import</span> { MathJax } <span class="keyword">from</span> <span class="string">"better-react-mathjax"</span>;

<span class="keyword">export default function</span> <span class="function">Page</span>() {
  <span class="keyword">return</span> (
    &lt;<span class="function">MathJax</span>&gt;
      &lt;<span class="function">div</span> className=<span class="string">"space-y-6"</span>&gt;

        &lt;<span class="function">p</span>&gt;La energía es $E = mc^2$&lt;/<span class="function">p</span>&gt;

        &lt;<span class="function">p</span>&gt;$$\\\\int_0^1 x^2 \\\\, dx = \\\\frac{1}{3}$$&lt;/<span class="function">p</span>&gt;

      &lt;/<span class="function">div</span>&gt;
    &lt;/<span class="function">MathJax</span>&gt;
  );
}`;

export const MathJaxDocs = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[5].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        MathJax
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        MathJax permite renderizar fórmulas matemáticas en una aplicación React
        utilizando sintaxis LaTeX.
      </p>

      <h2
        id="que-es-mathjax"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es MathJax?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        MathJax convierte expresiones matemáticas escritas con sintaxis LaTeX en
        fórmulas visuales dentro del navegador.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Es ampliamente utilizado en documentación técnica, cursos de matemáticas
        y contenido científico.
      </p>

      <Note title="Idea principal">
        MathJax permite escribir fórmulas matemáticas directamente dentro del
        texto utilizando delimitadores como <code>$</code>.
      </Note>

      <h2
        id="instalacion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Instalación
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Primero instala la librería que integra MathJax con React.
      </p>

      <Codeblock code={codeInstall} title="Terminal" />

      <h2
        id="configurar-contexto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Configurar el contexto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Envuelve tu componente principal con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          MathJaxContext
        </code>{" "}
        directamente en{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          App.tsx
        </code>{" "}
        para que las fórmulas estén disponibles en toda la aplicación.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En la configuración se define que las fórmulas inline usan el
        delimitador <code>$</code>.
      </p>

      <Codeblock code={codeProvider} title="App.tsx" />

      <h2
        id="usar-componente"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Usar Mathjax
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Envuelve el{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          return
        </code>{" "}
        del componente con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          MathJax
        </code>{" "}
        para que cualquier fórmula escrita con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">$</code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">$$</code>{" "}
        se renderice automáticamente.
      </p>

      <Codeblock code={codeUsage} title="Page.tsx" />
    </DocsLayout>
  );
};
