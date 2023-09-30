import { PeopleModel } from "@/provider/PeopleProvider";

export const findCommonParticipants = (myId: string, allUsers: PeopleModel[]): PeopleModel[] => {
  const myProfile = allUsers.find(user => user.id === myId);
  if (!myProfile) return [];

  const myGroups = myProfile.joinedGroups;
  const myEvents = myProfile.eventHistory;

  const similarUsers = allUsers.filter(user => {
    if (user.id === myId) return false;
    return user.joinedGroups.some(group => myGroups.includes(group)) && user.eventHistory.some(event => myEvents.includes(event));
  });

  return similarUsers;
};
