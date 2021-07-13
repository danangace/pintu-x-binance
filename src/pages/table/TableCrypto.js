// styles
import './TableCrypto.css'

// component
import RowHead from '../../components/row-head/RowHead'
import Row from '../../components/row/Row'

const dummyCryptoList = [
  {
    id: 1,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 2,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 3,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 4,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 5,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 6,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 7,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 8,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 9,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 10,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 11,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 12,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 13,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 14,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
  {
    id: 15,
    logo: '',
    symbol: 'BTC',
    name: 'Bitcoin',
    lastPrice: 480229664.06,
    dayChangePercentage: 3.39,
    marketCap: 480229664.06
  },
]

function TableCrypto () {
  return (
    <div className="table-wrapper">
      <RowHead></RowHead>
      <div className="crypto-list-wrap">
        { dummyCryptoList.map(item => {
          return <Row key={item.id} crypto={item}></Row>
        }) }
      </div>
    </div>
  )
}

export default TableCrypto