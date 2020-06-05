describe("Order", function(){
  var order;

  beforeEach(function(){
    order = new Order();
  });

//   As a customer
// So that I can check if I want to order something
// I would like to see a list of dishes with prices

it ('lists all dishes in the menu', function(){
  expect(order.listAllDishes()).toEqual(order.menu);
});

// As a customer
// So that I can order the meal I want
// I would like to be able to select some number of several available dishes

// As a customer
// So that I can verify that my order is correct
// I would like to check that the total I have been given matches the sum of the various dishes in my order

it ('allows customers to select dishes', function(){
  expect(order.selectDishes("pizza")).toEqual("Your order total is 10")
});

it ('calculates total cost of an order', function(){
  order.selectDishes("pizza");
  order.selectDishes("pasta");
  expect(order.total).toEqual(22);
});

it('places an order', function(){
  order.selectDishes("pizza");
  order.selectDishes("gelato");
  expect(order.place()).toEqual("Your order is placed! Order total is 14")
});


})
