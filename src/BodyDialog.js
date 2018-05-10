import React from 'react';

import './BodyDialog.css';

//Material-ui Components
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import NumberInput from 'material-ui-number-input';



class Room extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'Twin',
        };
    }

    handleChange = (event, index, value) => {
        this.setState({value});
    }

    onError = (error) => {
        let errorText;
        switch (error) {
            case 'required':
                errorText = 'Это поле обязательно к заполнению';
                break;
            case 'invalidSymbol':
                errorText = 'Вы пытаетесь ввести не цифры';
                break;
            case 'incompleteNumber':
                errorText = 'Нельзя вводить не целое число.';
                break;
            case 'singleMinus':
                errorText = 'Число не может быть отрицательным';
                break;
            case 'singleFloatingPoint':
                errorText = 'There is already a floating point';
                break;
            case 'singleZero':
                errorText = 'Floating point is expected';
                break;
            case 'min':
                errorText = 'Вы пытаетесь ввести число меньше 1';
                break;
            case 'max':
                errorText = 'Вы пытаетесь ввести число больше 22';
                break;
            default:
                errorText = '';
        }
        this.setState({ errorText: errorText });
    };



    render(){
        const { handleChange, state, onError } = this;
        const styleError = {
            "background": "rgba(255,255,255, 0.8)",
            "right": 80,
            "bottom": 40,
        }
        const styleSelectField ={
            //"min-width": 250,
        }
        const styleNumberField ={
            "width": 100,
            "color":"red",
            "margin-left": 30
        }
        return(
            <div key={this.props.keys} className="body-dialog">
                <SelectField
                    id={"select-field" + this.props.keys}
                    required
                    autoWidth={true}
                    style={styleSelectField}
                    value={state.value}
                    onChange={handleChange}
                >
                    <MenuItem value={this.props.item.room1} primaryText={this.props.item.room1} />
                    <MenuItem value={this.props.item.room2} primaryText={this.props.item.room2} />
                    <MenuItem value={this.props.item.room3} primaryText={this.props.item.room3} />
                </SelectField>
                <NumberInput
                    id={"number-field" + this.props.keys}
                    required
                    style={styleNumberField}
                    strategy='warn'
                    defaultValue={1}
                    min={1}
                    max={22}
                    errorStyle={styleError}
                    errorText={state.errorText}
                    onError={onError}
                />
                <i onClick={this.props.delete} className="material-icons">close</i>
            </div>
        )
    }
}

class BodyDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    room1: 'Twin',
                    room2: 'Triple',
                    room3: 'Quadro',
                },
                {
                    room1: 'Twin',
                    room2: 'Triple',
                    room3: 'Quadro',
                },
                {
                    room1: 'Twin',
                    room2: 'Triple',
                    room3: 'Quadro',
                },
            ],
        };

    }

    onAddItem = () => {
        if(this.state.items.length < 6 ){
            this.setState({
                items: this.state.items.concat([
                    {room1: 'Twin',
                     room2: 'Triple',
                     room3: 'Quadro',}
                ]),
            });
        }else{
            alert("Max 6 items");
        }
    }

    onDeleteItem (index) {
        const newItems = this.state.items.slice();
        newItems.splice(index, 1);
        this.setState({
            items: newItems
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.items.map((el, index) => {
                    return(
                        <Room keys={index} key={index} item={el} delete={this.onDeleteItem.bind(this , index)} />
                    )
                    })
                }
                <FlatButton onClick={this.onAddItem} label="Добавить" primary={true} />
            </div>
        );
    }

}



export default BodyDialog;