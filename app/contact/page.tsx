"use client";

import { useState, useRef } from "react"; // Ajoute useRef ici
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
	Select,
	SelectLabel,
	SelectItem,
	SelectContent,
	SelectGroup,
	SelectTrigger,
	SelectValue,
} from "../../components/ui/select";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const infos = [
	{
		Icon: <FaPhoneAlt />,
		label: "Téléphone",
		value: "+33 6 87 78 28 58",
	},
	{
		Icon: <FaEnvelope />,
		label: "Email",
		value: "sylvain@skdigit.fr",
	},
	{
		Icon: <FaMapMarkedAlt />,
		label: "Adresse",
		value: "Lablachère, 07230 - France",
	},
];

const Contact = () => {
	const [formData, setFormData] = useState({
		nom_complet: "",
		phone: "",
		email: "",
		sujet_demande: "",
		message: "",
	});

	const formRef = useRef<HTMLFormElement>(null);

	const customBtn = Swal.mixin({
		customClass: {
			confirmButton:
				"inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors bg-accent text-primary hover:bg-accent-hover h-[48px] px-6 max-w-40",
		},
		buttonsStyling: false,
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSelectChange = (value: string) => {
		setFormData((prevData) => ({
			...prevData,
			sujet_demande: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		customBtn.fire({
			title: "Message envoyé !",
			text: "Nous tâchons de vous répondre dans les plus brefs délais.",
			icon: "success",
		});

		setTimeout(() => {
			if (formRef.current) {
				formRef.current.submit();
				formRef.current.reset();
			}
			setFormData({
				nom_complet: "",
				phone: "",
				email: "",
				sujet_demande: "",
				message: "",
			});
		}, 500);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col-reverse xl:flex-row gap-[30px]">
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form
							ref={formRef} // Ajoute cette ligne
							name="contact_principal"
							method="POST"
							action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMID}`}
							target="hidden_iframe"
							className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
							onSubmit={handleSubmit}
						>
							<h3 className="text-4xl text-accent">Travaillons ensemble</h3>
							<p className="text-white/60">
								Vous avez un projet en tête et vous souhaitez en discuter ?
								N&apos;hésitez pas à me contacter.
							</p>
							<div className="grid grid-col-1 md:grid-cols-2 gap-6">
								<Input
									type="text"
									placeholder="Nom + Prénom"
									label="nom_complet"
									name="nom_complet"
									value={formData.nom_complet}
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									placeholder="Téléphone"
									label="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									required
								/>
								<Input
									type="email"
									placeholder="Email"
									label="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<Select
								name="sujet_demande"
								value={formData.sujet_demande}
								onValueChange={handleSelectChange}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Sujet de votre demande" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Choisissez un sujet</SelectLabel>
										<SelectItem value="wordpress_woocommerce">
											Sites Wordpress / WooCommerce
										</SelectItem>
										<SelectItem value="webapp">Web Applications</SelectItem>
										<SelectItem value="landingpage">Landing Pages</SelectItem>
										<SelectItem value="optiSeo">
											Optimisations Référencement
										</SelectItem>
										<SelectItem value="autre">Autre</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<Textarea
								className="h-[200px]"
								placeholder="Message"
								label="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
							/>
							<Button type="submit" size="md" className="max-w-40">
								Envoyer
							</Button>
						</form>
					</div>
					<div className="flex-1 flex items-center justify-center lg:justify-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{infos.map((info, index) => (
								<li key={index} className="flex items-center gap-6">
									<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
										<div className="text-[28px]">{info.Icon}</div>
									</div>
									<div className="flex-1">
										<h4 className="text-white/60">{info.label}</h4>
										<p className="text-xl">{info.value}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
		</motion.section>
	);
};

export default Contact;
