function Footer() {
  return (
    <div className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="flex space-x-4">
        <a href="#about" className="text-lg">
          About
        </a>
        <a href="#contact" className="text-lg">
          Contact
        </a>
      </div>
      <p className="text-sm">Jemputan &copy; 2024</p>
    </div>
  );
}

export default Footer;
