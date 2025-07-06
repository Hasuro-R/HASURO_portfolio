import { I18nProviderContext } from "@/middleware/I18nProvider";
import { useContext } from "react";

export function useLocal() {
  const { local, setLocal } = useContext(I18nProviderContext);

  return {
    local: local ?? 'en',
    setLocal,
  };
}
