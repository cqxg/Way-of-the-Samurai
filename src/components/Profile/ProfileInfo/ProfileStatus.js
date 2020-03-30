import React, { Component } from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status,
        })

        this.props.updateStatus();
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus()
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => this.activateEditMode()}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input ref={this.statusInputRef} autoFocus={true} onBlur={() => this.deactivateEditMode()} value={this.props.status} />
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;
