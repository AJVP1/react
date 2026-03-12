import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f2f2f2] bg-white/95 backdrop-blur-lg mx-auto flex max-w-360 items-center px-6 py-4">
      <Link to="/" className="flex w-fit items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5631c6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-atom"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12v.01" />
          <path d="M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9" />
          <path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242" />
        </svg>
        <span className="text-xl font-extrabold tracking-tight text-[#141414]">
          Documentación React
        </span>
      </Link>
    </header>
  );
};
