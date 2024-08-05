'use client'

export default function sketch(p) {
    //variables for color change
    let redVal = 0;
    let greenVal = 15;

    //variable for sun position
    let sunHeight = 600;

    p.setup = () => {
        p.createCanvas(600, 400);
        p.noStroke();
    };
  
    p.draw = () => {
        sky();
        sun();
        mountains();
        trees();
    };

    // キーが押された時の挙動
    p.keyPressed = () => {
        redVal = 0;
        greenVal = 0;
        sunHeight = 100;
    }

    // マウスクリック時の挙動
    p.mouseClicked = () => {
        redVal = 100;
        greenVal = 100;
        sunHeight = 600;
    }

    function sky() {
        p.background(redVal, greenVal, 0);
    }

    function sun() {
        p.fill(255, 135, 5, 60);
        p.circle(300, sunHeight, 180);
        p.fill(255, 100, 0, 100);
        p.circle(300, sunHeight, 140);
    }

    function mountains() {
        p.fill(110, 50, 18);
        p.triangle(200,400,520,253,800,400);
        p.fill(150, 75, 0);
        p.triangle(-100, 400, 150, 200, 400, 400);
        p.fill(150, 100, 0);
        p.triangle(200, 400, 450, 250, 800, 400);
        p.fill(100,50,12);
        p.triangle(-100,400,150,200,0,400);
        p.fill(120,80,50);
        p.triangle(200,400,450,250,300,400);
    }

    function tree(x,y,size) {
        p.fill(80,30,20);
        p.rect(x-size,y,size*2,size*6);
        p.fill(20,130,5);
        p.triangle(x-size*3,y,x,y-size*8,x+size*3,y)
    }

    function treeLine(x) {
        let y = -0.7 * x + 450;
        return y;
    }

    function trees() {
        // First tree
        let x = 150;
        let y = treeLine(x);
        tree(x, y, 5);
       
        // Second tree
        x = 180;
        y = treeLine(x);
        tree(x, y, 5);
       
        // Third tree
        x = 210;
        y = treeLine(x);
        tree(x, y, 5);
    }

    function keyPressed() {
        redVal=0;
        greenVal = 0;
        sunHeight = 600;
    }
}