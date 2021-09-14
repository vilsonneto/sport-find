import Header from "../../components/Header";
import { useAuth } from "../../providers/Auth";
import { MdGroup, MdGroupAdd, MdDirectionsBike } from "react-icons/md";
import { CardEvent } from "../../components/CardEvent";
import { useEffect, useState } from "react";
import { IEvents } from "../../types/IProviders";
import { Container } from "./styles";

export const Dashboard = () => {
  const { user } = useAuth();
  const [userEvents, setUserEvents] = useState<IEvents[]>([]);

  useEffect(() => {
    setUserEvents(user.subscribed_events);
  }, [user]);

  return (
    <>
      <Header />
      <Container>
        <nav>
          <ul>
            <li>
              <MdGroup />
              <span>Grupos</span>
            </li>
            <li>
              <MdDirectionsBike />
              <span>Eventos</span>
            </li>
            <li>
              <MdGroupAdd />
              <span>Criar Grupo</span>
            </li>
          </ul>
        </nav>
        <main>
          {!!userEvents ? (
            userEvents.map((event) => (
              <CardEvent key={event.id} event={event} />
            ))
          ) : (
            <p>Você não está inscrito em nenhum evento!</p>
          )}
        </main>
      </Container>
    </>
  );
};
