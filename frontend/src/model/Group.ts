export interface GroupDetailModel {
    iosIcon: string;
    mdIcon: string;
    text: string;  
}

export interface GroupModel {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    members: GroupDetailModel;
    funds: GroupDetailModel;
}