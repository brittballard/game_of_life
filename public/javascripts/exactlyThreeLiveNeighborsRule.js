GameOfLife.ExactlyThreeLiveNeighborsRule = function(){
  return _.extend(new GameOfLife.DeadCellRule(),
  {
    apply: function(cell, board){
      var liveNeighborCount = board.liveNeighborCount(cell.get('x'), cell.get('y'));
    
      if(liveNeighborCount == 3){
        cell.set('nextGenerationAlive', true);
      }
      else{
        cell.set('nextGenerationAlive', false);
      }
    }
  });
}