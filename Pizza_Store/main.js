const Base = { Regular: 50, "Whole wheat": 75 };
const Toppings = {
  "Mozzarella cheese": 30,
  "Cheddar cheese": 35,
  Spinach: 20,
  Corn: 15,
  Chicken: 50,
  Pepperoni: 45,
};
const AddOns = {
  Pepsi: 17,
  "7-up": 19,
  Coke: 20,
  "Lava cake": 95,
  "Chocolate brownie": 86,
};

const OrderAmt = (order) => {
  let TotalAmt = 0;
  let isDiscount = false;

  if (order.Base) {
    TotalAmt += Base[order.Base];
  } else {
    return console.log("Error");
  }

  if (order.Toppings) {
    order.Toppings.forEach((item) => {
      TotalAmt += Toppings[item];
    });
  } else {
    return console.log("Error");
  }

  if (order.Drink) {
    TotalAmt += AddOns[order.Drink];
  }

  if (order.Dessert) {
    TotalAmt += AddOns[order.Dessert];
  }

  if (order.Drink && order.Dessert) {
    var dis = TotalAmt * (1 / 20); //5%
    TotalAmt -= dis;
    isDiscount = true;
  }

  console.log(
    `Amount to be paid: ${TotalAmt} Rs\n[Caculation: ${
      Base[order.Base]
    } (base) + (${order.Toppings.map((item) => Toppings[item]).join(
      " + "
    )}) (Toppings) ${
      order.Drink || order.Dessert
        ? `+ (` +
          AddOns[order.Drink] +
          ` + ` +
          AddOns[order.Dessert] +
          `) (AddOns)`
        : ""
    } ${isDiscount ? `- ${dis} (Discount)` : ""} = ${TotalAmt}`
  );
};

let order_01 = {
  Base: "Whole wheat",
  Toppings: ["Mozzarella cheese", "Pepperoni"],
  Drink: "Coke",
  Dessert: "Lava cake",
};

let order_02 = {
  Base: "Regular",
  Toppings: ["Mozzarella cheese"],
};

OrderAmt(order_01);
OrderAmt(order_02);
