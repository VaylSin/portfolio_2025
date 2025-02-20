import React from "react";

const Footer = () => {
	return (
		<footer className="bg-accent py-6">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-black">
						<p>&copy; 2025 SKDigit. Tous droits réservés.</p>
					</div>
					<div>
						<ul className="flex  gap-4 ">
							<li>
								<a
									href="/mentions-legales"
									className="text-black hover:text-black/60 transition-all duration-500"
								>
									Mentions légales
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
