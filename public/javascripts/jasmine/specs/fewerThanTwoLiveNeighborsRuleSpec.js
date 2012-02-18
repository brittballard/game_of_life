describe('fewerThanTwoLiveNeighborsRule', function(){
  var rule = new GameOfLife.FewerThanTwoLiveNeighborsRule();
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
    it('should kill a cell that has fewer than two live neighbors', function(){
      board.setLiveCell(0,2);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeFalsy();      
    });
    
    it('should not kill a cell that has two or more live neighbors', function(){
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeTruthy();      
    });
  });
})