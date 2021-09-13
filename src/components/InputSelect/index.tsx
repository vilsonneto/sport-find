import { Container, InputContainer } from "./styles";

import { IconType } from "react-icons";

interface IInputSelectProps {
  label: string;
  icon?: IconType;
  name: string;
  options: string[];
}

const InputSelect = ({
  label,
  icon: Icon,
  name,
  options,
}: IInputSelectProps) => {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        {Icon && <Icon size={20} />}
        <select name={name}>
          <option value="" />
          {options.map((item, index) => (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </select>
      </InputContainer>
    </Container>
  );
};

export default InputSelect;
