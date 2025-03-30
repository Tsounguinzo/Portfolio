'use client'
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hook/useMediaQuery";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import {CONFIG} from "@/global-config";

const iconMap = {
    "github": <FaGithub className="size-4" />,
    "linkedin": <FaLinkedin className="size-4" />,
    "instagram": <FaInstagram className="size-4" />
}
export const Profile = () => {
    const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");

    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="w-full flex flex-row justify-between items-top ">
                        <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                            <Image
                                width={150}
                                height={150}
                                quality={100}
                                src={CONFIG.profileImage}
                                alt="Profile Picture"
                                className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                            />
                            <div className="flex flex-col items-start justify-center">
                                <h1 className="font-bold md:mt-4 text-xl md:text-2xl">{CONFIG.profile.name}</h1>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    {CONFIG.profile.title}
                                </p>
                            </div>
                        </div>
                        {!isDesktopOrLaptop && <ThemeSwitcher />}
                    </div>

                    <p className="mt-2 text-start text-sm text-muted-foreground">
                        {CONFIG.profile.about}
                    </p>
                    <Button className="mt-4 w-full" asChild>
                        <Link
                            href={CONFIG.profile.contactUrl}
                            target="_blank"
                            className="font-semibold uppercase"
                        >
                            CONTACT ME
                        </Link>
                    </Button>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {CONFIG.profile.socials.map((s, i) => {
                            const parts = s.link.split("/");
                            const username = parts[parts.length - 1];

                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {
                                        // @ts-expect-error not all icons
                                        iconMap[s.icon]
                                    }
                                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        /{username}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}