GameOfLife.DeadCellRule = Backbone.Model.extend({
  applicable: function(cell){
    return !cell.has('nextGenerationAlive') && !cell.get('alive');
  }
});