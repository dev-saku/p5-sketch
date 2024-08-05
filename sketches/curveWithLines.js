'use client'

export default function sketch(p) {
    p.setup = () => {
        p.createCanvas(500, 500);
    };
  
    p.draw = () => {
        // 外枠
        p.stroke(0);
        p.square(0, 0, 500);

        // 分割数
        let points = 100; 

        // 左上から右下への曲線
        for (let i = 0; i <= points; i++) {
            let x1 = 0;
            let y1 = p.map(i, 0, points, 0, p.height);
            let x2 = p.map(i, 0, points, 0, p.width);
            let y2 = p.height;
            p.line(x1, y1, x2, y2);
        }

        // 左下から右上への曲線
        for (let i = 0; i <= points; i++) {
            let x1 = p.map(i, 0, points, 0, p.width);
            let y1 = p.height;
            let x2 = p.width;
            let y2 = p.map(i, 0, points, p.height, 0);
            p.line(x1, y1, x2, y2);
        }

        // 右下から左上への曲線
        for (let i = 0; i <= points; i++) {
            let x1 = p.width;
            let y1 = p.map(i, 0, points, p.height, 0);
            let x2 = p.map(i, 0, points, p.width, 0);
            let y2 = 0;
            p.line(x1, y1, x2, y2);
        }

        // 右上から左下への曲線
        for (let i = 0; i <= points; i++) {
            let x1 = p.map(i, 0, points, p.width, 0);
            let y1 = 0;
            let x2 = 0;
            let y2 = p.map(i, 0, points, 0, p.height);
            p.line(x1, y1, x2, y2);
        }
    };
}