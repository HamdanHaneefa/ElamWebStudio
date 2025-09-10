import React, { useRef, useState, useEffect } from 'react';
import { Code, Server, Layers, Palette, Link, Users, ChevronLeft, ChevronRight } from 'lucide-react';

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

const ServiceCard = ({ service }) => (
	<div className="service-card relative bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8 min-w-[320px] max-w-[350px] h-[340px] flex flex-col justify-between mx-auto transition-all duration-300 hover:shadow-2xl hover:border-orange-400">
		<div>
			<div className="flex items-center justify-between mb-6">
				<div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20 text-orange-400">
					{service.icon}
				</div>
				<span className="text-xs text-orange-400 font-medium uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
					{service.category}
				</span>
			</div>
			<h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
			<p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
		</div>
		<button className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors duration-300 mt-4">
			Learn More
			<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
			</svg>
		</button>
	</div>
);

const ServicesSection = () => {
	const scrollRef = useRef(null);
	const [scrollIndex, setScrollIndex] = useState(0);

	// Card width + gap (match CSS)
	const CARD_WIDTH = 350;
	const CARD_GAP = 32;

	// Scroll to card index with smooth effect
	const scrollToCard = (index) => {
		if (scrollRef.current) {
			const scrollX = index * (CARD_WIDTH + CARD_GAP);
			scrollRef.current.scrollTo({ left: scrollX, behavior: 'smooth' });
			setScrollIndex(index);
		}
	};

	// Next/Prev handlers
	const handlePrev = () => {
		if (scrollIndex > 0) scrollToCard(scrollIndex - 1);
	};
	const handleNext = () => {
		if (scrollIndex < servicesData.length - 1) scrollToCard(scrollIndex + 1);
	};

	return (
		<section className="w-full min-h-screen py-6 px-6 relative overflow-hidden">
			<style>{`
        .services-horizontal-scroll {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          padding-bottom: 2rem;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scroll-padding-left: 0;
        }
        .services-horizontal-scroll::-webkit-scrollbar {
          display: none;
        }
        .service-card {
          scroll-snap-align: center;
        }
        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(30,41,59,0.5);
          border: 1px solid rgba(251,146,60,0.3);
          color: #fb923c;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .scroll-btn:active {
          background: rgba(251,146,60,0.15);
        }
        .scroll-btn-left {
          left: 0.5rem;
        }
        .scroll-btn-right {
          right: 0.5rem;
        }
        @media (max-width: 1023px) {
          .services-horizontal-scroll {
             scroll-padding-left: 4.5rem; /* was 2rem */
    		padding-left: 4.5rem;        /* was 2rem */
          }
        }
        @media (min-width: 1024px) {
          .services-horizontal-scroll {
            justify-content: center;
            overflow-x: visible;
            gap: 2.5rem;
            scroll-padding-left: 0;
            padding-left: 0; /* Remove left padding on desktop */
          }
          .scroll-btn {
            display: none;
          }
        }
      `}</style>
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="text-center mb-12 mt-20">
					<h3 className="text-4xl md:text-4xl lg:text-5xl font-light text-white mb-6">
						Our
						<span className="text-orange-400 font-normal"> Services</span>
					</h3>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Comprehensive solutions for all your web development needs
					</p>
				</div>
				{/* Scroll Buttons (mobile/tablet only) */}
				<button
					className="scroll-btn scroll-btn-left"
					style={{ background: 'rgba(30,41,59,0.5)' }}
					onClick={handlePrev}
					aria-label="Previous"
				>
					<ChevronLeft size={28} />
				</button>
				<button
					className="scroll-btn scroll-btn-right"
					style={{ background: 'rgba(30,41,59,0.5)' }}
					onClick={handleNext}
					aria-label="Next"
				>
					<ChevronRight size={28} />
				</button>
				{/* Horizontal Scroll Section */}
				<div
					className="services-horizontal-scroll"
					ref={scrollRef}
					style={{
						position: 'relative',
						marginLeft: '0',
						marginRight: '0',
					}}
				>
					{servicesData.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
