import { Player } from "@lottiefiles/react-lottie-player";
import { H1, Container } from "./styles";
import { useHistory } from "react-router";
const NotFound = () => {
  const history = useHistory();
  // Alterar o nome do item pego pelo local storage
  const handleClick = () => {
    !!localStorage.getItem("token")
      ? history.push("/dashboard")
      : history.push("/");
  };
  return (
    <Container>
      <header>
        <H1>Página não encontrada</H1>
      </header>
      <main>
        <section>
          <Player
            src="https://assets7.lottiefiles.com/private_files/lf30_bdec2jzh.json"
            style={{
              height: "80%",
              width: "80%",
            }}
            autoplay
            loop
          ></Player>
        </section>
      </main>

      <footer>
        <button onClick={handleClick}>Página inicial</button>
      </footer>
    </Container>
  );
};
export default NotFound;
