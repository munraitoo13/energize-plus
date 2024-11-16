export default function Header({ title, description }) {
  return (
    <header className="mt-48 flex w-full flex-col items-center justify-center px-5 text-center">
      <h1 className="text-5xl font-black">{title}</h1>
      <p className="mt-5 text-lg text-neutral-500">{description}</p>
    </header>
  );
}
