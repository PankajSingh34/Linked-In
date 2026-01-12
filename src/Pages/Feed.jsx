import card from "../components/Card.jsx";

const Feed = () => {
  return (
    <div className="flex gap-4 justify-center mt-4 max-w-6xl mx-auto min-h-screen">
      {/* Left */}

      <div className="flex-1 bg-amber-200 h-screen">
        left
        <div className="bg-amber-100 h-1/2">left top</div>
        <div className="bg-amber-100 h-1/2">left bottom</div>
      </div>
      {/* Middle */}
      <div className="flex-1 bg-amber-300 h-screen"></div>
      {/* Right */}
      <div className="flex-1 bg-amber-400 h-screen">right</div>
    </div>
  );
};
export default Feed;
