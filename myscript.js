var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0; 

var Persons = [
    {
		name: 'John',
		surname: 'Doe',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 25,
		myPhoto: "img/picman1.jpg",	
		likes: counter1,
		myId : "firstperson",
		likeId : "person1",	
	},

	{
		name: 'Jonas',
		surname: 'Potato',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 35,
		myPhoto: "img/picman2.jpg",	
		likes: counter2,    
		myId : "secondperson",
		likeId : "person2",
	},

	{
		name: 'Clara',
		surname: 'Mashmallow',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 29,
		myPhoto: "img/picwoman1.jpg",	
		likes: counter3,
		myId : "thirdperson",
		likeId : "person3",
	},

	{
		name: 'Petra',
		surname: 'Highheel',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 24,
		myPhoto: "img/picwoman2.jpg",	
		likes: counter4,
		myId : "fourthperson",
		likeId : "person4",
	},
];

for (i = 0; i < Persons.length; i++) {
	myContent(Persons[i].myPhoto, Persons[i].name, Persons[i].surname, Persons[i].age, Persons[i].myId, Persons[i].likeId);
}

function myContent(imgsrc, name, lastName, age, myId, likeId){

	var	img = document.createElement('img');
	var myDiv = document.createElement('div');
	myDiv.setAttribute("class", "date");
	img.setAttribute("class", "images");

	var	p1 = document.createElement('p');
	var	text = document.createTextNode("Name: ");
	var spanName = document.createElement("span");
	spanName.setAttribute("class", "strong");
	var myName = document.createTextNode(name);
	spanName.appendChild(myName);
	p1.setAttribute("class", "imgText");

	var	p2 = document.createElement('p');
	var	text2 = document.createTextNode("Last Name: ");
	var spanName2 = document.createElement("span");
	spanName2.setAttribute("class", "strong");
	var myName2 = document.createTextNode(lastName);
	spanName2.appendChild(myName2);
	p2.setAttribute("class", "imgText");

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
	})
	
	pLikes = document.createElement("p");
	likesText = document.createTextNode("");
	var	imgLikes = document.createElement('img');
	imgLikes.src = "img/like.png"
	pLikes.appendChild(likesText);
	pLikes.setAttribute("id", likeId);

	img.src = imgsrc;
	myDiv.appendChild(img);
	
	p1.appendChild(text);
	p1.appendChild(spanName);
	myDiv.appendChild(p1);

	p2.appendChild(text2);
	p2.appendChild(spanName2);
	myDiv.appendChild(p2);
	
	p3.appendChild(text3);
	p3.appendChild(spanName3);
	myDiv.appendChild(p3);

	pLikes.appendChild


	var buttonEvent = myDiv.appendChild(button);
	myDiv.appendChild(pLikes)

	var div = document.getElementById('content');
	div.appendChild(myDiv);	
}
