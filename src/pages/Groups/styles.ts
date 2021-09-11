import styled from "styled-components";

export const GroupsContainer = styled.div`
  margin: 0 auto;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1280px;
  }
`;
