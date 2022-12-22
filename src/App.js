import {Component} from 'react'

import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class App extends Component {
  state = {first: 2000}

  onDeleteList = value => {
    this.setState(prev => ({
      first: prev.first - value,
    }))
  }

  render() {
    const {first} = this.state

    return (
      <div>
        <div>
          <p>Sarah Williams</p>
          <p>Your Balance</p>
          <p>{first}</p>
          <p>In Rupees</p>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
        </div>
        <ul>
          {denominationsList.map(each => (
            <CashWithdrawal onDeleteList={this.onDeleteList} userList={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
