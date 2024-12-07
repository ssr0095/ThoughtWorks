class SuperMarket {
  #totalAmt;
  #items;
  #discount;

  constructor() {
    this.#discount = 0;
    this.#items = [];
    this.#totalAmt = 0;
  }

  addItem(name, quantity, pricePerUnit) {
    this.#items.push({ name, quantity, pricePerUnit });
  }

  setDiscount(discount) {
    this.#discount = discount;
  }

  calTotalAmt() {
    this.#totalAmt = this.#items.reduce(
      (total, item) => total + item.quantity * item.pricePerUnit,
      0
    );

    const discountAmt = (this.#totalAmt * this.#discount) / 100;
    const finalAmt = this.#totalAmt - discountAmt;

    return finalAmt.toFixed(2);
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
    console.log(`Total amount to be paid: ${this.calTotalAmt()} Rs`);
    console.log("\n-----------------------\n");
  }
}

const sm = new SuperMarket();

sm.addItem("Rice", 2, 60);
sm.addItem("Potato", 5, 70);
sm.addItem("Eggs", 10, 7.5);
sm.setDiscount(4);
sm.displayBill();
