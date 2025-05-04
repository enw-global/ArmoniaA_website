import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface InfoContextType {
  activeInfo: boolean;
  setActiveInfo: Dispatch<SetStateAction<boolean>>;
}

const InfoContext = createContext<InfoContextType>({
  activeInfo: false,
  setActiveInfo: () => {},
});

const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [activeInfo, setActiveInfo] = useState<boolean>(true);

  return (
    <InfoContext.Provider value={{ activeInfo, setActiveInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

export { InfoContext, InfoProvider };
