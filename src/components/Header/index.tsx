import logo from "../../assets/logo.jpeg";
import { Ul, User, Container } from "./style";
import { useHistory } from "react-router";
import { Modal } from "../Modal";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useAuth } from "../../providers/Auth";
import { StateArr } from "../../utils/StateArr";
import Avatar, { genConfig } from "react-nice-avatar";

const Header = () => {
  const history = useHistory();

  const [open, setOpening] = useState<boolean>(false);
  const [modalAvatar, setModalAvatar] = useState<boolean>(false);

  const { user, logoutUser, editUser } = useAuth();

  const [username, setUserName] = useState<string>(user.username);
  const [state, setState] = useState<string>(user.state);

  const config = genConfig({
    eyeBrowStyle: "up",
    sex: "woman",
    hatStyle: "beanie",
    hatColor: "red",
    hairColor: "red",
    bgColor: "#bffdeb",
    earSize: "small",
    eyeStyle: "oval",
    faceColor: "#ac6651",
    mouthStyle: "smile",
    glassesStyle: "none",
    shirtStyle: "short",
    shirtColor: "red",
    noseStyle: "short",
  });
  useEffect(() => {
    setUserName(user.username);
    setState(user.state);
  }, [user.username, user.state]);

  return (
    <header>
      <nav>
        <Ul>
          <li>
            <img src={logo} alt="" onClick={() => history.push("/dashboard")} />
          </li>

          <div>
            <li onClick={() => setOpening(true)}>
              <Avatar style={{ width: "5rem", height: "5rem" }} {...config} />
            </li>

            {open && (
              <aside>
                <Modal inRight closeModal={setOpening}>
                  <Container>
                    <User>
                      <div onClick={() => setModalAvatar(!modalAvatar)}>
                        <Avatar
                          style={{ width: "8rem", height: "8rem" }}
                          {...config}
                        />
                      </div>

                      <li>
                        <div>
                          <input
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                          ></input>
                        </div>
                        <div>
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
          </div>
        </Ul>
      </nav>
    </header>
  );
};

export default Header;
