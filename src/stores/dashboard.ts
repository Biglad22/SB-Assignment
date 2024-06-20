import { defineStore } from "pinia";

///images
import andrewImg from '../assets/images/andrew.png';
import annaImg from '../assets/images/anna.png';
import markImg from '../assets/images/mark.png';
import joannaImg from '../assets/images/joanna.png';

//currency icons
import bitCoinIcon from '../assets/icons/bitcoin-2.svg';
import dollar from '../assets/icons/currency-dollar.svg';
import euro from '../assets/icons/currency-euro.svg';
import yen from '../assets/icons/currency-yen.svg';

//flags images
import usa from '../assets/images/usa.svg';
import italy from '../assets/images/italy.svg';
import spain from '../assets/images/spain.svg';
import nigeria from '../assets/images/nigeria.svg';
import southAfrica from '../assets/images/southafrica.svg';
import canada from '../assets/images/canada.svg';

interface FinanceType {
    type : string,
    value? : string,
    change? : number,
    currencies?:string[]
}

interface TeamMembersType {
    name : string,
    role : string,
    img : string
}

interface CountryStatsType {
    country : string,
    stat : number,
    comparison : number,
    img? : string
}

interface DashBoardData{
    finances : FinanceType[],
    teamMembers : TeamMembersType[],
    countryStats : CountryStatsType[],
    activeUser : TeamMembersType
}



export const useDashBoardData  = defineStore('dashBoardData', {
    state: () : DashBoardData => ({
        finances :[
            {
                type: 'balance',
                value: '5900.00'
            },
            {
                type: 'profit',
                value: '950.00',
                change : 56, 
            },
            {
                type: 'losses',
                value: '450.00',
                change : 56, 
            },
            {
                type: 'currency',
                currencies :[
                    bitCoinIcon,
                    dollar,
                    euro,
                    yen
                ]
            }
        ],
        teamMembers :[
            {
                name : 'andrew johnston',
                role : 'top trader',
                img: markImg
            },
            {
                name : 'anna atkinsons',
                role : 'manager',
                img : annaImg
            },
            {
                name : 'mark atkinsons',
                role : 'top trader',
                img :  andrewImg
            },
            {
                name : 'johanna tairons',
                role : 'manager',
                img : joannaImg
            },
        ],
        countryStats :[
            {
                country : 'italy',
                stat : 475,
                comparison : 73,
                img:italy,
            },
            {
                country : 'united states',
                stat : 431,
                comparison : 93,
                img: usa
            },
            {
                country : 'canada',
                stat : 174,
                comparison : 20,
                img: canada
            },
            {
                country : 'spain',
                stat : 475,
                comparison : 13,
                img:spain
            },
            {
                country : 'nigeria',
                stat : 134,
                comparison : 0,
                img: nigeria
            },
            {
                country : 'sounth africa',
                stat : 471,
                comparison : 40,
                img : southAfrica
            }
        ],
        activeUser :{
            name : 'Andrew Johnston',
            role : 'Top Trader',
            img: markImg
        }
    }),
    actions:{
        setActiveService(newActive: string) {
            const user = this.teamMembers.find(member => member.name === newActive);
            if (user) {
                this.activeUser = user;
            }
        }
    }
})