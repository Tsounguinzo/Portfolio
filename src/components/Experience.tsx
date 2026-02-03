import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { ExpImages } from "@/components/ExpImages";
import type { Experience as ExperienceType } from "@/types";

interface ExperienceProps {
    experience: ExperienceType[];
}

export const Experience = ({ experience }: ExperienceProps) => {
    return (
        <>
           <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {experience.map((exp, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={exp.logo}
                                        alt={exp.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {exp.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {exp.duration}
                                </p>
                                <p className="text-sm mt-2">{exp.description}</p>
                                { exp.images && (
                                <ExpImages
                                    role={exp.role}
                                    link={exp.link}
                                    images={exp.images}
                                    duration={exp.duration}
                                /> )}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}
