import { useContext} from 'react'
import { AppContext } from '../contexts/context'

function Weather() {
  let { data } = useContext(AppContext)
  const loaded = () => {
    return (
      <div className="weather">
        <div>
          <img src={data.data.current.condition.icon} alt="" className="weatherIcon"/>
        </div>
        <div>
          {data.data.location.name}, {data.data.location.region}
        </div>
        <div>
          {data.data.current.condition.text}
        </div>

      </div>
    )
  }
  const loading = () => {
    <div>Loading...</div>
  }
  return data ? loaded() : loading()
}

export default Weather