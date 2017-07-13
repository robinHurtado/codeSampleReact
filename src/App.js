import React from 'react';
import FormContainer from './containers/FormContainer';
import Header from './components/Header';
import '../public/style.css'

function App(){
    return (
      <div className="container">
        <div className="columns">
          <div>
            <Header title="This is a Form that is lacking the backend side" />
            <center>
              <FormContainer />
            </center>
          </div>
        </div>
      </div>
    );
}

export default App;

