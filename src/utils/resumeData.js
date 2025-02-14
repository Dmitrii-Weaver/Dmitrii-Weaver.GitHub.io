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

    about: "Fresh OAMK graduate - Fullstack Developer and Software Engineer with focus on React, CSS, Python with additional skills and experience in C#, React Native, Typescript, PHP and Kotlin.  \n  \n Received Bachelor of Engineering in Information Technology degree from Oamk in August 2023, also completed additional exchange studies in Kitami, Japan in the same field. \n  \n Currently looking for a Software Developer position, on-site or remote.",


    workexp: [
        {
            title: "Freelance web developer",
            date: "2023 - Now",
            description: 'Creating web apps for private customers.',
        },
        {
            title: "Backend developer on C# .Net - Keyloop",
            date: "2022.02 - 2022.08",
            description: "Designing, developing and testing new functions for company's API on C# .Net while also supervising a group of two other students as a part of my university studies.",
        },
        {
            title: "Frontend developer - Cavokapp.com",
            date: "2021.05 - 2021.08",
            description: "Implementing and testing new functions for the service's web page.",
        },
        {
            title: "Survey engineer - Terra Pulse Group",
            date: "2018 - 2021",
            description: 'Creating online surveys using the documentation provided by client and handling the output data.',
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
            title: "Fullstack developer",
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
            description: "Skilled in graphics and character design. 3 Years of experience as hobby, designing characters and manufacturing merchandise.",
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

    Portfolio: [
        {
            tag: 'Other',
            caption: "Assisted in game and level design for a small indie game project",
            image: "https://cdnb.artstation.com/p/media_assets/images/images/001/032/707/large/untitled.jpg?1674211867",
            title: "Game and level design",
            desc: "Assisted my friend who is a currently studying game developer in a university in designing two of his project ideas: a platformer and a tabletop card game.",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/", icon: <GitHubIcon /> }

            ]
        },
        {
            tag: 'React',
            caption: "Worked on creating modern looking landing pages",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Funbounce.com%2Fphotos%2F750-X-400-2x.jpg&f=1&nofb=1&ipt=c5bcef8690f8bcb235536882c9d10c4367f5acd38f1a6e1a42f4b41aab138d58&ipo=images",
            title: "Modern Landing page",
            desc: "Studying tutorials, I have been learning how to create more modern and good looking web pages that would do well for representing potential products or projects",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/LandingAdvanced", icon: <GitHubIcon /> }

            ]
        },
        {
            tag: 'React',
            caption: "Developed a responsive web/mobile application for tracking and managing your daily caffeine intake",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1695052%2Fpexels-photo-1695052.jpeg%3Fcs%3Dsrgb%26dl%3Dcoffee-beans-1695052.jpg%26fm%3Djpg&f=1&nofb=1&ipt=1f5762746bdb9dd2088b80161130fbac91994c36dfc8465747fa7c08cbdf0bc3&ipo=images",
            title: "CoffeeCount",
            desc: "Developed a responsive web/mobile application for tracking and managing your daily caffeine intake. The app is built using  Expo, React/Typescript, Gluestack and Firebase. Currently functional, but still being worked on to get the best performance.",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/CaffeineTracker", icon: <GitHubIcon /> }

            ]
        },
        {
            tag: 'React',
            caption: "Created and hosted an Instagram clone using React, Chakra UI, Redux and Firebase",
            image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/instagram-users-irked-with-the-new-update-sixteen_nine.jpg?size=1200:675",
            title: "Instagram clone",
            desc: "Created an Instagram clone using React, Redux and Firebase for authentification system. Log in and register system up and running, posts, likes, comments and follows all functional, available here - https://snsprojectdweaver.vercel.app/auth",
            links: [
                { link: "https://snsprojectdweaver.vercel.app/auth", icon: <WebIcon /> }

            ]
        },
        {
            tag: 'Python',
            caption: "Completed a course of Python, Pandas and Matplotlib",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaptrinhcanban.com%2Fpython%2Fnhap-mon-lap-trinh-python%2Fgioi-thieu-python%2Fpython-la-gi%2FPython.jpg&f=1&nofb=1&ipt=01dc15d351612f4b263ff580000d24b082aebf98905a41604dfb1ddd728d0c96&ipo=images",
            title: "Pyton course (advanced)",
            desc: "General Python study arranged in one repo for convenient self tracking",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/PythonTest", icon: <GitHubIcon /> }

            ]
        },

        {
            tag: 'React',
            caption: "Worked on an online store page for an operating food store in Helsinki.",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd33wubrfki0l68.cloudfront.net%2Fccdd1f46a6a8a919991bc3fc4ef832393ee4d6b2%2F1db7e%2Fimages%2Fapp%2Fecommerce-demo-app.png&f=1&nofb=1&ipt=18617e35a31ae2d4412ee11153e827a1965543393405a6b049a4aecbc01cf5bc&ipo=images",
            title: "E-commerce app for a store in Helsinki",
            desc: "Worked on an online store page for an operating food store in Helsinki. Designed with Figma, approved the layout with the customer, created the pages together with a friend. Tested and submitted the code to the customer.",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/", icon: <GitHubIcon /> }

            ]
        },

        {
            tag: 'React',
            caption: "Developed and tested new feature for Cavokapp web application",
            image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
            title: "Cavokapp - Pilot logbook",
            desc: "Designed and tested features for Kavokapp web application on a dedicated development branch that were later merged into the live branch of the product.",
            links: [
                { link: "https://www.cavokapp.com/", icon: <ConnectingAirportsIcon /> }

            ]
        },
        {
            tag: 'C#',
            caption: "Designed and tested features for local API and Database.",
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--2XdEnCAM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://raw.githubusercontent.com/sandeepkumar17/td-dev.to/di-collection-posts/assets/blog-cover/c-sharp.png",
            title: "Keyloop API development",
            desc: "Designed and tested features for local API and Database using standartized company environment and hardware.",
            links: [
                { link: "https://keyloop.com/", icon: <AllInclusiveIcon /> }

            ]
        },
        {
            tag: 'React',
            caption: "Designed and developed a celebratory web page.",
            image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
            title: "Birthday project - web app",
            desc: "Together with another developer created a web page filled with birthday wishes, messages, images, video and audio files.",
            links: [
                { link: "https://fromchumbieswithlove.com/", icon: <SetMealIcon /> }

            ]
        },
        {
            tag: 'React',
            caption: "Designed and developed a web app to manage electric car charging.",
            image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
            title: "CarCharMap - Interactive Car charger map",
            desc: "A university project web app showing a Map of available electric car chargers across the country. The Web app allows map display, log in system (with API also build by me for this project), filtering by parameters/location and price calculation",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/CarChar", icon: <GitHubIcon /> }

            ]
        },
        {
            tag: 'React',
            caption: "Designed and developed a chatroom",
            image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
            title: "Chatrooms",
            desc: "Designed and developed a functioning online chatroom with registration functionality, that was hosted and available online as a part of the university project",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/CarChar", icon: <GitHubIcon /> }

            ]
        },
        {
            tag: 'Python',
            caption: "Designed and developed simple Discord bots",
            image: "https://www.videogameschronicle.com/files/2021/05/discord-new-logo.jpg",
            title: "Discord Bot creation",
            desc: "Designed and developed simple bots for Discord servers that fetch data and links, run minigames and help with server management",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/", icon: <GitHubIcon /> }

            ]
        },
        {
            tag: 'Other',
            caption: "Designed and Developed online surveys, processed and reported data",
            image: "https://www.surveylegend.com/wordpress/wp-content/uploads/2020/03/Surveys-Advantages-vs-Disadvantages.png",
            title: "Online survey engineer",
            desc: "Designed and developed online surveys based on documentation provided by client, then processed and filed the data.",
            links: [
                { link: "https://github.com/Dmitrii-Weaver/", icon: <GitHubIcon /> }

            ]
        }
    ]
}