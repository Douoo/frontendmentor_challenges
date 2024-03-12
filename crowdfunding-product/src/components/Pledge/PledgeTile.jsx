import classes from "./PledgeTile.module.css";

import { useState } from "react";
import Button from "../Button";

import "../../App.css";

function PledgeTile({
  id,
  title,
  description,
  remainingPledge,
  subtitle,
  selected,
  onPledgeSelect,
  onPledgeConfirmation,
  type,
}) {
  const [shakeField, setShakeField] = useState(false);

  function handlePledgeChange(event) {
    const { value } = event.target;
    onPledgeSelect(value);
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    if (type == "NoPledge") {
      onPledgeConfirmation();
      return;
    }
    const pledgeAmount = event.target.pledgeAmount.value;

    if (!pledgeAmount || isNaN(parseFloat(pledgeAmount))) {
      setShakeField(true);
      setTimeout(() => setShakeField(false), 500);
      return;
    }

    onPledgeConfirmation(pledgeAmount);
  }

  return (
    <div
      className={`${classes["card--bordered"]} ${
        remainingPledge == 0 && classes["disabled"]
      } mb-24`}
    >
      <div className={classes["pledge__plan--modal"]}>
        <input
          className={classes["pledge__radio"]}
          id={id}
          name="pledge"
          value={type}
          type="radio"
          onChange={handlePledgeChange}
        />
        <div className={classes["pledge__title"]}>
          <label
            className={`${classes["pledge__label"]} heading-sm text-bold clr-dark`}
            htmlFor={id}
          >
            {title}
          </label>
          {subtitle && <p className={classes["subtitle"]}>{subtitle}</p>}
        </div>

        <div className={classes["pledge__remaining"]}>
          {remainingPledge && (
            <p>
              <span className={`heading-lg clr-dark text-bold`}>
                {remainingPledge}
              </span>
              left
            </p>
          )}
        </div>

        <div className={classes["pledge__description"]}>
          <p className={`mb-16`}>{description}</p>
        </div>
      </div>
      {selected && (
        <form
          style={type == "NoPledge" ? { "--align-items": "end" } : undefined}
          className={classes.pledge__form}
          onSubmit={handleFormSubmission}
        >
          {type != "NoPledge" && (
            <label htmlFor="pledgeAmount">Enter your pledge</label>
          )}
          <div className={classes.pledge__amount}>
            {type != "NoPledge" && (
              <>
                <small>$</small>
                <input
                  className={shakeField ? classes.shake : undefined}
                  type="number"
                  name="pledgeAmount"
                  id="pledgeAmount"
                  placeholder="0.00"
                />
              </>
            )}
            <Button>Continue</Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default PledgeTile;
