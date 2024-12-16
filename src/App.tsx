import React, { useState, useEffect } from "react";
import { Heart, Gift, Music, Stars } from "lucide-react";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("/assets/music.mp3"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayAudio = () => {
    audio.play();
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-100">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full h-20 bg-pink-300/30 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Birthday Message */}
          <div
            className={`transform transition-all duration-1000 ${
              showMessage
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <Heart className="inline-block w-16 h-16 text-pink-500 animate-pulse" />
              <h1 className="text-5xl font-bold text-pink-600 mt-6 mb-4">
                Happy Birthday, My Love!
              </h1>
              <p className="text-xl text-pink-700">
                December 17th - A Special Day for a Special Person
              </p>
            </div>

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 transform hover:scale-[1.01] transition-transform">
              <img
                src="https://i.pinimg.com/1200x/94/b7/6b/94b76bb1769f15b49703975ec5496918.jpg"
                alt="Love"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent" />
            </div>

            {/* Message Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Gift className="w-8 h-8 text-pink-500 mb-4" />
                <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                  My Gift to You
                </h2>
                <p className="text-pink-700">
                  Every moment with you is a gift. You make my life brighter and
                  more beautiful.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Stars className="w-8 h-8 text-pink-500 mb-4" />
                <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                  My Wish for You
                </h2>
                <p className="text-pink-700">
                  May your day be filled with joy, laughter, and all the love
                  you deserve.
                </p>
              </div>
            </div>

            {/* Love Letter */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-12">
              <h2 className="text-3xl font-bold text-pink-600 mb-6">
                Dear Love,
              </h2>
              <p className="text-lg text-pink-700 leading-relaxed mb-4">
                On your special day, I want you to know how much you mean to me.
                Your smile brightens my darkest days, and your love makes my
                heart complete.
              </p>
              <p className="text-lg text-pink-700 leading-relaxed mb-4">
                Thank you for being the amazing person you are. You inspire me
                to be better every day.
              </p>
              <p className="text-lg text-pink-700 leading-relaxed">
                Happy Birthday, my love! ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      {/* Play Audio Button */}
      {!isPlaying && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={handlePlayAudio}
            className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <Music className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
