import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

import ProjectInfo from "../components/info/ProjectInfo";

const ShowInfo = () => {
  const { activeInfo } = useContext(InfoContext);
  return activeInfo ? <ProjectInfo /> : null;
};

export default ShowInfo;
