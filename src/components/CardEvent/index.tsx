import { useHistory } from "react-router";
import { IEvents } from "../../types/IProviders";
import { Container } from "./styles";

interface ICardEventProps {
  event: IEvents;
}

export const CardEvent = ({ event }: ICardEventProps) => {
  const history = useHistory();

  const dateAjustRender = (date: string) => {
    return date.split("-").reverse().join("/");
  };

  return (
    <Container
      key={event.id}
      onClick={() => history.push(`/events/${event.id}`)}
    >
      <div className="card-header">
        <div className="container-title">
          <h3>{event.name}</h3>
        </div>
        <div className="container-date">
          <p>{dateAjustRender(event.data)}</p>
        </div>
      </div>
      <div className="card-details">
        <div className="container-category">
          <p>{event.categoria}</p>
        </div>
        <div className="container-progress">
          <p></p>
        </div>
      </div>
    </Container>
  );
};
