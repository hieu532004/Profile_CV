import {
	FiGithub,
	FiFacebook
} from 'react-icons/fi';


function AppFooterCopyright() {
	return (
	<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; 2023
				
				<a
					href="https://github.com/Khanhlinh952001"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-thin hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Khanh_Linh
				</a>
			</div>
		</div>
	);
}



const socialLinks = [
	{
		id: 1,
		icon: <FiFacebook  />,
		url: 'https://www.facebook.com/linh.vokhanh.395/',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/Khanhlinh952001',
	},
	// {
	// 	id: 3,
	// 	icon: <FiTwitter />,
	// 	url: 'https://twitter.com/realstoman',
	// },
	// {
	// 	id: 4,
	// 	icon: <FiLinkedin />,
	// 	url: 'https://www.linkedin.com/in/realstoman',
	// },
	// {
	// 	id: 5,
	// 	icon: <FiYoutube />,
	// 	url: 'https://www.youtube.com/c/realstoman',
	// },
];

const Footer = () => {
	return (
		<div className="container mx-auto">
			<div  className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div  className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				< AppFooterCopyright />
			</div>
		</div>
	);
};

export default Footer;
