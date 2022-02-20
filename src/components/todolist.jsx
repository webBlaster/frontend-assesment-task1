const TodoList = ({ lists, removeItem }) => {
  return (
    <>
      {lists.length > 0 ? (
        lists.map((list) => (
          <div className="card todo" key={list.id}>
            <a
              class="btn-floating btn-small waves-effect waves-light red right-align"
              onClick={() => removeItem(list.id)}
            >
              <i class="material-icons">remove</i>
            </a>
            <h4>{list.title}</h4>
            <p className="flow-text">{list.body}</p>
          </div>
        ))
      ) : (
        <p className="center-align">No Todos</p>
      )}
    </>
  );
};

export default TodoList;
