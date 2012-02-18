describe('threeOrMoreLiveNeighborsRule', function(){
  var rule = new GameOfLife.ThreeOrMoreLiveNeighborsRule();
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
    it('should not change an alive cell if it has less than three live neighbors', function(){
      board.setLiveCell(0,1);
      board.setLiveCell(0,2);
    
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeTruthy();      
    });
    
    it('should kill an alive cell if it has three live neighbors', function(){
      board.setLiveCell(0,1);
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeFalsy();      
    });
    
    it('should kill an alive cell if it has more than three live neighbors', function(){
      board.setLiveCell(0,1);
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      board.setLiveCell(1,3);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeFalsy();      
    });
  });
});