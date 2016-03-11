
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

function getBlankMap(height, width) {
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

function getRandomMap(map, random) {
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

function evolveMap(map, defaultMap) {
	var next = defaultMap;
	for (var i = 0; i < map.length; i++) {
		for (var j = 0; j < map[0].length; j++) {	
			next[i][j] = evaluateCell(map, i, j);
		}
	}	
	return next;
}	

function horizontalLine(map) {
	for (var colum = 0; colum < width; colum++) {
		map[Math.floor(height / 2)][colum] = 1;
	}	
	return map;
}

function verticalLine(map) {
	for (var row = 0; row < height; row++) {
		map[row][Math.floor(width / 2)] = 1;
	}	
	return map;
}

function drawFigure(map, x, y, figure) {
	for (var i = 0; i < figure.length; i++) {
		for (var j = 0; j < figure[0].length; j++) {
			map[i + y][j + x] = figure[i][j]; 
		};
	};
	return map;
}

var result = { value: null };
module.exports = function (app) {

	app.post('/getBlankMap', function (request, response) {
		result.value = getBlankMap(request.body.height, request.body.width);
		response.json(result);
	});

	app.post('/getRandomMap', function (request, response) {
		result.value = getRandomMap(request.body.map, request.body.random);
		response.json(result);
	});

	app.post('/evolveMap', function (request, response) {
		result.value = evolveMap(request.body.map, request.body.blank);
		response.json(result);
	});

	app.post('/drawHorizontal', function (request, response) {
		result.value = drawHorizontal(request.body.map);
		response.json(result);
	});

	app.post('/drawHorizontal', function (request, response) {
		result.value = drawHorizontal(request.body.map);
		response.json(result);
	});

	app.post('/drawFigure', function (request, response) {
		result.value = drawFigure(request.body.map, request.body.x, request.body.y, request.body.figure);
		response.json(result);
	});	
};