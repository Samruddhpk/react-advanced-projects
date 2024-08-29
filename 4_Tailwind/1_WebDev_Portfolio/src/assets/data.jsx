import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa';
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

export const links = [
    { id: nanoid(), href: '#home', text: 'home' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#about', text: 'about' },
    { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'HTML&CSS',
        icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
        text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <FaJs className='h-16 w-16 text-emerald-500' />,
        text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-emerald-500' />,
        text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
    },
    {
        id: nanoid(),
        title: 'NodeJS',
        icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
        text: 'Proficient in building scalable server-side applications using Node.js with a strong grasp of asynchronous programming and event-driven architecture. Experienced with Express.js for creating RESTful APIs, handling authentication with JWT, and integrating third-party services like Stripe.',
    },
    {
        id: nanoid(),
        title: 'MongoDB',
        icon: <BiLogoMongodb className='h-16 w-16 text-emerald-500' />,
        text: 'Skilled in using MongoDB as a NoSQL database, adept at designing efficient schemas, performing CRUD operations, and optimizing queries. Comfortable with Mongoose for schema validation, data modeling, and integrating MongoDB with Node.js applications.',
    },
    {
        id: nanoid(),
        title: 'Tailwind',
        icon: <RiTailwindCssFill className='h-16 w-16 text-emerald-500' />,
        text: "Experienced in utilizing Tailwind CSS for responsive and utility-first styling, creating modern, clean, and customizable UIs. Proficient in using Tailwind's configuration options for theme customization and integrating it seamlessly into React and static HTML projects.",
    },
];

export const projects = [
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'first project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'second project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://react-projects.netlify.app/',
        github: 'https://github.com/john-smilga',
        title: 'third project',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
];