describe('deadCellRule', function(){
  var deadCellRule = new GameOfLife.DeadCellRule();
  
  describe('Applicable', function(){
    it('should return false if the cell is \'alive\'', function(){
      var cell = new GameOfLife.Cell({
        alive: true
      });
      
      expect(deadCellRule.applicable(cell)).toBeFalsy();
    });
    
    it('should return true if the cell is \'dead\'', function(){
      var cell = new GameOfLife.Cell({
        alive: false
      });
      
      expect(deadCellRule.applicable(cell)).toBeTruthy();
    });
    
    it('should return false if the cell nextGenerationAlive is not undefined', function(){
      var cell = new GameOfLife.Cell({
        alive: false,
        nextGenerationAlive: true
      });
      
      expect(deadCellRule.applicable(cell)).toBeFalsy();
    });
  });
});