// 라01~05
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('home.png', 0, 0, 30, 30).toDefs();
var cha01 = Paper.image('cha01.png', 0, 0, 45, 45).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': 'Wheat'
});

home.use().transform('t12, 6').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.reload();
}

topBox.text(280, 27, '라01~05').attr({
  'font-size': 18
});

// 상단
var topArea = Paper.g();
cha01.use().transform('t30, 60').appendTo(topArea);

topArea.text(85, 95, '1~5세트 학습한자').attr({
  'font-size': 20,
  'font-weight': 'bold'
});

// 한자
var bottomArea = Paper.g();

for (var i = 0; i < 5; i++) {
  bottomArea.rect(30, (i * 90) + 120, 300, 60, 5).attr({
    'fill': '#f1f3f4'
  });
}

var hanjaChoices = Paper.g();
var conData = data.slice(0, 25);

hanjaChoices.text(45, 160, conData[0].hanja).click(handler05).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 160, conData[1].hanja).click(handler06).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 160, conData[2].hanja).click(handler07).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 160, conData[3].hanja).click(handler08).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 160, conData[4].hanja).click(handler09).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 250, conData[5].hanja).click(handler10).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 250, conData[6].hanja).click(handler11).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 250, conData[7].hanja).click(handler12).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 250, conData[8].hanja).click(handler13).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 250, conData[9].hanja).click(handler14).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 340, conData[10].hanja).click(handler15).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 340, conData[11].hanja).click(handler16).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 340, conData[12].hanja).click(handler17).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 340, conData[13].hanja).click(handler18).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 340, conData[14].hanja).click(handler19).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 430, conData[15].hanja).click(handler20).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 430, conData[16].hanja).click(handler21).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 430, conData[17].hanja).click(handler22).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 430, conData[18].hanja).click(handler23).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 430, conData[19].hanja).click(handler24).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(45, 520, conData[20].hanja).click(handler25).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(105, 520, conData[21].hanja).click(handler26).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(165, 520, conData[22].hanja).click(handler27).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(225, 520, conData[23].hanja).click(handler28).attr({
  'font-size': 32,
  'cursor': 'pointer'
});

hanjaChoices.text(285, 520, conData[24].hanja).click(handler29).attr({
  'font-size': 32,
  'cursor': 'pointer'
});


// 핸들러 함수
function handler05() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[0].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio1 = new Audio('aud/aud_001.wav');
  audio1.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler06() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[1].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio2 = new Audio('aud/aud_002.wav');
  audio2.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler07() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[2].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio3 = new Audio('aud/aud_003.wav');
  audio3.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler08() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[3].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio4 = new Audio('aud/aud_004.wav');
  audio4.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler09() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[4].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio5 = new Audio('aud/aud_005.wav');
  audio5.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler10() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[5].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio6 = new Audio('aud/aud_006.wav');
  audio6.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler11() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[6].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio7 = new Audio('aud/aud_007.wav');
  audio7.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler12() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[7].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio8 = new Audio('aud/aud_008.wav');
  audio8.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler13() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[8].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio9 = new Audio('aud/aud_009.wav');
  audio9.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler14() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[9].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio10 = new Audio('aud/aud_010.wav');
  audio10.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler15() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[10].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio11 = new Audio('aud/aud_011.wav');
  audio11.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler16() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[11].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio12 = new Audio('aud/aud_012.wav');
  audio12.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler17() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[12].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio13 = new Audio('aud/aud_013.wav');
  audio13.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler18() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[13].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio14 = new Audio('aud/aud_014.wav');
  audio14.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler19() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[14].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio15 = new Audio('aud/aud_015.wav');
  audio15.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler20() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[15].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio16 = new Audio('aud/aud_016.wav');
  audio16.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler21() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[16].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio17 = new Audio('aud/aud_017.wav');
  audio17.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler22() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[17].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio18 = new Audio('aud/aud_018.wav');
  audio18.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler23() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[18].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio19 = new Audio('aud/aud_019.wav');
  audio19.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler24() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[19].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio20 = new Audio('aud/aud_020.wav');
  audio20.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler25() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[20].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio21 = new Audio('aud/aud_021.wav');
  audio21.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler26() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[21].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio22 = new Audio('aud/aud_022.wav');
  audio22.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler27() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[22].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio23 = new Audio('aud/aud_023.wav');
  audio23.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler28() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[23].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio24 = new Audio('aud/aud_024.wav');
  audio24.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

function handler29() {
  var group = Paper.g();
  group.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  group.text(180, 350, conData[24].mean).attr({
    'fill': 'black',
    'font-size': 50,
    'text-anchor': 'middle'
  });

  var audio25 = new Audio('aud/aud_025.wav');
  audio25.play();

  setTimeout(function() {
    group.remove();
}, 2000);
}

// 하단 버튼
var buttonArea = Paper.g();

var redB = buttonArea.rect(130, 568, 90, 25).attr({
  'fill': '#E9967A',
  'opacity': 0.8,
  'rx': 8,
  'ry': 8
});
var redBT = buttonArea.text(141, 586, '깜빡이 카드').attr({
  'fill': 'black',
  'font-size': 15
});
var red = buttonArea.g(redB, redBT).click(handlerCard).attr({
  'cursor': 'pointer'
});

var orangeB = buttonArea.rect(240, 568, 90, 25).attr({
  'fill': '#DAA520',
  'opacity': 0.8,
  'rx': 8,
  'ry': 8
});
var orangeBT = buttonArea.text(256, 586, '게임 도전!').attr({
  'fill': 'black',
  'font-size': 15
});
var orange = buttonArea.g(orangeB, orangeBT).click(handlerGame).attr({
  'cursor': 'pointer'
});

function handlerCard() {
  location.replace('flash_05-01.html');
}

function handlerGame() {
  location.replace('game_05.html');
}
