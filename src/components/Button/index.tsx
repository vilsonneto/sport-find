import { Container } from "./styles";

interface IButtonProps {
  children: string;
  variantGreen?: boolean;
  variantRed?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({
  variantGreen = false,
  variantRed = false,
  children,
  type,
  onClick,
}: IButtonProps) => {
  return (
    <Container
      type={type}
      isVariantGreen={variantGreen}
      isVariantRed={variantRed}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
