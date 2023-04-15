import React from 'react';

export class ProfileStatus extends React.Component<any, any>{
  state = {
    editMode: true,
    status: 'My status'
  }
  changeEditMode = () => {
    debugger
    this.setState({editMode: !this.state.editMode})
  }

  render() {
    return (
      <div >
        {this.state.editMode
        ? <span onDoubleClick={this.changeEditMode}>{this.state.status}</span>
        : <input
            onBlur={this.changeEditMode}
            type="text"
            value={this.state.status}
            autoFocus={true}/>
        }
      </div>
    );
  }
}