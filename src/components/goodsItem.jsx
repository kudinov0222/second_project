import '../index.scss';

function GoodsItem(props) {
   const id = props.offerId;
   const name = props.displayName;
   const desc = props.displayType;
   const price = props.price.finalPrice;
   const f_bg = props.full_background;
   const addToBasket = props.addToBasket;

   return (
      <div className="card" id={id}>
         <div className="card-image">
            <img src={f_bg} alt="img" />
         </div>
         <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{desc}</p>
         </div>
         <div className="card-action">
            <button className="btn"
               onClick={() =>
                  addToBasket({ id, name, price })}
            >В корзину</button>
            <span className="right m">{price}</span>
         </div>
      </div>
   );
}

export { GoodsItem };