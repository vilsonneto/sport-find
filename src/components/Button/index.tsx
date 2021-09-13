import { Container } from "./styles";

interface IButtonProps {
  children: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  variantGreen?: boolean;
  variantRed?: boolean;
}

const Button = ({
  children,
  type,
  onClick,
  variantGreen = false,
  variantRed = false,
}: IButtonProps) => {
  return (
    <Container
      type={type}
      onClick={onClick}
      isVariantGreen={variantGreen}
      isVariantRed={variantRed}
    >
      {children}
    </Container>
  );
};

export default Button;
