const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const carousel=document.querySelector("#banner");

let count = 0;

const carouselImage=carousel.children.item(0);
const carouselTag = carousel.children.item(1);
const dotDiv = document.querySelector(".dots");
const dots= dotDiv.children;


for(let i = 1;i < slides.length; i++){
	const dot=document.createElement("div");
	dot.classList.add('dot');
	dotDiv.appendChild(dot);
}

function dotSelected(){
for(let i=0;i<dots.length; i++){
	if (i === count){
		dots[i].classList.add("dot_selected");
	}
	else{
		dots[i].classList.remove("dot_selected");
	}
}
}


arrowLeft.addEventListener("click",function(){
	count--;
	if(count<0){
		count=slides.length-1;
	}
	carouselImage.src="./assets/images/slideshow/"+ slides[count].image;
	carouselTag.innerHTML=slides[count].tagLine;
	dotSelected();
});

arrowRight.addEventListener("click",function(){
	count++;
	if(count>=slides.length){
		count=0;
	}
	carouselImage.src="./assets/images/slideshow/"+ slides[count].image;
	carouselTag.innerHTML=slides[count].tagLine;
	dotSelected();
});

for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', function() {
	  count = i;
	  carouselImage.src = "./assets/images/slideshow/" + slides[count].image;
	  carouselTag.innerHTML = slides[count].tagLine;
	  dotSelected();
	});
  }