import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };
    /*
    Si onChange={this.markComplete} se llama como una función normal, da fallo
    porque this.props hace referencia a Component y no a props de Todos
    Se soluciona this.markComplete.bind(this)
    markComplete(e){
        console.log(this.props);
    }
    */

    render() {
        const {id,title} = this.props.todo;
        return (
            //Creamos una función para darle estilos de forma dinámica
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                    {title}</p>
                <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
            </div>
        );
    }
}
const btnStyle = {
    background : 'red',
    color:'white',
    border: 'none',
    float:'right',
    borderRadius:'50%',
    padding: '5px 9px'
};
//PropTypes
TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired
};
export default TodoItem;