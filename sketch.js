function setup() {
  createCanvas(400, 400);

  for(let i = 0; i < width ; i = i + 35){
    for(let j = 0; j < height ; j = j + 35){
      fill(random(0, 255));
      rect(i, j, 30);
    };
  };
};


