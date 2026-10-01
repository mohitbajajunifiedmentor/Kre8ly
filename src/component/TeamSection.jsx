import { useState, useEffect } from "react";
import TeamCard from "./TeamCard";

const TeamSection = ({ title, members, onVideoStateChange, darkMode }) => {
      const [videoCard, setVideoCard] = useState(false);
      const words = title.split(" ");
      const firstPart = words[0];
      const secondPart = words.slice(1).join(" ");

      useEffect(() => {
            const hasVideo = members.some(member => member.video);
            setVideoCard(hasVideo);
      }, [members]);
      return (
            <section className="w-full px-4 py-16 overflow-hidden">

                  {/* MOBILE */}
                  <div className={`grid ${videoCard ? "grid-cols-1" : "grid-cols-2"} gap-4 md:hidden`}>
                        {members.map((member, index) => (
                              <div
                                    key={index}
                                    className={
                                          !videoCard &&
                                                members.length % 2 !== 0 &&
                                                index === 0
                                                ? "col-span-2 flex justify-center"
                                                : ""
                                    }
                              >
                                    <TeamCard {...member} onVideoStateChange={onVideoStateChange} />

                              </div>
                        ))}
                  </div>


                  {/* DESKTOP AUTO SIZE ROW */}
                  <div className="hidden md:flex justify-center items-end gap-6 p-10">
                        {members.map((member, index) => (
                              <div
                                    key={index}
                                    className={`flex-1 ${member.video
                                          ? ""
                                          : `max-w-[220px] transition-all duration-500 ${index % 2 !== 0 ? "translate-y-24" : ""
                                          }`
                                          }`}
                              >
                                    <TeamCard
                                          {...member}
                                          onVideoStateChange={onVideoStateChange}
                                    />

                              </div>
                        ))}
                  </div>

            </section>
      );
};

export default TeamSection;
