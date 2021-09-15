import logo from "../../assets/logo.jpeg";
import perfilEditor from "../../assets/perfilEditor.jpg";
import { Ul, User, Container } from "./style";
import { useHistory } from "react-router";
import { Modal } from "../Modal";
import { useState } from "react";
import Button from "../Button";
import { useAuth } from "../../providers/Auth";
import { StateArr } from "../../utils/StateArr";

const Header = () => {
  const history = useHistory();
  const [open, setOpening] = useState<boolean>(false);

  const { user, logoutUser, editUser } = useAuth();
  const [username, setUserName] = useState<string>(user.username);
  const [state, setState] = useState<string>(user.state);

  return (
    <header>
      <nav>
        <Ul>
          <li>
            <img src={logo} alt="" onClick={() => history.push("/dashboard")} />
          </li>

          <li>
            <img src={perfilEditor} alt="" onClick={() => setOpening(true)} />
            {open && (
              <aside>
                <Modal inRight closeModal={setOpening}>
                  <Container>
                    <User>
                      <li>Avatar</li>
                      <li>
                        <div>
                          <input
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                          ></input>
                        </div>{" "}
                        <div>
                          {" "}
                          <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          >
                            {StateArr.map((item) => (
                              <option value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                      </li>
                      <li>
                        <Button
                          variantGreen
                          onClick={() => editUser(username, state)}
                        >
                          Salvar
                        </Button>
                      </li>
                    </User>
                    <Button variantRed onClick={logoutUser}>
                      Logout
                    </Button>
                  </Container>
                </Modal>
              </aside>
            )}
          </li>
        </Ul>
      </nav>
    </header>
  );
};

export default Header;
