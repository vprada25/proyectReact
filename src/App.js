import  React, {Component} from  'react';
import './App.css';
import task from './sample/task.json';


class App extends Component {

  state = {
    task: task
  }

  render() {
    return <div>
      {this.state.task.map(e => <p key={e.id}>
        <h1>Titulo:{e.title} </h1>
        <h2>Id: {e.id}</h2>
        <p>{e.description}</p>
      </p>)}
    </div>
  }
}

export default App;
