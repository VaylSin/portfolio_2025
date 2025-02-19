"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RiCloseLargeFill } from "react-icons/ri";
import { Button } from "./ui/button";

const Modal = ({ isOpen, onClose, content }) => {
	if (!isOpen) return null;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-primary  "
		>
			<div className="bg-primary flex flex-col gap-8 items-center justify-center w-full h-full p-16 overflow-auto relative">
				<button
					onClick={onClose}
					className="absolute w-15 top-12 right-12 text-white"
				>
					<RiCloseLargeFill size={32} />
				</button>
				<div>{content}</div>
				<Link href="/contact">
					<Button>Une question ? Un devis ? Par ici !</Button>
				</Link>
			</div>
		</motion.div>
	);
};

export default Modal;
