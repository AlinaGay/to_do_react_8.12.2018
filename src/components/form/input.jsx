import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
    static propTypes = {
        value: PropTypes.string,//значение инпута по умолчанию
        name: PropTypes.string,//имя компонента
        type: PropTypes.string,
        className: PropTypes.string, //классы для стилизации компонента
        placeholder: PropTypes.string,//подсказка
        ariaDescribedBy: PropTypes.string, //значение для подсказок
        onChange: PropTypes.func, //ф-я обработчик события изменения содержимого инпута
    };

    static defaultProps = { //значение пропсов по умолчанию (если не переданы в компонент)
        className: 'form-control',
    };


    constructor (props, context){
        super(props, context);


    }



    render(){
        return (
            <React.Fragment>
                <input
                    type='text'
                    className={ this.props.className }
                    id={this.props.name}
                    name={this.props.name}
                    aria-describedby={this.props.ariaDescribedBy}
                    placeholder={this.props.placeholder}
                    onChange={ this.props.onChange }
                />
            </React.Fragment>
        )
    }
}
/*
//старый синтаксис
TextInput.propTypes ={
    static propTypes = {
        value: PropTypes.string,//значение инпута по умолчанию
        name: PropTypes.string,//имя компонента
        className: PropTypes.string, //классы для стилизации компонента
        onChange: PropTypes.func, //ф-я обработчик события изменения содержимого инпута
    };
*/