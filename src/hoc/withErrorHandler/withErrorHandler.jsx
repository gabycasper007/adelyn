import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: false
    };

    componentDidMount() {
      axios.interceptors.request.use(request => {
        this.setState({ error: false });
        return request;
      });
      axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({ error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: false });
    };

    render() {
      return (
        <>
          <Modal
            show={this.state.error}
            hideBackdrop={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
