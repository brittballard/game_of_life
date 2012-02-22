GameOfLife.LiveCellRule = function(){
  return {
    applicable: function(cell){
      return !cell.has('nextGenerationAlive') && cell.get('alive');
    }
  };
}