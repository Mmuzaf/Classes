function initRunQuery(e,t){$(document).on("click",e,function(){var e=$(this),i=e.prev("textarea.course-quiz-input").val(),n=e.nextAll("div.course-quiz-feedback-text:first"),s=e.nextAll("div.aux_data:first").text();n.children("div.course-quiz-feedback-text").html("Processing..."),n.show(),$.post(t,{aux_data:s,student_ans:i},function(e){var t=jQuery.parseJSON(e);n.children("div.course-quiz-feedback-text").html(t.feedback),n.show()}).error(function(e){500==e.status?(n.children("div.course-quiz-feedback-text").html('<span style="color:red">System error. Please try again later.</span>'),n.show()):429==e.status&&(n.children("div.course-quiz-feedback-text").html('<span style="color:red">'+e.responseText+"</span>"),n.show())})}),$(document).on("click",".clear-feedback",function(){$(this).parent().hide()})}