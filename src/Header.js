import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon'

export default function Header(props) {
    return (
      <header>
          <div class="wrapper">
              <div>
                  <Link>ProductName</Link>
                  <Link>Subscribe</Link>
                  <Link>About</Link>
              </div>
              <div>
                  <Button variant="contained" color="primary">Log In</Button>
                  &nbsp;
                  <Icon style={{ fontSize: 30 }}>+</Icon>
              </div>
          </div>
      </header>
    )
}