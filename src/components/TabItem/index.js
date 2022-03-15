import './index.css'

const TabItem = props => {
  const {tabDetails, onTabclick, activeTabItem} = props
  const {displayText, tabId} = tabDetails
  const highlightName = activeTabItem ? 'active-tab-btn' : ''
  const ontabclick = () => {
    onTabclick(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${highlightName}`}
        onClick={ontabclick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
