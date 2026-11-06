import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../features/cart/cartSlice";

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();
 
  return (
    <div className="container mt-5" dir="rtl">
      <h3 className="mb-4">سبد خرید</h3>

      {items.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-between border-bottom py-3"
            >
              <div>
                <h5>{item.name}</h5>
                <p>تعداد: {item.quantity}</p>
                <p>
                  قیمت: {item.totalPrice.toLocaleString("fa-IR")} تومان
                </p>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeItem(item.id))}
              >
                حذف یک عدد
              </button>
            </div>
          ))}

          <div className="mt-4">
            <p>تعداد کل کتاب‌ها: {totalQuantity}</p>
            <h5>
              مبلغ کل: {totalPrice.toLocaleString("fa-IR")} تومان
            </h5>

            <button
              className="btn btn-outline-danger mt-2"
              onClick={() => dispatch(clearCart())}
            >
              خالی کردن سبد خرید
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;