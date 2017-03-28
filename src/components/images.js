import React, {Component} from 'react';
import * as actions from '../action/actionCreator';
import {connect} from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '90vw',
        height: 450,
        overflowY: 'auto',
        border: '1px red solid'
    },
};


class PictureGridList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {

        const {pageIndex} = this.props;
        const {imageIndex} = this.props;
        console.log('props on picture grid', this.props);
        console.log('pageIndex', pageIndex);

        return (
            <div style={styles.root}>
                <GridList

                    style={styles.gridList}
                    cols={3}
                    padding={9}
                >
                    {this.props.imageData[0][pageIndex].map((image, index) => (
                        <GridTile
                            key={image+index}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}

                        >
                            <img src={image.image} height="100%" onClick={this.props.clickImage.bind(this, pageIndex, index)}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        imageData: state.imageData
    }
}

export default connect(mapStateToProps, actions)(PictureGridList);