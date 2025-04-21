import React from "react";
import { v4 as uuidv4 } from "uuid";
import { images } from "../../assets/images";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { TiStopwatch } from "react-icons/ti";
import { IoDiamondOutline } from "react-icons/io5";

const Home = () => {
  const [testimonyIndex, setTestimonyIndex] = React.useState(0);
  const handleNextTestimony = () => {
    setTestimonyIndex((prevIndex) => (prevIndex + 1) % Testimony.length);
  };
  const handlePrevTestimony = () => {
    setTestimonyIndex(
      (prevIndex) => (prevIndex - 1 + Testimony.length) % Testimony.length
    );
  };

  // Sample data for projects and testimonies
  const Projects = [
    {
      src: "https://img.freepik.com/free-photo/infrastructure-bridge_1127-2225.jpg?semt=ais_hybrid&w=740",
      alt: "Project 1",
      title: "Project 1",
      description: "This is a description of project 1",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/046/295/794/non_2x/road-construction-teamwork-asphalt-laying-work-at-road-construction-sites-hot-asphalt-gravel-being-leveled-and-road-surface-repairs-by-heavy-road-construction-machineries-and-workers-photo.jpg",
      alt: "Project 2",
      title: "Project 2",
      description: "This is a description of project 2",
    },
    {
      src: "https://img.freepik.com/free-photo/empty-tunnel-illuminated_1122-519.jpg",
      alt: "Project 3",
      title: "Project 3",
      description: "This is a description of project 3",
    },
    {
      src: "https://img.freepik.com/free-photo/full-shot-man-construction-site_23-2148751969.jpg?semt=ais_hybrid&w=740",
      alt: "Project 4",
      title: "Project 4",
      description: "This is a description of project 4",
    },
    {
      src: "https://media.istockphoto.com/id/499292388/photo/new-road-construction.jpg?s=612x612&w=0&k=20&c=ZG6aM0sjwSu4W56yJXoKJzmvuaLfA9qSrJj6f0tPNb8=",
      alt: "Project 5",
      title: "Project 5",
      description: "This is a description of project 5",
    },
    {
      src: "https://img.freepik.com/free-photo/waibaidu-bridge-shanghai_1359-943.jpg",
      alt: "Project 6",
      title: "Project 6",
      description: "This is a description of project 6",
    },
  ];
  const Testimony = [
    {
      title: "Commercial Developer",
      message:
        "Shri Construction's commitment to excellence made our office complex project a remarkable success. Their attention to detail and timely delivery exceeded our expectations.",
      person: "John Anderson",
    },
    {
      title: "Property Owner",
      message:
        "The renovation of our heritage building was handled with exceptional care. Their team showed great respect for the property's history while modernizing its facilities.",
      person: "Sarah Mitchell",
    },
    {
      title: "Factory Manager",
      message:
        "Our industrial facility was completed ahead of schedule without compromising on quality. Their expertise in handling complex industrial projects is outstanding.",
      person: "Robert Chen",
    },
    {
      title: "Municipal Engineer",
      message:
        "Working with Shri Construction on our infrastructure projects has been a pleasure. They understand regulatory requirements and deliver quality within budget.",
      person: "Emily Rodriguez",
    },
    {
      title: "Real Estate Developer",
      message:
        "Having worked with them on multiple projects, their consistency in delivering high-quality construction and professional project management is remarkable.",
      person: "Michael Kumar",
    },
    {
      title: "School Principal",
      message:
        "The construction of our new academic block was executed flawlessly. Their team ensured minimal disruption to ongoing classes while maintaining safety standards.",
      person: "Patricia Thompson",
    },
  ];

  // Sample data for news section
  const NewsSection = [
    {
      img: "https://htmlbeans.com/html/vicin/images/img06.jpg",
      title: "New Project Launch: Eco-Friendly Housing Complex",
      description:
        "Shri Construction is proud to announce the launch of its latest project, an eco-friendly housing complex designed to provide sustainable living solutions.",
      date: "September 15, 2023",
    },
    {
      img: "https://htmlbeans.com/html/vicin/images/img07.jpg",
      title: "Award-Winning Project: Modern Office Tower",
      description:
        "Our modern office tower project has been recognized with the prestigious 'Best Commercial Building' award at the National Architecture Awards.",
      date: "August 10, 2023",
    },
    {
      img: "https://htmlbeans.com/html/vicin/images/img08.jpg",
      title: "Shri Construction Expands Its Operations",
      description:
        "We are excited to announce the expansion of our operations to new regions, further solid ifying our position as a leading construction company.",
      date: "June 20, 2023",
    },
    {
      img: "https://htmlbeans.com/html/vicin/images/img09.jpg",
      title: "Innovative Construction Techniques",
      description:
        "Our team of experts is committed to adopting the latest construction techniques to ensure efficient and high-quality results. We are constantly exploring new methods to enhance our construction processes.",
      date: "May 5, 2023",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen space-y-8">
      <div className="w-full flex items-center justify-center">
        <header className="relative w-full h-screen overflow-hidden">
          <img
            lazyLoad="true"
            loading="lazy"
            src={
              "https://png.pngtree.com/thumb_back/fw800/background/20240611/pngtree-construction-machine-road-repair-work-image_15747549.jpg"
            }
            alt="Bg-header img"
            className="absolute w-full h-full object-cover"
          />
          {/* Add a dark overlay to ensure text visibility */}
          <div className="absolute bg-black/40 z-500 w-full h-full"></div>
          <div className="relative z-6000 p-4 h-full flex flex-col justify-center items-center text-center gap-4 mt-5">
            <h2
              className="text-5xl font-bold flex space-x-4 text-white drop-shadow-lg"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
            >
              <span className="text-white">Welcome to</span>
              <span className="text-[#fdc700]">Shri Construction</span>
            </h2>
            <p className="text-lg font-sans text-white drop-shadow-lg">
              Your trusted partner in quality construction and design.
            </p>
            <p className="text-lg font-sans text-white drop-shadow-lg">
              Building dreams with precision and care.
            </p>
            <Link
              to="/"
              className="bg-[#fdc700] text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-[#ffd027] transition duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </div>
        </header>
      </div>

      {/* Experience Section */}

      <section className="w-[80%] flex justify-between items-center py-12">
        <div className="max-w-[45%] flex flex-col justify-center gap-8">
          <h1 className="text-[40px] uppercase leading-10 font-bold text-gray-700">
            We are the leader in the construction.
          </h1>
          <div className="bg-amber-500 w-[40%] h-1"></div>
          <p className="text-md font-sans text-gray-500">
            {/* With over 20 years of experience, we have built a reputation for
            excellence in the construction industry. Our commitment to quality
            and customer satisfaction sets us apart from the competition.
            <br /> */}
            At Shri Construction, we believe that every project is an
            opportunity to showcase our skills and craftsmanship. We are
            committed to using the highest quality materials and the latest
            construction techniques to ensure that your project stands the test
            of time.
          </p>
          <Link
            to="/about"
            className="text-lg text-[#fdc700] font-bold underline py-3 rounded-full hover:text-[#ffd027] transition duration-300 ease-in-out"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <img
            lazyLoad="true"
            loading="lazy"
            src={images.home.features.quality.src}
            alt={images.home.features.quality.alt}
            className=" aspect-square mt-8 rounded-sm shadow-lg"
          />
        </div>
      </section>

      {/* Service Section */}
      <section className="w-full h-[40dvh] flex justify-center items-center">
        <div className="w-full h-full relative">
          <img
            lazyLoad="true"
            loading="lazy"
            src="https://www.grantthornton.in/globalassets/1.-member-firms/india/new-homepage/media/1.-hero-banners_repeat-visits/1440x600px_hero_banner_shutterstock_1679316820.jpg"
            alt="Road construction bg"
            className="w-full h-full absolute rounded-sm shadow-lg"
          />
          <div className="absolute bg-black/70 z-500 w-full h-full"></div>
        </div>
        <div className="absolute z-6000 flex justify-evenly items-center text-center">
          <div className="w-[15%] max-lg:w-[25%] space-y-4">
            <img
              lazyLoad="true"
              loading="lazy"
              src="https://htmlbeans.com/html/vicin/images/icon01.png"
              alt="trolly"
              className="w-[80px] mx-auto aspect-auto"
            />
            <h1 className="text-3xl font-bold text-white">Construction</h1>
            <p className="text-white text-sm">
              Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis
              ante. Nulla enim velit, porttitor sed magna at, porttitor.
            </p>
          </div>
          <div className="w-[15%] max-lg:w-[25%] space-y-4">
            <img
              lazyLoad="true"
              loading="lazy"
              src="https://htmlbeans.com/html/vicin/images/icon02.png"
              alt="plumbing"
              className="w-[60px] mx-auto aspect-auto"
            />
            <h1 className="text-3xl font-bold text-white">Plumbing</h1>
            <p className="text-white text-sm">
              Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis
              ante. Nulla enim velit, porttitor sed magna at, porttitor.
            </p>
          </div>
          <div className="w-[15%] max-lg:w-[25%] space-y-4">
            <img
              lazyLoad="true"
              loading="lazy"
              src="https://htmlbeans.com/html/vicin/images/icon03.png"
              alt="roofing"
              className="w-[60px] mx-auto aspect-auto"
            />
            <h1 className="text-3xl font-bold text-white">Roofing</h1>
            <p className="text-white text-sm">
              Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis
              ante. Nulla enim velit, porttitor sed magna at, porttitor.
            </p>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="w-[80%] flex flex-col justify-between items-center py-12">
        <div className="max-w-[45%] mx-auto flex flex-col justify-center gap-8">
          <h1 className="text-[40px] uppercase leading-10 font-bold text-gray-700">
            Our Projects
          </h1>
          <div className="bg-amber-500 w-[40%] mx-auto h-1"></div>
        </div>
        <article className="w-full flex flex-wrap justify-center items-center gap-6 mt-10">
          {Projects.map((project) => (
            <div
              key={uuidv4()}
              className="w-[350px] max-lg:w-[45%] cursor-pointer aspect-auto relative group overflow-hidden shadow-lg"
            >
              <img
                lazyLoad="true"
                loading="lazy"
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transform"
              />
              <div className="absolute text-[#140c0c] inset-0 flex flex-col justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-amber-400/40">
                <h2 className="text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h2>
                <p className="text-sm mt-2 px-4 font-normal text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>

      {/* Testimony Section */}
      <section className="w-full  flex justify-center items-center">
        <div className="w-full h-[45dvh] relative ">
          <img
            lazyLoad="true"
            loading="lazy"
            src="https://htmlbeans.com/html/vicin/images/img17.jpg"
            alt="Testimony bg"
            className="w-full h-full absolute rounded-sm shadow-lg"
          />
          <div className="absolute bg-black/70 z-500 w-full h-full"></div>
        </div>
        <div className="w-[65%] absolute z-6000 text-white flex justify-between items-center text-center gap-8">
          <button
            type="button"
            onClick={handlePrevTestimony}
            className="p-3 cursor-pointer rounded-full bg-black/20 text-xl text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300 ease-in-out"
            aria-label="Previous testimony"
          >
            <FaChevronLeft />
          </button>
          <div className="w-[65%] space-y-6 transition-all duration-500 ease-in-out transform">
            <p className="text-xl font-serif italic leading-relaxed">
              "{Testimony[testimonyIndex].message}"
            </p>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-lg font-bold tracking-wide">
                {Testimony[testimonyIndex].person}
              </span>
              <span className="text-amber-400 text-sm uppercase tracking-wider">
                {Testimony[testimonyIndex].title}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleNextTestimony}
            className="p-3 cursor-pointer rounded-full bg-black/20 text-xl text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300 ease-in-out"
            aria-label="Next testimony"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full min-h-[40dvh] flex flex-col gap-4 justify-center items-center bg-white">
        <article className="max-w-[45%] mx-auto flex flex-col justify-center gap-4 mt-14">
          <h1 className="text-[30px] uppercase leading-10 font-bold text-gray-700">
            Why Choose Us
          </h1>
          <div className="bg-amber-500 w-[40%] mx-auto h-1"></div>
        </article>

        <article className="w-[80%] flex max-lg:flex-col flex-wrap justify-center items-center gap-6 mt-10">
          <div className="w-[45%] flex gap-2 mx-auto p-8 max-lg:p-0">
            <div className="w-1/2">
              <img
                lazyLoad="true"
                loading="lazy"
                src={
                  "https://img.freepik.com/free-photo/aerial-view-suzhou-overpass-night_1359-524.jpg"
                }
                alt="Construction"
                className="w-full h-full object-cover rounded-sm shadow-lg"
              />
            </div>
            <div className="w-1/2 space-y-2">
              <img
                lazyLoad="true"
                loading="lazy"
                src={
                  "https://img.freepik.com/free-photo/young-man-holding-construction-hard-hat_23-2148461532.jpg"
                }
                alt="Construction worker"
                className="w-full h-w-[48%] object-cover rounded-sm shadow-lg"
              />
              <img
                lazyLoad="true"
                loading="lazy"
                src={
                  "https://img.freepik.com/free-photo/young-man-holding-construction-hard-hat_23-2148461532.jpg"
                }
                alt="Construction worker"
                className="w-full h-w-[48%] object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>

          <div className="w-[45%] max-lg:flex flex-wrap max-lg:p-0 max-lg:mt-6 max-lg:w-full mx-auto p-8 space-y-4">
            <div className="flex gap-6 items-center">
              <BiLike className="text-7xl text-amber-500" />
              <p>
                We are a team of experienced professionals who are passionate
                about delivering high-quality construction services.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <TiStopwatch className="text-7xl text-amber-500" />
              <p>
                We are a team of experienced professionals who are passionate
                about delivering high-quality construction services.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <IoDiamondOutline className="text-7xl text-amber-500" />
              <p>
                We are a team of experienced professionals who are passionate
                about delivering high-quality construction services.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Projects Section */}
      <section className="w-full h-full bg-white py-20">
        <div className="w-full h-[45dvh] relative">
          <img
            lazyLoad="true"
            loading="lazy"
            src="https://htmlbeans.com/html/vicin/images/img05.jpg"
            alt="Project bg"
            className="w-full h-full absolute rounded-sm shadow-lg"
          />
          <div className="flex relative z-500 w-[80%] mx-auto h-full">
            <div className="w-[35%] max-lg:w-[60%] flex flex-col justify-center gap-3">
              <span className="text-3xl w-[85%] uppercase font-bold text-gray-700">
                We are always ready to help you
              </span>
              <p className="text-md text-gray-600">
                There are many ways to contact us. You may drop us a line, give
                us a call or send an email, choose what suits you the most.
              </p>
              <button
                type="button"
                className="w-[200px] bg-[#fdc700] text-gray-800 px-6 py-3 font-bold hover:bg-[#ffd027] transition duration-300 ease-in-out mt-4"
              >
                OUR PROJECTS
              </button>
            </div>
            <div className="w-[50%] max-lg:w-[40%] relative mx-auto flex justify-center items-center">
              <img
                lazyLoad="true"
                loading="lazy"
                src="	https://htmlbeans.com/html/vicin/images/img13.png"
                alt="Working men"
                className="w-[350px] max-lg:w-[300px] absolute top-[-20%] h-[120%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}

      <section className="w-full h-full bg-white">
        <div className="w-1/2 mx-auto space-y-2.5">
          <h2 className="text-3xl font-bold text-center text-gray-700 uppercase">
            Recent News
          </h2>
          <div className="bg-amber-500 w-[10%] mx-auto h-1"></div>
        </div>

        {/* News Cards mapping */}
        <div className="w-[80%] mx-auto flex flex-wrap justify-between items-center mt-10 mb-16">
          {NewsSection.map((news) => (
            <div
              key={uuidv4()}
              className="w-[45%] max-lg:w-[90%] h-full flex gap-6 relative mt-6"
            >
              <div className="w-[250px] cursor-pointer h-[130px] mx-auto relative overflow-hidden group">
                <img
                  lazyLoad="true"
                  loading="lazy"
                  src={news.img}
                  alt={news.title}
                  className="w-full h-full object-cover rounded-sm shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                  <span className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Article
                  </span>
                </div>
              </div>
              <div className="h-[130px] w-[calc(100%-270px)] flex flex-col justify-between items-start relative">
                <h3 className="max-h-[20%] text-xl font-bold text-gray-700 uppercase overflow-clip">
                  {news.title} ...
                </h3>
                <p className="text-gray-600 text-sm max-h-[70%] overflow-clip">
                  {news.description}...
                </p>
                <button
                  type="button"
                  className="cursor-pointer text-[#fdc700] text-[15px] underline font-bold hover:text-[#ffd027] transition duration-300 ease-in-out"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
