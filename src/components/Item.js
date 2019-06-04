import React,{Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import GridListTileBar from '@material-ui/core/GridListTileBar'

export default class Item extends Component {

    constructor(props) {
        super(props);
        this.state={
            name:'',
            desc:'',
            url:''
        }
    }

    render() {
        return(
            <>
              <img src={this.props.url} alt={this.props.desc} width='100%' height='100%'/>
              <GridListTileBar
                    title={this.props.name}
                    actionIcon={
                        <IconButton style={{color: 'rgba(255, 255, 255, 0.54)'}}></IconButton>
                    } 
                />
            </>
        )

    }
}