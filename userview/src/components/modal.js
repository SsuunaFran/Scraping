import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Table from './table';

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      DataToreflect:{}
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  componentDidUpdate(){
    if(this.state.DataToreflect !== this.props.dataFromParent){
      this.setState({
        DataToreflect:this.props.dataFromParent
      },()=>{
        this.toggle()
        // console.log(`pooo${this.state.DataToreflect}`)
      })
    }
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Click Me
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-xl">
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Table showData={this.state.DataToreflect}></Table>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
