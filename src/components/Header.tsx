import logo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold text-3xl tracking-wide">
            REACTFLIX
          </span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex gap-6 text-white/70">
            <button className="hover:text-white">Home</button>
            <button className="hover:text-white">TV Shows</button>
            <button className="hover:text-white">Movies</button>
          </nav>
          <div className="h-8 w-8 rounded bg-gray-600/40" />
        </div>
      </div>
    </header>
  );
};

export default Header;
