export const fetchUser = () =>{
  const userInfo =
        localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    return userInfo;
}

export const fetchCart = () =>{
  const cardInfo =
        localStorage.getItem("cartItems") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.clear();

    return cardInfo ? cardInfo : [];
}