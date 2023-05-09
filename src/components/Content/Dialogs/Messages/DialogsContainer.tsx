import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../Redux/reduxStore";
import Dialogs from "../Dialogs";
import {DialogsType} from "../../../../Redux/dialogsReducer";


type DialogsContainerPropsType = {
  dialogs: DialogsType
}

class DialogsContainer extends React.Component<DialogsContainerPropsType> {

  componentDidMount() {}

  render() {
    return<>
      <Dialogs dialogs={this.props.dialogs}/>
    </>
  }
}


export default connect(
  (state: AppStateType)  => ({dialogs: state.dialogsReducer}),
  {}
)(DialogsContainer)