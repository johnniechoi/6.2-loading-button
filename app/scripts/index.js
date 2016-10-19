var Backbone = require('backbone');
var $ = require('jquery');
var PastaCollection = require('./models').PastaCollection;

var coolEats = new PastaCollection();

$('.submit').on('click', function(e){
  e.preventDefault();
  $('.submit').html('loading...')
  coolEats.fetch().then(function(){
    $('.submit').html('Submit');
    // console.log(coolEats);
  });
  coolEats.on("add", function(pizzas){
  $('.container ').append('<li>' + pizzas.get('type') + ' ' + pizzas.get('ingredients') + '</li>');
  });
})

$('.submit').on('click', function(e){
  console.log('secon click function',coolEats);
  var pizzaForm = $('#pizza');
  var indgredientForm = $('#ingredients');
  var mediumForm = $('#medium');

  $('.container ').append('<li>' + pizzaForm.val() + ' ' + indgredientForm.val() + ' ' + mediumForm.val() + '</li>');

})

// coolEats.fetch().then(console.log(coolEats));
