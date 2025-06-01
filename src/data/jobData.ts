// src/data/jobData.ts
export interface Job {
    title: string;
    disabilitas: string;
    type: string[];
    location: string;
    posted: string;
    logo: string;
}

export const jobs: Job[] = [
    {
        title: 'Lead Product Designer',
        disabilitas: 'Disabilitas Fisik dan Mental',
        type: ['Fulltime', 'WFH'],
        location: 'Jakarta',
        posted: '5 hari lalu',
        logo: 'lowongan/logo1.png',
    },
    {
        title: 'Front-end Developer',
        disabilitas: 'Disabilitas Fisik dan Tidak Terlihat',
        type: ['Fulltime', 'WFH'],
        location: 'Jakarta',
        posted: '6 hari lalu',
        logo: 'lowongan/logo2.png',
    },
    {
        title: 'Administrator',
        disabilitas: 'Disabilitas Fisik, Sensorik Ringan, dan Tidak Terlihat',
        type: ['Fulltime', 'WFH'],
        location: 'Bandung',
        posted: '8 hari lalu',
        logo: 'lowongan/logo2.png',
    },
];
