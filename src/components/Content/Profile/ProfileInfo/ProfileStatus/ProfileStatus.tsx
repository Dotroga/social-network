import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType, any>{
  state = {
    editMode: false,
    status: this.props.status
  }
  activeEditMode = () => {
    this.setState({status: this.props.status})
    this.setState({editMode: true})
  }
  changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value})
  }
  closeEditMode = () => {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
    this.setState({status: ''})
  }

  render() {
    return (
      <div >
        {!this.state.editMode
        ? <span onDoubleClick={this.activeEditMode}>
            {this.props.status  ||  'Change status..'}
        </span>
        : <input
            onBlur={this.closeEditMode}
            onChange={this.changeStatus}
            type="text"
            value={this.state.status}
            autoFocus={true}/>
        }
      </div>
    );
  }
}