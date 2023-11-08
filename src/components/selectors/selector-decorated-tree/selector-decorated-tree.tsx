import React from 'react';
import './selector-decorated-tree.scss';
import useTrees from '@hooks/useTrees';
import useTree from '@hooks/use-tree';
import useToys from '@hooks/use-toys';
import usePresents from '@hooks/usePresents';

const SelectorDecoratedTree = () => {
  const [, setToys] = useToys();
  const [, setTree] = useTree();
  const [, setPresents] = usePresents();
  const [trees, setTrees] = useTrees();
  return (
    <div className="selectorDecTree">
      <h2 className="treePage__title selectorDecTree__title">Вы нарядили</h2>
      <div className="selectorDecTree__elements">
        {trees.map((el, i) => (
          <div
            key={i}
            className="selectorDecTree__element"
            onClick={() => {
              setTree({ type: 'UPDATE', payload: { value: el } });
              setToys({ type: 'UPDATE', payload: el.toys });
              setPresents({ type: 'UPDATE', payload: el.presents.map((el) => el.type) });
            }}
          >
            <div
              style={{ backgroundImage: `url('./tree/${el.tree}.png')` }}
              className="selectorDecTree__example"
            ></div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setTrees({ type: 'DELETE', payload: i });
              }}
              className="selectorDecTree__cross"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorDecoratedTree;
