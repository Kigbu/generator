import React from 'react';
import ConfigData from '../models/config-data.model';

interface GlobalContextProps {
  configData: ConfigData
  setConfigData: any
}

const GlobalContext: any = React.createContext<GlobalContextProps | null>({
  configData: new ConfigData(),
  setConfigData: () => { }
});

export default GlobalContext;
