import logoDark from '@/assets/Logo.png'
import logoLight from '@/assets/Logo.png'
import VeenaWorldSmallLogo from '@/assets/Logo.png'
import VeenaWorldLogo from '@/assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
const LogoBox = () => {
  return (
    <div className="logo-box">
      <Link href="/" className="logo-dark">
        <Image src={VeenaWorldSmallLogo} width={108} height={86} className="veena-world-small-logo" alt="logo sm" />
      </Link>
      <Link href="/" className="logo-light">
        <Image src={VeenaWorldLogo} width={108} height={86} className="veena-world-logo" alt="logo sm" />

        {/*    <Image src={VeenaWorldLogo} height={24} width={112} className="veena-world-logo" alt="logo light" /> */}
      </Link>
    </div>
  )
}
export default LogoBox
