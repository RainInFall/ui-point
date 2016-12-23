var Point = require('..');
var Offset  =require('ui-offset');
var expect = require('expect');

describe('Point', function() {
  it('should work as new', function(){
    var p1 = Point(0, 0);
    expect(p1).toBeA(Point);
  });
});

describe('Point.isPoint', function(){
  it('should work', function(){
    var p1 = Point(0, 0);
    expect(Point.isPoint(p1)).toBe(true);
  });

  it('should regonise the wrong one', function(){
    p1 = new Date();
    expect(Point.isPoint(p1)).toBe(false);
  });
});

describe('Point#distance', function(){
  it('should calculate', function(){
    var a = Point(0, 0);
    var b = Point(3, 4);
    expect(Point.distance(a, b)).toBe(5);
  });
  it('should work when instance method', function(){
    var a = Point(0, 0);
    var b = Point(3, 4);
    expect(a.distance(b)).toBe(5);
  });
});

describe('Point#naerest', function(){
  it('should find the nearest one', function(){
    var centerPoint = Point(0, 0);
    var p1 = Point(1, 1);
    var p2 = Point(3, 5);

    expect(Point.nearest(centerPoint, [p1, p2])).toBe(p1);
  });
  it('should work as instance method', function(){
    var centerPoint = Point(0, 0);
    var p1 = Point(1, 1);
    var p2 = Point(3, 5);

    expect(centerPoint.nearest([p1, p2])).toBe(p1);
  });
  it('should get null when points empty', function(){
    var centerPoint = Point(0, 0);
    var p1 = Point(1, 1);
    var p2 = Point(3, 5);

    expect(centerPoint.nearest([])).toBe(null);
  });
});

describe('Point#x Point#y', function() {
  it('should work', function(){
    var p = Point(3, 4);
    expect(p.x()).toBe(3);
    expect(p.y()).toBe(4);
  });
});

describe('Point#equals', function(){
  it('should equals to self', function(){
    var p = Point(3, 4);
    expect(p.equals(p)).toBe(true);
  });
  it('should work when equals', function(){
    var p1 = Point(3, 4);
    var p2 = Point(3, 4);
    expect(p1.equals(p2)).toBe(true);
  });
  it('should work when not equals', function(){
    var p1 = Point(3, 4);
    var p2 = Point(4, 3);
    expect(p1.equals(p2)).toBe(false);
  });
});

describe('Point#clone', function() {
  it('should not === but equals', function(){
    var p1 = Point(3,4);
    var p2 = p1.clone();
    expect(p1).toNotBe(p2);
    expect(p1.equals(p2)).toBe(true);
  });
});

describe('Point#move', function(){
  it('should work', function() {
    var p = Point(0, 0);
    var offset = Offset(3, 4);
    p.move(offset);
    expect(p.x()).toBe(3);
    expect(p.y()).toBe(4);
  });
});
