import React, { Component } from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });

        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    getNotEditMode = () => {
        return (
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>
        )
    };

    getEditMode = () => {
        return (
            <div>
                <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} />
            </div>
        )
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.editMode ? this.getEditMode() : this.getNotEditMode()}
            </div>
        );
    }
};

export default ProfileStatus;
