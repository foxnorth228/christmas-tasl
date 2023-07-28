import React, { useReducer } from 'react';
import Footer from '@layouts/footer/Footer';
import './app.scss';
import { Outlet } from 'react-router';

import FilterContext, { filterReducer } from '@contexts/filter-context';
import FilterCreation from '@services/getFilter';
import TreeContext, { TreeReducer } from '@contexts/tree-context';
import ToysContext, { ToysReducer } from '@contexts/toys-context';
import getData from '@services/getData';

function App() {
  const [filter, setFilter] = useReducer(filterReducer, FilterCreation());
  const [tree, setTree] = useReducer(TreeReducer, {
    tree: 1,
    bg: 1,
    garland: 0,
    toys: [],
  });
  const [toys, setToys] = useReducer(ToysReducer, getData());
  return (
    <ToysContext.Provider value={{ toys, toysReducer: setToys }}>
      <TreeContext.Provider value={{ tree, treeReducer: setTree }}>
        <FilterContext.Provider value={{ filter, filterReducer: setFilter }}>
          <main className="main">{<Outlet />}</main>
          <Footer />
        </FilterContext.Provider>
      </TreeContext.Provider>
    </ToysContext.Provider>
  );
}

export default App;
