import s from 'components/Statistics/Statistics.module.css'
import PropTypes from 'prop-types'

function Statistics({ title, stats }) {
  // console.log(title===undefined);
  
  
  return (
    <section className={s.statistics}>
        {title===undefined ? console.log('none'):<h2 className={s.title}>{title}</h2> }

  <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => 
        {let randomColor = Math.floor(Math.random() * 9999);
      return <li className={s.item} key={id} style={{backgroundColor:`#${randomColor}`}}>
        <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>}
    )}
  </ul>
</section>)
}
PropTypes.Statistics = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired, 
}

export default Statistics