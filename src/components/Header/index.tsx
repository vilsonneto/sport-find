import logo from "../../assets/logo.jpeg";
import perfilEditor from "../../assets/perfilEditor.jpg";
import { Ul } from "./style";
import { useHistory } from "react-router";

interface IHeaderProps {
  avatarImg?: string;
}
const Header = ({ avatarImg }: IHeaderProps) => {
  const history = useHistory();

  const handleClick = () => {};
  // Se a váriavel for passsada ela coloca o avatar img no src
  return (
    <header>
      <nav>
        <Ul>
          <li>
            <img src={logo} alt="" onClick={() => history.push("/dashboard")} />
          </li>

          {!avatarImg ? (
            <li>
              <img src={perfilEditor} alt="" onClick={handleClick} />
            </li>
          ) : (
            <li>
              <img src={avatarImg} alt="" onClick={handleClick} />;
            </li>
          )}
        </Ul>
      </nav>
    </header>
  );
};

export default Header;
