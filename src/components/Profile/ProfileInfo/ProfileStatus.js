import React, {Component} from 'react';

class ProfileStatus extends Component {
    state ={
        editMode:false
    };

    render() {
        return (
            <div>
                <div>
                    <span>{this.props.status}</span>
                </div>
                <div>
                    <input value={this.props.status} />
                </div>
            </div>
        );
    }
};

export default ProfileStatus;
