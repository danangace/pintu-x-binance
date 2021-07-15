// import { useEffect, useState } from "react"
import { useState } from 'react'

// style
import './Market.css'

// component
import Tag from '../../components/tags/Tag'
import TableCrypto from '../table/TableCrypto'

let initialTags = [
  { key: 'all', label: 'All', active: true },
  { key: 'defi', label: 'DeFi', active: false },
  { key: 'innovation-zone', label: 'Inovation', active: false },
  { key: 'pos', label: 'POS', active: false },
  { key: 'polkadot', label: 'Polkadot', active: false },
  { key: 'nft', label: 'NFT', active: false },
  { key: 'pow', label: 'POW', active: false },
  { key: 'BSC', label: 'BSC', active: false },
  { key: 'storage', label: 'Storage', active: false }
]
  
function Market () {
  const [tags, setTags] = useState(initialTags)
  const [activeTag, setActiveTag] = useState("all")

  const handleClickTag = (key) => {
    setActiveTag(key)
    const newTags = tags.map(tag => {
      tag.key === key ? tag.active = true : tag.active = false
      return tag
    })
    setTags(newTags)
  }

  return (
    <div className="market-wrap">
      <h1 className="market-title">Markets</h1>
      <div className="card-wrap">
        <div className="tag-wrap-list">
          { tags.map(item => {
            return <Tag key={item.key} tag={item} clickTag={handleClickTag}></Tag>
          }) }
        </div>
        <TableCrypto activeTag={activeTag}></TableCrypto>
      </div>
    </div>
  )
}

export default Market