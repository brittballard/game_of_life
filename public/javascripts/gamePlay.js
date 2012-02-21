GameOfLife.GamePlay = function(board, rules){
  var onGoing = undefined;

  return {
    rules: rules,
    board: board,
    play: function(){
      $.each(board.cells, function(index, cell){
        $.each(rules, function(key, rule){
          if(rule.applicable(cell)){
            rule.apply(cell);
          }
        });
      });
    }
  };
};