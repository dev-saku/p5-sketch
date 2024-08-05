'use client'

export default function sketch(p) {
    p.setup = () => {
        p.createCanvas(600, 400);
    };
  
    p.draw = () => {
        p.background(135, 206, 235);

        // 図形の塗りつぶし色
        p.fill("yellow");

        // 図形の輪郭線の色
        p.stroke("orange");

        // 図形の輪郭線の太さ
        p.strokeWeight(20);

        // 円を描画
        p.circle(550, 50, 100);

        p.stroke(0);
        p.strokeWeight(1);
        p.fill("green");
        p.rect(0, 200, 600, 200);

        p.textSize(75);
        p.text("🌸", 100, 250);
        p.text("🐞", p.pmouseX, p.pmouseY);

        p.fill(0);
        p.textSize(15);
        p.text(`${p.mouseX}, ${p.mouseY}`, 20, 20);
    };
}