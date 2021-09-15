import { useMemo } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useEvents } from "../../providers/Events";
import Header from "../../components/Header";
import ArrowLeft from "../../components/ArrowLeft";
import { useAuth } from "../../providers/Auth";
import Button from "../../components/Button";
import { categoryArr } from "../../utils/CategoryArr";
import { Conteiner } from "./styles";
import { useState } from "react";
import ModalEvent from "../../components/ModalEvent";

interface IParams {
  id: string;
}

const Event = () => {
  const params = useParams<IParams>();
  const history = useHistory();
  const { allEvents, subscribeEvent, leaveEvent } = useEvents();
  const { user } = useAuth();
  const { id } = user;
  const [showModal, setShowModal] = useState(false);

  const event = useMemo(() => {
    return allEvents.find((item) => item.id === Number(params.id));
  }, [params, allEvents]);

  if (!event) {
    console.log("O evento não foi encontrado");
    history.push("/event");
  }

  const dateAjustRender = (date: string) => {
    return date.split("-").reverse().join("/");
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const participation = event?.users.find((item) => item === id) !== undefined;

  const handleParticipation = () => {
    if (event) {
      participation ? leaveEvent(event) : subscribeEvent(event);
    }
  };

  return (
    <>
      <Header />
      <Conteiner>
        <ArrowLeft path={"/events"} />
        <main className="content">
          <header className="title">
            <h1>{event?.name}</h1>
            {id === event?.creator ? (
              <Button variantGreen onClick={handleEdit}>
                Editar
              </Button>
            ) : participation ? (
              <Button variantGreen onClick={handleParticipation}>
                Sair
              </Button>
            ) : (
              <Button variantGreen onClick={handleParticipation}>
                Participar
              </Button>
            )}
          </header>
          <article className="cart">
            <section className="text">
              <p>
                Categoria: <span>{event?.category}</span>
              </p>
              {event?.data && (
                <p>
                  Data: <span>{dateAjustRender(event?.data)}</span>
                </p>
              )}
              <h3>Descrição:</h3>
              <span>{event?.description}</span>
              <h3>Localização:</h3>
              <span>{event?.local}</span>
              <p>Participarão do Evento:{event?.users.length}</p>
              {id !== event?.creator && (
                <p>
                  Deseja se inscrever no grupo?
                  <Link to={`/groups/${event?.group_Id}`}> Clique Aqui!</Link>
                </p>
              )}
            </section>
            <div>
              {categoryArr.map((item, index) =>
                item.text === event?.category ? (
                  <img src={item.image} alt={item.text} key={index} />
                ) : null
              )}
            </div>
          </article>
        </main>
        {showModal && <ModalEvent closeModal={setShowModal} edit={event} />}
      </Conteiner>
    </>
  );
};
export default Event;
