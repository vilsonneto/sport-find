import { Container } from "./style";

import logo from "../../assets/logo.jpeg";
import perfilEditor from "../../assets/perfilEditor.jpg";

import { useHistory } from "react-router";

interface IHeaderProps {
  avatarImg?: string;
}

const Header = ({ avatarImg }: IHeaderProps) => {
  const history = useHistory();

  const handleClick = () => {};
  return (
    <header>
      <nav>
        <Container>
          <li>
            <img src={logo} alt="" onClick={() => history.push("/dashboard")} />
          </li>

          {!avatarImg ? (
            <li>
              <img src={perfilEditor} alt="" onClick={handleClick} />
            </li>
          ) : (
            <li>
              <img src={avatarImg} alt="" onClick={handleClick} />
            </li>
          )}
        </Container>
      </nav>
    </header>
  );
};

export default Header;
