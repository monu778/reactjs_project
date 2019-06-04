import React,{useState} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function ItemsAdd() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'USD',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container maxWidth="xs">
    <Card>
    <CardContent>
    <FormControl component="fieldset" className={classes.formControl}>
    <FormGroup>
       <FormControlLabel
            control={<TextField
        id="outlined-name"
        label="Item Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />}/>
    <FormControlLabel
    control={
      <TextField
        id="outlined-multiline-static"
        label="Item Description"
        multiline
        rows="4"
        value=""
        defaultValue=""
        placeholder="Enter Item Description"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />}/>
      <FormControlLabel control={
      <TextField
        id="outlined-number"
        label="Fullfillment Seconds"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />}/>
       <FormControlLabel control={
      
       <TextField
        id="outlined-helperText"
        label="Item image Url"
        placeholder="Image Url"
        className={classes.textField}
        helperText="image url"
        margin="normal"
        variant="outlined"
      />}/>
      </FormGroup>
      <FormGroup>
      <FormLabel component="legend">price</FormLabel>
      <FormControlLabel control={
      <TextField
        id="outlined-select-currency-native"
        select
        label="ISO 4217"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
        variant="outlined"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>}/>
      
     <FormControlLabel control={
      <TextField
        id="outlined-number"
        label="Base unit"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />}/>
    <FormControlLabel control={
      <TextField
        id="outlined-number"
        label="Exponent"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />}/>
      </FormGroup>
    </FormControl>
    </CardContent>
    <CardActions>
        <Button color="primary" variant="contained" > ADD ITEM </Button>
    </CardActions>
    </Card>
    </Container>
  );
}

export default ItemsAdd;