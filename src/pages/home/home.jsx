import { useParams } from "react-router-dom";
import CategoryList from "../../components/category-list/category-list";

const Home = () => {
const {category}=useParams()
console.log(category);

    const categories = [
      {
        title: "Hat",
        id: 1,
        img: "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        title: "Jackets",
        id: 2,
        img: "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        title: "Sneakers",
        id: 3,
        img: "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        title: "Sneakers",
        id: 4,
        img: "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        title: "Mens",
        id: 5,
        img: "https://i.ibb.co/R70vBrQ/men.png"
      }];
    return (
        <CategoryList categories={categories}/>
    );
  };
  export default Home;
  