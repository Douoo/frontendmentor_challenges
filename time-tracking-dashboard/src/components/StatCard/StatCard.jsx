import Card from "../Layouts/Card";
import Flex from "../Layouts/Flex";
import IconEllipsis from "../Icons/IconEllipsis";
import Text from "../Typography/Text";

import "./StatCard.css";

function StatCard(props) {
  return (
    <div className="card" id={props.id}>
      <div className={`top-round-border bg-illustrator accent-${props.id}`}>
        <img src={props.icon} alt="stat icon" />
      </div>
      <Card className="bg-neutral p-16 hover-active">
        <div className="row">
          <Text variant="p" fontWeight="bold">
            {props.label}
          </Text>
          <IconEllipsis className="h-lt" />
          {/* h-lt refers to high-light class */}
        </div>
        <Flex>
          <Text variant="p" style="large">
            {props.currStat}
          </Text>
          <Text variant="small" style="caption">
            {props.prevStat}
          </Text>
        </Flex>
      </Card>
    </div>
  );
}

export default StatCard;
