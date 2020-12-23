import Link from '@material-ui/core/Link'

export default function Footer(props) {
    return (
      <footer style={{position: (props.position === 'relative' ? 'relative' : 'absolute')}}>
          <div>
              <Link>Send feedback</Link>
              <Link>Privacy</Link>
              <Link>Terms</Link>
          </div>
      </footer>
    )
}