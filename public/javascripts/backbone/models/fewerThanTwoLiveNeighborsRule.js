GameOfLife.FewerThanTwoLiveNeighborsRule = GameOfLife.LiveCellRule.extend({
  apply: function(cell, board){
    var liveNeighborCount = board.liveNeighborCount(cell.get('x'), cell.get('y'));
    if(liveNeighborCount < 2){
      cell.set('nextGenerationAlive', false);
    }
  }
});