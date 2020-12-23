import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import Button from '@material-ui/core/Button'

export default function Home(props) {
    return (
      <div>
        <Header current="home" />
        <main>
            <div class="home">
                <h1>ProductName</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <div>
                  <Link to={`/product`}>
                    <Button variant="contained" size="large" color="primary">
                      Try It Now
                    </Button>
                  </Link>
                </div>
                <p>&nbsp;</p>
            </div>
        </main>
        <Footer />
      </div>
    )
}