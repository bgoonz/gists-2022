const TodoListing = ({ todos, onEdit, canEdit }) => {
    return (
      <div>
        <Title value="Todo Listing" />
        <div>
          {todos.map(todo => (
            <TodoTask
              key={todo.id}
              todo={todo}
              onEdit={onEdit}
              canEdit={canEdit}
            />
          ))}
        </div>
      </div>
    );
  };
  
  TodoListing.propTypes = {
    todos: PropTypes.array,
    onEdit: PropTypes.func,
    canEdit: PropTypes.bool,
  };
