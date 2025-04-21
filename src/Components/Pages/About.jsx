import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { FaTools, FaUsers, FaMedal } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center">
        <img lazyLoad="true"
          loading="lazy" 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
          alt="Construction site"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-5xl font-bold text-white">About Us</h1>
      </div>

      {/* Main Content */}
      <div className="w-[80%] py-16 space-y-16">
        {/* Company Overview */}
        <section className="flex gap-12 items-center">
          <div className="w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Building Excellence Since 2023
            </h2>
            <div className="w-[15%] h-1 bg-amber-500" />
            <p className="text-gray-600 leading-relaxed">
              At Shri Construction, we've been transforming skylines and
              building dreams for over 3 years. Our commitment to quality,
              innovation, and customer satisfaction has made us a leader in the
              construction industry.
            </p>
          </div>
          <div className="w-1/2">
            <img lazyLoad="true"
          loading="lazy" 
              src="https://png.pngtree.com/thumb_back/fh260/background/20240620/pngtree-painting-of-a-contemporary-building-construction-site-on-white-background-including-image_15883562.jpg"
              alt="Company overview"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-4 gap-8">
          {[
            {
              icon: BiBuildingHouse,
              count: "50+",
              label: "Projects Completed",
            },
            { icon: FaUsers, count: "20+", label: "Expert Team" },
            { icon: FaTools, count: "3+", label: "Years Experience" },
            { icon: FaMedal, count: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gray-50"
            >
              <stat.icon className="text-5xl text-amber-500" />
              <span className="text-3xl font-bold text-gray-800">
                {stat.count}
              </span>
              <span className="text-gray-600 text-center">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-2 gap-12">
          <div className="space-y-4 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <div className="w-[15%] h-1 bg-amber-500" />
            <p className="text-gray-600">
              To deliver exceptional construction services while maintaining the
              highest standards of quality, safety, and client satisfaction.
            </p>
          </div>
          <div className="space-y-4 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            <div className="w-[15%] h-1 bg-amber-500" />
            <p className="text-gray-600">
              To be the most trusted and respected construction company, known
              for innovation, quality, and sustainable building practices.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
