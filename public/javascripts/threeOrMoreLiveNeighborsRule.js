GameOfLife.ThreeOrMoreLiveNeighborsRule = function(){
  return _.extend(new GameOfLife.LiveCellRule(),
  {
    apply: function(cell, board){
      var liveNeighborCount = board.liveNeighborCount(cell.get('x'), cell.get('y'));
      if(liveNeighborCount >= 3){
        cell.set('nextGenerationAlive', false);
      }
      else{
        cell.set('nextGenerationAlive', true);
      }
    }
  });  
}