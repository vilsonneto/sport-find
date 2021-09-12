import { useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";
import { eventos } from "../../testeslocais/mocks";

interface IParams {
  id: string;
}

const Event = () => {
  const params = useParams<IParams>();
  const history = useHistory();

  const event = useMemo(() => {
    return eventos.find((item) => item.id === Number(params.id));
  }, [params]);

  if (!event) {
    console.log("O evento não foi encontrado");
    history.push("/event");
  }

  return (
    <div>
      <p>Página individual do evento {Number(params.id)}</p>
      <div>
        <p>Id: {event?.id}</p>
        <p>Nome do grupo: {event?.name}</p>
        <p>Categoria: {event?.category}</p>
        <p>Descrição: {event?.description}</p>
        <p>Criador: {event?.creator}</p>
        <p>Participarão do Evento {event?.users.length}:</p>
      </div>
      <button onClick={() => console.log(params)}>clique</button>
      <button onClick={() => history.push("/events")}>voltar</button>
    </div>
  );
};
export default Event;
