function BasketEmpty() {
  return (
    <div style={{ textAlign: "center", color: "darkorang" }}>
      <h1 style={{ color: "darkorange", marginBottom: "20px" }}>
        Добавьте товар в корзину
      </h1>
      <img src="img/empty-basket.png" alt="Пустая корзина" />
    </div>
  );
}

export default BasketEmpty;
