import './Row.css'
import toRupiah from '@develoka/angka-rupiah-js';

function Row ({ crypto }) {
  const lastPriceStatus = () => {
    return crypto.lastPrice === crypto.prevClosePrice ? '' : crypto.lastPrice > crypto.prevClosePrice ? '-green' : '-red'
  }
  return (
    <div className="row-wrapper">
      <div className="row-list-wrap">
        <div className="row-name">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg" alt="crypto-logo" style={{width: '26px', height: '26px'}}></img>
          {/* <img src={crypto.fullLogoUrl} alt="crypto-logo" style={{width: '26px', height: '26px'}}></img> */}
          <div className="row-name-detail">
            <p className="crypto-symbol">{crypto.assetCode}</p>
            <p className="crypto-name">{crypto.assetName}</p>
          </div>
        </div>
        <div className="row-last-price">
          <p className="lastprice-key">Last Price</p>
          <p className={`lastprice-label label${lastPriceStatus()}`}>{toRupiah(crypto.lastPrice*14500)}</p>
        </div>
        <div className="row-last-change">
          <p className="lastchange-key">24h Change</p>
          <p className={`lastchange-label label${lastPriceStatus()}`}>{crypto.priceChangePercent}%</p>
        </div>
        <div className="row-marketcap">
          <p className="marketcap-key">Market Cap</p>
          <p className="marketcap-label">{toRupiah(crypto.volume*crypto.lastPrice*14500)}</p>
        </div>
        <div className="row-trade">
          <button className="btn-trade">Trade</button>
        </div>
      </div>
    </div>
  )
}

export default Row