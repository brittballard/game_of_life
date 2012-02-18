describe('exactlyThreeLiveNeighborsRule', function(){
  var rule = new GameOfLife.ExactlyThreeLiveNeighborsRule();
  var board = new GameOfLife.Board();
  var cell = new GameOfLife.Cell({
    x: 1,
    y: 2,
    alive: false
  });

  beforeEach(function(){
    board.cells = {};
  });

  describe('apply', function(){
    it('should change the cell\'s alive property from false to true if the cell has three live neighbors', function(){
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      board.setLiveCell(0,1);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeTruthy();
    });
    
    it('should not change the cell\'s alive property from false to true if the cell has less than three live neighbors', function(){
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeFalsy();
    });
    
    it('should not change the cell\'s alive property from false to true if the cell has more than three live neighbors', function(){
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      board.setLiveCell(0,1);
      board.setLiveCell(1,1);      
            
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeFalsy();
    });
  });
})