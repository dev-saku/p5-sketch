'use client'

export default function sketch(p) {

    // 太陽の高さ
    let sunHeight = 600;


    let redVal = 0;
    let greenVal = 0;

    p.setup = () => {
        p.createCanvas(600, 400);
    };
  
    p.draw = () => {
        // 背景
        p.background(redVal, greenVal, 0);

        // 太陽
        p.fill(255, 135, 5, 60);
        p.circle(300, sunHeight, 180);
        p.fill(255, 100, 0, 100);
        p.circle(300, sunHeight, 140);

        // 山
        p.fill(110, 50, 18);
        p.triangle(200, 400, 520, 253, 800, 400);
        p.fill(110,95,20);
        p.triangle(200,400,520,253,350,400); 

        p.fill(150, 75, 0);
        p.triangle(-100, 400, 150, 200, 400, 400);
        p.fill(100, 50, 12);
        p.triangle(-100, 400, 150, 200, 0, 400); 

        p.fill(150, 100, 0);
        p.triangle(200, 400, 450, 250, 800, 400);
        p.fill(120, 80, 50);
        p.triangle(200, 400, 450, 250, 300, 400);

        if (sunHeight > 130) {
            sunHeight -= 2;
            if (sunHeight < 480) {
                redVal += 4;
                greenVal += 1;
            }
        }

        if (p.mouseIsPressed && sunHeight === 130) {
            redVal = 0;
            greenVal = 0;
            sunHeight = 600;
        }
    };
}