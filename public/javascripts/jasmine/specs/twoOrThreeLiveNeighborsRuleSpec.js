describe('twoOrThreeLiveNeighborsRule', function(){
  var rule = new GameOfLife.TwoOrThreeLiveNeighborsRule();
  var board = new GameOfLife.Board();
  var cell = new GameOfLife.Cell({
    x: 1,
    y: 2,
    alive: true
  });

  beforeEach(function(){
    board.cells = {};
  });

  describe('apply', function(){
    it('should not kill a cell that has two live neighbors', function(){
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeTruthy();
    });
    
    it('should not kill a cell that has three live neighbors', function(){
      board.setLiveCell(0,1);
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeTruthy();
    });
  });
})