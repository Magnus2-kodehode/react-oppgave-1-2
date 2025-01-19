import {meny} from "./Menu.jsx";
import Dish from "./Dish.jsx";

import style from './Main.module.css';

export default function App() {
  
  return (
    <div className={style.body}>
      <div className={style.header}>
        <div className={style.headerTitle}>Restaurantmeny</div>
      </div>
      <div className={style.productContainer}>
        {meny.map((product) => {
          return <Dish data={product} key={product.id}/>;
        })}
      </div>
    </div>
  );
};