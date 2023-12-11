import { PropsWithChildren } from 'react';

export const AppContainer = ({ children }: PropsWithChildren<object>) => (
  <div className="max-w-[375px]  my-0 mx-auto overflow-y-auto bg-white">
    {children}
  </div>
);
