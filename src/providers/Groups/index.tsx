import { useState, useEffect, createContext, useMemo, useContext } from "react";
import api from "../../services/api";
import { useAuth } from "../Auth";

import {
  IProvidersProps,
  IGroupData,
  IMembers,
  IBanneds,
  IGroup,
} from "../../types/IProviders";

interface IGroupsProviderData {
  setAllGroups: React.Dispatch<React.SetStateAction<IGroup[]>>;
  createGroup: (username: string, groupData: IGroupData) => void;
  banMember: (group: IGroup, bannedUser_id: number) => void;
  updateDescription: (group: IGroup, newDescription: string) => void;
  exitGroup: (group: IGroup, user: IMembers) => void;
  subscribeGroup: (group: IGroup, user: IMembers) => void;
  allGroups: IGroup[];
  ownedGroups: IGroup[];
  subscribedGroups: IGroup[];
}

const GroupsContext = createContext<IGroupsProviderData>(
  {} as IGroupsProviderData
);

export const GroupsProvider = ({ children }: IProvidersProps) => {
  const { token, user, addUserListGroup, removeUserListGroup } = useAuth();
  const [allGroups, setAllGroups] = useState<IGroup[]>([]);

  const createGroup = (username: string, groupData: IGroupData) => {
    const data = {
      creator: user.id,
      ...groupData,
      groupEvents: [],
      members: [{ name: username, id: user.id }],
      banned: [],
    };

    api
      .post("/groups", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAllGroups([...allGroups, response.data]);
        addUserListGroup(response.data);
      })
      .catch((err) => console.log(err));
  };

  const subscribeGroup = (group: IGroup, user: IMembers) => {
    const newMembersList = [...group.members, user];

    const newGroupList = allGroups.map((item) => {
      if (item.id === group.id) {
        item.members = newMembersList;
      }
      return item;
    });

    api
      .patch(
        `/groups/${group.id}`,
        { members: newMembersList },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        setAllGroups(newGroupList);
        addUserListGroup(group);
      })
      .catch((err) => console.log(err));
  };

  const exitGroup = (group: IGroup, user: IMembers) => {
    const newMembersList = group["members"].filter(
      (item) => item.id !== user.id
    );

    const newGroupList = allGroups.map((item) => {
      if (item.id === group.id) {
        item.members = newMembersList;
      }
      return item;
    });

    api
      .patch(
        `/groups/${group.id}`,
        { members: newMembersList },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        setAllGroups(newGroupList);
        removeUserListGroup(group);
      })
      .catch((err) => console.log(err));
  };

  const banMember = (group: IGroup, bannedUser_id: IBanneds["id"]) => {
    if (bannedUser_id !== user.id) {
      if (group.creator === user.id) {
        const newmembersList = group["members"].filter(
          (item) => item.id !== bannedUser_id
        );
        const obj = { id: bannedUser_id };
        const bannedList = [...group.banned, obj];

        const updatedGroupsList = allGroups.map((item) => {
          if (item.id === group.id) {
            item.members = newmembersList;
            item.banned = [...item.banned, obj];
          }
          return item;
        });

        api
          .patch(
            `/groups/${group.id}`,
            { members: newmembersList, banned: bannedList },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response) => setAllGroups(updatedGroupsList))
          .catch((err) => console.log(err));
      } else {
        console.log("apenas o criador do grupo pode banir");
      }
    } else {
      console.log("o criador do grupo não pode ser banido");
    }
  };

  const updateDescription = (group: IGroup, newDescription: string) => {
    if (group.creator === user.id) {
      const newGroupList = allGroups.map((item) => {
        if (item.id === group.id) {
          item.description = newDescription;
        }
        return item;
      });

      api
        .patch(
          `/groups/${group.id}`,
          { description: newDescription },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          setAllGroups(newGroupList);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("apenas o criador do grupo pode alterar a descrição");
    }
  };

  useEffect(() => {
    if (!!token) {
      api
        .get("/groups", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          setAllGroups(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const ownedGroups = useMemo(() => {
    const result = allGroups.filter((item) => item.creator === user.id);
    return result;
  }, [allGroups, user.id]);

  const subscribedGroups = useMemo(() => {
    const result = allGroups.filter((item) => {
      return item["members"].some((elem) => elem.id === user.id);
    });

    return result;
  }, [allGroups, user.id]);

  return (
    <GroupsContext.Provider
      value={{
        createGroup,
        allGroups,
        setAllGroups,
        ownedGroups,
        subscribedGroups,
        banMember,
        updateDescription,
        subscribeGroup,
        exitGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
