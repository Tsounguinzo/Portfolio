import { Card, CardContent } from "@/components/ui/card";

export const recommendations = [
    {
        "name": "Chams Lahssini",
        "title": "Étudiante à Concordia University",
        "avatarUrl": "https://static.licdn.com/aero-v1/sc/h/1uvpx8f8f2yqcujoah8olk5w4",
        "message":
            "Beaudelaire is an amazing teammate. He’s always there when you need help, ready to share his resources and knowledge without hesitation. It’s clear he genuinely cares about others’ success. Beyond his smarts, he has this warm, friendly vibe that makes every group project feel more enjoyable. I’m grateful to have him as a teammate and study buddy!"
    },
    {
        "name": "Rachel Côté Bessette",
        "title": "Software Developer at Dental Wings",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/C5603AQH-BWfoZ-IXYg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517367221139?e=1742428800&v=beta&t=sDFRBSl5bVPQxkvwegOwkqp86YDpbkDZg2Ew2tXibPk",
        "message":
            "J'ai été très impressionnée par le niveau d'implication et d'aptitude de Beaudelaire tout au long de son stage. Il apprend vite et a bien contribué dans un ensemble varié de tâches au sein de notre équipe. C'est pourquoi je le recommande sans hésitation!"
    },
    {
        "name": "Francois Stelluti",
        "title": "Programmer at Straumann Group",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/C5603AQEbuWg4hvChTA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1622489902960?e=1742428800&v=beta&t=uVsgwIqNitaLw5Yfe2A7k47r6DI6fGRnbO_7Peycm2o",
        "message":
            "Beaudelaire has been a great colleague who doesn't hesitate to ask questions and to take on difficult tasks. His general knowledge of Java is very good and he can work independently quite well. It is a pleasure to work with him."
    },
    {
        "name": "Yvan Luu",
        "title": "Software Engineer",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/C4E03AQG8fQxq2gYHoQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1590881479326?e=1742428800&v=beta&t=hbRHMtqnaOElbW5zdCpsgoUMxFZhRc0Gu5FAUbAq-Nk",
        "message":
            "Beaudelaire is eager to learn and take on challenges. Despite being a newer addition to our team, he isn't afraid to take tasks outside his comfort zone and complete them in a satisfactory manner."
    },
    {
        "name": "Yunier Rene Perez Valdes",
        "title": "Java Software Developer",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/C4E03AQGCL-QZ0-HzDg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1581632646545?e=1742428800&v=beta&t=2ZuQGvRuL-ZdfCXsJGAHzXXLOizt47pGCAh6CD6keus",
        "message":
            "Beaudelaire is a committed professional that jumps right into the action. When a new task arrives, he doesn't hesitate to take it even if it's out of his comfort zone. He takes every new task as an opportunity to learn and strengthen his abilities. He is also a kind person, receptive to critics and hard working."
    },
    {
        "name": "Zhengxuan Zhao",
        "title": "Software Engineering @ McGill",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/D5603AQH7peNvNKx-8Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1725998109398?e=1742428800&v=beta&t=fzjGD_5FTNYMBVIzW7LP4xcJyiFp10HAqnu2b7aTlc0",
        "message":
            "Working with Beaudelaire Tsoungui Nzodoumkouo on the Concordia.course website project was an exceptional experience, even though it's a short period. His coding expertise and problem-tackling approach significantly contributed to the project. He is a consistent and steady coder, delivering high-quality code almost every day! His strong analytical skills and attention to detail played important roles when we were reviewing every commit. It was a great experience for me as I learned a lot from him. One more thing! Check out our work @ https://concordia.courses and see for yourself! 🚀"
    },
    {
        "name": "Thomas Tang-Allard",
        "title": "Student at Concordia University",
        "avatarUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFhMwR3JhIQuw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698700263598?e=1742428800&v=beta&t=iLW8gsJS8NXLZ65fL1TwL87qz8VbJvaGNfEU5ZEMvTA",
        "message":
            "Beaudelaire was my teacher assistant at Concordia University. He was incredibly friendly and approachable, always creating a welcoming environment for students. Beaudelaire went above and beyond to provide assistance, whether it was explaining complex web programming concepts or offering valuable feedback on our projects. His patience and enthusiasm greatly enhanced my learning experience, and I truly appreciate his dedication to helping us succeed. Thank you Beaudelaire for your support and encouragement!"
    }
]

export const Recommendations = () => {
    return (
        <>
            <h2 className="text-xl font-bold my-4">
                Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {recommendations.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={p.avatarUrl}
                                        alt={p.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {p.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {p.title}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {p.message}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}