describe('cell', function(){
  var cell = new GameOfLife.Cell();
  
  it('should have an x property that is undefined', function(){
    expect(cell.x).toBeUndefined();
  });
  
  it('should have a y property that is undefined', function(){
    expect(cell.y).toBeUndefined();
  });
  
  it('should have a statu property that is undefined', function(){
    expect(cell.alive).toBeUndefined();
  });
  
  it('should have a nextGenerationAlive property that is undefined', function(){
    expect(cell.nextGenerationAlive).toBeUndefined();
  });
});