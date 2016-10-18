var Backbone = require('backbone');
var $ = require('jquery');
var PastaCollection = require('./models').PastaCollection;

var coolEats = new PastaCollection();

$('.submit').on('click', function(e){
  e.preventDefault();
  $('.submit').html('loading...')
  coolEats.fetch().then(function(){
    console.log(coolEats);
    $('.submit').html('Submit')
  });

})



// coolEats.fetch().then(console.log(coolEats));
