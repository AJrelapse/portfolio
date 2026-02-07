"use client";
import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from "../ui/timeline";
import { CheckIcon } from "lucide-react";
import { AuroraText } from "../magicui/aurora-text";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const items = [
		{
			id: 1,
			date: "Feb 2025 – Mar 2025",
			title: "Frontend Engineering Intern",
			company: "KalkiNI",
			description: (
				<div className="flex flex-col gap-2">
					<ul className="list-disc ml-4">
						<li>
							Contributed to multiple production-grade web applications
							using React for scalable frontend development.
						</li>
						<li>
							Revamped the organization’s primary website by fixing
							critical UI issues and integrating new sections.
						</li>
						<li>
							Gained hands-on experience in debugging, UI/UX
							optimization, and agile team collaboration.
						</li>
					</ul>
					<div className="flex gap-2 flex-wrap">
						<Badge variant="outline">ReactJS</Badge>
						<Badge variant="outline">JavaScript</Badge>
						<Badge variant="outline">TailwindCSS</Badge>
						<Badge variant="outline">REST APIs</Badge>
						<Badge variant="outline">Git</Badge>
					</div>
				</div>
			),
		},

		{
			id: 2,
			date: "Aug 2023 – May 2027",
			title: "Joined",
			separator: " ",
			company: "VIT, Vellore",
			description: (
				<div className="flex flex-col gap-2">
					<p>
						Pursuing B.Tech in Computer Science Engineering
						and Business Systems with a CGPA of <b>9.12</b>.
					</p>
					<ul className="list-disc ml-4">
						<li>
							Specializing in Full-Stack Development, AI Systems, and
							Cloud Computing.
						</li>
						<li>
							Built multiple AI and software engineering projects
							across ML, Web, and Systems domains.
						</li>
						<li>
							Active in hackathons, DSA, new trends.
						</li>
					</ul>
					<div className="flex gap-2 flex-wrap">
						<Badge variant="outline">AI/ML</Badge>
						<Badge variant="outline">Full-Stack</Badge>
						<Badge variant="outline">Cloud</Badge>
						<Badge variant="outline">Systems Design</Badge>
					</div>
				</div>
			),
		},

		{
			id: 3,
			date: "Jun 2021 – Apr 2023",
			title: "Class XII (CBSE)",
			separator: "from",
			company: "Sri Chaitanya Techno School",
			description: (
				<div className="flex flex-col gap-2">
					<p>
						Completed Higher Secondary Education with{" "}
						<b>90.7% (454/500)</b>.
					</p>
				</div>
			),
		},

		{
			id: 4,
			date: "Jun 2020 – May 2021",
			title: "Class X (CBSE)",
			separator: "from",
			company: "Sri Chaitanya Techno School",
			description: (
				<div className="flex flex-col gap-2">
					<p>
						Completed Secondary Education with{" "}
						<b>92.4% (462/500)</b>.
					</p>
				</div>
			),
		}
];

const ExperienceSection = () => {
	return (
		<div className="w-full xl:px-60 lg:px-30 sm:px-20 px-8 flex flex-col gap-8">
			<TextReveal className="text-center">
				Now let&apos;s talk about my experience
			</TextReveal>
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="flex justify-center"
			>
				<Timeline defaultValue={items.length}>
					{items.map((item) => (
						<TimelineItem
							step={item.id}
							className="group-data-[orientation=vertical]/timeline:ms-10"
							key={item.id}
						>
							<TimelineHeader>
								<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
								<TimelineDate>{item.date}</TimelineDate>
								<TimelineTitle>
									{item.title}{" "}
									<span className="font-normal">
										{item.separator ?? "at"}
									</span>{" "}
									<AuroraText className="font-black">
										{item.company}
									</AuroraText>
								</TimelineTitle>
								<TimelineIndicator className="group-data-completed/timeline-item:bg-green-500 group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
									<CheckIcon
										className="group-not-data-completed/timeline-item:hidden"
										size={16}
									/>
								</TimelineIndicator>
							</TimelineHeader>
							<TimelineContent>
								{item.description}
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</motion.div>
		</div>
	);
};

export default ExperienceSection;
