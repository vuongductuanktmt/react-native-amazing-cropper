import React from 'react';
import PropTypes from 'prop-types';
import Cropper from './pages/Cropper.page';
import DefaultFooter from './components/Footer/DefaultFooter.component';

class App extends React.Component {
  render() {
    return (
      <Cropper
        footerComponent={this.props.footerComponent}
        onDone={this.props.onDone}
        onCancel={this.props.onCancel}
        imageUri={this.props.imageUri}
        imageWidth={this.props.imageWidth}
        imageHeight={this.props.imageHeight}
        TOP_VALUE={this.props.TOP_VALUE}
        LEFT_VALUE={this.props.LEFT_VALUE}
        BOTTOM_VALUE={this.props.BOTTOM_VALUE}
        RIGHT_VALUE={this.props.RIGHT_VALUE}
        initialRotation={this.props.initialRotation}
        NOT_SELECTED_AREA_OPACITY={this.props.NOT_SELECTED_AREA_OPACITY}
        BORDER_WIDTH={this.props.BORDER_WIDTH}
      />
    )
  }

  onDone = () =>{
    this.props.onDone()
  }
}


App.propTypes = {
  footerComponent: PropTypes.object,
  onDone: PropTypes.func,
  onCancel: PropTypes.func,
  imageUri: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  TOP_VALUE: PropTypes.number,
  LEFT_VALUE: PropTypes.number,
  BOTTOM_VALUE: PropTypes.number,
  RIGHT_VALUE: PropTypes.number,
  initialRotation: PropTypes.number,
  NOT_SELECTED_AREA_OPACITY: PropTypes.number,
  BORDER_WIDTH: PropTypes.number,
};

App.defaultProps = {
  footerComponent: (
    <DefaultFooter
      doneText='DONE'
      rotateText='ROTATE'
      cancelText='CANCEL'
    />
  ),
  onDone: () => {},
  onCancel: () => {},
  imageUri: '',
  imageWidth: 1280,
  imageHeight: 747,
  TOP_VALUE: 0,
  LEFT_VALUE: 0,
  BOTTOM_VALUE: 0,
  RIGHT_VALUE: 0,
  initialRotation: 0,
  NOT_SELECTED_AREA_OPACITY: 0.5,
  BORDER_WIDTH: 50
};

export default App;
