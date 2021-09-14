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

  const wasClosed = (date: string) => {
    const eventDate: string[] = date.split("-");
    const formatEventDate = `${eventDate[0]}-${eventDate[1]}-${
      Number(eventDate[2]) + 1
    }`;
    const myDate = new Date();

    return new Date(formatEventDate) < myDate;
  };

  console.log(wasClosed(event.data));

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
          <p>{event.category}</p>
        </div>
        <div className="container-progress">
          {wasClosed(event.data) && <p>Encerrado</p>}
        </div>
      </div>
    </Container>
  );
};
