import Header from "../../components/Header";
import GroupCard from "../../components/GroupCard";
import { Container, GroupsContainer } from "./styles";
import ArrowLeft from "../../components/ArrowLeft";
import { useGroups } from "../../providers/Groups";
import CategoryItem from "../../components/CategoryItem";
import { useState, useEffect, useMemo } from "react";
import { StateArr } from "../../utils/StateArr";
import { TiFilter } from "react-icons/ti";
import { useAuth } from "../../providers/Auth";

const Groups = () => {
  const { user } = useAuth();
  const { allGroups } = useGroups();
  const [groupList, setGroupList] = useState(allGroups);
  const [filterByCategory, setFilterByCategory] = useState<string>("Todos");
  const [filterByState, setFilterByState] = useState<string>("Todos");

  useEffect(() => {
    setGroupList(allGroups);
  }, [allGroups]);

  const groupFilterList = useMemo(() => {
    let result = groupList;
    if (filterByCategory !== "Todos") {
      result = result.filter((event) => event.category === filterByCategory);
    }
    if (filterByState !== "Todos") {
      result = result.filter((event) => event.state === filterByState);
    }
    return result;
  }, [groupList, filterByState, filterByCategory]);

  return (
    <>
      <Header />
      <Container>
        <header>
          <ArrowLeft />
          <h1>Grupos</h1>
        </header>
        <CategoryItem filterCategory={setFilterByCategory} />
        <div className="container__filter-state">
          <label htmlFor="states">
            <TiFilter />
          </label>
          <select
            id="states"
            onChange={(e) => setFilterByState(e.target.value)}
          >
            <option value="Todos">Todos</option>
            {StateArr.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <GroupsContainer>
          {groupFilterList.map((group, index) => (
            <GroupCard key={index} group={group} userId={user.id} />
          ))}
        </GroupsContainer>
      </Container>
    </>
  );
};
export default Groups;
