
const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-4 px-6">
      {/* Copyright */}
      <div className="text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Rajnish Kumar Tiwari. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
