const TodoItem = (props) => {
    const item = props.item;
  return (
      <div>
          <span>id: {item.id}</span>
          <br/>
          <span>text: {item.text}</span>
          <br/>
          <span>done: {item.done ? 'true' : 'false'}</span>
      </div>
  )
}

export default TodoItem;