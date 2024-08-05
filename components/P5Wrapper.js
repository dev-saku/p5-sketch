'use client'

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = ({ sketch }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const p5Instance = new p5(sketch, wrapperRef.current);
    return () => {
      p5Instance.remove();
    };
  }, [sketch]);

  return <div ref={wrapperRef} />;
};

export default P5Wrapper;