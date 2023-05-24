import {Component} from 'react'

class Header extends Component {
    render(){
        return (
            <>
             <header className="flex items-center w-full bg-white">
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between -mx-4">
              <div className="max-w-full px-4 w-60">
                <a href="javascript:void(0)" className="block w-full py-5">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                    alt="logo"
                    className="w-full"
                  />
                </a>
              </div>
              <div className="flex items-center justify-between w-full px-4">
                <div>
                  <button className="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden">
                    <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                    <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                    <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                  </button>
                  <nav className="!navbarOpen && 'hidden' " id="navbarCollapse">
                    <ul className="block lg:flex">
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                        >
                          Payment
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                        >
                          Features
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
                  <a
                    href="javascript:void(0)"
                    className="py-3 text-base font-medium text-dark hover:text-primary px-7"
                  >
                    Login
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
            </>
        )
    }}

export default Header