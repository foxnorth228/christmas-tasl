import React from 'react';
import { IChangeToyFilter } from '../../toyPage';

import ToyFilterShape from './toyFilterShape/toyFilterShape';
import ToyFilterColor from './toyFilterColor/toyFilterColor';
import ToyFilterSize from './toyFilterSize/toyFIlterSize';
import ToyFilterFav from './toyFilterFav/toyFilterFav';

function ToyFilterValue({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <>
      <div className="toyFiltersType toyFiltersValue">
        <span className="toyFiltersValueName">Фильтры по значению</span>
        <ToyFilterShape filter={filter} changeToyFilter={changeToyFilter} />
        <ToyFilterColor filter={filter} changeToyFilter={changeToyFilter} />
        <ToyFilterSize filter={filter} changeToyFilter={changeToyFilter} />
        <ToyFilterFav filter={filter} changeToyFilter={changeToyFilter} />
      </div>
    </>
  );
}

export default ToyFilterValue;