import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SetMealIcon from '@mui/icons-material/SetMeal';

export default {
    name: "Dmitrii Tkachev",
    title: "Fullstack developer",
    job: "Freelancer",
    birthday: "11.06.2001",
    email: "dmitriitkachev11@gmail.com",
    location: "Oulu, Finland",
    phone: "+358-44-917-1626",

    socials: {
        Linkedin: {
            link: "https://www.linkedin.com/in/dmitrii-tkachev-a65704224/",
            text: "Linkedin",
            icon: <LinkedInIcon />
        },
        Github: {
            link: "https://github.com/Dmitrii-Weaver",
            text: "Github",
            icon: <GitHubIcon />
        },

    },

    about: "Fresh OAMK graduate - Fullstack Developer and Web Designer with main focus on Web development using React, CSS and Typescript with additional skills and experience in Python, C#, React Native, PHP and Kotlin.  \n  \n Completed full Bachelors Degree in OAMK in the field od Computer Sciences and additional exchange studies in Kitami, Japan in the same field. \n  \n Currently looking for an entry-level position in an IT company on place or remote",


    workexp: [
        {
            title: "Backend developer C# .Net - Keyloop",
            date: "2022.02 - 2022.08",
            description: "Designing, developing and testing new functions for company's API on C# .Net while also supervising a group of two other students as a part of my university studies.",
        },
        {
            title: "Frontend developer - Cavokapp.com",
            date: "2021.05 - 2021.08",
            description: "Implementing new functions for the service's web page.",
        },
        {
            title: "Survey engineer - Terra Pulse Group",
            date: "2018 - 2021",
            description: 'Creating online surveys using the documentation provided by client via Alchemer tools.',
        }
    ],

    education: [
        {
            title: "OAMK - Bachelor's degree in computer sciences",
            date: "2019-2023",
            description: "Graduated as Software Engineer with GPA of 4.5 in August 2023",
        },
        {
            title: "KIT - Kitami Institute of Technology. Japan.",
            date: "2022.10-2023.03",
            description: "Completed exchange studies in a university in Japan in the field of computer sciences (specifically - Python, robotics, C#, English and Japanese languages)",
        },
    ],

    services: [
        {
            title: "Web developer",
            description: "Design, implementation and assembly of web applications. 5 years of experience + Bachelor's degree.",
            icon: <WebIcon />
        },
        {
            title: "Back-end engineer",
            description: "Development of backend solutions, interactions with Databases, request management. 3 years of experience + Bachelor's degree.",
            icon: <StorageIcon />
        },
        {
            title: "Illustrator",
            description: "Skilled in graphics and character design. 3 Years of experience on as hobby, designing characters and manufacturing merchandise.",
            icon: <BrushIcon />
        },
    ],

    skills: [
        {
            title: "Front-end",
            description: ["React", "CSS", "Bootstrap", "Material UI", "Typescript", "React Native",]
        },
        {
            title: "Back-end",
            description: ["C# .NET", "Python", "Node JS", "Firebase", "MySQL"]
        },
        {
            title: "Source Control",
            description: ["Git", "Github", "SCRUM/Agile",]
        },
        {
            title: "Design",
            description: ["SAI2", "Shotcut"]
        },
    ],

    Portfolio : [
        {
            tag: 'React',
            caption:"Developed and tested new feature for Cavokapp web application",
            image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
            title: "Cavokapp - Pilot logbook",
            desc:"Designed and tested features for Cavokapp web application on a dedicated development branch that were later merged into the live branch of the product.",
            links: [
                {link:"https://www.cavokapp.com/", icon:<ConnectingAirportsIcon/>}

            ]
        },
        {
            tag: 'C#',
            caption:"Designed and tested features for local API and Database.",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--2XdEnCAM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://raw.githubusercontent.com/sandeepkumar17/td-dev.to/di-collection-posts/assets/blog-cover/c-sharp.png",
            title: "Keyloop API development",
            desc:"Designed and tested features for local API and Database using standartized company environment and hardware.",
            links: [
                {link:"https://keyloop.com/", icon:<AllInclusiveIcon/>}

            ]
        },
        {
            tag: 'React',
            caption:"Designed and developed a celebratory web page.",
            image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
            title: "Birthday project - web app",
            desc:"Together with another developer created a web page filled with birthday wishes, messages, images, video and audio files.",
            links: [
                {link:"https://fromchumbieswithlove.com/", icon:<SetMealIcon/>}

            ]
        },
        {
            tag: 'React',
            caption:"Designed and developed a web app to manage electric car charging.",
            image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
            title: "CarCharMap - Interactive Car charger map",
            desc:"A university project web app showing a Map of available electric car chargers across the country. The Web app allows map display, log in system (with API also build by me for this project), filtering by parameters/location and price calculation",
            links: [
                {link:"https://github.com/Dmitrii-Weaver/CarChar", icon:<GitHubIcon/>}

            ]
        },
        {
            tag: 'React',
            caption:"Designed and developed a chatroom",
            image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
            title: "Chatrooms",
            desc:"Designed and developed a functioning online chatroom with registration functionality, that was hosted and available online as a part of the university project",
            links: [
                {link:"https://github.com/Dmitrii-Weaver/CarChar", icon:<GitHubIcon/>}

            ]
        },
        {
            tag: 'Python',
            caption:"Designed and developed simple Discord bots",
            image: "https://www.videogameschronicle.com/files/2021/05/discord-new-logo.jpg",
            title: "Discord Bot creation",
            desc:"Designed and developed simple bots for Discord servers that fetch data and links, run minigames and help with server management",
            links: [
                {link:"https://github.com/Dmitrii-Weaver/", icon:<GitHubIcon/>}

            ]
        },
        {
            tag: 'Other',
            caption:"Designed and Developed online surveys, processed and reported data",
            image: "https://www.surveylegend.com/wordpress/wp-content/uploads/2020/03/Surveys-Advantages-vs-Disadvantages.png",
            title: "Online survey engineer",
            desc:"Designed and developed online surveys based on documentation provided by client, then processed and filed the data.",
            links: [
                {link:"https://github.com/Dmitrii-Weaver/", icon:<GitHubIcon/>}

            ]
        }
    ]
}