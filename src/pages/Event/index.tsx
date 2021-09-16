import { Container, ContainerMain } from "./styles";

import Button from "././../../components/Button";
import ArrowLeft from "./../../components/ArrowLeft";
import Header from "./../../components/Header";
import ModalEvent from "./../../components/ModalEvent";

import { useState, useMemo } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import { useAuth } from "./../../providers/Auth";
import { useEvents } from "./../../providers/Events";

import { categoryArr } from "./../../utils/CategoryArr";

interface IParams {
  id: string;
}

const Event = () => {
  const params = useParams<IParams>();

  const history = useHistory();

  const { user } = useAuth();
  const { id } = user;

  const { allEvents, subscribeEvent, leaveEvent } = useEvents();

  const [showModal, setShowModal] = useState(false);

  const event = useMemo(() => {
    return allEvents.find((item) => item.id === Number(params.id));
  }, [params, allEvents]);

  if (!event) {
    history.push("/events");
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
    <Container>
      <div className="containerHeader">
        <Header />
      </div>
      <div className="containerArrow">
        <ArrowLeft path={"/events"} />
      </div>
      <div className="containerStyle">
        <ContainerMain>
          <div>
            <header className="title">
              <h1>{event?.name}</h1>
              <span>{event?.category}</span>
            </header>
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
          </div>
          <article>
            {event?.data && (
              <section>
                <h3>
                  Data do evento: <span>{dateAjustRender(event?.data)}</span>
                </h3>
              </section>
            )}
            <section>
              <h3>Descrição:</h3>
              <p>{event?.description}</p>
            </section>
            <section>
              <h3>Localização:</h3>
              <p>{event?.local}</p>
            </section>
            <section>
              <h3>
                Participarão do Evento: <span>{event?.users.length}</span>
              </h3>
            </section>
            {id !== event?.creator && (
              <section>
                <h3>
                  Deseja se inscrever no grupo?
                  <Link to={`/groups/${event?.group_Id}`}> Clique Aqui!</Link>
                </h3>
              </section>
            )}
          </article>
          <article>
            {categoryArr.map(
              (item, index) =>
                item.text === event?.category && (
                  <img key={index} src={item.image} alt={item.text} />
                )
            )}
          </article>
        </ContainerMain>
      </div>
      {showModal && <ModalEvent closeModal={setShowModal} edit={event} />}
    </Container>
  );
};

export default Event;
