import React from 'react';
import { Code, Server, Layers, Palette, Link, Users } from 'lucide-react';
import ServiceCarousel from '../components/ServiceCarousel';

const servicesData = [
	{
		title: 'Frontend Development',
		description:
			'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
		icon: <Code className="w-8 h-8" />,
		category: 'Development',
	},
	{
		title: 'Backend Development',
		description:
			'Scalable APIs, databases, and server infrastructure to power your applications.',
		icon: <Server className="w-8 h-8" />,
		category: 'Development',
	},
	{
		title: 'Full-Stack Applications',
		description:
			'Complete web solutions from database to user interface, architected for scale.',
		icon: <Layers className="w-8 h-8" />,
		category: 'Development',
	},
	{
		title: 'UI/UX Design',
		description:
			'User-centered design systems and interfaces that prioritize usability and aesthetics.',
		icon: <Palette className="w-8 h-8" />,
		category: 'Design',
	},
	{
		title: 'API Integration',
		description:
			'Seamless third-party integrations and custom API development for enhanced functionality.',
		icon: <Link className="w-8 h-8" />,
		category: 'Integration',
	},
	{
		title: 'Technical Consulting',
		description:
			'Strategic guidance on technology decisions, architecture reviews, and development best practices.',
		icon: <Users className="w-8 h-8" />,
		category: 'Consulting',
	},
];

const ServicesSection = () => {
	return (
		<section className="w-full min-h-[70vh] py-14 px-6 relative">
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-10 mt-10">
					<h3 className="text-4xl md:text-5xl font-light text-white mb-4">
						Our <span className="text-orange-400 font-normal">Services</span>
					</h3>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Comprehensive solutions for all your web development needs
					</p>
				</div>
				<ServiceCarousel services={servicesData} />
			</div>
		</section>
	);
};

export default ServicesSection;
