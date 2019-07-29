function createGrid(x) {
	for (var rows = 0; rows < x; rows++) {
		for (var columns = 0; columns < x; columns++) {
			$("#container").append("<div class='grid'></div>");
		};
	};
	$(".grid").width(960/x);
	$(".grid").height(960/x);
};

function cleanGrid() {
	$(".grid").remove();
};

function newGrid() {
	var n = prompt("How many boxes per side? (64 max)");
	if (n > 64) {
		n = 64;
		alert("You entered higher than 64\nTo save your poor computer from suffering\nThe grid will be set to 64x64");
	}
	cleanGrid();
	createGrid(n);
};

$(document).ready(function() {
	createGrid(16);

	$(".grid").mouseover(function() {
		$(this).css("background-color", "#8dc641");
	});

	$(".newGrid").click(function() {
		newGrid();

		$(".grid").mouseover(function() {
			$(this).css("background-color", "#8dc641");
		});
	});
});