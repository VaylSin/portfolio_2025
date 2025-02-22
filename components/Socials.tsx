import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
	{ icon: <FaGithub />, path: "https://github.com/VaylSin" },
	{ icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sylvain-butet" },
	{ icon: <FaTwitter />, path: "https://x.com/sly_b33" },
];
interface SocialsProps {
	containerStyles?: string;
	iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
	return (
		<div className={`flex items-center gap-4 ${containerStyles}`}>
			{socials.map((social, index) => (
				<Link
					key={index}
					target="_blank"
					href={social.path}
					className={`text-white hover:text-accent ${iconStyles}`}
				>
					{social.icon}
				</Link>
			))}
		</div>
	);
};

export default Socials;
