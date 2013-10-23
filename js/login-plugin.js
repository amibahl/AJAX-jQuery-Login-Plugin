$.fn.loginPlugin = function() {
	function validateData(){
		var idVal = $("#ID").val();
		var passVal = $("#password").val();
		if(idVal==""){
			alert("Username cannot be empty.");
		}
		if(passVal==""){
			alert("Password cannot be empty.");
		}
    
		$.ajax({
			url: "http://www.json-generator.com/j/bZSMfjwbyq?indent=4?username="+idVal,
			type: "get"
		}).done(function(resp) {
			var hasValue=true;
			function lookup(array, prop, value){
				for (var i = 0, len = array.length; i < len; i++){
					if ((array[i][prop] === value) && (array[i]["password"] === passVal)) {
							hasValue=false;
					}
				}
				if(hasValue==false)
				{
					console.log("succeded");
				}
				else
				{
					console.log("failed");
				}
			}
			lookup(resp,"username",idVal);
		});
	}

	
	$(".component").append("<div class=loginForm></div>");
	$(".loginForm").text("User Login");
	$(".loginForm").append("<form><input type='text' id='ID' class= 'inputField' name='appleID' placeholder='ID'><input type='password' id='password' class= 'inputField' name='Password' placeholder='Password'><input type='button' class= 'submitButton' id='submit' value='Login to your account'></form>");
	$("#submit").bind( "click", function() {
		validateData();
	});
}
