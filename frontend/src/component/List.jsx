import React from 'react'
const items = ['React', 'Node.js', 'Express', 'MongoDB']
const List = () => {
  return (
    <section className="list">
<h2>Technologies</h2>
<ul>
{items.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
</section>
  )
}

export default List