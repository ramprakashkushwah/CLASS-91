canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
 function up()
 {
	if(rover_y=rover_y >=10)
	{
		rover_y=rover_y-10;
		console.log("when up arrow is pressed, x=" + rover_x + " y="+rover_y);
		uploadBackground();
		uploadrover();
	}
	
 }
 function down()
 {
	if(rover_y <=500)
	{
		rover_y=rover_y + 10;
		console.log("when up arrow is pressed, x=" + rover_x +" y=" + rover_y);
		uploadBackground();
		uploadrover();
	}
 }
 
 function left()
 {
	if(rover_x >=0)
	{
		rover_x=rover_x - 10;
		console.log("when up arrow is pressed, x=" + rover_x +" y=" + rover_y);
		uploadBackground();
		uploadrover();
	}
 }
 function right()
 {
	if(rover_x <=700)
	{
		rover_x=rover_x + 10;
		console.log("when up arrow is pressed, x=" + rover_x +" y=" + rover_y);
		uploadBackground();
		uploadrover();
	}
 }
 nasa_mars_images_array=["nasa_image_1.jpg","nas_image_2.jpeg","nasa_image_3.jpg","nasa_image_4.jpg"];
random_number= Math.floor(Math.random()*4);
background_image=nasa_mars_images_array[random_number];
console.log("background_image="+background_image);
//Create an array "nasa_mars_images_array" and store all the image file names.


//Generate random number and store it in variable "random_number"


console.log(random_number);
rover_width = 100;
rover_height = 90;

/*Pass this random_number as the index to the array and update the background_image variable 
with the following*/


//console this background_image variable to see when images come, everytime we refresh the page.



rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

//Add the code for up() function:
function car1_up()
{
	if(car1_y >=0)
	{
		car1_y=car1_y - 10;
		console.log("When up arrow is pressed , x="+car1_x+ "y="+car1_y);
		uploadBackground();
		uploadcar1();
uploadcar2();

	}
}
function car1_down()
{
	if(car1_y <=500)
	{
		car1_y=car1_y + 10;
		console.log("When down arrow is pressed , x="+car1_x+ "y="+car1_y);
		uploadBackground();
		uploadcar1();
uploadcar2();

	}
}
function car1_left()
{
	if(car1_y >=0)
	{
		car1_y=car1_y - 10;
		console.log("When left arrow is pressed , x="+car1_x+ "y="+car1_y);
		uploadBackground();
		uploadcar1();
uploadcar2();

	}
}function car1_right()
{
	if(car1_y <=700)
	{
		car1_y=car1_y + 10;
		console.log("When down arrow is pressed , x="+car1_x+ "y="+car1_y);
		uploadBackground();
		uploadcar1();
uploadcar2();

	}
}
if(car1_x >=700)
{
	console.log("car1 Won");
	document.getElementById('game_status').innerHTML="Car 1 Won!!";
}








//Add the code for down() function:










//Add the code for down() function:












//Add the code for right() function:












//Additional Activity
//Add the code for up() function:








	