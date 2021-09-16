import logo from "../../assets/logo.jpeg";
import { Ul, User, Container } from "./style";
import { useHistory } from "react-router";
import { Modal } from "../Modal";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useAuth } from "../../providers/Auth";
import { StateArr } from "../../utils/StateArr";
import Avatar, { genConfig, AvatarFullConfig } from "react-nice-avatar";
import { avatarArr } from "../../utils/CategoryArr";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Header = () => {
  const history = useHistory();

  const [open, setOpening] = useState<boolean>(false);
  const { user, logoutUser, editUser } = useAuth();
  const [username, setUserName] = useState<string>(user.username);
  const [state, setState] = useState<string>(user.state);
  const [num, setNum] = useState<number>(0);
  const [avatar, setAvatar] = useState<AvatarFullConfig>(user.avatar);

  const verifyAvatar = () => {
    if (avatar === undefined) {
      return genConfig(avatarArr[num]);
    } else {
      return genConfig(avatar);
    }
  };

  const config = verifyAvatar();

  const handleClickNext = () => {
    if (avatarArr[num + 1] === undefined) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };

  const handleClickPrevious = () => {
    if (num - 1 < 0) {
      setNum(avatarArr.length - 1);
    } else {
      setNum(num - 1);
    }
  };

  useEffect(() => {
    setUserName(user.username);
    setState(user.state);
  }, [user.username, user.state]);

  useEffect(() => {
    setAvatar(avatarArr[num]);
  }, [num]);

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
                      <div>
                        <AiOutlineArrowLeft onClick={handleClickPrevious} />
                        <Avatar
                          style={{ width: "8rem", height: "8rem" }}
                          {...config}
                        />
                        <AiOutlineArrowRight onClick={handleClickNext} />
                      </div>
                      <li>
                        <div>
                          <input
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                          />
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
                          onClick={() => editUser(username, state, avatar)}
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
