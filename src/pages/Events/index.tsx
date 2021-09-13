import Header from "../../components/Header";
import { CardEvent } from "../../components/CardEvent";
import { Container, EventsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";

import { eventos } from "../../testeslocais/mocks";
import CategoryItem from "../../components/CategoryItem";
import { useState } from "react";

const Events = () => {
  const [eventList, setEventList] = useState(eventos);

  const categoryFilter = (chosenCategory: string) => {
    if (chosenCategory === "Todos") {
      setEventList(eventos);
    } else {
      let filteredEvents = eventos.filter(
        (event) => event.category === chosenCategory
      );
      setEventList(filteredEvents);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="cabecalho">
          <ArrowLeft />
          <h1>Eventos</h1>
        </div>
        <CategoryItem filterCategory={categoryFilter} />
        <EventsContainer>
          {eventList.map((event, index) => (
            <CardEvent key={index} event={event} />
          ))}
        </EventsContainer>
      </Container>
    </>
  );
};
export default Events;
