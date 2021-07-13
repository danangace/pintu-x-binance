import './RowHead.css'

const initialMenu = [
  { key: 'name', label: 'Name', styles: { textAlign: 'left' } },
  { key: 'lastprice', label: 'Last Price', styles: { textAlign: 'left' } },
  { key: '24hchange', label: '24h Change', styles: { textAlign: 'center' } },
  { key: 'marketcap', label: 'Market Cap', styles: { textAlign: 'right' } }
]

function RowHead () {
  return (
    <div className="row-head-wrapper">
      { initialMenu.map(item => {
        return (
        <div className="row-head-item" style={item.styles} key={item.key}>
          <p className="row-head-label">{item.label}</p>
        </div>
        )
      }) }
    </div>
  )
}

export default RowHead