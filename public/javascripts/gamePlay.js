GameOfLife.GamePlay = function(board, rules){
  return {
    rules: rules,
    board: board,
    play: function(){
      do{
        var livingCellsInTheNextGeneration = 0;
        $.each(board.cells, function(index, cell){
          $.each(rules, function(key, rule){
            if(rule.applicable(cell)){
              rule.apply(cell);
            }
          });
          
          if(cell.get('nextGenerationAlive')){
            livingCellsInTheNextGeneration++;
          }
        });
        
        board.moveToNextGeneration();
      } while(livingCellsInTheNextGeneration > 0)
    }
  };
};