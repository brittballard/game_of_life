GameOfLife.DeadCellRule = Backbone.Model.extend({
  applicable: function(cell){
    return cell.get('nextGenerationAlive') === undefined && !cell.get('alive');
  }
});