import React from 'react';
import './App.css';


/*function Helloworld() {
  return (
    <div id="id"><h1>Hello world</h1> </div>
  )
}*/

/*function Helloworld(props) {
  return (
    <div id="id">
      <h1>
        {props.title}
      </h1>
      <h3>
        {props.subtitle}
      </h3>
    </div>
  )
}*/

class Helloworld extends React.Component {

  state = {
    show: true
  }

  togle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div id="id">
          <h1>
            {this.props.title}
          </h1>
          <h3>
            {this.props.subtitle}
          </h3>
          <button onClick={this.togle}>
            Cambio
          </button>
        </div>
      )

    } else {
      return <div id="id">
        <h1>
          no hay elementos
        </h1>
        <button onClick={this.togle}>
          Cambio
          </button>
      </div>
  

    }

  }

}


function App() {
  return (
    <div>
      esto es un componente:
      <Helloworld title="perro" subtitle="el negger ama a fay" />
      <Helloworld title="perro" subtitle="el negger ama a fay" />
      <Helloworld title="perro" subtitle="el negger ama a fay" />
      <Helloworld title="perro" subtitle="el negger ama a fay" />
    </div>
  );
}

export default App;
