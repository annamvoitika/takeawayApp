class Order {
  constructor(){
    this.menu = [{"pizza" : 10},
    {"pasta" : 12},
    {"gelato" : 4},
    {"tiramisu" : 5}];

    this.total = 0;
  }

  listAllDishes(){
    return this.menu;
}

  selectDishes(dish){
    if (dish == "pizza"){
      this.total += 10;
      return 'Your order total is ' + this.total;
    }
    else if (dish == "pasta"){
      this.total += 12;
      return 'Your order total is ' + this.total;
    }
    else if (dish == "gelato"){
      this.total += 4;
      return 'Your order total is '+ this.total;
    }
    else if (dish == "tiramisu"){
      this.total += 5;
      return 'Your order total is '+ this.total;
    }
    else {
      return "We don't have this dish available";
    }
  }

  place(){
    return "Your order is placed! Order total is " + this.total;
  }

  clearOrder(){
    this.total = 0;
  }

}
