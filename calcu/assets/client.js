// https://www.youtube.com/watch?v=YAayQekE8po (27:52)
//https://github.com/search?utf8=%E2%9C%93&q=mern&type=

function FormOperation(props){

  	const submit = () => {	
  		const inputOpe = document.querySelector('#inputOpe');
		props.onOperation({
			operation: inputOpe.value,
		},inputOpe);
		
	}

	const back = () => {
		fetch('/operations')
		.then(res => res.json())
		.then(data => {
			const inputOpe = document.querySelector('#inputOpe');
			const index = data.length -1;
			const previousOpe = data[index];
			if (previousOpe === undefined) {
				return false;
			}
			inputOpe.value = previousOpe.input + " = " + previousOpe.result;
			
			//this.setState({  items: data });
		})
	}

	return(
		<form>
	        <input id="inputOpe" className="input-group-field" type="text" />
	        <button className="button" type="button" onClick={submit}>Submit</button>	      
	        <button type="button" onClick={back}>Back</button>
		</form>
	);
}


class CalculateApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {items: [], text: ''};
  }
 
  	handleSubmit(newOperation,inputOpe) {
    	fetch('/operation', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newOperation)
		})
		.then(res => res.json())
		.then(operation => {
			console.log(operation.result)
			//this.setState({ items: this.state.items.concat(operation) });
			inputOpe.value = operation.result;
		});
	}
  
  	render() {
	    return (
	      <div>
	        <h3>Calculator</h3>
	        <FormOperation onOperation={this.handleSubmit.bind(this)} />	        
	      </div>
	    );
  	}
}

ReactDOM.render(
	<CalculateApp />,
	document.getElementById('example')
);
