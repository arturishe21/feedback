"use strict";

var Feedback =
{
    init: function()
    {
        jQuery("[name=feedback]").validate({
            rules : {
                name_feedback : {
                    required : true
                },
                phone_feedback : {
                    required : true
                },
                mess_feedback : {
                    required : true
                },
                email_feedback : {
                    required : true,
                    email : true
                }
            },

            errorPlacement : function(error, element) {
                error.insertAfter(element);
            },

            submitHandler: function(form) {
                $(".feedback_result").html("<span style='color:green'>Отправка...</span>");
                $.post("/feedback/send", {filds : $("[name=feedback]").serialize() },
                    function (data) {
                        if (data.status == "error") {
                            $(".feedback_result").html(data.errors_messages);
                        } else {
                            $(".feedback_result").html("<span style='color:green'>" + data.text + "</span>");
                            $("[name=feedback] input, [name=feedback] textarea").val("");
                        }
                    },"json");
            }
        });
    }
};

$(document).ready(function(){
    Feedback.init();
});

