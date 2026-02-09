"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { SparklesText } from "../magicui/sparkles-text";
import { AuroraText } from "../magicui/aurora-text";

const AchievementSection = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className="w-full mt-90">

			<div ref={targetRef} className="relative h-[100vh]">

			<div className="sticky top-1/2 -translate-y-1/2 flex justify-center">

					<SparklesText className="text-5xl md:text-6xl lg:text-7xl text-center">
						My Achievements
					</SparklesText>

				</div>
			</div>

			<div className="xl:px-60 lg:px-30 sm:px-20 px-8 flex flex-col items-center gap-10 pb-20">

					<motion.h2
						className="text-4xl font-bold text-center mt-10"
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<AuroraText>
							ISRO × IIT Delhi Space-Hack 2025
						</AuroraText>
					</motion.h2>
					

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl"
				>
					Secured <span className="font-semibold text-primary">Top 10</span> position
					among <span className="font-semibold">1000+ teams</span> in the
					national-level space technology hackathon conducted by ISRO
					and IIT Delhi — building innovative solutions for real-world
					space mission challenges.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 60, scale: 0.9 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="relative w-full max-w-5xl "
				>

					<div className="absolute inset-0 rounded-3xl blur-2xl opacity-40 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-aurora"></div>

					<div className="relative backdrop-blur-xl bg-white/5 dark:bg-white/10 border border-white/10 rounded-3xl p-4 shadow-2xl">

						<Image
							src="/SpaceHack.jpg"
							alt="ISRO IIT Delhi Space Hack Certificate"
							width={1200}
							height={700}
							className="rounded-2xl w-full h-auto"
						/>

					</div>
				</motion.div>


			</div>
		</div>
	);
};

export default AchievementSection;
