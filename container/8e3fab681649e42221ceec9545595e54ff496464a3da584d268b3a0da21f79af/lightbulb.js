import {h, Component} from 'preact'

export default class Lightbulb extends Component {
  state = {
    on: false
  }
  updateChecked = (e) => {
    this.setState({on: e.target.checked})
  }
  render({wattage = 200}, {on}) {
    return <div>
      <label>
        <input type="checkbox" checked={on} onClick={this.updateChecked}/>
        {' '}
        {wattage}W lightbulb is {on ? 'on' : 'off'}
      </label>
    </div>
  }
}