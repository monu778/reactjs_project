import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {Link } from 'react-router-dom';

export default  class  ItemDesc extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            loaded:false,
            index:0,
            data:[]
        }
        
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('/items.json').then((response) => {
            response.data.map((item,i) => {
                if(item.item_id === this.props.match.params.id) {
                    this.setState({index:i});
                }
            })
            this.setState({data:response.data});
            this.setState({loaded:true});
        }).catch(exception => {
            
        });

    }
    render() {
     
        const root= {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            padding:'100px  !important'
            
        }
        return (
            <div style={{root}}>
        {
        (this.state.data.length>0)?
        <Card style={{maxwidth:345}}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt={this.state.data[this.state.index].name}
            height="300"
            width="100%"
            image={this.state.data[this.state.index].picture_url}
            title={this.state.data[this.state.index].name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               {this.state.data[this.state.index].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {this.state.data[this.state.index].description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                price : {this.state.data[this.state.index].price.base_unit} {this.state.data[this.state.index].price.iso_4217}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="medium" color="primary">
                
            </Button>
            
            <Link to={"/item/edit/"+this.props.match.params.id} >
                <Button variant="outlined"  color="primary" style={{textDecoration:'none',float:'right'}}>
                 Edit Item Customization  
                 </Button>
            </Link>
        </CardActions>
        </Card>:null 
    }
        </div>    
    );
        }
}
