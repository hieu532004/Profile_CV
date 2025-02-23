export interface Project {
    id: string;
    en: {
        name: string;
        description: string;
        platforms: string;
       image:{img: string,alt:string}
        keyFeatures: string[];
        technologies: string[];
        bigImages: { img: string; alt: string }[];
        smallImages: { img: string; alt: string }[];
        responsibilities: string;
    };
    vi: {
        name: string;
        description: string;
        platforms: string;
        keyFeatures: string[];
        image:{img: string,alt:string}
        technologies: string[];
        bigImages: { img: string; alt: string }[];
        smallImages: { img: string; alt: string }[];
        responsibilities: string;
    };
}

