import { GroupModel } from "@/model/Group";
import { peopleOutline, peopleSharp, walletOutline, walletSharp } from "ionicons/icons";

export class GroupProvider {
    static groupList: GroupModel[]  = [
        {
            id: 1,
            title: "Solana Superteam",
            description: "Solana Developers Gang Gang",
            imageUrl: "https://media.licdn.com/dms/image/C4E0BAQFQLb3NigCYsQ/company-logo_200_200/0/1651774940262?e=1704326400&v=beta&t=AklfJtqH5R1iqSsD7ck23j89UIofYxoO4lqEPRqdew8",
            members: {
                text: "1420 members",
                iosIcon: peopleOutline,
                mdIcon: peopleSharp
            },
            funds: {
                text: "18.5 SOL",
                iosIcon: walletOutline,
                mdIcon: walletSharp
            }
        },
        {
            id: 2,
            title: "APU BCC",
            description: "APU BCC LFG",
            imageUrl: "https://yt3.googleusercontent.com/gSbh4WYmLNTa0ZRqcEBlaJYxaViQ-9KzxpTDw-0s1qnzMGtEDrlA0fQWLEgsptJ4P_U3t40QUQ=s900-c-k-c0x00ffffff-no-rj",
            members: {
                text: "1420 members",
                iosIcon: peopleOutline,
                mdIcon: peopleSharp
            },
            funds: {
                text: "18.5 SOL",
                iosIcon: walletOutline,
                mdIcon: walletSharp
            }
        },
        {
            id: 3,
            title: "Gnosis BuiDL",
            description: "Gnosis BuiDL Hub",
            imageUrl: "https://pbs.twimg.com/profile_images/1628378993157361664/QgXQ6Ykz_400x400.jpg",
            members: {
                text: "1420 members",
                iosIcon: peopleOutline,
                mdIcon: peopleSharp
            },
            funds: {
                text: "18.5 SOL",
                iosIcon: walletOutline,
                mdIcon: walletSharp
            }
        },
        {
            id: 4,
            title: "Jupyter",
            description: "Jupyter Group Meetup",
            imageUrl: "https://pbs.twimg.com/profile_images/1661738815890022410/F8y4vBky_400x400.jpg",
            members: {
                text: "1420 members",
                iosIcon: peopleOutline,
                mdIcon: peopleSharp
            },
            funds: {
                text: "18.5 SOL",
                iosIcon: walletOutline,
                mdIcon: walletSharp
            }
        }
    ]
}