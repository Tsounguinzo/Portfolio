export interface Profile {
    name: string;
    title: string;
    about: string;
    contactUrl: string;
    socials: Social[];
}

export interface Social {
    name: string;
    link: string;
    icon: string;
}