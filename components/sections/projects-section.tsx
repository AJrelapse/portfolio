"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ProjectSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sm:px-30 px-8 mt-30 py-10 flex flex-col gap-8"
		>
			<div className="flex justify-center items-center flex-col gap-4">
				<Badge
					variant="destructive"
					className="sm:text-4xl text-3xl font-bold tracking-wide "
				>
					My Projects
				</Badge>

				<motion.div
					initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10"
				>
					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="w-full h-full bg-green-700 min-h-[500px] lg:min-h-[300px]">
							<Link
								href="https://github.com/AJrelapse/TraffiSense"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>

							<div className="lg:max-w-lg w-full">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									TraffiSense
								</h2>

								<p className="mt-4 text-left text-base/6 text-neutral-200">
									TraffiSense is an AI-powered intelligent traffic
									congestion prediction platform that analyzes
									real-time and historical traffic data to forecast
									congestion levels. The system helps optimize route
									planning, reduce travel time, and support smart city
									traffic management using predictive analytics and
									scalable cloud infrastructure.
								</p>
							</div>

							<Image
								src="/traffic.png"
								width={600}
								height={500}
								alt="project-traffisense"
								className="absolute -right-4 -bottom-20 md:-bottom-10 rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-2"
					>
						<WobbleCard containerClassName="w-full h-full min-h-[500px] xl:min-h-[300px]">
							<Link
								href="https://github.com/AJrelapse/medxbot"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>

							<div className="lg:max-w-xs w-full">
								<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
									MedxBot
								</h2>

								<p className="mt-4 text-left text-base/6 text-neutral-200">
									An AI-powered medical chatbot built using
									fine-tuned BERT and LoRA-based TinyLlama models.
									Implements a two-stage diagnosis and explanation
									pipeline to provide symptom analysis and medical
									insights through an interactive conversational
									interface.
								</p>
							</div>

							<Image
								src="/medxbot.png"
								width={600}
								height={500}
								alt="project-medxbot"
								className="absolute -right-4 lg:-right-[20%] -bottom-5 object-contain rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="col-span-1"
					>
						<WobbleCard containerClassName="min-h-[300px] bg-pink-800">
							<Link
								href="https://github.com/AJrelapse/meeting-scheduler"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>

							<h2 className="text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
								Meeting Scheduler Platform
							</h2>

							<p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
								
								A full-stack meeting scheduling platform with
									Google OAuth authentication and Calendar API
									integration. Features real-time booking,
									time-zone support, automated notifications, and
									Firestore-based data synchronization.
							</p>
						</WobbleCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-1 lg:col-span-3"
					>
						<WobbleCard containerClassName="h-full bg-purple-900 min-h-[500px] lg:min-h-[300px]">
							<Link
								href="https://github.com/AJrelapse/space-hack"
								target="_blank"
								rel="noopener noreferrer"
								className="absolute w-full h-full top-0 left-0"
							></Link>

							<div className="lg:max-w-lg w-full">
								<h2 className="text-left text-balance text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
									SpaceCargo Stowage System
								</h2>

								<p className="mt-4 text-left text-base/6 text-neutral-200">
									A cargo tracking and stowage visualization system
								designed for space missions. Built backend cargo
								validation pipelines using FastAPI and Polars and
								developed a 3D ISS cargo layout visualization using
								React and Three.js for spatial mapping.
								</p>
							</div>

							<Image
								src="/spacecargo.png"
								width={650}
								height={500}
								alt="project-meeting-scheduler"
								className="absolute -right-4 lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
							/>
						</WobbleCard>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="flex justify-center"
			>
				<h2 className="sm:text-2xl text-xl font-bold tracking-wide">
					...and many more
				</h2>
			</motion.div>
		</motion.div>
	);
};

export default ProjectSection;
