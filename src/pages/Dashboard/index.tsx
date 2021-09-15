import Header from "../../components/Header";
import { useAuth } from "../../providers/Auth";
import { MdGroup, MdGroupAdd, MdDirectionsBike } from "react-icons/md";
import { CardEvent } from "../../components/CardEvent";
import { useEffect, useState } from "react";
import { IEvents } from "../../types/IProviders";
import { Container } from "./styles";
import ModalGroup from "../../components/ModalGroup";
import { Link } from "react-router-dom";
import { useEvents } from "../../providers/Events";

export const Dashboard = () => {
  const { user } = useAuth();
  const { subscribedEvents } = useEvents();
  const [userEvents, setUserEvents] = useState<IEvents[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setUserEvents(subscribedEvents);
  }, [subscribedEvents, user]);

  return (
    <>
      <Header />
      <Container>
        <nav>
          <ul>
            <Link to="/groups">
              <li>
                <MdGroup />
                <span>Grupos</span>
              </li>
            </Link>
            <Link to="/events">
              <li>
                <MdDirectionsBike />
                <span>Eventos</span>
              </li>
            </Link>
            <li onClick={() => setModal(true)}>
              <MdGroupAdd />
              <span>Criar Grupo</span>
            </li>
          </ul>
        </nav>
        <main>
          {!!userEvents ? (
            userEvents.length > 0 ? (
              userEvents.map((event) => (
                <CardEvent key={event.id} event={event} />
              ))
            ) : (
              <p>Você não está inscrito em nenhum evento!</p>
            )
          ) : (
            <p>Carregando...</p>
          )}
        </main>
        {modal && <ModalGroup closeModal={setModal} />}
      </Container>
    </>
  );
};
