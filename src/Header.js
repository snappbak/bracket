import { Link } from 'react-router-dom'
// import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

export default function Header(props) {
    return (
      <header>
          <div class="wrapper">
              <div>
                  <Link to={`/product`}>ProductName</Link>
                  <Link to={`/product`}>Subscribe</Link>
                  <Link to={`/`}>About</Link>
              </div>
              <div>
                  <Button to={`/product`} variant="contained" color="primary">Log In</Button>
                  &nbsp;
                  <Icon style={{ fontSize: 30 }}>+</Icon>
              </div>
          </div>
      </header>
    )
}