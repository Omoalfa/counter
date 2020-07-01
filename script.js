var number = document.querySelector("#number");
var add = document.getElementById("add");
var minus = document.querySelector("#minus");
var reset = document.querySelector("#reset");
var count = Number(number.innerHTML);


add.addEventListener("click", function (){
	count++;
	test();
	number.innerHTML = count;
});
minus.addEventListener("click", function (){
	count--;
	test();
	number.innerHTML = count;
});
reset.addEventListener("click", function () {
	count = 0;
	test();
	number.innerHTML = count;
});

function test () {
	if (count > 0) {
		number.style.color = "green";
	} else if (count < 0) {
		number.style.color = "red";
	} else {
		number.style.color = "black";
	}
}

