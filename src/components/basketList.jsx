import { BasketItem } from "./basketItem";

function BasketList(props) {

   const {
      order = [],
      handleBasketShow = Function.prototype,
      removeFromBasket = Function.prototype,
      incQuantity = Function.prototype,
      decQuantity = Function.prototype,
   } = props;

   const totalPrice = order.reduce((sum, el) => {
      return sum + el.price * el.quantity;
   }, 0)

   return (
      <ul className="collection basket-list">
         <li className="collection-item active #212121 grey darken-4">Корзина</li>
         {order.lenght ? (
            order.map((item) => <BasketItem
               key={item.id}
               removeFromBasket={removeFromBasket}
               incQuantity={incQuantity}
               decQuantity={decQuantity}
               {...item}
            />)
         ) : (
            <li className="collection-item"> Корзина пуста </li>
         )}
         <li className="collection-item active #212121 grey darken-4"> Общая стоимость: {totalPrice}  </li>
         <i className="material-icons basket-clear" onClick={handleBasketShow}>clear</i>
      </ul>
   );
}

export { BasketList };