import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

function Header() {
  return (
    <header className="lg:flex justify-between items-center max-w-[85%] w-5xl mx-auto mt-6 mb-12">
      <div>
        <h1 className="clr-neutral-900 | font-bold text-[1.75rem]">
          Social Media Dashboard
        </h1>
        <span className="clr-neutral-700 font-bold">
          Total Followers: 23,004
        </span>
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
