describe('liveCellRule', function(){
  var liveCellRule = new GameOfLife.LiveCellRule();
  
  describe('Applicable', function(){
    it('should return false if the cell status is \'dead\'', function(){
      var cell = new GameOfLife.Cell({
        status: 'dead'
      });
      
      expect(liveCellRule.applicable(cell)).toBeFalsy();
    });
    
    it('should return true if the cell status is \'alive\'', function(){
      var cell = new GameOfLife.Cell({
        status: 'alive'
      });
      
      expect(liveCellRule.applicable(cell)).toBeTruthy();
    });
    
    it('should return false if the cell nextGenerationStatus is not undefined', function(){
      var cell = new GameOfLife.Cell({
        status: 'dead',
        nextGenerationStatus: 'alive'
      });
      
      expect(liveCellRule.applicable(cell)).toBeFalsy();
    });
  });
});