$(document).ready(function(){function e(e){return currentcookie=document.cookie,currentcookie.length>0&&(firstidx=currentcookie.indexOf(e+"="),-1!=firstidx)?(firstidx=firstidx+e.length+1,lastidx=currentcookie.indexOf(";",firstidx),-1==lastidx&&(lastidx=currentcookie.length),unescape(currentcookie.substring(firstidx,lastidx))):null}var t=site_base_url+"signature/course/"+spark_class_short_name+"/"+spark_class_id;jQuery.getJSON(spark_signature_url+"api/site/status",function(i){1==i.enabled&&jQuery.getJSON(spark_signature_url+"api/user/status",function(a){if(1===i.sign_up_now&&0===a.signature_track){if(1!=e("spark_signaturetrack_hide")&&($(".course-topbanner-logo-image").css("top","+=40"),$(".course-topbanner-logo-name").css("top","+=40"),$("body").prepend("<div class='course-signaturetrack-topbanner'><span class='course-signaturetrack-topbanner-close'><a href='#'>&times;</a></span><span class='course-signaturetrack-topbanner-text'>Join the Signature Track</span><span class='course-signaturetrack-topbanner-button'><a target='_new' href='"+t+"'>Learn More!</a></span></div>"),$(".course-signaturetrack-topbanner-close").click(function(){$(".course-signaturetrack-topbanner").hide(),document.cookie="spark_signaturetrack_hide=1;expires=Wed, 1-Jan-2020 00:00:00 GMT;path="+spark_class_url})),i.last_chance_dialog&&1!=e("spark_signaturetrack_lastchance_hide")){var o=$('<div class="course-signaturetrack-modal-container"><h2>Last Chance!</h2><p>This is the last week that you can sign up to verify yourself, certify your work, and keep a record of it.</p><div class="course-signaturetrack-modal-learnmore"><a target="_new" href="#">Learn More</a></div><div class="course-signaturetrack-modal-nothanks"><a href="#">no thanks</a></div></div>'),r=new Modal(o,{"overlay.class":"course-modal-overlay"});r.on("open",function(){$(".course-signaturetrack-modal-nothanks a").on("click",function(){r.close()}),$(".course-signaturetrack-modal-learnmore a").on("click",function(){window.open(t),r.close()})}),r.on("close",function(){document.cookie="spark_signaturetrack_lastchance_hide=1;expires=Wed, 1-Jan-2020 00:00:00 GMT;path="+spark_class_url}),r.open()}}else if(1===a.signature_track){var s=$('<div class="course-signaturetrack-status-modal-container"><h1>Signature Track Status</h1></div>');new Modal(s,{"overlay.class":"course-modal-overlay"})}})})});