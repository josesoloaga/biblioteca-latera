import React from 'react';
import { AppProvider } from '../context-provider';
import { Provider } from 'react-supabase';
import { supabase } from '../../api/client';

type WrapperTestingProviderProps = {
  children: React.ReactNode;
};

const WrapperTestingProvider: React.FC<WrapperTestingProviderProps> = ({
  children,
}) => {
  return (
    <AppProvider>
      <Provider value={supabase}>{children}</Provider>
    </AppProvider>
  );
};

export default WrapperTestingProvider;
