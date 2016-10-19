var Backbone = require('backbone');
var $ = require('jquery');

var Pizza = Backbone.Model.extend({
  // addLike: function(){
  //   this.set('like', this.get('like')+1)
  // },
  // initialize: function() {
  //   console.log('wow, a function was born!');
  // }
});

var PastaCollection = Backbone.Collection.extend({
  model: Pizza,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/pizza',
  // parse: function(response){
  //   return response.results;
  // }
});

module.exports = {
  'PastaCollection': PastaCollection,
};

// $.ajax({
//   url: 'http://tiny-lasagna-server.herokuapp.com/collections/pizza',
//   type: 'POST',
//   contentType:'application/json',
//   data: JSON.stringify(data),
//   dataType:'json',
//   success: function(data){
//     //On ajax success do this
//     alert('working!');
//      },
//   error: function(xhr, ajaxOptions, thrownError) {
//      //On error do this
//        if (xhr.status == 200) {
//
//            alert(ajaxOptions);
//        }
//        else {
//            alert(xhr.status);
//            alert(thrownError);
//        }
//    }
// });
