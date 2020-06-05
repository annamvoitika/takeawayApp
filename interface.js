$(document).ready(function(){
  var order = new Order();
  updateTotal();

  function updateTotal(){
    $('#total-sum').text(order.total);
  };

  function updatePlacedOrder(){
    $('#your-total').text("Your order was placed successfully! Total cost: " + order.total+"."+" Bon Appetit!");
  };

  $('#pizza').click(function(){
    order.selectDishes("pizza");
    updateTotal();
  });

  $('#pasta').click(function(){
    order.selectDishes("pasta");
    updateTotal();
  });

  $('#gelato').click(function(){
    order.selectDishes("gelato");
    updateTotal();
  });

  $('#tiramisu').click(function(){
    order.selectDishes("tiramisu");
    updateTotal();
  });

  $('#clear-order').click(function(){
    order.clearOrder();
    updateTotal();
    $('#your-total').hide();
  });

  $('#place-order').click(function(){
    order.place();
    updatePlacedOrder();
    $('#your-total').show();
  });
  
});
