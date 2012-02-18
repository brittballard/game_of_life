describe('exactlyThreeLiveNeighborsRule', function(){
  describe('apply', function(){
    it('should change the cell\'s alive property from false to true if the cell has three live neighbors', function(){
      var rule = new GameOfLife.ExactlyThreeLiveNeighborsRule();
      var board = new GameOfLife.Board();
      var cell = new GameOfLife.Cell({
        x: 1,
        y: 2,
        alive: false
      });
      
      board.setLiveCell(0,2);
      board.setLiveCell(0,3);
      board.setLiveCell(0,1);
      
      rule.apply(cell, board);
      
      expect(cell.get('alive')).toBeTruthy();
    });
  });
})