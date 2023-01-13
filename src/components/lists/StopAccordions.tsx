import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Badge,
} from "@fluentui/react-components";

import { LineStopElement } from "../../data/etaObjects";
import { fluentStyles } from "../../styles/fluent";
import { parseRoute } from "../parser/routeName";

export function StopAccordions(props: {
  result: LineStopElement[];
  title: string;
  direction: string;
  lineNum: number;
  tag: string;
}) {
  const fluentStyle = fluentStyles();

  const stops = props.result.map((lineStop) => {
    return (
      <AccordionPanel
        key={`${props.lineNum}-${props.direction}-${lineStop.key}`}
      >
        <div className="lineDetails">{lineStop.stopId} </div>
        <div className="lineDetails">{lineStop.latlong} </div>
        {/* to-do :discussion */}
        {/* <div className="lineDetails"> {lineStop.id} </div> */}
        <div className="lineDetails">{lineStop.name}</div>
      </AccordionPanel>
    );
  });

  return (
    <AccordionItem value={props.tag}>
      <AccordionHeader className={fluentStyle.accordionHeader}>
        <Badge className={fluentStyle.badge}>{props.direction}</Badge>
        <Badge className={fluentStyle.badge}>{props.lineNum}</Badge>
        {parseRoute(props.title)}
      </AccordionHeader>
      {stops}
    </AccordionItem>
  );
}
