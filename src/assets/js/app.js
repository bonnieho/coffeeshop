import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;


// SweetAlert

import swal from 'sweetalert2/dist/sweetalert2.all.min.js';



require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


$('#contact-form')
$(document)
  // field element is invalid
  .on("invalid.zf.abide", function(ev,elem) {
    swal(
    	'Oops...',
    	'Something went wrong!',
    	'error'
    	)
  })
  // form validation passed, form will submit if submit event not returned false
  .on("formvalid.zf.abide", function(ev,frm) {
    var form = $(this);

    // ajax post form 

    $.ajax({
    	type: form.attr('method'),
    	url: form.attr('action'),
    	data: form.serialize(),
    	success: function(data) {
    		var result = data;
    		var response = JSON.parse(result);
    		console.log(response);
    		swal(
    			response.message,
    			'Thank you, ' + response.name + ' for your response!',
    			'success'
    			);
    	}
    })
  })
  // to prevent form from submitting upon successful validation
  .on("submit", function(ev) {
    ev.preventDefault();
    console.log("Submit for form id "+ev.target.id+" intercepted");
  });
