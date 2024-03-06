function AddTodo() {
    return(
      <div class="row todo-container">
        <div class="col-4">
          <input type="text" placeholder="Enter the Todo" />
        </div>
        <div class="col-3">
          <input type="date" />
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>)
}

export default AddTodo;