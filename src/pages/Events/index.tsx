import Header from "../../components/Header";
import { CardEvent } from "../../components/CardEvent";
import { Container, EventsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";
import { useEvents } from "../../providers/Events";
import CategoryItem from "../../components/CategoryItem";
import { useEffect, useState } from "react";
import { IEvents } from "../../types/IProviders";

const Events = () => {
  const { allEvents } = useEvents();
  const [eventList, setEventList] = useState<IEvents[]>([]);

  useEffect(() => {
    setEventList(allEvents);
  }, [allEvents]);

  const categoryFilter = (chosenCategory: string) => {
    if (chosenCategory === "Todos") {
      setEventList(allEvents);
    } else {
      let filteredEvents = allEvents.filter(
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
