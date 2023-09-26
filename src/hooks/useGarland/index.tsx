import React, {useEffect, useState} from 'react';
import './style.scss';
import useTree from "@hooks/use-tree";

const useGarland = (ref: React.RefObject<HTMLElement>) => {
  const [tree] = useTree();
  const colors = [
    'garland_multi',
    'garland_red',
    'garland_blue',
    'garland_yellow',
    'garland_green',
  ];
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const height = ref.current?.getBoundingClientRect().height;
    console.log(height);
    setHeight(height ?? 0);
  }, [ref]);
  const step = 100;
  const iterator = new Array(Math.floor(height / step)).fill(0);
  const leftBorder = -25;
  const rightBorder = 25;
  return (
    height !== 0 && (
      <div className="garland garland_red">
        {iterator.map((_, i) => (
          <div
            style={{ width: step * (i + 1), height: step * (i + 1) }}
            key={i}
            className="garland__line"
          >
            {new Array(6 + 4 * i).fill(0).map((_, ind, arr) => (
              <div
                style={{
                  transform: `rotate(${
                    leftBorder + ((rightBorder - leftBorder) / (arr.length - 1)) * ind
                  }deg) translateY(${step * (i + 1)}px)`,
                }}
                key={ind}
                className={`garland__light ${colors[tree.garland - 1]}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    )
  );
};

export default useGarland;
