var Backbone = require('backbone');
var $ = require('jquery');
var PastaCollection = require('./models').PastaCollection;

var coolEats = new PastaCollection();

$('.submit').on('click', function(e){
  e.preventDefault();
  $('.submit').html('loading...').prop('disabled', true);
  coolEats.fetch().then(function(){
    $('.submit').html('Submit').prop('disabled', false);
    // console.log(coolEats);
  });
  coolEats.on("add", function(pizza){
  $('.container ').append('<li>' + pizza.get('type') + ' ' + pizza.get('ingredients') + '</li>');
  });
})

$('.submit').on('click', function(e){
  console.log('secon click function',coolEats);
  var pizzaForm = $('#pizza');
  var indgredientForm = $('#ingredients');
  var mediumForm = $('#medium');

  // $('.container ').append('<li>' + pizzaForm.val() + ' ' + indgredientForm.val() + ' ' + mediumForm.val() + '</li>');

$('#pizza').val('');
$('#ingredients').val('');
$('#medium').val('');
})

// coolEats.fetch().then(console.log(coolEats));
