export const aguaKeyframe = (initPos, finPos, elemento) => {
  const aguaKeyframe = new KeyframeEffect(
    elemento.current,
    [
      { transform: `translateY(${initPos}%)` },
      { transform: `translateY(${finPos}%)` },
    ],
    {
      duration: 600,
      fill: 'forwards',
    }
  );
  return aguaKeyframe;
};

export const alturaKeyframe = (initPos, finPos, elemento) => {
  const alturaKeyframe = new KeyframeEffect(
    elemento.current,
    [
      { transform: `translateY(${initPos}%)` },
      { transform: `translateY(${finPos}%)` },
    ],
    {
      duration: 600,
      fill: 'forwards',
    }
  );
  return alturaKeyframe;
};

export const presionKeyFrame = (initPos, posAnt = -100, elemento) => {
  const presionKeyFrame = new KeyframeEffect(
    elemento.current,
    [
      { transform: `translateY(${posAnt}%)` },
      { transform: `translateY(${initPos}%)` },
    ],
    {
      duration: 500,
      fill: 'forwards',
    }
  );
  return presionKeyFrame;
};
