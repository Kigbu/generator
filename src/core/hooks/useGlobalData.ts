import { useContext } from 'react';
import rrrGeneratorService from '../service/rrr-generator.service';
import ConfigData from '../models/config-data.model';
import GlobalContext from '../context/global-context';

const useGlobalData = () => {
  const { configData, setConfigData }: any = useContext<ConfigData>(GlobalContext);

  const loadConfigData = async () => {
    const data: ConfigData = await rrrGeneratorService.getConfigData('YOBE');
    if (data) setConfigData(data);
  };

  return { configData, setConfigData, loadConfigData };
};

export default useGlobalData