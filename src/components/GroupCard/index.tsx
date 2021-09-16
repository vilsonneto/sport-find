import { Container } from "./styles";
import { IGroup } from "../../types/IProviders";
import { useHistory } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";

interface IGroupProp {
  group: IGroup;
  userId: number;
}

const GroupCard = ({ group, userId }: IGroupProp) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/groups/${group.id}`);
  };

  return (
    <Container data-testid="container" onClick={handleClick}>
      <div data-testid="child">
        <h2>{group.name}</h2>

        <div className="details-container">
          <div>
            <p className="category">{group.category}</p>
            {userId === group.creator && <GrUserAdmin />}
          </div>
          <p>{group.state}</p>
        </div>
      </div>
    </Container>
  );
};
export default GroupCard;
