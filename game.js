//making 2d canvas
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

//variable declarations
    let x1=20;
    let y1=40;
    let x2=200;
    let y2=400;
    let rightPressed = false;
    let leftPressed = false;
    let upPressed = false;
    let downPressed = false;

//draws cyan block
    function draw1() {
      ctx.beginPath();
      ctx.rect(x1, y1, 100, 100);
      ctx.fillStyle = "cyan";
      ctx.fill();
      ctx.closePath();

//block conditionals so that it doesn't collide or overlap
      if(status=="block1"){
        if(rightPressed) {
          if(x1>=500){return;}
          x1 += 1;
          if(Math.abs(x2-x1)<=101 && Math.abs(y2-y1)<=101){
            x1 -= 1;
            return;}
        }
        else if(leftPressed) {
          if(x1<=0){return;}
          x1 -= 1;
          if(Math.abs(x2-x1)<=101 && Math.abs(y2-y1)<=101){
            x1 += 1;
            return;}
        }
        if(upPressed) {
          if(y1<=0){return;}
          y1 -= 1;
          if(Math.abs(x2-x1)<=101 && Math.abs(y2-y1)<=101){
            y1 += 1;
            return;}
        }
        else if(downPressed) {
          if(y1>=500){return;}
          y1 += 1;
          if(Math.abs(x2-x1)<=101 && Math.abs(y2-y1)<=101){
            y1 -= 1;
            return;}
        }
      }
    }

//draws cyan block
    function draw2() {
      ctx.beginPath();
      ctx.rect(x2, y2, 100, 100);
      ctx.fillStyle = "purple";
      ctx.fill();
      ctx.closePath();

//block conditionals so that it doesn't collide or overlap
      if(status=="block2"){
        if(rightPressed) {
          if(x2>=500){return;}
          x2 += 1;
          if(Math.abs(x2-x1)<=101 && Math.abs(y2-y1)<=101){
            x2 -= 1;
            return;}
        }
        else if(leftPressed) {
          if(x2<=0){return;}
          x2 -= 1;
          if(Math.abs(x2-x1)<=101 && Math.abs(y2-y1)<=101){
            x2 += 1;
            return;}
        }
        if(upPressed) {
          if(y2<=0){return;}
          y2 -= 1;
          if(Math.abs(x2-x1)<=101 && Math.abs(y2-y1)<=101){
            y2 += 1;
            return;}
        }
        else if(downPressed) {
          if(y2>=500){return;}
          y2 += 1;
          if(Math.abs(x2-x1)<=101 && Math.abs(y2-y1)<=101){
            y2 -= 1;
            return;}
        }
      }
    }

//function to update canvas every 10ms
    function draw(){
      if (status==null){
        draw1();
        draw2();
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw1();
      draw2();

    }

    setInterval(draw, 10);

//respond to keyup and keydown
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
      if(e.key == "Right" || e.key == "ArrowRight") {
          rightPressed = true;
      }
      else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
      }
      else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
      }

    }

    function keyUpHandler(e) {
      if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
      }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
      }
      else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
      }
      else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
      }
    }

//function to get mouse coordinates
    let mouseX;
    let mouseY;
    function getMousePos(event) {
      mouseX = event.clientX;
      mouseY = event.clientY
      }

      document.addEventListener("click", getMousePos);

      var rect = document.getElementById('myCanvas').getBoundingClientRect();


//function to select a block
let status = null;
  function mouseCheck(){
    if(mouseX>(rect.left+x1)&&mouseX<(rect.left+100+x1)&&mouseY>(rect.top+y1)&&mouseY<(rect.top+100+y1)){
      console.log("block1");
      status = "block1";
    }
    else if(mouseX>(rect.left+x2)&&mouseX<(rect.left+100+x2)&&mouseY>(rect.top+y2)&&mouseY<(rect.top+100+y2)){
      console.log("block2");
      status = "block2";
    }
  }
  document.addEventListener("click", mouseCheck)
