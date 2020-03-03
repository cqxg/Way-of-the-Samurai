import React, { Component } from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {

    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => (alert('qq'))}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                     <div>
                     <input value={this.props.status} />
                 </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;
