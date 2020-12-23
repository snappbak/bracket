import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default function Product(props) {
    return (
      <div>
        <Header />
        <main>
            <table cellspacing="10">
              <tr>
                <td width="400">Lorem ipsum dolor sit amet</td>
                <td>
                  <TextField variant="outlined" size="small" value="$10" style={{ width: '100px' }} />
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <TextField variant="outlined" size="small" value="30" style={{ width: '100px' }} />
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <TextField variant="outlined" size="small" value="$300" style={{ width: '100px' }} />
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <TextField variant="outlined" size="small" value="75%" style={{ width: '100px' }} />
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <TextField variant="outlined" size="small" value="20%" style={{ width: '100px' }} />
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <TextField variant="outlined" size="small" value="5%" style={{ width: '100px' }} />
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <TextField variant="outlined" size="small" value="0%" style={{ width: '100px' }} />
                </td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet</td>
                <td>
                  <TextField variant="outlined" size="small" value="0%" style={{ width: '100px' }} />
                </td>
              </tr>
              <tr>
                <td colspan="2" style={{ textAlign: 'center' }}>
                  <Link to={`/bracket`}>
                    <Button variant="contained" size="large" color="primary">
                      Next
                    </Button>
                  </Link>
                </td>
              </tr>
            </table>
        </main>
        <Footer />
      </div>
    )
}