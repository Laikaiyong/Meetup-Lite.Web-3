import { PeopleModel } from "@/provider/PeopleProvider";
import { GroupModel } from "./Group";

export interface EventDetail {
    iosIcon: string;
    mdIcon: string;
    text: string;  
}

export interface EventModel {
    id: number;
    title: string;
    organizer: GroupModel;
    imageUrl: string;
    dateTime: EventDetail;
    allocatedFunds: EventDetail;
    participants: PeopleModel[];
}