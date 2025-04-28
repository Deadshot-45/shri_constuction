import { images } from "./images"; // Assuming you have an images.js file that exports your images

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

// Exporting the data for use in other components
const projects = [
  {
    title: "Modern Villa",
    description: "Luxury villa with contemporary design",
    category: "Residential",
    status: "Completed",
    image: images.projects.modernVilla,
  },
  {
    title: "Office Complex",
    description: "Multi-story commercial building",
    category: "Commercial",
    status: "In Progress",
    image: images.projects.officeComplex,
  },
  {
    title: "Shopping Mall",
    description: "Modern retail space with parking",
    category: "Commercial",
    status: "Completed",
    image: images.projects.shoppingMall,
  },
];

export { Projects, Testimony, NewsSection, projects };
