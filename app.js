var canvas = document.getElementById("draw-container");
canvas.width = 900;
canvas.height = 500;

const context = canvas.getContext("2d");

var drawing = false;
var startPoint = [0,0];

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);

function getPointOfCanvas(event){
	const {x,y} = canvas.getBoundingClientRect();
	const {pageX, pageY} = event;
	return [pageX -x, pageY - y];
}

function handleMouseDown(event){
	drawing = true;
	startPoint = getPointOfCanvas(event);
}

function handleMouseMove(event){
	if(!drawing) return;
	const nextPoint = getPointOfCanvas(event);
	context.beginPath();
	context.moveTo(...startPoint);
	context.lineTo(...nextPoint);
	context.stroke();
	context.closePath();

	startPoint = [...nextPoint];
}

function handleMouseUp(event){
	drawing = false;
	startPoint = [0,0];
}