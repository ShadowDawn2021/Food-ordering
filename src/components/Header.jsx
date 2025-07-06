import logoImage from "../assets/Logo.jpg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <img
          src={logoImage}
          alt="Logo"
          className="w-35 h-35 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-800">The Sushi Hub</h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-4">
        <button className="p-2 hover:text-blue-600 transition-colors">
          Facebook
        </button>
        <button className="p-2 hover:text-pink-500 transition-colors">
          Instagram
        </button>
        <button className="flex items-center justify-center p-2 bg-red-500 text-white rounded-md hover:bg-red-400 ">
          Cart (0)
        </button>
      </nav>
    </header>
  );
}
