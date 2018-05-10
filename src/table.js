import React from 'react';

//Material-ui Components
import RaisedButton from 'material-ui/RaisedButton';
import {
    TableRow, TableRowColumn,
} from 'material-ui/Table';


//My Components



class TableContent extends React.Component {

    render() {
        return (
            <TableRow key={this.props.keys}>
                <TableRowColumn>{this.props.keys+1}</TableRowColumn>
                <TableRowColumn>{this.props.arrRoom[0]}</TableRowColumn>
                <TableRowColumn>{this.props.arrRoom[1]}</TableRowColumn>
                <TableRowColumn>
                    <RaisedButton label="Delete" secondary={true} onClick={this.props.deleteItem} />
                </TableRowColumn>
            </TableRow>
        )
    }
}


export default TableContent;