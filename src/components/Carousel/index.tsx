import { ReactNode } from "react";
import { Conteiner, ItemsConteiner } from "./styles";
import GlobalStyle from "../../styles/global";

interface ICarouselProp {
  children: ReactNode;
}

function eventScroll(event: any) {
  if (event.deltaY > 0) {
    event.target.scrollBy(300, 0);
  } else {
    event.target.scrollBy(-300, 0);
  }
}

const Carousel = ({ children }: ICarouselProp) => {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <ItemsConteiner onWheel={(e) => eventScroll(e)}>
          {children}
        </ItemsConteiner>
      </Conteiner>
    </>
  );
};

export default Carousel;
