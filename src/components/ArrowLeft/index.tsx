import { HiArrowLeft } from "react-icons/hi";
import { ArrowSvg } from "./styles";
import { useHistory } from "react-router-dom";

interface IArrowLeftProps {
  path?: string;
  title?: string;
}

const ArrowLeft = ({
  path = "/dashboard",
  title = "Grupos",
}: IArrowLeftProps) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(path);
  };

  return (
    <ArrowSvg>
      <HiArrowLeft onClick={handleClick} />
      <h1>{title}</h1>
    </ArrowSvg>
  );
};
export default ArrowLeft;
