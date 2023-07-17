"use client";
import * as React from "react";
import ConfigData from "../models/config-data.model";
import rrrGeneratorService from "../service/rrr-generator.service";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] =
    React.useState<boolean>(false);
  const [configData, setConfigData] = React.useState<ConfigData>();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const data = await rrrGeneratorService.getConfigData("YOBE");
        if (data) setConfigData(data);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete, configData, setConfigData };
}
