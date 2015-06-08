// JavaScript Document

//preaniscene("scene1");
wag("startbutton").onclick= function() { preaniscene("scene1");};

//pointers
wag("p-pointernum1").onclick= function() { removeani('pointernum1');showsimplepx('flag1',-10);};
wag("p-pointernum2").onclick= function() { removeani('pointernum2');showsimplepx('flag2',-10);};
wag("p-pointernum3").onclick= function() { removeani('pointernum3');showsimplepx('flag3',0);};
wag("p-pointernum4").onclick= function() { removeani('pointernum4');showsimplepx('flag4',0);};
wag("p-pointernum5").onclick= function() { removeani('pointernum5');showsimplepx('flag5',0);};
wag("p-pointernum6").onclick= function() { removeani('pointernum6');showsimplepx('flag6',0);};
wag("p-pointernum7").onclick= function() { removeani('pointernum7');showsimplepx('flag7',0);};
wag("p-pointernum8").onclick= function() { removeani('pointernum8');showsimplepx('flag8',0);};


//RETAIL
wag("pointer5a").onclick= function() { removeani('s5-pointer5a');showsimplepx('retail1',0);};
wag("pointer5b").onclick= function() { removeani('s5-pointer5b');showsimplepx('retail3',0);};
wag("pointer5c").onclick= function() { removeani('s5-pointer5c');showsimplepx('retail2',0);};
wag("pointer5d").onclick= function() { removeani('s5-pointer5d');showsimplepx('retail4',0);};
wag("pointer5e").onclick= function() { removeani('s5-pointer5e');showsimplepx('retail5',0);};


wag("fact1").onclick= function() { removeani('fact1');showsimplepx('factflag1',-10);showsimplepx('fact1','0');};
wag("fact2").onclick= function() { removeani('fact2');showsimplepx('factflag2',-10);showsimplepx('fact2','0');};
wag("fact3").onclick= function() { removeani('fact3');showsimplepx('factflag3',0);showsimplepx('fact3','0');};
wag("fact4").onclick= function() { removeani('fact4');showsimplepx('factflag4',0);showsimplepx('fact4','0');};
wag("fact5").onclick= function() { removeani('fact5');showsimplepx('factflag5',0);showsimplepx('fact5','0');};
wag("fact6").onclick= function() { removeani('fact6');showsimplepx('factflag6',0);showsimplepx('fact6','0');};
wag("fact7").onclick= function() { removeani('fact7');showsimplepx('factflag7',0);showsimplepx('fact7','0');};
wag("fact8").onclick= function() { removeani('fact8');showsimplepx('factflag8',0);showsimplepx('fact8','0');};




//phones
wag("s1-phone").onclick=function() { showtweettext(0,"socialtext1");showsimplepx("socialviewporttext1",200);};
wag("s-phone2").onclick=function() { showtweettext(1,"socialtext2");showsimplepx("socialviewporttext2",200);};
wag("s-phone3").onclick= function() { showtweettext(2,"socialtext3");showsimplepx("socialviewporttext3",200);};
wag("s-phone4").onclick= function() { showtweettext(3,"socialtext4");showsimplepx("socialviewporttext4",200);};
//wag("s-phone6").onclick= function() { showtweettext(4,"socialtext6");showsimplepx("socialviewporttext6",200);};


//twitter bubbles
wag("socialviewporttext1").onclick= function() { showsimplepx("socialviewporttext1",-1000);};
wag("socialviewporttext2").onclick= function() { showsimplepx("socialviewporttext2",-1000);};
wag("socialviewporttext3").onclick= function() { showsimplepx("socialviewporttext3",-1000);};
wag("socialviewporttext4").onclick= function() { showsimplepx("socialviewporttext4",-1000);};
//wag("socialviewporttext6").onclick= function() { showsimplepx("socialviewporttext6",-1000);};


//flags
wag("flag1").onclick= function() { showsimplepx("flag1",-1000);};
wag("flag2").onclick= function() { showsimplepx("flag2",-1000);};
wag("flag3").onclick= function() { showsimplepx("flag3",-1000);};
wag("flag4").onclick= function() { showsimplepx("flag4",-1000);};
wag("flag5").onclick= function() { showsimplepx("flag5",-1000);};
wag("flag6").onclick= function() { showsimplepx("flag6",-1000);};
wag("flag7").onclick= function() { showsimplepx("flag7",-1000);};
wag("flag8").onclick= function() { showsimplepx("flag8",-1000);};

wag("factflag1").onclick= function() { showsimplepx("factflag1",-1000);};
wag("factflag2").onclick= function() { showsimplepx("factflag2",-1000);};
wag("factflag3").onclick= function() { showsimplepx("factflag3",-1000);};
wag("factflag4").onclick= function() { showsimplepx("factflag4",-1000);};
wag("factflag5").onclick= function() { showsimplepx("factflag5",-1000);};
wag("factflag6").onclick= function() { showsimplepx("factflag6",-1000);};
wag("factflag7").onclick= function() { showsimplepx("factflag7",-1000);};
wag("factflag8").onclick= function() { showsimplepx("factflag8",-1000);};

wag("retail1").onclick= function() {showsimplepx("retail1",-1000); };
wag("retail2").onclick= function() {showsimplepx("retail2",-1000); };
wag("retail3").onclick= function() {showsimplepx("retail3",-1000); };
wag("retail4").onclick= function() {showsimplepx("retail4",-1000);};
wag("retail5").onclick= function() {showsimplepx("retail5",-1000); };


//bonus flags
wag("bonus2").onclick= function() { showsimplepx("bonus2",-1000);};
wag("bonus3").onclick= function() { showsimplepx("bonus3",-1000);};
wag("bonus4").onclick= function() { showsimplepx("bonus4",-1000);};

//bonus
wag("monitor").onclick= function() { removeani('monitor-hover');showsimplepx('bonus2','0');};
wag("itsocks").onclick= function() { removeani('itsocks');showsimplepx('bonus3','0');};
wag("book").onclick= function() { removeani('book-hover');showsimplepx('bonus4','0');};
