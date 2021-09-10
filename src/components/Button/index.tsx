import { Container } from "./styles";

interface IButtonProps {
  children: string;
  variantGreen?: boolean;
  variantRed?: boolean;
  onClick: () => void;
}

const Button = ({
  variantGreen = false,
  variantRed = false,
  children,
  onClick,
}: IButtonProps) => {
  return (
    <Container
      isVariantGreen={variantGreen}
      isVariantRed={variantRed}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
