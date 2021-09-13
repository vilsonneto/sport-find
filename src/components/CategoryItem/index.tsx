import Carousel from "../Carousel";
import { categoryArr } from "../CategoryArr";

interface ICategoryProps {
  filterCategory: (category: string) => void;
}

const CategoryItem = ({ filterCategory }: ICategoryProps) => {
  return (
    <Carousel>
      {categoryArr.map((item, index) => (
        <div
          key={index}
          className="item"
          onClick={() => filterCategory(item.text)}
        >
          <img src={item.image} alt="imagem" />
          <p>{item.text} </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoryItem;
