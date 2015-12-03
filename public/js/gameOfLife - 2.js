

var gosperGliderGun = 
[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
 [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
 [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var smallExploder = 
[[0,1,0],
 [1,1,1],
 [1,0,1],
 [0,1,0]];

var exploder = 
[[1,0,1,0,1],
 [1,0,0,0,1],
 [1,0,0,0,1],
 [1,0,0,0,1],
 [1,0,1,0,1]]; 

var spaceship = 
[[0,1,1,1,1],
 [1,0,0,0,1],
 [0,0,0,0,1],
 [1,0,0,1,0]]; 

var glider = 
[[0,1,0],
 [0,0,1],
 [1,1,1],];

var _10CellRow = 
[[1,1,1,1,1,1,1,1,1,1]];

var kokGalaxy = 
[[1,1,1,1,1,1,0,1,1],
 [1,1,1,1,1,1,0,1,1],
 [0,0,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,1,1],
 [1,1,0,0,0,0,0,0,0],
 [1,1,0,1,1,1,1,1,1],
 [1,1,0,1,1,1,1,1,1]];

var smallNova = 
[[0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0],
 [1,0,0,1,0,0,1],
 [1,0,0,0,0,0,1],
 [1,0,0,0,0,0,1]]; 

var nova = 
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
 [0,0,0,0,0,0,1,0,0,0,0,0,0]]; 

 var granade = 
 [[1,1,1],
  [1,1,1],
  [1,1,1],
  [0,0,0],
  [1,1,1],
  [1,1,1],
  [1,1,1]]; 

function showMap(map) {
	var text = "";
	for (var i = 0; i < 40; i++) {
		for (var j = 0; j < 40; j++) {	
			text += " " + map[i][j];
		}
		text += "\n";
	}
	console.log(text);
}

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

var canvasMap, selector, ctxMap, canvasFlag, ctxFlag, flag, ctxMap,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    mapX = 0,
    mapY = 0,
    dot_flag = false,
    gosperGliderFlag = false,
    smallExploderFlag = false,
    exploderFlag = false,
    spaceshipFlag = false,
    gliderFlag = false,
    _10CellFlag = false,
    kokGalaxyFlag = false,
    novaFlag = false,
    smallNovaFlag = false,
    granadeFlag = false,
    endless = true;

var play = false;
var step = false;    
var grades = 0;

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
var cellSize = 5;
var cellColor = "red";
var aliveCells = 2000;
var drawTiming = 0;
var height = Math.floor(canvasMap.height / cellSize);
var width = Math.floor(canvasMap.width / cellSize);
var map = generateRandomMap(createBlankMap(height, width), aliveCells);
ctxMap.beginPath();

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
	if (grades == 0) {
		for (var i = 0; i < figure.length; i++) {
			for (var j = 0; j < figure[0].length; j++) {		
				map[i + y][j + x] = figure[i][j]; 
			};
		};		
	} 
	else if (grades == 90) {
		for (var i = figure.length - 1; i >= 0; i--) {
			for (var j = 0; j < figure[0].length; j++) {				
				map[Math.abs(i - figure.length + 1) + y][j + x] = figure[i][j]; 
			};
		};
	}
	else if (grades == 180) {
		for (var i = 0; i < figure.length; i++) {
			for (var j = figure[0].length - 1; j >= 0; j--) {		
				map[Math.abs(i - figure.length + 1) + y][Math.abs(j - figure[0].length + 1) + x] = figure[i][j]; 
			};
		};	
	}
	else {		
		for (var i = figure.length - 1; i >= 0; i--) {
			for (var j = figure[0].length - 1; j >= 0; j--) {		
				map[i + y][Math.abs(j - figure[0].length + 1) + x] = figure[i][j]; 
			};
		};	
	} 
	gosperGliderFlag = gosperGliderFlag ? false : gosperGliderFlag;
	smallExploderFlag = smallExploderFlag ? false : smallExploderFlag;
	exploderFlag = exploderFlag ? false : exploderFlag;
	spaceshipFlag = spaceshipFlag ? false : spaceshipFlag;
	gliderFlag = gliderFlag ? false : gliderFlag;
	_10CellFlag = _10CellFlag ? false : _10CellFlag;
	kokGalaxyFlag = kokGalaxyFlag ? false : kokGalaxyFlag;
	novaFlag = novaFlag ? false : novaFlag;
	smallNovaFlag = smallNovaFlag ? false : smallNovaFlag;
	granadeFlag = granadeFlag ? false : granadeFlag;	
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

function turnRight() {
	grades = grades == 0 ? 360 : grades;
	grades -= 90;
}

function turnLeft() {
	grades = grades == 270 ? -90 : grades;
	grades += 90;
}

function turnOnFlag(value) {
	switch (value) {
		case "1":
			gosperGliderFlag = true;
			break;
		case "2":
			smallExploderFlag = true;
			break;
		case "3":
			exploderFlag = true;
			break;
		case "4":
			spaceshipFlag = true;
			break;
		case "5":
			gliderFlag = true;
			break;
		case "6":
			_10CellFlag = true;
			break;						
		case "7":
			kokGalaxyFlag = true;
			break;				
		case "8":
			novaFlag = true;
			break;			
		case "9":
			smallNovaFlag = true;
			break;			
		case "10":
			granadeFlag = true;
			break;
	}
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
        	turnOnFlag(selector.options[selector.selectedIndex].value);
        	map = gosperGliderFlag ? drawObject(gosperGliderGun, mapX, mapY) : map;
        	map = exploderFlag ? drawObject(exploder, mapX, mapY) : map;
        	map = smallExploderFlag ? drawObject(smallExploder, mapX, mapY) : map;
        	map = spaceshipFlag ? drawObject(spaceship, mapX, mapY) : map;
        	map = gliderFlag ? drawObject(glider, mapX, mapY) : map;
        	map = _10CellFlag ? drawObject(_10CellRow, mapX, mapY) : map;
        	map = kokGalaxyFlag ? drawObject(kokGalaxy, mapX, mapY) : map; 
        	map = novaFlag ? drawObject(nova, mapX, mapY) : map;      
        	map = smallNovaFlag ? drawObject(smallNova, mapX, mapY) : map;
        	map = granadeFlag ? drawObject(granade, mapX, mapY) : map;
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