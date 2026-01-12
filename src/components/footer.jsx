const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col py-5">
      <div className="flex items-center gap-2">
        {/* LinkedIn Logo */}
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">in</span>
        </div>
        {/* Text Logo */}
        <div className="flex gap-0">
          <h3 className="text-blue-800 font-bold text-2xl">Linked</h3>
          <h3 className="text-blue-600 font-bold text-2xl">In</h3>
        </div>
      </div>
      <div>@copyright 2026</div>
    </div>
  );
};

export default Footer;
