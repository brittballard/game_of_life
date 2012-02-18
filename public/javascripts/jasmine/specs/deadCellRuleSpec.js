describe('deadCellRule', function(){
  var deadCellRule = new GameOfLife.DeadCellRule();
  
  describe('Applicable', function(){
    it('should return false if the cell status is \'alive\'', function(){
      var cell = new GameOfLife.Cell({
        status: 'alive'
      });
      
      expect(deadCellRule.applicable(cell)).toBeFalsy();
    });
    
    it('should return true if the cell status is \'dead\'', function(){
      var cell = new GameOfLife.Cell({
        status: 'dead'
      });
      
      expect(deadCellRule.applicable(cell)).toBeTruthy();
    });
    
    it('should return false if the cell nextGenerationStatus is not undefined', function(){
      var cell = new GameOfLife.Cell({
        status: 'dead',
        nextGenerationStatus: 'alive'
      });
      
      expect(deadCellRule.applicable(cell)).toBeFalsy();
    });
  });
});