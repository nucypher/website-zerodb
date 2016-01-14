$(document).ready(function() {
  Parse.initialize("tMKWkrFepdE6DiDhktYfeAdwdnLvgyRjVdMDuo6V", "FpuHnT3GEYbigdqhH434zJ9yyEjDUqvBpwo8hz8F");
});

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var data = {
              name: $("input#name").val(),
              organization: $("input#organization").val(),
              job: $("input#job").val(),
              email: $("input#email").val(),
              phone: $("input#phone").val()
            };

            Parse.Cloud.run("addLead", data, {
                success: function() {
                    // Success message
                    $('#success').html("<div class='collection'>");
                    $('#success > .collection')
                        .append("<p class='collection-item active'><strong>Thanks, we'll be contacting you soon.</strong></p>");
                    $('#success > .collection')
                        .append('</div>');

                    //clear all fields
                    $('#contact-form').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + data.name + ", it seems that our mail servers are not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contact-form').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
