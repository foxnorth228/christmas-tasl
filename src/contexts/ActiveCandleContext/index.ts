import { createContext } from 'react';

const ActiveCandleContext = createContext<
  [
    { type: number; x: number; y: number },
    ({ type, x, y }: { type: number; x: number; y: number }) => void
  ]
>([{ type: -1, x: 0, y: 0 }, () => {}]);

export default ActiveCandleContext;
