import type { ReactNode } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

type DocsLayoutProps = {
  sidebar?: ReactNode;
  toc?: ReactNode;
  children: ReactNode;
};

export const DocsLayout = ({ sidebar, toc, children }: DocsLayoutProps) => {
  return (
    <>
      <Header />

      <div className="mx-auto flex max-w-360">
        {/* Sidebar izquierdo */}
        {sidebar}

        {/* Contenido principal */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-3xl px-6 py-10">
            {children}
            <Footer />
          </div>
        </main>

        {/* Sidebar derecho */}
        {toc}
      </div>
    </>
  );
};
