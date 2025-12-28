import React from 'react';
import './GoodList.scss';
import { Good } from '../types/Good';

type Props = {
  goods: Good[];
};

// eslint-disable-next-line react/display-name
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={`good-list__item__${good.color}`}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
