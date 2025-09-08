import React, { useState } from 'react';
import { Code, Server, Layers, Palette, Link, Users } from 'lucide-react';

const servicesData = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
    icon: <Code className="w-8 h-8" />,
    category: 'Development'
  },
  {
    title: 'Backend Development', 
    description: 'Scalable APIs, databases, and server infrastructure to power your applications.',
    icon: <Server className="w-8 h-8" />,
    category: 'Development'
  },
  {
    title: 'Full-Stack Applications',
    description: 'Complete web solutions from database to user interface, architected for scale.',
    icon: <Layers className="w-8 h-8" />,
    category: 'Development'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design systems and interfaces that prioritize usability and aesthetics.',
    icon: <Palette className="w-8 h-8" />,
    category: 'Design'
  },
  {
    title: 'API Integration',
    description: 'Seamless third-party integrations and custom API development for enhanced functionality.',
    icon: <Link className="w-8 h-8" />,
    category: 'Integration'
  },
  {
    title: 'Technical Consulting',
    description: 'Strategic guidance on technology decisions, architecture reviews, and development best practices.',
    icon: <Users className="w-8 h-8" />,
    category: 'Consulting'
  }
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-500 hover:bg-slate-800/70 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0px)',
      }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="relative z-10">
        {/* Icon and Category */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 transition-colors duration-300">
            {service.icon}
          </div>
          <span className="text-xs text-orange-400 font-medium uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            {service.category}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {service.description}
          </p>
          
          {/* Learn More Button */}
          <button className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors duration-300 group/btn">
            Learn More
            <svg 
              className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-orange-500/20 border border-orange-500/30 rounded-full mb-8 backdrop-blur-sm shadow-lg">
            <span className="text-orange-400 text-sm font-medium tracking-wider">Stand Out Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Websites Packed With
            <br />
            <span className="text-orange-400 font-normal">Features</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive web development services that combine cutting-edge technology with exceptional design to deliver outstanding digital experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Feature List */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-2 h-12 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                    Video Edit
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    We edit highly engaging video edits for the hero section of your websites, that helps you with high user engagement and timespan
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-2 h-12 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    Graphics
                    <span className="text-orange-400 text-sm ml-2">90% increase in interaction</span>
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-2 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    SEO
                    <span className="text-orange-400 text-sm ml-2">85% increase in ranking</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm">Clients</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">450+</div>
                <div className="text-gray-400 text-sm">Positive reviews</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">9.8</div>
                <div className="text-gray-400 text-sm">Rating out of 10</div>
              </div>
              <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm">Users Satisfied</div>
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-xs">Dashboard Preview</div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="space-y-4">
                <div className="h-4 bg-slate-600/50 rounded-lg w-3/4"></div>
                <div className="h-4 bg-slate-600/50 rounded-lg w-1/2"></div>
                
                {/* Mock Chart */}
                <div className="bg-slate-700/50 rounded-2xl p-4 mt-6">
                  <div className="flex items-end space-x-2 h-32">
                    <div className="bg-orange-500 rounded-t-lg w-8 h-16"></div>
                    <div className="bg-orange-400 rounded-t-lg w-8 h-24"></div>
                    <div className="bg-orange-500 rounded-t-lg w-8 h-20"></div>
                    <div className="bg-orange-600 rounded-t-lg w-8 h-28"></div>
                    <div className="bg-orange-400 rounded-t-lg w-8 h-32"></div>
                    <div className="bg-orange-500 rounded-t-lg w-8 h-12"></div>
                  </div>
                  
                  {/* 80% Badge */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    80%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Our <span className="text-orange-400">Services</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions for all your web development needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
