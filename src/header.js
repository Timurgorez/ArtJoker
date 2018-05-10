import React from 'react';
import './header.css';

//Material-ui Components
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
} from 'material-ui/Table';

//My Components
import BodyDialog from './BodyDialog';
import TableContent from './table';



class HeaderDialog extends React.Component {

    render(){
        return(
            <div className="dialog-header">
                <h2>Структура номеров</h2>

                <i onClick={this.props.close} className="material-icons">close</i>
            </div>

        )
    }
}

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            disabled: true,
            arrRoom: []
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    onCheck = () =>{
        this.setState({disable: false});
    }
    saveNumber = () => {
        this.setState({open: false});
        // переносим данные в таблицу
        let arr0 = [];
        let arr1 = [];
        for(let i=0; i<=6; ++i) {
            if (document.getElementById('number-field' + i)) {
                arr0.splice(i, 0, document.getElementById('number-field'+i).value);
                arr1.splice(i, 0, document.getElementById('select-field'+i).textContent);
            }else{
                break;
            }
        }

        let arr = [];
        for (let i=0; i < arr0.length; ++i){
            arr.splice(i, 0, [ arr1[i] , arr0[i]]);
        }
        this.setState({
            arrRoom:arr
        })
        console.log(arr);
    }

    deleteItem = (index) => {
        const newArrRoom = this.state.arrRoom.slice();
        newArrRoom.splice(index, 1);
        this.setState({
            arrRoom: newArrRoom
        });
    }


    render() {
        const styleHeader = {
            //"display": "none"
            //"position" : "absolute",
            //"justify-content": "flex-start",
            "left": -50
        }
        const styleDialog ={
            "maxWidth": 400,
            "minWidth": 250,
        }

        const actions = [
            <RaisedButton
                label="Сохранить"
                primary={true}
                //disabled={this.state.disabled}
                onClick={this.saveNumber}
            />,
            <FlatButton
                label="Отмена"
                onClick={this.handleClose}
            />,

        ];

        return (
            <div>
                <div className="wrapper-for-booking-btn">
                    <RaisedButton className="booking-btn" label="Заронировать номера!" onClick={this.handleOpen} />
                    <Dialog
                        title={<HeaderDialog close={this.handleClose} />}
                        actions={actions}
                        actionsContainerClassName="footer-dialog"
                        modal={true}
                        open={this.state.open}
                        contentStyle={styleDialog}
                    >
                    <BodyDialog data={this.onCheck} />
                    </Dialog>
                </div>

                <div className="content">
                    <Table>
                        <TableHeader
                            displaySelectAll={false}
                            enableSelectAll={false}
                            style={styleHeader}
                            className="table-header"
                        >
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Тип Комнаты</TableHeaderColumn>
                                <TableHeaderColumn>Количество комнат</TableHeaderColumn>
                                <TableHeaderColumn>Редактирование</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            stripedRows={true}
                            displayRowCheckbox={false}
                        >
                            { this.state.arrRoom.map((el, index) => {
                                return (
                                    <TableContent  arrRoom={el} key={index} keys={index} deleteItem={this.deleteItem.bind(this, index)} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>



            </div>

        );
    }

}

export default Header;
