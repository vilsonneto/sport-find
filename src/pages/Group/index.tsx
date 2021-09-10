import { useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";

interface IParams {
  id: string;
}

const Group = () => {
  const params = useParams<IParams>();
  const history = useHistory();

  const groupId = useMemo(() => {
    return Number(params.id);
  }, [params]);

  return (
    <div>
      <p>Página individual do grupo {groupId}</p>
      <button onClick={() => console.log(params)}>clique</button>
      <button onClick={() => history.push("/groups")}>voltar</button>
    </div>
  );
};
export default Group;
