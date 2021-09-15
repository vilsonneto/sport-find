import { ReactNode } from "react";
import { Container, ItemsContainer } from "./styles";

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
    <Container>
      <ItemsContainer
        onWheel={(e: React.WheelEvent<HTMLDivElement>) => eventScroll(e)}
      >
        {children}
      </ItemsContainer>
    </Container>
  );
};

export default Carousel;
