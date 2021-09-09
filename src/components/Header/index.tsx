import logo from "../../assets/logo.jpeg";
import perfilEditor from "../../assets/perfilEditor.jpg";
import { Ul } from "./style";
import { useHistory } from "react-router";

interface IPropHeader {
  avatarImg?: string;
}
const Header = ({ avatarImg = "" }: IPropHeader) => {
  const history = useHistory();

  return (
    <header>
      <nav>
        <Ul>
          <li>
            {" "}
            <img src={logo} alt="" onClick={() => history.push("/dashboard")} />
          </li>

          {!!avatarImg && (
            <li>
              <img src={perfilEditor} alt="" />
            </li>
          )}
        </Ul>
      </nav>
    </header>
  );
};

export default Header;
