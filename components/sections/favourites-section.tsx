"use client";
import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import { AuroraText } from "../magicui/aurora-text";
import { GradientBars } from "../ui/gradient-bars";
import { motion } from "motion/react";
import Image from "next/image";

const FavouriteSection = () => {
  /* Animation for each card */
  const cardAnim = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(6px)",
    },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
	transition: {
	duration: 0.6,
	easing: "ease-out",
	},
    viewport: { once: true, margin: "-80px" },
  };

  return (
    <>
      <div className="pb-10">
        <TextReveal className="text-center">
          Looks like you unlocked my favorites!
        </TextReveal>

        <div className="flex flex-col gap-10 lg:px-30 px-8">
          {/* Headings */}
          <motion.h2
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AuroraText>Beyond code, here’s what I love</AuroraText>
          </motion.h2>

          <motion.h3
            className="text-xl text-center"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A mix of speed, screens, sports & vibes ✨
          </motion.h3>

          {/* GRID */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            
            {/* Card 1 */}
            <motion.div {...cardAnim}
              className="col-span-1 md:col-span-2 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Lamborghini Huracán Tecnica
                  </h3>
                  <p className="text-white/80 text-sm">
                    A masterpiece of speed & design.<br />
                    My ultimate dream supercar.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/huracan.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div {...cardAnim}
              className="col-span-1 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">Neymar Jr.</h3>
                  <p className="text-white/80 text-sm">
                    Flair, skills & creativity.<br />
                    My favorite football magician.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/neymar.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div {...cardAnim}
              className="col-span-1 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">Fortnite</h3>
                  <p className="text-white/80 text-sm">
                    Battle royale adrenaline.<br />
                    Strategy meets reflex.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/fortnite.webp" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div {...cardAnim}
              className="col-span-1 md:col-span-2 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">Justin Bieber</h3>
                  <p className="text-white/80 text-sm">
                    A global pop icon.<br />
                    Soundtrack of my playlists.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/bieber.webp" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div {...cardAnim}
              className="col-span-1 md:col-span-3 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-black/40" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">Game of Thrones</h3>
                  <p className="text-white/80 text-sm">
                    Epic battles & politics.<br />
                    A legendary fantasy universe.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/got.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div {...cardAnim}
              className="col-span-1 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-black/40" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">Gym</h3>
                  <p className="text-white/80 text-sm">
                    Discipline & strength.<br />
                    My daily reset system.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/gym.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 7 */}
            <motion.div {...cardAnim}
              className="col-span-1 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">Tropical Beaches</h3>
                  <p className="text-white/80 text-sm">
                    Peace & sunsets.<br />
                    My dream escape place.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/beach.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 8 */}
            <motion.div {...cardAnim}
              className="col-span-1 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-black/40" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">Hayabusa</h3>
                  <p className="text-white/80 text-sm">
                    The king of speed.<br />
                    A legendary superbike.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/hayabusa.png" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Card 9 */}
            <motion.div {...cardAnim}
              className="col-span-1 md:col-span-3 h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
              <div className="absolute inset-0 backdrop-blur-xl bg-black/10" />
              <div className="relative flex items-center justify-between h-full p-6 gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white">Henry Cavill</h3>
                  <p className="text-white/80 text-sm">
                    Superman & The Witcher.<br />
                    Geek icon & powerhouse actor.
                  </p>
                </div>
                <div className="h-full aspect-square relative rounded-xl overflow-hidden">
                  <Image src="/favorites/cavill.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* END SCREEN */}
      <div className="h-screen flex items-center justify-center relative">
        <GradientBars colors={["#7928CA", "transparent"]} />

        <motion.h1
          className="text-center md:text-7xl text-5xl font-bold z-10"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Scroll complete
          <br />
          Mission continues...
        </motion.h1>
      </div>
    </>
  );
};

export default FavouriteSection;
