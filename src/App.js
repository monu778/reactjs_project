import React from 'react';
import Items from './containers/Items';
import NavBar from './components/NavBar';
import { Container } from '@material-ui/core';
import  itemsAdd  from './components/itemsAdd';
import ItemDesc from './components/ItemDesc';
import ItemEdit from './components/ItemEdit';
import { BrowserRouter } from 'react-router-dom';
import { Route} from 'react-router-dom';


function App() {
  
  
  return (
    <BrowserRouter>
    <Container>
      <NavBar></NavBar>
      <Route exact path='/' component={Items}></Route>
      <Route path="/additem"  component={itemsAdd}></Route>
      <Route path='/item/:id' exact  component={ItemDesc}></Route>
      <Route path="/item/edit/:id"  component={ItemEdit}></Route>
    </Container>
    </BrowserRouter>
  );
}

export default App;
