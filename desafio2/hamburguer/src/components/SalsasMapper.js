import React from 'react';

class SalsasMapper extends React.Component {
    render(){
        return React.Children.map(this.props.children, (child, index) => {
            console.warn("Child", child);
            return child;
          });
    }
}

export default SalsasMapper;