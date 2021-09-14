import Header from "../../components/Header";
import { useAuth } from "../../providers/Auth";
import { MdGroup, MdGroupAdd, MdDirectionsBike } from "react-icons/md";
import { CardEvent } from "../../components/CardEvent";
import { useEffect } from "react";

export const Dashboard = () => {
  const { user, token, getUser } = useAuth();
  useEffect(() => {
    console.log("Usuário ", user);
  }, [user]);

  return (
    <>
      <Header />
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
        {/* {userData.subscribed_events.map((event) => (
          <CardEvent key={event.id} event={event} />
        ))} */}
      </main>
    </>
  );
};
