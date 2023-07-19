import React from 'react';
import './left-menu-tree-page.scss';
import FilterPageInteractions from '@components/filter-page-interactions/filter-page-interactions';
import SelectorTree from '@components/selectors/selector-tree/selector-tree';
import SelectorBg from '@components/selectors/selector-bg/selector-bg';
import SelectorGarland from '@components/selectors/selector-garland/selector-garland';

const LeftMenuTreePage = () => {
  return (
    <div className="leftMenuTreePage">
      <div className="leftMenuTreePage__interacts">
        <FilterPageInteractions />
      </div>
      <SelectorTree />
      <SelectorBg />
      <SelectorGarland />
    </div>
  );
};

export default LeftMenuTreePage;