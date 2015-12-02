var Board = function() {
  this.board = [[], [], []];
};
Board.prototype.move = function(position_x, position_y) {
  this.board[position_x][position_y] = 'X';
};

var newGame = new Board();
console.log(newGame);

newGame.move(0, 1);
console.log(newGame);