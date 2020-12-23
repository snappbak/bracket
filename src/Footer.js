import { Link } from 'react-router-dom'
// import Link from '@material-ui/core/Link'

export default function Footer(props) {
    return (
      <footer style={{position: (props.position === 'relative' ? 'relative' : 'absolute')}}>
          <div>
              <Link to={`/`}>Send feedback</Link>
              <Link to={`/`}>Privacy</Link>
              <Link to={`/`}>Terms</Link>
          </div>
      </footer>
    )
}