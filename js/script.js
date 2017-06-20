

var sInterval = setInterval(addSenderTexts, 4000);
var rInterval = setInterval(addReceiverTexts, 6000);


setInterval(updateScroll, 2000);





var screen = document.getElementById('screen');


function addSenderTexts(){


//var screen = document.getElementById('screen');

		


		var sender = document.createElement('li');
		
		sender.setAttribute("id", "sender");
		sender.innerText= "hey, what's up?";


		screen.appendChild(sender);
	}



function addReceiverTexts(){

//var screen = document.getElementById('screen');
			
	var newDate = new Date();
	var n = newDate.toLocaleTimeString();

		var receiver = document.createElement('li');
		receiver.setAttribute("id", "receiver");
		receiver.innerText= "nothing much";


		

		
		var time = document.createElement('li');
		time.setAttribute("id", "time");

		time.innerText= n;


		screen.appendChild(time);
		screen.appendChild(receiver);
	


		//count the number of message bubbles

		var messageNum = screen.children.length;
		console.log(messageNum);


		if (messageNum == 9){

			setTimeout(decisionPoint, 3000);
		}

	}


function decisionPoint(){

	 clearInterval(sInterval);
	 clearInterval(rInterval);


		var decisionOne = document.createElement('li');
		decisionOne.setAttribute("id", "decisionOne");
		decisionOne.innerText= "Sure, I'll go";
		decisionOne.addEventListener('click', oneOption);


		var decisionTwo = document.createElement('li');
		decisionTwo.setAttribute("id", "decisionTwo");
		decisionTwo.innerText= "Nah, maybe next time";
		decisionTwo.addEventListener('click', twoOption);
	

		screen.appendChild(decisionOne);
		screen.appendChild(decisionTwo);



}

function oneOption(){

		var sInterval = setInterval(addSenderTexts, 4000);
		var rInterval = setInterval(addReceiverTexts, 6000);

		var child = document.getElementById("decisionTwo");
	screen.removeChild(child);

}


function twoOption(){

		var sInterval = setInterval(addSenderTexts, 4000);
		var rInterval = setInterval(addReceiverTexts, 6000);

	var child = document.getElementById("decisionOne");
	screen.removeChild(child);

}




//make sure the player sees the latest messages

var scrolled = false;
function updateScroll(){
    if(!scrolled){
       // var element = document.getElementById("screen");
        screen.scrollTop = screen.scrollHeight;
    }
}

$("screen").on('scroll', function(){
    scrolled=true;
});






var today = new Date().getHours();
today+=2;
var hours = today.toString();

console.log(hours);



//onsole.log("this is the time" + " " + n);
 






