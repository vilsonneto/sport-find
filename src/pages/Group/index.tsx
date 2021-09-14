import { useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useGroups } from "../../providers/Groups";

interface IParams {
  id: string;
}

const Group = () => {
  const { allGroups } = useGroups();
  const params = useParams<IParams>();
  const history = useHistory();

  const group = useMemo(() => {
    return allGroups.find((item) => item.id === Number(params.id));
  }, [params, allGroups]);

  if (!group) {
    console.log("O grupo não foi encontrado");
    history.push("/groups");
  }

  return (
    <section>
      <p>Página individual do grupo {Number(params.id)}</p>
      <div>
        <p>Id: {group?.id}</p>
        <p>Nome do grupo: {group?.name}</p>
        <p>Categoria: {group?.category}</p>
        <p>Descrição: {group?.description}</p>
        <p>Criador: {group?.creator}</p>
        <ul>
          Membros:
          {group?.members.map((elem, index) => (
            <li key={index}>
              - Nome: {elem.name} id: {elem.id}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => console.log(params)}>clique</button>
      <button onClick={() => history.push("/groups")}>voltar</button>
    </section>
  );
};
export default Group;
