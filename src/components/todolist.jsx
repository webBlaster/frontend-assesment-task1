const TodoList = ({ lists, removeItem }) => {
  return (
    <span>
      {lists.length > 0 ? (
        lists.map((list) => (
          <div className="card todo" key={list.id}>
            <a
              className="btn-floating btn-small waves-effect waves-light red right-align"
              onClick={() => removeItem(list.id)}
            >
              <i className="material-icons">remove</i>
            </a>
            <h4>{list.title}</h4>
            <p className="flow-text">{list.body}</p>
          </div>
        ))
      ) : (
        <h5 className="center-align grey-text">No Todos</h5>
      )}
    </span>
  );
};

export default TodoList;
