import React, { Component } from 'react';

const IncrementContext = React.createContext();

export class Provider extends Component {
    state = {
        count: 0
    }
    
    increment = () => this.setState({count: this.state.count + 1})

    render(){
        return (
            <IncrementContext.Provider value={{
                count: this.state.count,
                actions: {
                    increment: this.increment
                }
            }}>
                { this.props.children }
            </IncrementContext.Provider>
        )
    }
}

export const Consumer = IncrementContext.Consumer;
