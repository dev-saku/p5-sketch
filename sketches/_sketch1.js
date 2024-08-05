'use client'

export default function sketch(p) {
    p.setup = () => {
        p.createCanvas(1000, 500);
        p.background(999);
    };
  
    p.draw = () => {
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
    };
}