var $, jQuery;

$(document).ready(function() {
  if($(window).width() > 1439) {
    jQuery('#txp-image-group,#txp-custom-field-group').detach().appendTo('#main_content');
  }
// window.alert = function(e) {
//         e.preventDefault();
//         // do something here
//         return proxied.apply(this, arguments);
//     }

  });
