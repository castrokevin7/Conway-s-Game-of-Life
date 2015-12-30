
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

var result = { value: null };
module.exports = function (app) {

	app.post('/getBlankMap', function (request, response) {
		result.value = getBlankMap(request.body.height, request.body.width);
		response.json(result);
	});

	app.post('/getRandomMap', function (request, response) {
		result.value = getBlankMap(request.body.map, request.body.random);
		response.json(result);
	});

	app.post('/evolveMap', function (request, response) {
		result.value = evolveMap(request.body.map, request.body.blank);
		response.json(result);
	});
};