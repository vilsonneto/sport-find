import { Container } from "./styles";
import { IGroup } from "../../types/IProviders";
import { useHistory } from "react-router-dom";

interface IGroupProp {
  group: IGroup;
}

const GroupCard = ({ group }: IGroupProp) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/groups/${group.id}`);
    //console.log("clicou no card");
  };

  return (
    <Container onClick={handleClick}>
      <div>
        <h2>{group.name}</h2>
        <p>{group.category}</p>
      </div>
    </Container>
  );
};
export default GroupCard;
