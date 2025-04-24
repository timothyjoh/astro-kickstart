import { id, i, init, type InstaQLEntity } from '@instantdb/react'
import { Checkbox } from '@ariakit/react'
import crosscircle from 'public/icons/cross-circle.svg'

// ID for app: Tims astro kickstart
const APP_ID = import.meta.env.PUBLIC_INSTANTDB_APP_ID

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
    todos: i.entity({
      text: i.string(),
      done: i.boolean(),
      createdAt: i.number(),
    }),
  },
})

type Todo = InstaQLEntity<typeof schema, 'todos'>

const db = init({ appId: APP_ID, schema })

function App() {
  // Read Data
  const { isLoading, error, data } = db.useQuery({ todos: {} })
  if (isLoading) {
    return
  }
  if (error) {
    return <div>Error querying data: {error.message}</div>
  }
  const { todos } = data
  return (
    <main>
      <TodoForm todos={todos} />
      <TodoList todos={todos} />
      <ActionBar todos={todos} />
    </main>
  )
}

// Write Data
// ---------
function addTodo(text: string) {
  db.transact(
    db.tx.todos[id()].update({
      text,
      done: false,
      createdAt: Date.now(),
    })
  )
}

function deleteTodo(todo: Todo) {
  db.transact(db.tx.todos[todo.id].delete())
}

function toggleDone(todo: Todo) {
  db.transact(db.tx.todos[todo.id].update({ done: !todo.done }))
}

function deleteCompleted(todos: Todo[]) {
  const completed = todos.filter((todo) => todo.done)
  const txs = completed.map((todo) => db.tx.todos[todo.id].delete())
  db.transact(txs)
}

function toggleAll(todos: Todo[]) {
  const newVal = !todos.every((todo) => todo.done)
  db.transact(todos.map((todo) => db.tx.todos[todo.id].update({ done: newVal })))
}

// Components
// ----------
function TodoForm({ todos }: { todos: Todo[] }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo(e.target.elements['todoinput'].value)
          e.target[0].value = ''
        }}
      >
        <label className="label">
          Create a new Todo:&nbsp;
          <input autoFocus placeholder="What needs to be done?" type="text" className="input" name="todoinput" />
        </label>
      </form>
    </div>
  )
}

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Done?</th>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <th>
                <label className="label">
                  <Checkbox key={todo.id} checked={todo.done} onChange={() => toggleDone(todo)} />
                </label>
              </th>
              <td>
                {todo.done ? (
                  <span style={{ textDecoration: 'line-through' }}>{todo.text}</span>
                ) : (
                  <span>{todo.text}</span>
                )}
              </td>
              <td>
                <img src={crosscircle.src} alt="delete" className="w-5 h-5" onClick={() => deleteTodo(todo)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ActionBar({ todos }: { todos: Todo[] }) {
  return (
    <div className="stats shadow fixed bottom-3 right-3">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current fill-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Remaining</div>
        <div className="stat-value">{todos.filter((todo) => !todo.done).length}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current fill-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total</div>
        <div className="stat-value">{todos.length}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current fill-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Completed</div>
        <div className="stat-value">{todos.filter((todo) => todo.done).length}</div>
      </div>
    </div>
  )
}

export default App
