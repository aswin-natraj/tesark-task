import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});
const marks = [
  {
    value: 0,
    label: "0$",
  },
  {
    value: 20,
    label: "20$",
  },

  {
    value: 40,
    label: "40$",
  },

  {
    value: 60,
    label: "60$",
  },

  {
    value: 80,
    label: "80$",
  },

  {
    value: 100,
    label: "100$",
  },
];

function valuetext(value) {
  return `${value}''`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([1, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        min={1}
        max={100}
        step={5}
        color={"secondary"}
        marks={marks}
        getAriaValueText={valuetext}
      />
    </div>
  );
}
