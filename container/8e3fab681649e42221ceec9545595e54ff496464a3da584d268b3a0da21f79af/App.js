handleMouseDown = () => {
  this.setState({click: !this.state.click});
};
handleTouchStart = (e) => {
  e.preventDefault();
  this.handleMouseDown();
};