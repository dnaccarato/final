var x;
var y;

var vol;
var mic;

var xvol = 1;
var yvol = 0;

var lines = [
  [0, 208],
  [182, 52],
  [182, 234]
];  

var lines1 = [
    [338, 78],
    [338, 312],
    [468, 520]

  ]
  

var lines2 = [
  [0, 286],
  [156, 286],
  [312, 468],

]

var lines3 = [
  [104, 364],
  [0, 442]


]

var lines4 = [
  [0, 494],
  [78, 572],
  [78, 806]
]

var lines5 = [
  [0, 494],
  [78, 598],
  [78, 806]
]

var lines6 = [
  [208, 0],
  [364, 0],
  [442, 156],
  [442, 208]
]

var lines7 = [
  [572, 312],
  [390, 312],
  [728, 546],
  [442, 208]
]

var lines8 = [
  [1144, 546],
  [1040, 884],
  [1170, 884]
]

var lines9 = [
  [520, 546],
  [806, 728],
  [606, 598]
]


var lines10 = [
  [650, 884],
  [650, 702],
  [858, 884]
]


var lines11 = [
  [650, 884],
  [650, 702],
  [858, 884]
]

var lines12 = [
  [182, 416],
  [182, 624],
  [494, 884]
]


var lines13 = [
  [286, 520],
  [390, 520]
]

var lines14 = [
  [416, 520],
  [416, 754]
]

var lines15 = [
  [104, 676],
  [390, 858],
  [182, 858]
]

var lines16 = [
  [130, 832],
  [130, 858]
]

var lines17 = [
  [468, 702],
  [598, 780],
  [598, 884]
]

var lines18 = [
  [572, 0],
  [572, 130]
]

var lines19 = [
  [650, 206],
  [780, 208],
  [780, 26]
]


var lines20 = [
  [624, 234],
  [780, 234]
]


var lines21 = [
  [780, 572],
  [780, 416],
  [936, 416]
]

var lines22 = [
  [858, 52],
  [936, 156],
  [780, 338]
]

var lines23 = [
  [962, 156],
  [962, 312]
]

var lines24 = [
  [832, 26],
  [962, 26]
]

var lines25 = [
  [1040, 52],
  [988, 130]
]

var lines26 = [
  [1040, 416],
  [1092, 260],
  [1170, 340]
]

var lines27 = [
  [1144, 208],
  [1092, 260]
]

var lines28 = [
  [1170, 0],
  [1170, 208]
]

var lines29 = [
  [1014, 520],
  [936, 598]
]

var lines30 = [
  [1014, 624],
  [832, 806]
]

var lines31 = [
  [1066, 572],
  [1040, 598]
]

var lines32 = [
  [962, 806],
  [962, 780],
  [1014, 884]
]

var lines33 = [
  [1170, 494],
  [1170, 650]
  ]
  
  
  
  
function setup() {
  createCanvas(1200, 906);
  mic = new p5.AudioIn();
  mic.start();


}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(.4);

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines.length));
  console.log(mapvol);

  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines[i][0], lines[i][1]);
    vertex(lines[i][1], lines[i][2]);
    vertex(lines[i][2], lines[i][3]);

  }

  endShape();


  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines1.length));
  console.log(mapvol);

  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines1[i][0], lines1[i][1]);
    vertex(lines1[i][1], lines1[i][2]);
    vertex(lines1[i][2], lines1[i][3]);

  }
  endShape();


  // //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines2.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines2[i][0], lines2[i][1]);
    vertex(lines2[i][1], lines2[i][2]);
    vertex(lines2[i][2], lines2[i][3]);

  }
  endShape();


  // //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines3.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines3[i][0], lines3[i][1]);
    vertex(lines3[i][1], lines3[i][2]);

  }
  endShape();


  // //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines4.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines4[i][0], lines4[i][1]);
    vertex(lines4[i][1], lines4[i][2]);
    vertex(lines4[i][2], lines4[i][3]);

  }
  endShape();


  //   //
  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines5.length));
  console.log(mapvol);

  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines5[i][0], lines5[i][1]);
    vertex(lines5[i][1], lines5[i][2]);
    vertex(lines5[i][2], lines5[i][3]);
  }
  endShape();


  //   //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines6.length));
  console.log(mapvol);

  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines6[i][0], lines6[i][1]);
    vertex(lines6[i][1], lines6[i][2]);
    vertex(lines6[i][2], lines6[i][3]);
    vertex(lines6[i][3], lines6[i][4]);

  }
  endShape();


  //   //
  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines7.length));
  console.log(mapvol);

  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines7[i][0], lines7[i][1]);
    vertex(lines7[i][1], lines7[i][2]);
    vertex(lines7[i][2], lines7[i][3]);
    vertex(lines7[i][3], lines7[i][4]);


  }
  endShape();


  //     //
  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines8.length));
  console.log(mapvol);

  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines8[i][0], lines8[i][1]);
    vertex(lines8[i][1], lines8[i][2]);
    vertex(lines8[i][2], lines8[i][3]);



  }
  endShape();


  //   //
  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines9.length));
  console.log(mapvol);

  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines9[i][0], lines9[i][1]);
    vertex(lines9[i][1], lines9[i][2]);
    vertex(lines9[i][2], lines9[i][3]);


  }
  endShape();

  //   //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines10.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines10[i][0], lines10[i][1]);
    vertex(lines10[i][1], lines10[i][2]);
    vertex(lines10[i][2], lines10[i][3]);


  }
  endShape();


  //   //
  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines11.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines11[i][0], lines11[i][1]);
    vertex(lines11[i][1], lines11[i][2]);
    vertex(lines11[i][2], lines11[i][3]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines12.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines12[i][0], lines12[i][1]);
    vertex(lines12[i][1], lines12[i][2]);
    vertex(lines12[i][2], lines12[i][3]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines13.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines13[i][0], lines13[i][1]);
    vertex(lines13[i][1], lines13[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines14.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines14[i][0], lines14[i][1]);
    vertex(lines14[i][1], lines14[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines15.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines15[i][0], lines15[i][1]);
    vertex(lines15[i][1], lines15[i][2]);
    vertex(lines15[i][2], lines15[i][3]);


  }
  endShape();


  //


  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines16.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines16[i][0], lines16[i][1]);
    vertex(lines16[i][1], lines16[i][2]);


  }
  endShape();


  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines17.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines17[i][0], lines17[i][1]);
    vertex(lines17[i][1], lines17[i][2]);
    vertex(lines17[i][2], lines17[i][3]);


  }
  endShape();


  //


  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines18.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines18[i][0], lines18[i][1]);
    vertex(lines18[i][1], lines18[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines19.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines19[i][0], lines19[i][1]);
    vertex(lines19[i][1], lines19[i][2]);
    vertex(lines19[i][2], lines19[i][3]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines20.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines20[i][0], lines20[i][1]);
    vertex(lines20[i][1], lines20[i][2]);


  }
  endShape();



  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines21.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines21[i][0], lines21[i][1]);
    vertex(lines21[i][1], lines21[i][2]);
    vertex(lines21[i][2], lines21[i][3]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines22.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines22[i][0], lines22[i][1]);
    vertex(lines22[i][1], lines22[i][2]);
    vertex(lines22[i][2], lines22[i][3]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines23.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines23[i][0], lines23[i][1]);
    vertex(lines23[i][1], lines23[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines24.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines24[i][0], lines24[i][1]);
    vertex(lines24[i][1], lines24[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines25.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines25[i][0], lines25[i][1]);
    vertex(lines25[i][1], lines25[i][2]);


  }
  endShape();

  //


  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines26.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines26[i][0], lines26[i][1]);
    vertex(lines26[i][1], lines26[i][2]);
    vertex(lines26[i][2], lines26[i][3]);

  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines27.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines27[i][0], lines27[i][1]);
    vertex(lines27[i][1], lines27[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines28.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines28[i][0], lines28[i][1]);
    vertex(lines28[i][1], lines28[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines29.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines29[i][0], lines29[i][1]);
    vertex(lines29[i][1], lines29[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines30.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines30[i][0], lines30[i][1]);
    vertex(lines30[i][1], lines30[i][2]);


  }
  endShape();

  //

  mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines31.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines31[i][0], lines31[i][1]);
    vertex(lines31[i][1], lines31[i][2]);
    vertex(lines31[i][2], lines31[i][3]);

  }
  endShape();
  
  //
  
   mapvol = floor(map(mic.getLevel(), 0, .4, 0, lines33.length));
  console.log(mapvol);
  beginShape();
  for (i = 0; i < mapvol; i++) {
    vertex(lines33[i][0], lines33[i][1]);
    vertex(lines33[i][1], lines33[i][2]);


  }
  endShape();
  // x = x + xvol;
  // y = y + yvol;

}