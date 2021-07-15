// styles
import './TableCrypto.css'

// component
import { useEffect, useState } from 'react'
import RowHead from '../../components/row-head/RowHead'
import Row from '../../components/row/Row'

function TableCrypto ({ activeTag }) {
  const [isLoading, setLoading] = useState(false)
  const [cryptoAsset, setCryptoAsset] = useState([])
  const [filteredAsset, setFilteredAsset] = useState([])

  // initial fetching crypto asset
  useEffect(() => {
    setLoading(true)
    fetch("https://www.binance.com/bapi/asset/v2/public/asset/asset/get-all-asset")
    .then(res => res.json())
    .then(data => {
      setCryptoAsset(data.data)
      setLoading(false)
    })
  },[])

  // update data when tags is change
  useEffect(() => {
    const filteredCryptoAsset = filteredAsset.filter(asset => activeTag === 'all' ? asset : asset.tags.includes(activeTag))
    setFilteredAsset(filteredCryptoAsset)
    // eslint-disable-next-line
  }, [activeTag])

  // fetching 24hr crypto asset
  useEffect(() => {
    const intervalFunction = setInterval(() => {
      fetch("https://api.binance.com/api/v3/ticker/24hr")
      .then(res => res.json())
      .then(data => {
        const newTicker = data.filter(item => item.symbol.includes("BUSD"))
        const filteredAssetCrypto = cryptoAsset.map(crypto => {
          if (crypto.assetCode !== 'BUSD') {
            const singleTicker = newTicker.find(item => item.symbol.includes(crypto.assetCode))
            if (singleTicker && Object.keys(singleTicker).length) {
              return {
                id: crypto.id,
                assetCode: crypto.assetCode,
                assetName: crypto.assetName,
                logoUrl: crypto.logoUrl,
                fullLogoUrl: crypto.fullLogoUrl,
                tags: crypto.tags,
                symbol: singleTicker.symbol,
                priceChange: singleTicker.priceChange,
                priceChangePercent: singleTicker.priceChangePercent,
                prevClosePrice: singleTicker.prevClosePrice,
                lastPrice: singleTicker.lastPrice,
                volume: singleTicker.volume
              }
            } else {
              return {
                id: crypto.id,
                assetCode: crypto.assetCode,
                assetName: crypto.assetName,
                logoUrl: crypto.logoUrl,
                fullLogoUrl: crypto.fullLogoUrl,
                tags: crypto.tags,
                symbol: `${crypto.assetCode}BUSD`,
                priceChange: 0,
                priceChangePercent: 0,
                prevClosePrice: 0,
                lastPrice: 0,
                volume: 0
              }
            }
          } else {
            return {
              id: crypto.id,
              assetCode: crypto.assetCode,
              assetName: crypto.assetName,
              logoUrl: crypto.logoUrl,
              fullLogoUrl: crypto.fullLogoUrl,
              tags: crypto.tags,
              symbol: `${crypto.assetCode}BUSD`,
              priceChange: 0,
              priceChangePercent: 0,
              prevClosePrice: 0,
              lastPrice: 0,
              volume: 0
            }
          }
        }).filter(item => item.lastPrice > 0).filter(item => activeTag === 'all' ? item : item.tags.includes(activeTag))
        setFilteredAsset(filteredAssetCrypto)
      })
    }, 2000)

    return () => clearInterval(intervalFunction);
    // eslint-disable-next-line
  }, [cryptoAsset])

  if (isLoading) {
    return (
      <div className="loading-error">
        <p>Loading...</p>
      </div>
    )
  } else {
    return (
      <div className="table-wrapper">
        <RowHead></RowHead>
        <div className="crypto-list-wrap">
          { filteredAsset.map(item => {
            return <Row key={item.id} crypto={item}></Row>
          }) }
        </div>
      </div>
    )
  }  
}

export default TableCrypto