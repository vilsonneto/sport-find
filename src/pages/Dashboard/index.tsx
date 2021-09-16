import Header from "../../components/Header";
import { useAuth } from "../../providers/Auth";
import { MdGroup, MdGroupAdd, MdDirectionsBike } from "react-icons/md";
import { CardEvent } from "../../components/CardEvent";
import { useEffect, useState } from "react";
import { IEvents, IGroup } from "../../types/IProviders";
import { Container } from "./styles";
import ModalGroup from "../../components/ModalGroup";
import { Link } from "react-router-dom";
import { useEvents } from "../../providers/Events";
import { useGroups } from "../../providers/Groups";
import GroupCard from "../../components/GroupCard";

export const Dashboard = () => {
  const { user } = useAuth();
  const { subscribedEvents } = useEvents();
  const { subscribedGroups } = useGroups();
  const [userEvents, setUserEvents] = useState<IEvents[]>([]);
  const [userGroups, setUserGroups] = useState<IGroup[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setUserEvents(subscribedEvents);
    setUserGroups(subscribedGroups);
  }, [subscribedEvents, subscribedGroups, user]);

  function eventScroll(event: React.WheelEvent<HTMLDivElement>) {
    let target = event.target as HTMLDivElement;

    if (event.deltaY > 0) {
      target.scrollBy(300, 0);
    } else {
      target.scrollBy(-300, 0);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <aside>
          <nav>
            <ul>
              <li>
                <Link to="/groups">
                  <MdGroup />
                  <span>Grupos</span>
                </Link>
              </li>
              <li>
                <Link to="/events">
                  <MdDirectionsBike />
                  <span>Eventos</span>
                </Link>
              </li>
              <li>
                <div onClick={() => setModal(true)}>
                  <MdGroupAdd />
                  <span>Criar Grupo</span>
                </div>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <div
            className="carousel"
            onWheel={(e: React.WheelEvent<HTMLDivElement>) => eventScroll(e)}
          >
            <h2 className="subtitle">Meus Eventos</h2>
            <div className="item">
              {!!userEvents ? (
                userEvents.length > 0 ? (
                  userEvents.map((event) => (
                    <div key={event.id} className="card-container">
                      <CardEvent
                        key={event.id}
                        event={event}
                        userId={user.id}
                      />
                    </div>
                  ))
                ) : (
                  <p>Você não está inscrito em nenhum evento!</p>
                )
              ) : (
                <p>Carregando...</p>
              )}
            </div>
            <h2 className="subtitle">Meus Grupos</h2>
            <div className="item">
              {!!userGroups ? (
                userGroups.length > 0 ? (
                  userGroups.map((group) => (
                    <div key={group.id} className="card-container">
                      <GroupCard
                        key={group.id}
                        group={group}
                        userId={user.id}
                      />
                    </div>
                  ))
                ) : (
                  <p>Você não está inscrito em nenhum grupo!</p>
                )
              ) : (
                <p>Carregando...</p>
              )}
            </div>
          </div>
        </main>
        {modal && <ModalGroup closeModal={setModal} />}
      </Container>
    </>
  );
};
