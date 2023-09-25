import Link from 'next/link'

import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="px-10 py-2  w-full z-40  fixed opacity-96  drop-shadow-lg backdrop-blur-3xl ">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 opacity-90 ">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 animate-bounce">
            {/* Logo */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOESURBVHgB3ZpdUhNBEMd7ZkM+qniINwgnMD6o+BZPYKiyxPKFcALICYATiCcQXijAKiuegDwZlAfxBusJyIMWCTHTdo9JarPJZjeTD2b4vWR3M7tV/+nume7eFTADWC7lW6lW0ZPiFQpVABBFupqn3zzcMwjigwADbl+vl3qCKjYIGYOfbmefTCXu97unxXTXe48AJbAYJWAtd3rpp5IMZvfrZNp72MVdBLshd6zmThs+H8da7vbtekEiXNBhASyHxBylzy63++dy0mB2Q4n4AxwQRvgr7Ww1eCHScixspSsvLF0wRujHWfDa2JjTrthFl4QdhIUxI5ZzKcaYcJwFGYk5ErYHjggj/C5ZLerPIcuR1Sok7iM4wrg4CzKwXM8d98ARouIsyEBcSsEWOOOOWCNh+3GjBuJoJirgBr4SoppkoBbHsQaOWK3jdTfi3LGP3uc8hK3Zc0ZsopLHSipfCNGEBSCVaK6eXF0nHS+wXMzfZbI3YAyJAnmQPWscgmWk7tLpEpjjdzy1sXryLfFsLpMUCq8kwMwplYKD1bMrK4UxUgI+BgM47cl9ujwCi6GKBo2SY0p7jsFyJJmgAAbQclwHy5GGZY0PDiDhAWMozo0ilgoBExfDPKVsJbAcKRDNUiVld++SkQrETzBACrHDNSBYjESBhhkG5rnXYrNAmVJeHcwp2CxQ91Dam89vZl8BsaaU+EJpqq9P/05eqHK1ZDXZLGhxrc0Xh5Q878ASSXdkQXz++qt/PufmFFXr8FLvcxR3NXhA9Kt1LY7zRDJhHZbIH6/zCBYAv+XpV+uDDGVSc3MReJ439yyH233BjsBA3H1Yb54IFNfhdt9QbknW2+aeCLiH35W4Eb44JI6DkJs94BTY5JVxXLtvpCpgn+UvAcARaG+tRvUxx5Y8JHBXOdBG0O8LJvRxIus5mo2K3QLj3xdMLFZ7Am2MQT/dzm3HDYqtxHl2lF5Fremb6NRK1Oqxq3qiNgMJPOIHKrTATTF6AQmTuIfCD8ydazdd+y9y+fshh0jmvJE4D070BVGQ3qxV+Lj95llZgSzrrrXgj9oWB29PudPG/jT3TC0uSOb8O8/iYCZ7RWshyb3ZVnaaDoDP2xNMyUziwvSs6sN80QsIGGB9U3aaN6lhrBYXrM1MsFZcuDYzwUpx42ozE2wUN7Y2M8EycdG1mQk2idOF8ryEMf8AY0trwRj5nrgAAAAASUVORK5CYII=" alt="" />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/features" className=" lg:text-2xl font-medium text-white hover:text-amber-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="lg:text-2xl font-medium text-white hover:text-amber-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className=" lg:text-2xl font-medium text-white hover:text-amber-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="lg:text-2xl  font-medium text-white hover:text-amber-500 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  About us
                </Link>
              </li>
              {/* 1st level: hover */}
              {/* <Dropdown title="Support" >
                <li>
                  <Link href="/contact" className=" font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/help/frequently-asked-questions" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    404
                  </Link>
                </li>
              </Dropdown> */}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="btn-sm text-red bg-red-600  hover:bg-amber-500 ml-3"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/" className="btn-sm text-red bg-red-600  hover:bg-amber-500 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
