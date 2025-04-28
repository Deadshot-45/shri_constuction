import React from "react";
import { v4 as uuidv4 } from "uuid";
import { images } from "../../assets/images";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { TiStopwatch } from "react-icons/ti";
import { IoDiamondOutline } from "react-icons/io5";
import { Projects, Testimony, NewsSection } from "../../assets/AppAssests";

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

  return (
    <div className="flex flex-col items-center min-h-screen space-y-8">
      <div className="w-full flex items-center justify-center">
        <header className="relative w-full h-screen max-xs:h-[90dvh] overflow-hidden">
          <img
            lazyload="true"
            loading="lazy"
            src={
              "https://png.pngtree.com/thumb_back/fw800/background/20240611/pngtree-construction-machine-road-repair-work-image_15747549.jpg"
            }
            alt="Bg-header img"
            className="absolute w-full h-full z-10 object-cover"
          />
          {/* Add a dark overlay to ensure text visibility */}
          <div className="absolute bg-black/40 z-20 w-full h-full"></div>
          <div className="relative z-20 p-4 h-full flex flex-col justify-center items-center text-center gap-4 mt-5">
            <h2
              className="text-5xl max-xs:text-4xl font-bold text-center space-x-4 text-white drop-shadow-lg"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
            >
              <span className="text-white">Welcome to</span>
              <span className="text-[#fdc700]">Shri Construction</span>
            </h2>
            <p className="text-lg max-xs:text-sm font-sans text-white drop-shadow-lg">
              Your trusted partner in quality construction and design.
            </p>
            <p className="text-lg max-xs:text-sm font-sans text-white drop-shadow-lg">
              Building dreams with precision and care.
            </p>
            <Link
              to="/"
              className="bg-[#fdc700] max-xs:text-sm text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-[#ffd027] transition duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </div>
        </header>
      </div>

      {/* Experience Section */}
      <section className="w-[80%] max-xs:w-[85%] flex max-md:flex-col justify-between items-center py-12 max-xs:pt-0">
        <div className="w-[45%] max-md:w-full flex flex-col justify-center gap-8 max-xs:gap-4">
          <h1 className="text-[40px] max-xs:text-4xl uppercase leading-10 font-bold text-gray-700">
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
            className="text-lg text-[#fdc700] font-bold underline py-3 max-xs:py-0 rounded-full hover:text-[#ffd027] transition duration-300 ease-in-out"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="w-[30%] max-md:w-3/4 flex justify-center items-center">
          <img
            lazyload="true"
            loading="lazy"
            src={images.home.features.quality.src}
            alt={images.home.features.quality.alt}
            className="aspect-square max-md:aspect-auto mt-8 rounded-sm shadow-lg"
          />
        </div>
      </section>

      {/* Service Section */}
      <section className="w-full h-[40dvh] max-xs:h-[50dvh] flex justify-center items-center">
        <div className="w-full h-full relative">
          <img
            lazyload="true"
            loading="lazy"
            src="https://www.grantthornton.in/globalassets/1.-member-firms/india/new-homepage/media/1.-hero-banners_repeat-visits/1440x600px_hero_banner_shutterstock_1679316820.jpg"
            alt="Road construction bg"
            className="w-full h-full absolute rounded-sm shadow-lg"
          />
          <div className="absolute bg-black/70 z-500 w-full h-full"></div>
        </div>
        <div className="absolute z-6000 flex justify-evenly items-center text-center">
          <div className="w-[15%] max-lg:w-[25%] space-y-4 min-xs:max-xs:space-y-1">
            <img
              lazyload="true"
              loading="lazy"
              src="https://htmlbeans.com/html/vicin/images/icon01.png"
              alt="trolly"
              className="w-[80px] max-xs:w-[50px] max-md:w-[60px] mx-auto aspect-auto"
            />
            <h1 className="text-3xl font-bold max-xs:text-sm min-xs:max-md:text-xl text-white">
              Construction
            </h1>
            <p className="text-white text-sm max-xs:text-[11px] min-xs:max-sm:text-[12px]">
              Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis
              ante. Nulla enim velit, porttitor sed magna at, porttitor.
            </p>
          </div>
          <div className="w-[15%] max-lg:w-[25%] space-y-4 min-xs:max-xs:space-y-1">
            <img
              lazyload="true"
              loading="lazy"
              src="https://htmlbeans.com/html/vicin/images/icon02.png"
              alt="plumbing"
              className="w-[80px] max-xs:w-[40px] max-md:w-[60px] mx-auto aspect-auto"
            />
            <h1 className="text-3xl font-bold max-xs:text-sm min-xs:max-md:text-xl text-white">
              Plumbing
            </h1>
            <p className="text-white text-sm max-xs:text-[11px] min-xs:max-sm:text-[12px]">
              Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis
              ante. Nulla enim velit, porttitor sed magna at, porttitor.
            </p>
          </div>
          <div className="w-[15%] max-lg:w-[25%] space-y-4 min-xs:max-xs:space-y-1 ">
            <img
              lazyload="true"
              loading="lazy"
              src="https://htmlbeans.com/html/vicin/images/icon03.png"
              alt="roofing"
              className="w-[80px] max-xs:w-[40px] max-md:w-[60px] mx-auto aspect-auto"
            />
            <h1 className="text-3xl font-bold max-xs:text-sm min-xs:max-md:text-xl text-white">
              Roofing
            </h1>
            <p className="text-white text-sm max-xs:text-[11px] min-xs:max-sm:text-[12px]">
              Mauris quam neque, ullamcorper sit amet lorem in, aliquet sagittis
              ante. Nulla enim velit, porttitor sed magna at, porttitor.
            </p>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="w-[80%] flex flex-col justify-between items-center py-12">
        <div className="mx-auto flex flex-col justify-center gap-8">
          <h1 className="text-[40px] max-xs:text-4xl uppercase leading-10 font-bold text-gray-700">
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
                lazyload="true"
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
            lazyload="true"
            loading="lazy"
            src="https://htmlbeans.com/html/vicin/images/img17.jpg"
            alt="Testimony bg"
            className="w-full h-full absolute rounded-sm shadow-lg"
          />
          <div className="absolute bg-black/70 z-500 w-full h-full"></div>
        </div>
        <div className="w-[65%] max-sm:w-[80%] absolute z-6000 text-white flex justify-between items-center text-center gap-8">
          <button
            type="button"
            onClick={handlePrevTestimony}
            className="p-3 cursor-pointer rounded-full bg-black/20 text-xl text-white/80 hover:bg-black/40 hover:text-white transition-all duration-300 ease-in-out"
            aria-label="Previous testimony"
          >
            <FaChevronLeft />
          </button>
          <div className="w-[65%] space-y-6 transition-all duration-500 ease-in-out transform">
            <p className="text-xl max-md:text-sm font-serif italic leading-relaxed">
              "{Testimony[testimonyIndex].message}"
            </p>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-lg max-sm:text-sm font-bold tracking-wide">
                {Testimony[testimonyIndex].person}
              </span>
              <span className="text-amber-400 text-sm max-sm:text-[10px] uppercase tracking-wider">
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

      {/* Why Choose US Section */}
      <section className="w-full min-h-[40dvh] flex flex-col gap-4 justify-center items-center bg-white">
        <article className="max-w-[65%] mx-auto flex flex-col justify-center gap-4 mt-14">
          <h1 className="text-[30px] uppercase leading-10 font-bold text-gray-700">
            Why Choose Us
          </h1>
          <div className="bg-amber-500 w-[40%] mx-auto h-1"></div>
        </article>

        <article className="w-[80%] max-sm:w-[95%] flex max-lg:flex-col flex-wrap justify-center items-center gap-6 mt-10">
          <div className="w-[45%] max-lg:w-[80%] flex gap-2 mx-auto p-8 max-lg:p-0">
            <div className="w-1/2">
              <img
                lazyload="true"
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
                lazyload="true"
                loading="lazy"
                src={
                  "https://img.freepik.com/free-photo/young-man-holding-construction-hard-hat_23-2148461532.jpg"
                }
                alt="Construction worker"
                className="w-full h-w-[48%] object-cover rounded-sm shadow-lg"
              />
              <img
                lazyload="true"
                loading="lazy"
                src={
                  "https://img.freepik.com/free-photo/young-man-holding-construction-hard-hat_23-2148461532.jpg"
                }
                alt="Construction worker"
                className="w-full h-w-[48%] object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>

          <div className="w-[45%] max-lg:flex flex-wrap max-lg:p-2 max-lg:mt-6 max-lg:w-full mx-auto p-8 space-y-4">
            <div className="flex gap-6 items-center">
              <BiLike className="text-7xl text-amber-500" />
              <p className="max-xs:text-sm">
                We are a team of experienced professionals who are passionate
                about delivering high-quality construction services.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <TiStopwatch className="text-7xl text-amber-500" />
              <p className="max-xs:text-sm">
                We are a team of experienced professionals who are passionate
                about delivering high-quality construction services.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <IoDiamondOutline className="text-7xl text-amber-500" />
              <p className="max-xs:text-sm">
                We are a team of experienced professionals who are passionate
                about delivering high-quality construction services.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Projects Section */}
      <section className="w-full h-full bg-white py-20 ">
        <div className="w-full h-[45dvh] max-sm:h-[35dvh] relative">
          <img
            lazyload="true"
            loading="lazy"
            src="https://htmlbeans.com/html/vicin/images/img05.jpg"
            alt="Project bg"
            className="w-full h-full absolute rounded-sm shadow-lg"
          />
          <div className="flex relative z-500 w-[80%] max-[700px]:w-[95%] mx-auto h-full">
            <div className="w-[35%] max-lg:w-[60%] flex flex-col justify-center gap-3">
              <span className="text-3xl max-sm:text-[16px] w-[85%] uppercase font-bold text-gray-700">
                We are always ready to help you
              </span>
              <p className="text-md max-sm:text-[12px] text-gray-600">
                There are many ways to contact us. You may drop us a line, give
                us a call or send an email, choose what suits you the most.
              </p>
              <Link
                to={"/projects"}
                className="w-[200px] max-sm:w-[120px] max-sm:text-[12px] max-sm:p-2 bg-[#fdc700] text-gray-800 px-6 py-3 font-bold hover:bg-[#ffd027] transition duration-300 ease-in-out mt-4"
              >
                OUR PROJECTS
              </Link>
            </div>
              <img
                lazyload="true"
                loading="lazy"
                src="	https://htmlbeans.com/html/vicin/images/img13.png"
                alt="Working men"
                className="w-[400px] max-lg:min-[700px]::w-[320px] max-[700px]:w-[200px] absolute top-[-20%] right-0 h-[120%]"
              />
          </div>
        </div>
      </section>

      {/* News Section */}

      <section className="w-full h-full bg-white">
        <div className="min-w-1/2 mx-auto space-y-2.5">
          <h2 className="text-3xl font-bold text-center text-gray-700 uppercase">
            Recent News
          </h2>
          <div className="bg-amber-500 w-[10%] mx-auto h-1"></div>
        </div>

        {/* News Cards mapping */}
        <div className="w-[80%] max-xs:w-[90%] mx-auto flex flex-wrap justify-between items-center mt-10 mb-16">
          {NewsSection.map((news) => (
            <div
              key={uuidv4()}
              className="w-[45%] max-lg:w-[90%] h-full flex gap-6 relative mt-6"
            >
              <div className="w-[250px] max-xs:w-[130px] cursor-pointer h-[130px] max-xs:h-[100px] mx-auto relative overflow-hidden group">
                <img
                  lazyload="true"
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
              <div className="h-[130px] max-xs:h-[100px] w-[calc(100%-270px)] max-xs:w-[calc(100%-150px)] flex flex-col justify-between items-start relative">
                <h3 className="max-h-[20%] max-xs:h-[15%] text-xl max-sm:text-[12px] font-bold text-gray-700 uppercase overflow-clip">
                  {news.title} ...
                </h3>
                <p className="text-gray-600 text-sm max-sm:text-[10px] max-sm:leading-3 max-h-[68%] overflow-clip">
                  {news.description}...
                </p>
                <button
                  type="button"
                  className="cursor-pointer text-[#fdc700] text-[15px] max-sm:text-[11px] underline font-bold hover:text-[#ffd027] transition duration-300 ease-in-out"
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
