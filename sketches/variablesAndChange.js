'use client'

export default function sketch(p) {
    let cloudOneX = 50;

    p.setup = () => {
        p.createCanvas(400, 400);
    };
  
    p.draw = () => {
        p.background('navy');

        // 月
        p.fill(255);
        p.stroke(0);
        p.circle(350, 50, 100);

        // 三日月に見せるために背景と同色の円を上記の月に被せる
        p.stroke("navy");   
        p.fill("navy");
        p.circle(320, 50, 100);

        // 山
        p.stroke(0);
        p.fill(80);
        p.triangle(-40, 300, 75, 100, 250,300);
        p.triangle(100, 300, 300, 100, 500,300);

        // 地面
        p.fill('rgb(50,76,50)');
        p.rect(0, 300, 400, 100);

        // 雲
        cloudOneX = p.frameCount % p.width;
        p.fill(255);
        p.ellipse(cloudOneX, 50, 80, 40);
        p.ellipse(cloudOneX - 40, 100, 60, 20);
        p.ellipse(cloudOneX + 20, 150, 40, 10);


        //流れ星
        let lineXone = p.random(0, p.width);
        let lineYone = p.random(0, p.height/2); 
        p.stroke("yellow");
        p.line(lineXone, lineYone, lineXone + 30, lineYone - 30);

        // マウス位置
        p.stroke(0);
        p.fill(255);
        p.text(`mouseX : ${p.mouseX}, mouseY : ${p.mouseY}`, 20, 20);
    };
}