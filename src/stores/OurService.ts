import { defineStore } from "pinia";
import webLogo from '/src/assets/icons/React-icon.svg'
import uxLogo from '/src/assets/icons/ux-design.svg';
import mobiledev from '/src/assets/icons/firestore.svg';
import brandLogo from '/src/assets/icons/sf.svg';
import cloudLogo from '/src/assets/icons/Google_Cloud_Logo.svg'

//logos for technology stack
import reactLogo from '/src/assets/icons/React-icon.svg'


interface ServiceType {
    title: string;
    desc: string;
    perks: string[];
    imagePath: string
}

interface StateType {
    services: ServiceType[];
    activeService: ServiceType;
    techIconsLinks: string[]
}

export const useServicesStore = defineStore('ourService', {
    state: (): StateType => ({
        services: [
            {
                title: 'web development',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, is the turpis accumsan congue euismod blandit dui. Pellentesque habitant.',
                perks: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Dlor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ],
                imagePath: '/s'
            },
            {
                title: 'mobile development',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, is the turpis accumsan congue euismod blandit dui. Pellentesque habitant.',
                perks: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Dlor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ],
                imagePath: mobiledev
            },
            {
                title: 'UI/UX designing',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, is the turpis accumsan congue euismod blandit dui. Pellentesque habitant.',
                perks: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Dlor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ],
                imagePath: uxLogo
            },
            {
                title: 'branding',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, is the turpis accumsan congue euismod blandit dui. Pellentesque habitant.',
                perks: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Dlor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ],
                imagePath: brandLogo
            },
            {
                title: 'cloud technology',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, is the turpis accumsan congue euismod blandit dui. Pellentesque habitant.',
                perks: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Dlor sit amet, consectetur adipiscing elit.',
                    'Lorem ipsum dolor consectetur adipiscing elit.',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ],
                imagePath: cloudLogo
            }
        ],
        activeService: {
            title: 'web development',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, is the turpis accumsan congue euismod blandit dui. Pellentesque habitant.',
            perks: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Dlor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            imagePath: webLogo
        },
        techIconsLinks : [
            reactLogo,
            '/src/assets/icons/Amazon_Web_Services_Logo.svg',
            '/src/assets/icons/Google_Cloud_Logo.svg',
            '/src/assets/icons/redux-logo.svg',
            '/src/assets/icons/javascript.svg',
            '/src/assets/icons/sf.svg',
            '/src/assets/icons/Amazon_Web_Services_Logo-1.svg',
            '/src/assets/icons/sf (2).svg',
            '/src/assets/icons/redux-logo-1.svg',
            '/src/assets/icons/nodejs.svg',
            '/src/assets/icons/firestore.svg',
            '/src/assets/icons/React-icon-1.svg',
            '/src/assets/icons/javascript.svg'
        ]
    }),
    actions: {
        setActiveService(newActive: string) {
            const service = this.services.find(service => service.title === newActive);
            if (service) {
                this.activeService = service;
            }
        }
    }
});
