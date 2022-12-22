// Write your code here

const CashWithdrawal = props => {
  const {userList, onDeleteList} = props
  const {id, value} = userList
  const onDelete = () => {
    onDeleteList(value)
  }
  return (
    <div>
      <li>
        <button onClick={onDelete}>{value}</button>
      </li>
      <li></li>
    </div>
  )
}

export default CashWithdrawal
