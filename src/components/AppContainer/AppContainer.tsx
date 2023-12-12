import { PropsWithChildren } from 'react';

export const AppContainer = ({ children }: PropsWithChildren<object>) => (
  <div className="mx-auto  my-0 max-w-[375px] overflow-y-auto bg-white">
    {children}
  </div>
);
