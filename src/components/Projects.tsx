import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/types";

const techColors = {
    "TS": "bg-blue-500",
    "React": "bg-pink-500",
    "React Native": "bg-green-500",
    "LibreChat Fork": "bg-green-500",
    "Svelte": "bg-red-500",
    "Python": "bg-yellow-500",
    "JavaScript": "bg-yellow-500",
    "Next.js": "bg-gray-500",
}

interface ProjectsProps {
    projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                { p.link === "#" ? (
                                    <h3 className="font-semibold text-primary flex items-center">
                                        <img src={p.logo} className="h-6 w-6 inline-block mr-2" />
                                        {p.title}
                                    </h3>
                                ) : (
                                    <Link
                                        href={p.link}
                                        className="font-semibold text-primary hover:underline flex items-center"
                                    >
                                        <img src={p.logo} className="h-6 w-6 inline-block mr-2"/>
                                        {p.title}
                                    </Link>
                                )}
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech[0] as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech.join(", ")}
                                        </span>
                                    </div>
                                    { p.link === "#" ? (
                                        <span className="bg-blue-300 dark:bg-blue-800 dark:text-blue-200 px-2 py-1 rounded-sm text-xs">
                                            Coming Soon
                                        </span>
                                    ) : (
                                        <Link
                                            href={p.link}
                                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                                        >
                                            View Project
                                            <ExternalLink className="inline-block size-3" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}