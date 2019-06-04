import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function ItemRadio (props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">One choice for {props.section}</FormLabel>
        <RadioGroup
          aria-label="Choice"
          name="choice"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
        { 
            props.choices.map(choice => {
                return <FormControlLabel value={value} control={<Radio />} label={choice.name} />
            })
        }
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default ItemRadio;