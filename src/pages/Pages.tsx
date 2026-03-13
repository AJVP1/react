import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const codeInstall = `pnpm add -D gh-pages`;

const codeViteConfig = `<span class="keyword">import</span> { defineConfig } <span class="keyword">from</span> <span class="string">"vite"</span>;
<span class="keyword">import</span> react <span class="keyword">from</span> <span class="string">"@vitejs/plugin-react"</span>;

<span class="keyword">export default</span> <span class="function">defineConfig</span>({
  plugins: [<span class="function">react</span>()],
  base: <span class="string">"/nombre-del-repositorio/"</span>,
});`;

const codePackageJson = `"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}`;

const codeDeploy = `# 1. Construir el proyecto
npm run build

# 2. Publicar en GitHub Pages
npm run deploy`;
const githubPagesToc =
  modulosData.sidebar
    .flatMap((s) => s.items)
    .find((item) => item.to === "/github-pages")?.toc ?? [];

export const GithubPagesDocs = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={githubPagesToc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Deploy en GitHub Pages
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        GitHub Pages permite publicar aplicaciones frontend estáticas
        directamente desde un repositorio de GitHub.
      </p>

      <h2
        id="que-es-github-pages"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es GitHub Pages?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        GitHub Pages es un servicio de hosting gratuito para sitios estáticos.
        Es muy común usarlo para desplegar aplicaciones hechas con React y Vite.
      </p>

      <Note title="Idea principal">
        En proyectos con Vite, el deploy consiste en generar la carpeta{" "}
        <span className="font-semibold">dist</span> y subirla a la rama{" "}
        <span className="font-semibold">gh-pages</span>.
      </Note>

      <h2
        id="instalar-gh-pages"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Instalar gh-pages
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Primero instala la dependencia{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          gh-pages
        </code>{" "}
        que se encargará de publicar la carpeta del build en GitHub Pages.
      </p>

      <Codeblock code={codeInstall} title="Terminal" />

      <h2
        id="configurar-vite"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Configurar Vite
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Debes configurar la propiedad{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">base</code>{" "}
        para que los assets funcionen correctamente en GitHub Pages.
      </p>

      <Codeblock code={codeViteConfig} title="vite.config.ts" />

      <h2
        id="configurar-scripts"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Configurar scripts
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Agrega un script llamado{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          deploy
        </code>{" "}
        dentro de tu archivo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          package.json
        </code>
        .
      </p>

      <Codeblock code={codePackageJson} title="package.json" />

      <h2
        id="publicar"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Publicar el proyecto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una vez configurado todo, solo necesitas ejecutar el build del proyecto
        y luego ejecutar el script de deploy.
      </p>

      <Codeblock code={codeDeploy} title="Terminal" />
    </DocsLayout>
  );
};
