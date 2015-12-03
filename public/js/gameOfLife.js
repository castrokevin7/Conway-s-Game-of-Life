

var figuresCollection = [
// Gosper Glider Gun.
[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
 [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
 [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
// Small Exploder.
[[0,1,0],
 [1,1,1],
 [1,0,1],
 [0,1,0]],
// Exploder.
[[1,0,1,0,1],
 [1,0,0,0,1],
 [1,0,0,0,1],
 [1,0,0,0,1],
 [1,0,1,0,1]],
// Spaceship.
[[0,1,1,1,1],
 [1,0,0,0,1],
 [0,0,0,0,1],
 [1,0,0,1,0]],
// Glider.
[[0,1,0],
 [0,0,1],
 [1,1,1]],
// 10 Cell Row.
[[1,1,1,1,1,1,1,1,1,1]],
// Kok's Galaxy.
[[1,1,1,1,1,1,0,1,1],
 [1,1,1,1,1,1,0,1,1],
 [0,0,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,0,0],
 [1,1,0,1,1,1,1,1,1],
 [1,1,0,1,1,1,1,1,1]],
 // Small Nova.
[[0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0],
 [1,0,0,1,0,0,1],
 [1,0,0,0,0,0,1],
 [1,0,0,0,0,0,1]],
// Nova.
[[0,0,0,0,0,0,1,0,0,0,0,0,0],
 [0,0,0,0,0,1,0,1,0,0,0,0,0],
 [0,0,0,0,1,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,1,1,0,0,0,0,0,0],
 [0,0,0,0,0,0,1,0,0,0,1,0,0],
 [0,1,1,0,0,1,1,1,0,1,0,1,0],
 [1,0,0,1,0,1,1,1,0,1,0,0,1],
 [0,1,0,1,0,1,1,1,0,0,1,1,0],
 [0,0,1,0,0,0,1,0,0,0,0,0,0],
 [0,0,0,0,0,0,1,1,0,0,0,0,0],
 [0,0,0,0,0,1,0,0,1,0,0,0,0],
 [0,0,0,0,0,1,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,1,0,0,0,0,0,0]],
 // Tiki Granade.
 [[1,1,1],
  [1,1,1],
  [1,1,1],
  [0,0,0],
  [1,1,1],
  [1,1,1],
  [1,1,1]]
]; 

// Game functionality.
function createBlankMap(height, width) {
	var map = [];
	var vector = [];
	for (var i = 0; i < height; i++) {
		for (var j = 0; j < width; j++) {
			vector.push(0);
		}
		map.push(vector);
		vector = [];
	}
	return map;
}

function generateRandomMap(map, random) {
	var stopper = 0;
	var x, y;
	while (stopper != random) {
		x = Math.floor(Math.random() * map[0].length);
		y = Math.floor(Math.random() * map.length);
		map[y][x] = 1;
		stopper++;
	}
	return map;
}

function isValidPosition(value, size) {
	return value >= 0 && value < size;
}

function countNeighbours(map, x, y) {
	var count = 0;
	for (var i = x - 1; i <= x + 1; i++) {
		for (var j = y - 1; j <= y + 1; j++) {
			if (isValidPosition(i, map.length) && isValidPosition(j, map[0].length)) {
				count = map[i][j] ? count + 1 : count;
			}
		}
	}
	return count;
}

function evaluateCell(map, x, y) {
	var countXY = countNeighbours(map, x, y);
	if (map[x][y] == 1) {
		countXY--;
		return countXY < 2 || countXY > 3 ? 0 : 1;
	}
	else {
		return countXY != 3 ? 0 : 1;
	}
}

function game(map, defaultMap) {
	var next = defaultMap;
	for (var i = 0; i < map.length; i++) {
		for (var j = 0; j < map[0].length; j++) {	
			next[i][j] = evaluateCell(map, i, j);
		}
	}	
	return next;
}

var canvasMap, canvasFlag, ctxFlag, ctxMap, selector, selectorValue,
    prevX = 0, currX = 0, prevY = 0, currY = 0, flag,
    mapX = 0, mapY = 0,
    dot_flag = false,
    endless = true, play = false, step = false;
	
selector = document.getElementById("selector");
canvasMap = document.getElementById("map");
ctxMap = canvasMap.getContext("2d");
ctxMap.fillStyle = "black";
ctxMap.beginPath();
ctxMap.fillRect(0, 0, canvasMap.width, canvasMap.height);
canvasFlag = document.getElementById("flag");
ctxFlag = canvasFlag.getContext("2d");
ctxFlag.fillStyle = "red";
ctxFlag.beginPath();
ctxFlag.fillRect(0, 0, canvasFlag.width, canvasFlag.height);

var cellSize = 5, 
	cellColor = "red",
	aliveCells = 3000,
	drawTiming = 100;
	
var height = Math.floor(canvasMap.height / cellSize);
var width = Math.floor(canvasMap.width / cellSize);
var map = generateRandomMap(createBlankMap(height, width), aliveCells);

function horizontalLine() {
	for (var colum = 0; colum < width; colum++) {
		map[Math.floor(height / 2)][colum] = 1;
	}	
}

function verticalLine() {
	for (var row = 0; row < height; row++) {
		map[row][Math.floor(width / 2)] = 1;
	}	
}

function drawObject(figure, x, y) {
	for (var i = 0; i < figure.length; i++) {
		for (var j = 0; j < figure[0].length; j++) {
			map[i + y][j + x] = figure[i][j]; 
		};
	};
	return map;
}

function setFlag(color) {
	ctxFlag.fillStyle = color;
	ctxFlag.beginPath();
	ctxFlag.fillRect(0, 0, canvasFlag.width, canvasFlag.height);
}

function drawMap() {
	for (var i = 0; i < map.length; i++) {
		for (var j = 0; j < map[0].length; j++) {
			ctxMap.save();
			ctxMap.fillStyle = map[i][j] == 1 ? cellColor : "black";
			ctxMap.translate(j * cellSize, i * cellSize);
			ctxMap.fillRect(0, 0, cellSize - 1, cellSize - 1);
			ctxMap.restore();
		}
	}
	map = play ? game(map, createBlankMap(height, width)) : map;
	map = step ? game(map, createBlankMap(height, width)) : map;
	step = step ? false : step;
	if (endless) {
		setTimeout(drawMap, drawTiming)
	}
}

function drawLine() {
    ctxMap.beginPath();
    ctxMap.moveTo(Math.floor(prevX / cellSize), Math.floor(prevY / cellSize));
    ctxMap.lineTo(Math.floor(currX / cellSize), Math.floor(currY / cellSize));
    ctxMap.strokeStyle = cellColor;
    ctxMap.lineWidth = cellSize;
    ctxMap.stroke();
    ctxMap.closePath();
}

function findxy(res, e) {
    if (res == 'mousedown') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvasMap.offsetLeft;
        currY = e.clientY - canvasMap.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
        	mapX = Math.floor(currX / cellSize) - 1;
        	mapY = Math.floor(currY / cellSize) - 1;
        	map[mapY][mapX] = map[mapY][mapX] ? 0 : 1;
			selectorValue = parseInt(selector.options[selector.selectedIndex].value);	
			map = selectorValue != 0 ? drawObject(figuresCollection[selectorValue - 1], mapX, mapY) : map;			
            ctxMap.beginPath();
            ctxMap.fillStyle = cellColor;
            ctxMap.fillRect(mapX * cellSize, mapY * cellSize, cellSize - 1, cellSize - 1);
            ctxMap.closePath();
            dot_flag = false;
        }
    }
    if (res == 'mouseup' || res == "mouseout") {
        flag = false;
    }
    if (res == 'mousemove') {
        if (flag) {
        	mapX = Math.floor(currX / cellSize);
        	mapY = Math.floor(currY / cellSize);
        	map[mapY][mapX] = map[mapY][mapX] ? 0 : 1;
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvasMap.offsetLeft;
            currY = e.clientY - canvasMap.offsetTop;            
            drawLine();
        }
    }
}

function playGame() {
	play = true;
	setFlag("#66FF00");
}
function stepGame() {
	step = true;
	play = false;
	setFlag("red");
}
function stopGame() {
	play = false;
	setFlag("red");
}
function randomMap() {
	stopGame();
	clearMap();
	map = generateRandomMap(createBlankMap(height, width), aliveCells);	
	setFlag("red");
}
function clearMap() {
	ctxMap.fillStyle = "black";
	ctxMap.beginPath();
	ctxMap.fillRect(0, 0, canvasMap.width, canvasMap.height);
	map = createBlankMap(height, width);
	stopGame();
}

function init() {

    canvasMap.addEventListener("mousemove", function (e) {
        findxy('mousemove', e)
    }, false);
    canvasMap.addEventListener("mousedown", function (e) {
        findxy('mousedown', e)
    }, false);
    canvasMap.addEventListener("mouseup", function (e) {
        findxy('mouseup', e)
    }, false);
    canvasMap.addEventListener("mouseout", function (e) {
        findxy('mouseout', e)
    }, false);

  	canvasMap.addEventListener("touchmove", function (e) {
        findxy('touchmove', e)
    }, false);
  	canvasMap.addEventListener("touchstart", function (e) {
        findxy('touchstart', e)
    }, false);
  	canvasMap.addEventListener("touchend", function (e) {
        findxy('touchend', e)
    }, false);
  	canvasMap.addEventListener("touchcancel", function (e) {
        findxy('touchcancel', e)
    }, false);

	drawMap();  
}