function addItem(form_id) {
   $.ajax({
      type: 'POST', 
      url: '/cart/add.js',
      dataType: 'json', 
      data: $('#'+form_id).serialize(),
      success: addToCartOk,
      error: addToCartFail
   });
}
