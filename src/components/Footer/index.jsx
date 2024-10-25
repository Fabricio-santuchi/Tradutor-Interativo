const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-3 text-sm text-textColor">
        &copy; {new Date().getFullYear()} Tradutor Interativo
      </div>
    </footer>
  );
};

export default Footer;
