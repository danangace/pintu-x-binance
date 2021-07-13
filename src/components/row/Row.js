import './Row.css'
import toRupiah from '@develoka/angka-rupiah-js';

function Row ({ crypto }) {
  return (
    <div className="row-wrapper">
      <div className="row-list-wrap">
        <div className="row-name">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg" alt="crypto-logo" style={{width: '26px', height: '26px'}}></img>
          <div className="row-name-detail">
            <p className="crypto-symbol">{crypto.symbol}</p>
            <p className="crypto-name">{crypto.name}</p>
          </div>
        </div>
        <div className="row-last-price">
          <p className="lastprice-key">Last Price</p>
          <p className="lastprice-label">{toRupiah(crypto.lastPrice)}</p>
        </div>
        <div className="row-last-change">
          <p className="lastchange-key">24h Change</p>
          <p className="lastchange-label">{crypto.dayChangePercentage}%</p>
        </div>
        <div className="row-marketcap">
          <p className="marketcap-key">Market Cap</p>
          <p className="marketcap-label">{toRupiah(crypto.marketCap)}</p>
        </div>
        <div className="row-trade">
          <button className="btn-trade">Trade</button>
        </div>
      </div>
    </div>
  )
}

export default Row