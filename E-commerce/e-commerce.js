class OnlinePurchese {
  #totalAmt;
  #items;
  #discount;
  #limit;

  constructor() {
    this.#discount = 0;
    this.#items = [];
    this.#totalAmt = 0;
  }

  addItem(name, quantity, pricePerUnit) {
    this.#items.push({ name, quantity, pricePerUnit });
  }

  setDiscount(discount, limit) {
    this.#limit = limit;
    this.#discount = discount;
  }

  #calTotalAmt() {
    this.#totalAmt = this.#items.reduce(
      (total, item) => total + item.quantity * item.pricePerUnit,
      0
    );

    if (this.#totalAmt > this.#limit) {
      var discountAmt = (this.#totalAmt * this.#discount) / 100;
      this.#totalAmt -= discountAmt;
    }

    return this.#totalAmt.toFixed(2);
  }

  displayBill() {
    console.log("Purchesed items:");
    this.#items.forEach((item) => {
      console.log(
        `${item.name}: ${item.quantity} x ${item.pricePerUnit} = ${
          item.quantity * item.pricePerUnit
        } Rs`
      );
    });
    console.log(`Discount Applied: ${this.#discount}%`);
    console.log(`Total amount to be paid: ${this.#calTotalAmt()} Rs`);
    console.log("\n-----------------------\n");
  }
}

const op = new OnlinePurchese();

op.addItem("Shirt", 2, 400);
op.addItem("Jeans", 3, 700);
op.addItem("T-Shirt", 1, 200);
op.setDiscount(10, 2500);
op.displayBill();
