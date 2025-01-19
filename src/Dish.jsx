import style from './Main.module.css';

export default function Dish({data: {tittel, kategori, ingredienser, pris, bilde}}) {
    return (
        <div className={style.productCard}>
            <img className={style.productImage} src={bilde}/>
            <div className={style.productTitle}>{tittel}</div>
            <div className={style.productCategory}>{kategori}</div>
            <div className={style.productDescription}>{ingredienser}</div>
            
            <div className={style.containerHorizontal}>
                <button className={style.productBuy}>Kjøp</button>
                <div className={style.productPrice}>{pris}</div>
            </div>
        </div>
    );
};