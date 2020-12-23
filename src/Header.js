import { Link } from 'react-router-dom'
// import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
// import Icon from '@material-ui/core/Icon'

export default function Header(props) {
    return (
      <header>
          <div class="wrapper">
              <div>
                  { props.current === 'home' ? null : <Link>ProductName</Link> }
                  <Link to={`/`}>Subscribe</Link>
                  <Link to={`/`}>About</Link>
              </div>
              <div>
                <Link to={`/bracket`}>
                    <Button to={`/product`} variant="contained" color="primary" size="small">Log In</Button>
                </Link>
              </div>
          </div>
      </header>
    )
}