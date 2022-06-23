const TodoTask = ({ todo, onEdit, canEdit }) => {
    return (
      <div>
        <div>{todo.description}</div>
        <div>
          <button disabled={!canEdit} onClick={() => onEdit(todo)} />
        </div>
      </div>
    );
  };
  
  TodoTask.propTypes = {
    todos: PropTypes.object,
    onEdit: PropTypes.func,
    canEdit: PropTypes.bool,
  };
