GameOfLife.TwoOrThreeLiveNeighborsRule = function(){
  return _.extend(new GameOfLife.LiveCellRule(),
    {
    apply: function(cell, board){
      var liveNeighborCount = board.liveNeighborCount(cell.get('x'), cell.get('y'));
    
      if(liveNeighborCount == 2 || liveNeighborCount == 3){
        cell.set('nextGenerationAlive', true);
      }
    }
  });
}