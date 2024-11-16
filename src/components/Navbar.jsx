import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed mt-5 w-fit self-center rounded-xl bg-neutral-200/50 p-5 font-semibold shadow-sm backdrop-blur-lg">
      <ul className="flex gap-5 text-sm">
        <li className="cursor-pointer hover:text-green-500">
          <Link to={"/"}>Home</Link>
        </li>

        <li className="cursor-pointer hover:text-green-500">
          <Link to={"/problemas"}>Problemas</Link>
        </li>

        <li className="cursor-pointer hover:text-green-500">
          <Link to={"/funcionalidades"}>Funcionalidades</Link>
        </li>

        <li className="cursor-pointer hover:text-green-500">
          <Link to={"/beneficios"}>Benefícios</Link>
        </li>

        <li className="cursor-pointer hover:text-green-500">
          <Link to={"/sobre"}>Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
