//action for login
var modal = document.getElementById('id01');

//  user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//action for registration
var modal = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//membership status
function memstat(){
    document.getElementsByClassName()
}
//backtop btn
let mytopbtn = document.getElementById("topbtn");
    	window.onscroll = function(){scrollFunction()};
    	function scrollFunction(){
    		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    			topbtn.style.display = "block";
    		}else{
    			topbtn.style.display = "none";
    		}
    	}
    	//scroll to top when clicked
    	function topFn(){
    		document.body.scrollTop = 0;
    		document.documentElement.scrollTop = 0;
    	}

//update btn

function update_Profile(){}