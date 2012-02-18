GameOfLife.LiveCellRule = Backbone.Model.extend({
  applicable: function(cell){
    return cell.get('nextGenerationStatus') === undefined && cell.get('status') === 'alive';
  }
});