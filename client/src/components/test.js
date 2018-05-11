import React from 'react';

class Test extends React.Component{
    state = {
        testBool: false
    }

    clickButton = () => {
        this.setState({testBool: !this.state.testBool})
    }

    render() {
        return (
            <div>
                {this.state.testBool ?
                    <div>True</div>
                    :
                    <div>False</div>
                }
            </div>
        )
    }
}

export default Test;