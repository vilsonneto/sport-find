import { Player } from "@lottiefiles/react-lottie-player";
import { H1, Container } from "./styles";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/Auth";
import Button from "../../components/Button";

const NotFound = () => {
  const history = useHistory();
  const { token } = useAuth();

  const handleClick = () => {
    !!token ? history.push("/dashboard") : history.push("/");
  };

  return (
    <Container>
      <header>
        <H1>Página não encontrada</H1>
      </header>
      <main>
        <Player
          src="https://assets7.lottiefiles.com/private_files/lf30_bdec2jzh.json"
          style={{
            height: "80%",
            width: "80%",
          }}
          autoplay
          loop
        ></Player>
      </main>

      <footer>
        <Button onClick={handleClick}>Página inicial</Button>
      </footer>
    </Container>
  );
};

export default NotFound;
