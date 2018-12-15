import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormInput extends Component {
    static propTypes = {
        inputName: PropTypes.string,
        className: PropTypes.string,
        htmlFor: PropTypes.string,
        labelName: PropTypes.string,
        ariaDescribedBy: PropTypes.string,
        placeholder: PropTypes.string,
        smallClassName: PropTypes.string,
        smallValue: PropTypes.string,
        isCalendarPicture: PropTypes.bool,
    };

    static defaultProps = { //значение пропсов по умолчанию (если не переданы в компонент)
        className: 'form-group',
        ariaDescribedBy:'taskDataHelp',
        smallClassName: 'form-text text-muted',
        isCalendarPicture: true
    };


    constructor (props, context){
        super(props, context);


    }


    render(){
        let calendarPicture = <h2/>
        if (this.props.isCalendarPicture){
            calendarPicture = <div onClick={ null } className='input-group-prepend'>
                                 <span
                                     style={ {cursor: 'pointer !important' } }
                                     className='input-group-text'
                                     id='calendarOpener'
                                 >
                                     <i className='fa fa-calendar'></i>
                                 </span>
                              </div>
    }
        return (
            <React.Fragment>
                <div className={ this.props.className }>
                    <label>{ this.props.labelName }</label>
                    <div className = 'input-group'>
                        {calendarPicture}
                        <TextInput
                            name={ this.props.inputName }
                            aria-describedby={ this.props.ariaDescribedBy }
                            placeholder={ this.props.placeholder }
                            value = {this.state.data.inputName || ''}
                            onChange={this.handleChange}
                        />
                    </div>
                    <small className={ this.props.smallClassName }>
                        { this.props.smallValue }
                    </small>
                </div>
            </React.Fragment>
        );
    }
}