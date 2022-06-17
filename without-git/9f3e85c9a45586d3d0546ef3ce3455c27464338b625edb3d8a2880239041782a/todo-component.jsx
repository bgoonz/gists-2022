class TodosSheet extends React.Component {
    state = {
      todos: [
        { id: 1, description: 'Place an online order', completed: false },
        { id: 2, description: 'Pay electricity bill', completed: false },
        { id: 3, description: 'Get dentist appointment', completed: false },
        { id: 4, description: 'Get groceries', completed: false },
        { id: 5, description: 'Check emails', completed: false },
        { id: 6, description: 'Clean garage', completed: false },
      ],
      user: { name: 'Anne', canEdit: true },
    };
  
    handleEdit = todo => {
      const todos = this.state.todos.filter(t => t.id !== todo.id);
      this.setState({ todos });
    };
  
    render() {
      const { todos, user } = this.state;
      return (
        <div>
          <TodoSchedule
            todos={todos}
            onEdit={this.handleEdit}
            canEdit={user.canEdit}
          />
        </div>
      );
    }
  }
