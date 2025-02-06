'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaSymfony, FaWordpress } from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';



const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Symfony', icon: <FaSymfony /> },
    { name: 'Wordpress', icon: <FaWordpress /> },
    { name: 'Tailwindcss', icon: <SiTailwindcss /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
];

const about = {
    title: 'Full Stack Developer',
    description: 'I am a full stack developer with 5 years of experience in web development. I am proficient in HTML, CSS, JavaScript, React, Symfony, and Wordpress. I am passionate about building web applications that are user-friendly and accessible. I am a team player and enjoy working with others to achieve common goals.',
    info: [
        { label: 'Name', value: 'Sylvain Butet' },
        { label: 'Email', value: 'sylvain@skdigit.fr' },
        { label: 'Experience', value: '10 ans' },
        { label: 'Phone', value: '+33 6 87 78 28 58' },
        { label: 'Location', value: 'Lablachère, France' },
        { label: 'Freelance', value: 'Disponible' },
        { label: 'Lang', value: 'Français, Anglais' },
    ],

}
const experiences = {
    icon: 'assets/resume/badge.svg',
    title: "Mes experiences",
    description: "I have worked on a variety of projects, ranging from small websites to large web applications. I have experience working with clients from different industries, including e-commerce, education, and healthcare. I am comfortable working in a fast-paced environment and can adapt to changing requirements quickly.",
    items: [
        {
            name: 'Agence Modulo',
            position: 'Développeur WordPress / Front-End',
            duration: 'Avril 2021 - Mai 2022'
        },
        {
            name: 'Agence Eanet',
            position: 'Développeur Front-End',
            duration: 'Juin 2016 - Janvier 2021'
        },
        {
            name: 'LWM',
            position: 'Développeur Front-End',
            duration: 'Décembre 2015 - Mai 2016'
        },
        {
            name: 'Rentabiliweb',
            position: 'Développeur Javascript',
            duration: 'Juin 2015 - Septembre 2015'
        },
        {
            name: 'Coopatittude Startup',
            position: 'Alternant Développeur Web',
            duration: 'Mai 2014 - Juin 2015'
        }
    ]
}
const education = {
    icon: 'assets/resume/graduation.svg',
    title: "Mes formations",
    description: "I have a Bachelor's degree in Computer Science from the University of Paris. I also have a Master's degree in Web Development from the University of Lyon. I am constantly learning new technologies and improving my skills to stay up-to-date with the latest trends in web development.",
    items: [
        {
            name: 'Maitrise en Conception Web bac +4',
            school: 'Institut IEF2I',
            duration: '2014 - 2015'
        },
        {
            name: 'Cursus Web - POE',
            school: 'Institut IEF2I',
            duration: '2014'
        },
        {
            name: 'DSPP Infographiste Multimédia',
            school: 'Institut CEFIAC',
            duration: '2013'
        },
    ]
}


const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn",
                }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="about">À propos</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="formations">Formations</TabsTrigger>
                        <TabsTrigger value="competences">Compétences</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;
