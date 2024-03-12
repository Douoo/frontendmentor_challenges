import Button from "../Button";
import classes from "./PledgeTileAlt.module.css";
import "../../App.css";
function PledgeTileAlt({
  title,
  description,
  remainingItems,
  requiresFunding,
}) {
  return (
    <li
      className={`${classes["pledge__plan"]} ${
        requiresFunding && remainingItems == 0 ? classes["disabled"] : ""
      }`}
    >
      <div className={classes["card--bordered"]}>
        <div className={classes["pledge__flow"]}>
          <h3>{title}</h3>
          {requiresFunding && <p className="clr-primary">Pledge $25 or more</p>}
        </div>
        <p>{description}</p>
        <div
          style={{ "--cross-alignment": "end" }}
          className={classes["pledge__flow"]}
        >
          {requiresFunding && (
            <p>
              <span className="heading-lg text-bold clr-dark">
                {remainingItems}
              </span>{" "}
              left
            </p>
          )}
          <Button>Select Reward</Button>
        </div>
      </div>
    </li>
  );
}

export default PledgeTileAlt;
