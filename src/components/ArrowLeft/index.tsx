import { HiArrowLeft } from "react-icons/hi";
import { ArrowSvg } from "./styles";
import { useHistory } from "react-router-dom";

interface IArrowLeftProps {
  path?: string;
}

const ArrowLeft = ({ path = "/dashboard" }: IArrowLeftProps) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(path);
  };

  return (
    <ArrowSvg>
      <HiArrowLeft onClick={handleClick} />
    </ArrowSvg>
  );
};
export default ArrowLeft;