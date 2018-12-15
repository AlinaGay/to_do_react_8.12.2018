import React, { Component } from 'react';
import TextInput from './components/form/input';
import FormInput from "./components/form/form_input";

class App extends Component {
    constructor(props, context){
        super(props,context);

        this.state ={//инициализация стейта
            data: {},
        }
    }

    handleChange = (e) => {//обработчик события - нажатие клавиши
        const { target } = e; //target = e.target;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            data: { ...this.state.data, [name]: value}
        });

        /*const stateCopy = this.state; //так делать нельзя*/
        /*
        //второй способ, перезатрет весь стейт
        const stateCopy = Object.assign({},this.state);
        stateCopy.data[name] = value; //разименование []
        this.setState(stateCopy);*/
    };

    render() {
        const classForApp = 'ddd';
        const inputName = 'taskName';
        const date = 'taskDate';
        const inputCheckBox = 'some date';

        return (
            <React.Fragment>
                <div className='container' style={ { marginTop: '40px' } }>
                    <div className='row'>
                        <h1>React TODO LIST</h1>
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-md-6'>
                            < id='form1' action=''>
                                <FormInput
                                    inputName={inputName}
                                    className='form-group'
                                    value = {this.state.data[inputName]||''}
                                    labelName='Название напоминания'
                                    placeholder='Введите название'
                                    smallValue='Введите название занятия на завтра'
                                    isCalendarPicture={false}
                                />

                                <FormInput
                                    inputName={inputName}
                                    className='form-group'
                                    value = {this.state.data[inputName]||''}
                                    labelName='Когда напомнить'
                                    placeholder='Напомнить'
                                    smallValue='Введите дату и время напоминания'
                                    isCalendarPicture={true}
                                />

                                <GroupFormCheck
                                    value = {this.state.data[inputCheckBox]}
                                    labelValue = 'Важно'
                                />

                                <NewButt











                                <button type='button' className='btn btn-primary' onClick={ null }>Add task</button>
                                <button type='button' className='btn btn-light' onClick={ null }>Clear Form</button>

                            </form>
                        </div>
                        <div className='col-md-6'>
                            <div className='card' style={ { width: '100%' } }>
                                some data
                            </div>

                        </div>
                        { /* <TasksList listHeader='Список дел на завтра:' /> */ }
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
// sdfsdf
export default App;
