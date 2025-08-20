import {Experience, Profile, Project, Recommendation} from "@/types";

export const experiences: Experience[] = [
    {
        role: "Engineering Consultant",
        company: "Points Path",
        logo: "https://pointspath.com/apple-icon.png",
        duration: "Mar 2025 - Present",
        description: "Building new features for https://pointspath.com.",
        link: "https://pointspath.com",
        images: [],
    },
    {
        role: "Software Intern",
        company: "Autodesk",
        logo: "https://static-dc.autodesk.net/etc.clientlibs/v605.20220721.1732/dotcom/clientlibs/clientlib-site/resources/images/favicons/app-icon-192.png",
        duration: "May 2025 - Aug 2025",
        description:
            "Developed high throughput data sync layer and closure service for Autodesk data platform.",
        link: "https://www.autodesk.com",
        images: [],
    },
    {
        role: "Co-Founder (Acquired By Point.me)",
        company: "FlyFast",
        logo: "/flyfast.png",
        duration: "Sep 2024 - Feb 2025",
        description:
            "A cash flight search engine like google flights, but better",
        link: "https://flyfast.io",
        images: ["/flyfast-img/home.png", "/flyfast-img/calendar-view.png", "/flyfast-img/flights.png", "/flyfast-img/offers.png", "/flyfast-img/flights-results.png", "/flyfast-img/booking.png", "/flyfast-img/booking-options.png"],
    },
    {
        role: "Teacher Assistant",
        company: "Concordia University",
        logo: "https://concordia.ca/etc/designs/concordia/clientlibs/img/favicons/apple-touch-icon.png",
        duration: "July 2024 - Present",
        description:
            "Teaching assistant for Object-Oriented Programming, Data Structures and Algorithms courses and Web Development courses.",
        link: "https://ta.beaudelaire.ca",
        images: [],
    },
    {
        role: "Software Developer Intern",
        company: "Straumann Group",
        logo: "https://straumann.com/resources/straumann/apple-touch-icon.png",
        duration: "May 2024 - Aug 2024",
        description:
            "Developed and deployed a new design for the visibility toolkit. Implementing undo/redo throughout the design workflow.",
        link: "https://straumann.com",
        images: [],
    },
    {
        role: "Software Developer Intern",
        company: "Straumann Group",
        logo: "https://straumann.com/resources/straumann/apple-touch-icon.png",
        duration: "Sep 2024 - Dec 2024",
        description:
            "Created test case generation tool which creates random XML docs from XML Schema. Implementing tooth tagging from AI tooth segmentation data.",
        link: "https://straumann.com",
        images: [],
    },
]

const socials = [
    {
        name: "Github",
        link: "https://github.com/Tsounguinzo",
        icon: "github"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/beaudelaire",
        icon: "linkedin"
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/beaudelaire001",
        icon: "instagram"
    }
]

export const profile: Profile = {
    name: "Beaudelaire Tsoungui Nzodoumkouo",
    title: "Engineer '26",
    about: "I love to build.",
    contactUrl: "https://cal.com/beaudelaire.ca",
    socials: socials
}

export const projects: Project[] = [
    {
        title: "Linky",
        description: "Modern Alumni/Current Student Network, with profiles periodically updated from LinkedIn",
        tech: ["TS", "AI"],
        link: "#",
        logo: "/linky.svg",
    },
    {
        title: "Flymile",
        description: "Flight search engine designed for credit card points enthusiasts",
        tech: ["React", "Java"],
        link: "https://flymile.pro",
        logo: "https://flymile.pro/apple-touch-icon.png",
    },
    {
        title: "Concordia courses",
        description: "A course and instructor review platform for Concordia students like RateMyProfessors, but better",
        tech: ["Svelte", "Java", "Python"],
        link: "https://concordia.courses",
        logo: "https://concordia.courses/apple-touch-icon.png",
    },
    {
        title: "Visual Schedule Builder Export",
        description: "Google Chrome extension to export Concordia's course schedule from Visual Schedule Builder to your google calendar",
        tech: ["JavaScript"],
        link: "https://chromewebstore.google.com/detail/visual-schedule-builder-e/nbapggbchldhdjckbhdhkhlodokjdoha",
        logo: "https://lh3.googleusercontent.com/nG7p7IQV9gKROILl_vws-1iRxyLh2brXR6h-e6ucfQH1KSDKRWZob-zyaDWhUhEmcYl5TcCGWY1r2kH3hShC6R84=s60",
    },
]

export const recommendations: Recommendation[] = [
    {
        "name": "Chams Lahssini",
        "title": "Étudiante à Concordia University",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/D4E03AQEb3k79I1cKsQ/profile-displayphoto-shrink_100_100/B4EZdIBDjrHgAU-/0/1749259926373?e=1758758400&v=beta&t=1AMitrqClmcm8PPnjHdbauUatUG479zAg5M_ciytiOo",
        "message":
            "Beaudelaire is an amazing teammate. He’s always there when you need help, ready to share his resources and knowledge without hesitation. It’s clear he genuinely cares about others’ success. Beyond his smarts, he has this warm, friendly vibe that makes every group project feel more enjoyable. I’m grateful to have him as a teammate and study buddy!"
    },
    {
        "name": "Rachel Côté Bessette",
        "title": "Software Developer at Dental Wings",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/C5603AQH-BWfoZ-IXYg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517367221139?e=1758758400&v=beta&t=GtKTe3tDee1FNXBQYHhem8hUUogA0xCVMYdzH9t5MXU",
        "message":
            "J'ai été très impressionnée par le niveau d'implication et d'aptitude de Beaudelaire tout au long de son stage. Il apprend vite et a bien contribué dans un ensemble varié de tâches au sein de notre équipe. C'est pourquoi je le recommande sans hésitation!"
    },
    {
        "name": "Francois Stelluti",
        "title": "Programmer at Straumann Group",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/C5603AQEbuWg4hvChTA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1622489902960?e=1758758400&v=beta&t=8poyE5-js3TsZPtnTsswH3uBsBtt9hqHFJT29RDaWpo",
        "message":
            "Beaudelaire has been a great colleague who doesn't hesitate to ask questions and to take on difficult tasks. His general knowledge of Java is very good and he can work independently quite well. It is a pleasure to work with him."
    },
    {
        "name": "Yvan Luu",
        "title": "Software Engineer",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/C4E03AQG8fQxq2gYHoQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1590881479326?e=1758758400&v=beta&t=M2j4rqJvKe-DAvyMVsU8yYA-ilekOCQjnCSoOjSiFvQ",
        "message":
            "Beaudelaire is eager to learn and take on challenges. Despite being a newer addition to our team, he isn't afraid to take tasks outside his comfort zone and complete them in a satisfactory manner."
    },
    {
        "name": "Yunier Rene Perez Valdes",
        "title": "Java Software Developer",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/C4E03AQGCL-QZ0-HzDg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1581632646545?e=1758758400&v=beta&t=-y5r0S9ai0mFhh4PQi8hcetjATzjSwOO9l0uza4sC78",
        "message":
            "Beaudelaire is a committed professional that jumps right into the action. When a new task arrives, he doesn't hesitate to take it even if it's out of his comfort zone. He takes every new task as an opportunity to learn and strengthen his abilities. He is also a kind person, receptive to critics and hard working."
    },
    {
        "name": "Zhengxuan Zhao",
        "title": "Software Engineering @ McGill",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/D5603AQH7peNvNKx-8Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1725998109398?e=1758758400&v=beta&t=vk3XaaOnHZFH3566w-kj5U3AvvSoIvBIuoM0qpHrla0",
        "message":
            "Working with Beaudelaire Tsoungui Nzodoumkouo on the Concordia.course website project was an exceptional experience, even though it's a short period. His coding expertise and problem-tackling approach significantly contributed to the project. He is a consistent and steady coder, delivering high-quality code almost every day! His strong analytical skills and attention to detail played important roles when we were reviewing every commit. It was a great experience for me as I learned a lot from him. One more thing! Check out our work @ https://concordia.courses and see for yourself! 🚀"
    },
    {
        "name": "Thomas Tang-Allard",
        "title": "Student at ETS Montreal",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFhMwR3JhIQuw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698700263598?e=1758758400&v=beta&t=0mI2pez3d2fG0kURVkUQ44wQ98NaOXOcpCdy3lAilzU",
        "message":
            "Beaudelaire was my teacher assistant at Concordia University. He was incredibly friendly and approachable, always creating a welcoming environment for students. Beaudelaire went above and beyond to provide assistance, whether it was explaining complex web programming concepts or offering valuable feedback on our projects. His patience and enthusiasm greatly enhanced my learning experience, and I truly appreciate his dedication to helping us succeed. Thank you Beaudelaire for your support and encouragement!"
    }
]

export const skills = ["TS/JS", "Python", "Java", "Go", "NextJS", "MongoDB", "PostgreSQL", "Git", "Docker"]
