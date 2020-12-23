import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import Button from '@material-ui/core/Button'

export default function Home(props) {
    return (
      <div>
        <Header />
        <main>
            <div style={{ textAlign: 'center' }}>
                <h1>ProductName</h1>
                <p>We have our multiple column layout with equal-sized columns, and the columns are all the same height.</p>
                <p>
                  <Link to={`/product`}>
                    <Button variant="contained" size="large" color="primary">
                      Try It Now
                    </Button>
                  </Link>
                </p>
            </div>
        </main>
        <Footer />
      </div>
    )
}