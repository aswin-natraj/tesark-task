import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});
const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  
  {
    value: 2,
    label: '2',
  },
  
  {
    value: 3,
    label: '3',
  },


  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },

];


function valuetext(value) {
  return `${value}''`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([1]);
console.log(setValue);

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
        max={5}
        step={1}
        color={'secondary'}
        marks={marks}
        getAriaValueText={valuetext}
      />
    </div>
  );
}
