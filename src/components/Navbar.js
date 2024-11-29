// Example NavBar.jsx
const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md">
    <div className="flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-green-400">Home</a></li>
        <li><a href="/about" className="hover:text-green-400">About</a></li>
        <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
