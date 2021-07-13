import './Tag.css'

function Tag ({ tag, clickTag }) {
  const handleClickTag = () => {
    clickTag(tag.key)
  }
  return (
    <div className={tag.active ? 'tag-wrap tag-active' : 'tag-wrap'} onClick={handleClickTag}>
      <p className={tag.active ? 'tag-label label-active' : 'tag-label'}>{tag.label}</p>
    </div>
  )
}

export default Tag