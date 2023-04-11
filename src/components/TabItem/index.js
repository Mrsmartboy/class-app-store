import './index.css'

const TabItem = props => {
  const {eachItem, onTabApp, isActive} = props
  const {tabId, displayText} = eachItem

  const onClickApp = () => {
    onTabApp(tabId)
  }

  const tabClassName = isActive && 'tab-high-light'

  return (
    <li className="tab-item-container" onClick={onClickApp}>
      <button className={`tab-btn ${tabClassName}`} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
