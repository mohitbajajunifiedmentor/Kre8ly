import { FaLinkedin } from "react-icons/fa";
const mentorbg = "/assets/SalesTeam/mentorbg.png";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";


const VideoCard = ({ video, onVideoStateChange }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    await videoRef.current.play();
    setIsPlaying(true);
    onVideoStateChange?.(true); // Stop slider
  };

  const handlePause = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    setIsPlaying(false);
    onVideoStateChange?.(false); // Start slider
  };

  const handleEnded = () => {
    setIsPlaying(false);
    onVideoStateChange?.(false); // ✅ Resume slider automatically
  };

  return (
    <div className="relative group w-full max-w-xs h-64 md:absolute md:-top-10 md:-bottom-10 md:w-80 md:h-[420px] rounded-2xl overflow-hidden">

      <video
        ref={videoRef}
        src={video}
        playsInline
        onEnded={handleEnded}   // 🔥 IMPORTANT
        className="w-full h-full object-cover"
      />

      <div
        onClick={() => {
          if (isPlaying) {
            handlePause();
          } else {
            handlePlay();
          }
        }}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
          isPlaying
            ? "opacity-0 hover:opacity-100"
            : "opacity-100 bg-black/30"
        }`}
      >
        <div className="bg-white/90 p-4 rounded-full shadow-lg">
          {isPlaying ? (
            <FaPause className="text-black text-xl" />
          ) : (
            <FaPlay className="text-black text-xl ml-1" />
          )}
        </div>
      </div>
    </div>
  );
};






const TeamCard = ({ img, video, name, linkedin, onVideoStateChange }) => {
      return (
            <div className="relative group w-full rounded-xl ">

                  {video ? (

                        <section
                              className="relative w-full py-16 md:h-80 px-4 md:px-20"
                              style={{
                                    backgroundImage: `url(${mentorbg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                              }}
                        >
                              <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center">

                                    {/* VIDEO */}
                                    <div
                                          className="
                                          w-full max-w-xs
                                          h-64
                                          md:absolute md:-top-[70px] md:-bottom-10 md:w-80 md:h-[420px]
                                          rounded-2xl  
                                          "
                                    >
                                          <VideoCard video={video} onVideoStateChange={onVideoStateChange} />
                                    </div>

                                    {/* CONTENT */}
                                    <div
                                          className="
                                                w-full
                                                mt-8 md:mt-0
                                                text-center md:text-left
                                                md:ml-[380px]
                                                px-2
                                                "
                                    >
                                          <h2 className="text-lg md:text-2xl font-semibold text-[#1F2937] mb-2 flex items-center justify-center md:justify-start gap-2">
                                                <span>MR. Sai prasad Kagne</span>

                                                <a
                                                      href={linkedin}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="text-[#0A66C2] transition-transform duration-300 hover:scale-110"
                                                >
                                                      <FaLinkedin size={18} />
                                                </a>
                                          </h2>

                                          <p className="text-[#4B5563] font-medium mb-3 text-sm md:text-base">
                                                Head Mentor at Kre8ly
                                          </p>

                                          <p className="text-[#6B7280] leading-6 text-sm md:text-base">
                                                Explore the diverse range of industries that provide placement
                                                opportunities for our students.
                                          </p>
                                    </div>

                              </div>
                        </section>




                  ) : (
                        <img
                              src={img}
                              alt={name}
                              className="block w-full aspect-[3/4] object-cover"
                        />
                  )}

                  {video ? null : linkedin && (
                        <a
                              href={linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute bottom-[27%] left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        >
                              <FaLinkedin size={18} />
                        </a>
                  )}
            </div>
      );
};

export default TeamCard;
