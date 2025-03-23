export interface Experience {
    role: string;
    company: string;
    logo: string;
    duration: string;
    description: string;
    link?: string;
    images?: string[]
}

export interface ExpImages {
    role: string;
    link?: string;
    images: string[];
    duration: string;
}