import basquete from "../../assets/category/basquete.jpg";
import ciclismo from "../../assets/category/ciclismo.jpg";
import futebol from "../../assets/category/futebol.jpg";
import volei from "../../assets/category/volei.jpg";
import Carousel from "../Carousel";

interface ICategoryprop {
  filterCategory: (category: string) => void;
}

const CategoryItem = ({ filterCategory }: ICategoryprop) => {
  const categoryArr = [
    { image: ciclismo, text: "Ciclismo" },
    { image: volei, text: "Vôlei" },
    { image: basquete, text: "Basquete" },
    { image: futebol, text: "Futebol" },
  ];

  // Adicionar o onclick na div para criar o filtro da categoria.
  return (
    <Carousel>
      {categoryArr.map((item) => (
        <div className="item" onClick={() => filterCategory(item.text)}>
          <img src={item.image} alt="imagem" />
          <p>{item.text} </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoryItem;
