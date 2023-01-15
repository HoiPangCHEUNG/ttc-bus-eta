import { Title2 } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import LineStopPredictionInfo from "../components/FetchLineStop";

export default function LineStopPrediction() {
  const params = useParams();
  const lineNum = parseInt(`${params.lineId}`);
  const stopNum = parseInt(`${params.stopNum}`);

  const { t } = useTranslation();
  return (
    <main>
      <Title2>{t("lines.lineAndStopInfo", { lineNum, stopNum })}</Title2>
      <LineStopPredictionInfo line={lineNum} stopNum={stopNum} />
    </main>
  );
}
