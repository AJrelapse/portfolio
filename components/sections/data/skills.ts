interface Skills {
	[skill: string]: {
		name: string;
		img: string;
	}[];
}

const skills: Skills = {
	"Web Technologies": [
		{ name: "ReactJS", img: "https://cdn.svgporn.com/logos/react.svg" },
		{ name: "NextJS", img: "https://cdn.svgporn.com/logos/nextjs-icon.svg" },
		{ name: "TailwindCSS", img: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg" },
		{ name: "Bootstrap", img: "https://cdn.svgporn.com/logos/bootstrap.svg" },
		{ name: "HTML", img: "https://cdn.svgporn.com/logos/html-5.svg" },
		{ name: "CSS", img: "https://cdn.svgporn.com/logos/css-3.svg" },
		{ name: "JavaScript", img: "https://cdn.svgporn.com/logos/javascript.svg" },
		{ name: "TypeScript", img: "https://cdn.svgporn.com/logos/typescript-icon.svg" },
		{ name: "NodeJS", img: "https://cdn.svgporn.com/logos/nodejs-icon.svg" },
		{ name: "ExpressJS", img: "https://cdn.svgporn.com/logos/express.svg" },
		{ name: "FastAPI", img: "https://cdn.svgporn.com/logos/fastapi.svg" },
		{ name: "Shadcn UI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
		{ name: "Three.js", img: "https://cdn.svgporn.com/logos/threejs.svg" },
		{ name: "Axios", img: "https://cdn.svgporn.com/logos/axios.svg" },
	],

	"AI / Machine Learning": [
		{ name: "PyTorch", img: "https://cdn.svgporn.com/logos/pytorch-icon.svg" },
		{ name: "TensorFlow", img: "https://cdn.svgporn.com/logos/tensorflow.svg" },
		{ name: "Scikit-learn", img: "https://cdn.svgporn.com/logos/scikit-learn.svg" },
		{ name: "NumPy", img: "https://cdn.svgporn.com/logos/numpy.svg" },
		{ name: "Pandas", img: "https://cdn.svgporn.com/logos/pandas-icon.svg" },
		{
			name: "HuggingFace Transformers",
			img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
		}
	],

	"Databases": [
		{ name: "MySQL", img: "https://cdn.svgporn.com/logos/mysql.svg" },
		{ name: "PostgreSQL", img: "https://cdn.svgporn.com/logos/postgresql.svg" },
		{ name: "MongoDB", img: "https://cdn.svgporn.com/logos/mongodb-icon.svg" },
		{ name: "Firebase Firestore", img: "https://cdn.svgporn.com/logos/firebase.svg" },
	],

	"Cloud & DevOps": [
		{ name: "AWS", img: "https://cdn.svgporn.com/logos/aws.svg" },
		{ name: "Docker", img: "https://cdn.svgporn.com/logos/docker-icon.svg" },
		{ name: "Linux", img: "https://cdn.svgporn.com/logos/linux-tux.svg" },
		{ name: "Vercel", img: "https://cdn.svgporn.com/logos/vercel-icon.svg" },
		{ name: "Cloudflare", img: "https://cdn.svgporn.com/logos/cloudflare-icon.svg" },
		{ name: "Kubernetes", img: "https://cdn.svgporn.com/logos/kubernetes.svg" },
	],

	Languages: [
		{ name: "Python", img: "https://cdn.svgporn.com/logos/python.svg" },
		{ name: "Java", img: "https://cdn.svgporn.com/logos/java.svg" },
		{ name: "C", img: "https://cdn.svgporn.com/logos/c.svg" },
		{ name: "C++", img: "https://cdn.svgporn.com/logos/c-plusplus.svg" },
		{ name: "JavaScript", img: "https://cdn.svgporn.com/logos/javascript.svg" },
		{ name: "SQL", img: "https://cdn.svgporn.com/logos/mysql.svg" },
	],

	"Tools & Platforms": [
		{ name: "Git", img: "https://cdn.svgporn.com/logos/git-icon.svg" },
		{ name: "Postman", img: "https://cdn.svgporn.com/logos/postman-icon.svg" },
		{ name: "Figma", img: "https://cdn.svgporn.com/logos/figma.svg" },
		{ name: "Firebase", img: "https://cdn.svgporn.com/logos/firebase.svg" },
		{ name: "Three.js Editor", img: "https://cdn.svgporn.com/logos/threejs.svg" },
	],
};

export default skills;
