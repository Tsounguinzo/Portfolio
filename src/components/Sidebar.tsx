import { Skills } from "./Skills";
import { Profile } from "./Profile";
import type { Profile as ProfileType } from "@/types";

interface SidebarProps {
    profileImage: string;
    profile: ProfileType;
    skills: string[];
}

export const Sidebar = ({ profileImage, profile, skills }: SidebarProps) => {
    return (
        <aside className="md:col-span-1">
            <Profile profileImage={profileImage} profile={profile} />
            <Skills skills={skills} />
        </aside>
    );
}