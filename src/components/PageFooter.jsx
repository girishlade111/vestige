import { Link } from 'react-router-dom'

export default function PageFooter() {
  return (
    <footer className="page-foot">
      <span>
        <Link to="/">← BACK TO THE DESCENT</Link>
      </span>
      <span>© MMXXVI VESTIGE</span>
    </footer>
  )
}
