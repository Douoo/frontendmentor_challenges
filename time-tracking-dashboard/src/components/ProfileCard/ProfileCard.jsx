import Card from "../Layouts/Card";
import Flex from "../Layouts/Flex";
import TextButton from "../UI/TextButton";
import Text from "../Typography/Text";

import profileImg from "../../assets/image-jeremy.png";

import classes from "./ProfileCard.module.css";

function ProfileCard(props) {
  function onStatFilter(event) {
    const { innerText } = event.target;
    props.onStatFilter(innerText);
  }
  return (
    <Card
      className={`${classes["bg-neutral"]} ${classes["mb-16"]} ${props.className}`}
      id={props.id}
    >
      <Flex className={`${classes["profile"]} ${classes["p-16"]}`}>
        <img
          className={`${classes["circle__avatar"]}`}
          src={profileImg}
          alt="profile image"
        />
        <Text variant="h1" style="large">
          <Text variant="p" style="caption">
            Report for
          </Text>
          Jeremy Robson
        </Text>
      </Flex>
      <Flex className={`${classes["p-16"]}`}>
        <TextButton
          className={props.selectedTimeframe == "daily" && classes.active}
          onPressed={onStatFilter}
        >
          Daily
        </TextButton>
        <TextButton
          className={props.selectedTimeframe == "weekly" && classes.active}
          onPressed={onStatFilter}
        >
          Weekly
        </TextButton>
        <TextButton
          className={props.selectedTimeframe == "monthly" && classes.active}
          onPressed={onStatFilter}
        >
          Monthly
        </TextButton>
      </Flex>
    </Card>
  );
}

export default ProfileCard;
