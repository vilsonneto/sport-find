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
  };

  return (
    <Container data-testid="container" onClick={handleClick}>
      <div data-testid="child">
        <h2>{group.name}</h2>
        <p className="category">{group.category}</p>
        <p>{group.state}</p>
      </div>
    </Container>
  );
};
export default GroupCard;
