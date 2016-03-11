
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

var cellSize = 5, cellColor = "red",
	aliveCells = 3000, drawTiming = 50, 
	heightFromCanvas = Math.floor(canvasMap.height / cellSize),
	widthFromCanvas = Math.floor(canvasMap.width / cellSize);

var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {
	var getBlankMap = function (mapHeight, mapWidth) {
		var dimensions = {
			height: mapHeight,
			width: mapWidth
		};
		$http.post('/getBlankMap', dimensions).then(function (data) {
			alert(data.data.value);
			return data.data.value;
		});
	}

	/*var randomMap = function (map, cellsAmount) {
		var properties = {
			height: heightFromCanvas,
			width: widthFromCanvas
		};
		$http.post('/getBlankMap', properties).success(function (response) {		
			var request = {
				map: response.value,
				random: cellsAmount
			};
			$http.post('/getRandomMap', request).success(function (response) {			
				alert(response).value;
				map = response.value;
			});	
		});		
	}*/

	$scope.init = function () {	
		var map;
		alert(getBlankMap(heightFromCanvas, widthFromCanvas));
	}

}]);