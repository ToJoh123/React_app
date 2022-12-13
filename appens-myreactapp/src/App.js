import './App.css';
import User from './User';

const users = [
{ id: 1, name: 'John', age: 20, email },
{ id: 2, name: 'Mary', age: 24 },
{ id: 3, name: 'Peter', age: 18 },
{ id: 4, name: 'Ann', age: 21 },
{ id: 5, name: 'Tom', age: 25 },
{ id: 6, name: 'Jane', age: 27 },
{ id: 7, name: 'Bob', age: 22 }
];

function App() {
  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <Users key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}


export default App;
