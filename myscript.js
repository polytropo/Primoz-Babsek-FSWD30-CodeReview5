var dates = document.querySelectorAll(".date");

myArray = ["12345", "67890", "1234567891", "cetrtidel"];

// function myFunc(){
// 	for (i = 0; i < myArray.length; i++) {
// 		console.log(myArray[i]);
// 		document.createElement("p").className = ".date";
// 		var theDiv = document.getElementById("content");
// 		var content = document.createTextNode(myArray[i]);
// 		theDiv.appendChild(content);
// 	}

// }

// myFunc()

function myContent(imgsrc, name, lastName, age, myId, likeId){
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0; 
	// gets a reference to the div of id="content":
	var div = document.getElementById('content');
	    // creates a new img element:
	var	img = document.createElement('img');
	var myDiv = document.createElement('div');
	myDiv.setAttribute("class", "date");
	img.setAttribute("class", "images");
	// ---------------------
	var	p1 = document.createElement('p');

	var	text = document.createTextNode("Name: ");
	var spanName = document.createElement("span");
	spanName.setAttribute("class", "strong");
	var myName = document.createTextNode(name);
	spanName.appendChild(myName);
	p1.setAttribute("class", "imgText");
	// -------------------------------------
	var	p2 = document.createElement('p');

	var	text2 = document.createTextNode("Last Name: ");
	var spanName2 = document.createElement("span");
	spanName2.setAttribute("class", "strong");
	var myName2 = document.createTextNode(lastName);
	spanName2.appendChild(myName2);
	p2.setAttribute("class", "imgText");

	// -------------------------------
	var	p3 = document.createElement('p');
	var	text3 = document.createTextNode("Age: ");
	var spanName3 = document.createElement("span");
	spanName3.setAttribute("class", "strong");
	var myName3 = document.createTextNode(age);
	spanName3.appendChild(myName3);
	p3.setAttribute("class", "imgText");

	var	button = document.createElement("button");
	var	buttonText = document.createTextNode("Like");
	button.setAttribute("class", "button imgText");
	button.appendChild(buttonText);
	button.setAttribute("id", myId);
		button.addEventListener("click", function (){
		console.log(myId + " button was clicked!");
		var likes = document.getElementById(likeId);
		likes.setAttribute("class", "imgText size2em")
		if(myId === "firstperson") {
			counter1 += 1;
			likes.innerHTML = counter1 + " <img src='img/like.png' alt='heart'>";
		} else if(myId === "secondperson") {
			counter2 += 1;
			likes.innerHTML = counter2 +  " <img src='img/like.png' alt='heart'>";
		}else if(myId === "thirdperson") {
			counter3 += 1;
			likes.innerHTML = counter3 + " <img src='img/like.png' alt='heart'>";
			// likesText.nodeValue = counter3;
			// pLikes.appendChild(likesText);
		}else {
			counter4 +=1;
			likes.innerHTML = counter4 +  " <img src='img/like.png' alt='heart'>";
		}
		
		console.log("person1: " + counter1);
		console.log("person2: " + counter2);
		console.log("person3: " + counter3);
		console.log("person4: " + counter4);
	})
	
	pLikes = document.createElement("p");
	likesText = document.createTextNode("");
	var	imgLikes = document.createElement('img');
	imgLikes.src = "img/like.png"
	pLikes.appendChild(likesText);
	pLikes.setAttribute("id", likeId);
	// pLikes.appendChild(imgLikes);
	// img.setAttribute("class", "images");

	img.src = imgsrc;

	p1.appendChild(text);
	p1.appendChild(spanName);
	myDiv.appendChild(p1);
	myDiv.appendChild(img);
	p2.appendChild(text2);
	p2.appendChild(spanName2);
	myDiv.appendChild(p2);
	p3.appendChild(text3);
	p3.appendChild(spanName3);
	pLikes.appendChild
	myDiv.appendChild(p3);
	var buttonEvent = myDiv.appendChild(button);
	myDiv.appendChild(pLikes)

	div.appendChild(myDiv);
	
}

myContent("img/picman1.jpg", "John", "Doe", 25, "firstperson", "person1");
myContent("img/picman2.jpg", "Jonas", "Potato", 35, "secondperson", "person2");
myContent("img/picwoman1.jpg", "Clara", "Mashmallow", 29, "thirdperson", "person3");
myContent("img/picwoman2.jpg", "Petra", "Highheel", 24, "fourthperson", "person4");
// var name = "John";
// var lastName = "Doe";
// var age = "25";

// var myName = "Name: <strong>" + name + "</strong><br>";
// var mySurname = "Surname: <strong>" + lastName + "</strong><br>"; 
// var myAge = "Age: <strong>" + age + "</strong><br>";
// var myText = myName + mySurname + myAge + myText;


// var new_row = document.createElement("div");
// new_row.setAttribute("class", "aClassName" );
// // Add some text
// new_row.appendChild( document.createTextNode("Some text") );
// // Add it to the document body
// document.body.appendChild( new_row );