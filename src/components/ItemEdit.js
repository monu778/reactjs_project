import React, { Component } from 'react';
import axios from 'axios';
import  CheckBox  from '../UI/CheckBox';
import ItemRadio from '../UI/ItemRadio';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class ItemEdit extends Component {
    constructor(props) {
        super(props)
        this.state={
            item_options:[],
            
        }
    }

    componentDidMount() {
        axios.get("/options.json").then((response) => {
            this.setState({
                item_options:response.data[this.props.match.params.id]
            })
        }).catch(exception => {
            console.log(exception)
        });

    }
     handleGoback=()=> {

        this.props.history.push('/item/'+ this.props.match.params.id)
    }


    render() {
        
        let choices = null
        if(this.state.item_options.length>0) {
            choices = (this.state.item_options.map((section) => {
                if(section.uitype === "CHECKBOX") {
                    return (
                        <CheckBox choices={section.choices} section={section.section_name}> </CheckBox>
                    )
                } else if(section.uitype === "RADIO") {
                    return <ItemRadio choices={section.choices} section={section.section_name}> </ItemRadio>
                }
            }))
        } else  {
            choices = (
                  <Typography variant="h5" component="h2">
                    Customization is not available for this Item
                  </Typography>
                )
        }
        return(
            <Container maxWidth="sm">
                <Card style={{margin:"100px",minWidth:"75px"}}>
                    <CardContent>
                {choices}
                </CardContent>
                <CardActions>
                    <Button size="medium" color="primary" onClick={this.handleGoback.bind()}>
                        Go to Item page
                    </Button>
                    <Button size="medium" variant="contained" color="primary">
                        Edit Option
                    </Button>
                </CardActions>
                </Card>
            </Container>
        );
    }
}