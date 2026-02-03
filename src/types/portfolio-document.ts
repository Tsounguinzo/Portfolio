import type { Experience } from "./experience";
import type { Profile } from "./profile";
import type { Project } from "./project";
import type { Recommendation } from "./recommendation";

export interface PortfolioDocument {
  _id?: string;
  profileName: string;
  profileDescription: string;
  profileImage: string;
  about: string;
  icon: string;
  noIndex: boolean;
  websiteUrl: string;
  experience: Experience[];
  profile: Profile;
  projects: Project[];
  recommendations: Recommendation[];
  skills: string[];
  twitter: {
    card: "summary" | "summary_large_image" | "player" | "app";
    creator: string;
  };
}
