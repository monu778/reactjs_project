import React,{Component} from 'react';
import axios from 'axios';
import Item from '../components/Item';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import {Link } from 'react-router-dom';


export default class  Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[],
            loading:false
       }
    }
    componentWillMount() {


    }

    componentDidMount() {
      axios.get('./items.json').then((response)=>{
        console.log(response.data);
        this.setState({items:response.data})
        this.setState({loading:true})

      }
      ).catch((exception)=>{
        console.log(exception);

      })
    }

    render() {

        const root= {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
            
        }
        
        return (
            <div style={{root}}>
            <GridList cellHeight={200} >
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Items</ListSubheader>
                </GridListTile>
                {
                    (this.state.items.length > 0)?
                        this.state.items.map( item => {
                            
                            return <GridListTile key={item.item_id}>
                                <Link to={'/item/'+item.item_id} >
                                <Item url={item.picture_url} name={item.name} id={item.id} />
                                </Link>
                                </GridListTile>
                    }):null
                }
            </GridList>
           </div>
        )
    }
}

