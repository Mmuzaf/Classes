$(document).ready(function(){var e=$(".course-item-list-header");e.size()==e.filter(".contracted").size()?(e.removeClass("contracted"),e.addClass("expanded")):e.filter(".contracted").next().hide(),e.click(function(e){e.preventDefault();var t=$(this),s=$(this).next();t.hasClass("expanded")?(t.removeClass("expanded"),t.addClass("contracted"),s.slideUp(),t.find("span.icon-chevron-down").removeClass("icon-chevron-down").addClass("icon-chevron-right"),t.find("span.hidden").html("(collapsed, click to expand)")):t.hasClass("contracted")&&(t.removeClass("contracted"),t.addClass("expanded"),s.slideDown(),t.find("span.icon-chevron-right").removeClass("icon-chevron-right").addClass("icon-chevron-down"),t.find("span.hidden").html("(expanded, click to collapse)"))})});