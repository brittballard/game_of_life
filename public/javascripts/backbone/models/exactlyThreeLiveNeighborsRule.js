GameOfLife.ExactlyThreeLiveNeighborsRule = GameOfLife.DeadCellRule.extend({
  apply: function(cell, board){
    var liveNeighborCount = board.liveNeighborCount(cell.get('x'), cell.get('y'));
    
    if(liveNeighborCount == 3){
      cell.set('nextGenerationAlive', true);
    }
  }
});