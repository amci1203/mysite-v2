import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaGithub, FaCodepen } from 'react-icons/fa'

const SiteHeader = () => {
  const router = useRouter()

  const NavLink = ({ children, ...props }) => (
    <Link {...props}>
      <a data-active={props.href == router.pathname ?? undefined}>
        {children}
        </a>
    </Link>
  )

  return (
    <header className='site-header'>
      <h1 className='text-2xl'>Allen <strong>M</strong></h1>
      <nav>
        <NavLink href='/blog'>Blog</NavLink>
        <NavLink href='/resume'>Resume</NavLink>
        <a href='https://github.com/amci1203'>
          <FaGithub size='24' />
          {/* <span>GitHub</span> */}
        </a>
        <a href='https://codepen.io/amci1203'>
          <FaCodepen size='24' />
          {/* <span>GitHub</span> */}
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
