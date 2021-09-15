import Header from "../../components/Header";
import { CardEvent } from "../../components/CardEvent";
import { Container, EventsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";
import { useEvents } from "../../providers/Events";
import CategoryItem from "../../components/CategoryItem";
import { useEffect, useState, useMemo } from "react";
import { IEvents } from "../../types/IProviders";
import { StateArr } from "../../utils/StateArr";
import { TiFilter } from "react-icons/ti";

const Events = () => {
  const { allEvents } = useEvents();
  const [eventList, setEventList] = useState<IEvents[]>([]);
  const [filterByCategory, setFilterByCategory] = useState<string>("Todos");
  const [filterByState, setFilterByState] = useState<string>("Todos");

  useEffect(() => {
    setEventList(allEvents);
  }, [allEvents]);

  const eventFilterList = useMemo(() => {
    let result = eventList;
    if (filterByCategory !== "Todos") {
      result = result.filter((event) => event.category === filterByCategory);
    }
    if (filterByState !== "Todos") {
      result = result.filter((event) => event.state === filterByState);
    }
    return result;
  }, [eventList, filterByState, filterByCategory]);

  return (
    <>
      <Header />
      <Container>
        <label htmlFor="states">
          Filtrar <TiFilter />
        </label>
        <select id="states" onChange={(e) => setFilterByState(e.target.value)}>
          <option value="Todos">Todos</option>
          {StateArr.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <header>
          <ArrowLeft />
          <h1>Eventos</h1>
        </header>
        <CategoryItem filterCategory={setFilterByCategory} />
        <EventsContainer>
          {eventFilterList.map((event, index) => (
            <CardEvent key={index} event={event} />
          ))}
        </EventsContainer>
      </Container>
    </>
  );
};
export default Events;
