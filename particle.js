function particle( x, y ) {
  this.pos = createVector( x, y );
  this.vel = createVector( 0, 0 );
  this.acc = createVector( 0, 0 );
  this.len = random( 10, 30 );
  this.applyForce = function( force ) {
    this.acc.add( force );
  }
  this.update = function() {
    this.vel.add( this.acc );
    this.vel.limit( this.len );
    this.pos.add( this.vel );
    this.acc.mult( 0 );
  }
  this.display = function() {
    stroke( 200 );
    strokeWeight( map( this.len, 10, 30, .5, 1.5 ) );
    line( this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.len );
  }
}
