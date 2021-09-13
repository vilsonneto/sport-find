import basquete from "../../assets/category/basquete.jpg";
import ciclismo from "../../assets/category/ciclismo.jpg";
import futebol from "../../assets/category/futebol.jpg";
import volei from "../../assets/category/volei.jpg";
import mergulho from "../../assets/category/mergulho.jpg";
import trilha from "../../assets/category/trilha.jpg";
import rapel from "../../assets/category/rapel.jpg";
import skate from "../../assets/category/skate.jpg";
import surf from "../../assets/category/surf.jpg";
import yoga from "../../assets/category/yoga.jpg";
import Carousel from "../Carousel";

interface ICategoryProps {
  filterCategory: (category: string) => void;
}

const CategoryItem = ({ filterCategory }: ICategoryProps) => {
  const categoryArr = [
    { image: ciclismo, text: "Ciclismo" },
    { image: volei, text: "Vôlei" },
    { image: basquete, text: "Basquete" },
    { image: futebol, text: "Futebol" },
    { image: yoga, text: "Yoga" },
    { image: mergulho, text: "Mergulho" },
    { image: trilha, text: "Trilha" },
    { image: rapel, text: "Rapel" },
    { image: skate, text: "Skate" },
    { image: surf, text: "Surf" },
  ];

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
