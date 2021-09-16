import { useAuth } from "../../providers/Auth";
import { Conteiner } from "./styles";
import { useState } from "react";
import { SiGooglehangoutschat } from "react-icons/si";
import Button from "../Button";

const Chat = () => {
  const { user } = useAuth();
  const [openState, setOpenState] = useState(false);
  const [mensage, setMensage] = useState("");
  const [mensageEnviada, setMensageEnviada] = useState(false);

  const handleOpen = () => {
    setOpenState(!openState);
    setMensageEnviada(false);
  };

  const handleMessage = () => {
    setMensageEnviada(true);
    setMensage("");
  };

  return (
    <Conteiner>
      <div className="container">
        <div>
          <div className="icon">
            <SiGooglehangoutschat onClick={handleOpen} className="svg" />
            <div />
            {openState && (
              <div className="content">
                <div className="title">
                  <div>
                    <strong>Olá!</strong>
                    <span>{user.username}, bem vindo ao nosso chat!</span>
                  </div>
                </div>
                <div className="dialog">
                  <div className="container-content">
                    <div className="content-input">
                      <textarea
                        name="mensage"
                        value={mensage}
                        rows={4}
                        id="mensage"
                        onChange={(e) => setMensage(e.target.value)}
                        placeholder="Escreva aqui!"
                      />
                      <label>Mensagem</label>
                    </div>
                    <Button variantGreen onClick={handleMessage}>
                      Enviar mensagem
                    </Button>
                    {mensageEnviada && <span>Obrigada pelo Contato!</span>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Conteiner>
  );
};

export default Chat;
