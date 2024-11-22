import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component{
    // static defaultProps = {
    //     tech: "hidden"
    // };

    state = {
        newTech: '',
        techs: []
    }; 

    // executes when the component runs
    componentDidMount(){
        const techs = localStorage.getItem('techs');

        if(techs){
            this.setState({techs: JSON.parse(techs)});
        }
    }

    // Executes when props or the state changes 
    componentDidUpdate(_, prevState){
        if(prevState.techs != this.state.techs){
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }

    // Executes when the component die
    componentWillUnmount(){

    }

    // React states are immutable

    handleInputChange = e => {
        this.setState({ newTech: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState( {
            techs: [... this.state.techs, this.state.newTech],
            newTech: ''
        }); // ... -> spread operation
    }

    handleDelete = (tech) => {
        this.setState( {
            techs: this.state.techs.filter(t => t != tech)
        })
    }

    render(){ // every time the state changes, the render runs again.
        return (
            <>
            <form onSubmit={this.handleSubmit}>
            <h1>{this.state.newTech}</h1>
            <ul>
                    {this.state.techs.map(tech => (
                        <TechItem
                         key ={tech} 
                         tech={tech} 
                         onDelete={() => this.handleDelete(tech)}
                         />
                    ))}; 
                <TechItem /> 
                <TechItem tech="ExpressJS"/> 
            </ul>
            <input type="text"
             onChange={this.handleInputChange}
             value={this.state.newTech}
             />
             <button type="submit">Submit</button>
            </form>
            </>
        );
    }
}

export default TechList;