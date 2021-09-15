import { createContext, useContext, useState, useEffect } from "react";
import { IProvidersProps, IEvents } from "../../types/IProviders";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { useGroups } from "../Groups";

interface IEventData {
  name: string;
  group_Id: number;
  state: string;
  local: string;
  data: string;
  category: string;
  description: string;
  users: number[];
  creator: number;
}

interface IEditEventData {
  name: string;
  local: string;
  data: string;
  description: string;
}

interface IEventsProviderData {
  allEvents: IEvents[];
  createEvent: (eventData: IEventData) => void;
  cancelEvent: (event: IEvents) => void;
  editEvent: (event: IEvents, data: IEditEventData) => void;
  subscribeEvent: (event: IEvents) => void;
  leaveEvent: (event: IEvents) => void;
}

const EventsContext = createContext<IEventsProviderData>(
  {} as IEventsProviderData
);

export const EventsProvider = ({ children }: IProvidersProps) => {
  const [allEvents, setAllEvents] = useState<IEvents[]>([]);
  const { allGroups, setAllGroups } = useGroups();
  const { token, user, addUserListEvent, removeUserListEvent } = useAuth();

  const createEvent = (eventData: IEventData) => {
    if (eventData.creator === user.id) {
      api
        .post("/events", eventData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setAllEvents([...allEvents, response.data]);

          const newListGroup = allGroups.map((group) => {
            if (eventData.group_Id === group.id) {
              group.groupEvents = [...group.groupEvents, response.data];
            }
            return group;
          });

          setAllGroups(newListGroup);
          addUserListEvent(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const cancelEvent = (event: IEvents) => {
    if (event.creator === user.id) {
      const newListEvents = allEvents.filter((item) => item.id !== event.id);

      api
        .delete(`/events/${event.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          setAllEvents(newListEvents);

          const newListGroup = allGroups.map((group) => {
            if (event.group_Id === group.id) {
              group.groupEvents = group.groupEvents.filter(
                (item) => item.id !== event.id
              );
            }
            return group;
          });

          setAllGroups(newListGroup);
          removeUserListEvent(event);
        })
        .catch((err) => console.log(err));
    }
  };

  const editEvent = (event: IEvents, data: IEditEventData) => {
    if (event.creator === user.id) {
      const newListEvents = allEvents.map((item) => {
        if (item.id === event.id) {
          item.name = data.name;
          item.data = data.data;
          item.local = data.local;
          item.description = data.description;
        }
        return item;
      });

      api
        .patch(`/events/${event.id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setAllEvents(newListEvents);

          const newListGroup = allGroups.map((group) => {
            if (event.group_Id === group.id) {
              group.groupEvents = group.groupEvents.map((item) => {
                if (item.id === event.id) {
                  item = response.data;
                }
                return item;
              });
            }
            return group;
          });

          setAllGroups(newListGroup);
        })
        .catch((err) => console.log(err));
    }
  };

  const subscribeEvent = (event: IEvents) => {
    const newListEvents = allEvents.map((item) => {
      if (item.id === event.id) {
        item.users = [...item.users, user.id];
      }
      return item;
    });

    api
      .patch(
        `/events/${event.id}`,
        { users: [...event.users, user.id] },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setAllEvents(newListEvents);

        const newListGroup = allGroups.map((group) => {
          if (event.group_Id === group.id) {
            group.groupEvents = group.groupEvents.map((item) => {
              if (item.id === event.id) {
                item = response.data;
              }
              return item;
            });
          }
          return group;
        });

        setAllGroups(newListGroup);
      })
      .catch((err) => console.log(err.response));
  };

  const leaveEvent = (event: IEvents) => {
    const newListSubscribe = event.users.filter((id) => id !== user.id);

    const newListEvents = allEvents.map((item) => {
      if (item.id === event.id) {
        item.users = newListSubscribe;
      }
      return item;
    });

    api
      .patch(
        `/events/${event.id}`,
        { users: newListSubscribe },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setAllEvents(newListEvents);

        const newListGroup = allGroups.map((group) => {
          if (event.group_Id === group.id) {
            group.groupEvents = group.groupEvents.map((item) => {
              if (item.id === event.id) {
                item = response.data;
              }
              return item;
            });
          }
          return group;
        });

        setAllGroups(newListGroup);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!!token) {
      api
        .get("/events", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          setAllEvents(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <EventsContext.Provider
      value={{
        allEvents,
        createEvent,
        cancelEvent,
        editEvent,
        subscribeEvent,
        leaveEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
