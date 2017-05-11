var rain = [];
var gravity;

function setup() {
  createCanvas( windowWidth, windowHeight*(2/3) );
  gravity = createVector( 0, .2 )
}

function draw() {
  background( 100 );
  for( var i = 0; i < width/200; i++ ) {
    rain.push( new particle( random( width ), random( -200, -300 ) ) );
  }
  for( var i = 0; i < rain.length; i++ ) {
    let z = rain[i].len;
    z = createVector( 0, map( z, 10, 30, 0, .5 ) );
    rain[i].applyForce( z );
    rain[i].applyForce( gravity );
    rain[i].update();
    rain[i].display();
    if( rain[i].pos.y > height + rain[i].len ) {
      rain.splice( i, 1 );
      i--;
    }
  }
}

function windowResized() {
  resizeCanvas( windowWidth, windowHeight*(2/3) );
}
