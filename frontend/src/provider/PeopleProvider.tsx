import { GroupModel } from "@/model/Group";
import { peopleOutline, peopleSharp, walletOutline, walletSharp } from "ionicons/icons";


export interface PeopleModel {
  id: string;
  name: string;
  subtitle: string;
  bio: string;
  interests: string;
  joinedGroups: number[]; // IDs of joined groups
  eventHistory: number[]; // IDs of joined events
}

export class PeopleProvider {
  static userList: PeopleModel[] = [
    {
      id: "user1",
      name: "Alice",
      subtitle: "Web3 Enthusiast",
      bio: "Interested in NFTs.",
      interests: "Web3, NFT, Crypto, Art",
      joinedGroups: [1, 2],
      eventHistory: [1, 2],
    },
    {
      id: "user2",
      name: "Bob",
      subtitle: "Crypto Trader",
      bio: "Day trader in the crypto market.",
      interests: "Trading, Crypto, Finance",
      joinedGroups: [1, 3],
      eventHistory: [1],
    },
    {
      id: "user3",
      name: "Charlie",
      subtitle: "Blockchain Developer",
      bio: "Building decentralized apps.",
      interests: "Web3, Solidity, Smart Contracts",
      joinedGroups: [2, 3],
      eventHistory: [2],
    },
    {
      id: "user4",
      name: "Diana",
      subtitle: "Data Scientist",
      bio: "Love crunching numbers.",
      interests: "Data Science, Python, Jupyter",
      joinedGroups: [4],
      eventHistory: [2],
    },
    {
      id: "user5",
      name: "Eve",
      subtitle: "Security Expert",
      bio: "Specialized in cybersecurity.",
      interests: "Security, Web3, Crypto",
      joinedGroups: [1, 4],
      eventHistory: [1, 2],
    },
    {
        id: "user6",
        name: "You",
        subtitle: "Expert in All",
        bio: "Master of all trades.",
        interests: "Web3, NFT, Crypto, Art, Trading, Security",
        joinedGroups: [2],
        eventHistory: [1, 2],
    },
  ];
}