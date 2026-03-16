import { Toaster } from 'react-hot-toast';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}

      <Toaster position="top-right" />
    </>
  );
};
