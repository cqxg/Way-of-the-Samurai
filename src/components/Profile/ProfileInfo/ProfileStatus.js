import React, { Component } from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false,
    };

    statusInputRef = React.createRef();

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

        this.props.updateStatus();
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.statusInputRef.current.value)
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
