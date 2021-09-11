import { ReactNode } from "react";
import { Conteiner, ItemsConteiner } from "./styles";
import GlobalStyle from "../../styles/global";

interface ICarouselProp {
  children: ReactNode;
}

function eventScroll(event: React.WheelEvent<HTMLDivElement>) {
  // conversão explicita de EventTarget para HTMLDivElement para acessar o scrollBy
  let target = event.target as HTMLDivElement;

  if (event.deltaY > 0) {
    target.scrollBy(300, 0);
  } else {
    target.scrollBy(-300, 0);
  }
}

const Carousel = ({ children }: ICarouselProp) => {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <ItemsConteiner
          onWheel={(e: React.WheelEvent<HTMLDivElement>) => eventScroll(e)}
        >
          {children}
        </ItemsConteiner>
      </Conteiner>
    </>
  );
};

export default Carousel;
