describe('fewerThanTwoLiveNeighborsRule', function(){
  describe('apply', function(){
    it('should kill a cell that has fewer than two live neighbors', function(){
      var rule = new GameOfLife.FewerThanTwoLiveNeighborsRule();
      var board = new GameOfLife.Board();
      var cell = new GameOfLife.Cell({
        x: 1,
        y: 2,
        alive: true
      });
      
      board.setLiveCell(0,2);
      
      rule.apply(cell, board);
      
      expect(cell.get('nextGenerationAlive')).toBeFalsy();      
    });
  });
})