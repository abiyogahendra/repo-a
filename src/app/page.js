import Image from "next/image";

export default function Home() {
  return (
    <div>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className="fixed top-4 left-4 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-4 py-4 overflow-y-auto bg-blue-800 rounded-xl">
          <div className="flex justify-between items-start mb-7">
            <div className="bg-red-500 text-white text-sm py-4 px-5 w-fit">
              LOGO
            </div>

            <div className="w-[3rem] flex flex-wrap">
              <div className="w-[1rem] h-[0.8rem] bg-yellow-500 rounded me-1 mb-1"></div>
              <div className="w-[1rem] h-[0.8rem] bg-gray-100 rounded"></div>
              <div className="w-[1rem] h-[0.8rem] bg-gray-100 rounded me-1"></div>
              <div className="w-[1rem] h-[0.8rem] bg-gray-100 rounded"></div>
            </div>
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center px-3 py-2 text-gray-900 rounded-lg hover:bg-blue-900 group bg-blue-900">
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <svg className="w-4 h-4 text-gray-200 transition duration-75 group-hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                </div>

                <span className="ms-3 text-gray-200 text-sm">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-3 py-2 text-gray-900 rounded-lg hover:bg-blue-900 group">
                <div className="p-2 bg-gray-300 rounded-lg">
                  <svg className="w-4 h-4 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z" />
                    <path d="M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z" />
                  </svg>
                </div>

                <span className="ms-3 text-gray-200 text-sm">Enrollment Management</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-3 py-2 text-gray-900 rounded-lg hover:bg-blue-900 group">
                <div className="p-2 bg-gray-300 rounded-lg">
                  <svg className="w-4 h-4 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9-3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Z" clipRule="evenodd" />
                  </svg>
                </div>

                <span className="ms-3 text-gray-200 text-sm">Finance Management</span>

                <svg className="w-6 h-6 ms-auto text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-3 py-2 text-gray-900 rounded-lg hover:bg-blue-900 group">
                <div className="p-2 bg-gray-300 rounded-lg">
                  <svg className="w-4 h-4 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9-3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Z" clipRule="evenodd" />
                  </svg>
                </div>

                <span className="ms-3 text-gray-200 text-sm">User Management</span>

                <svg className="w-6 h-6 ms-auto text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-80">
        <div className="flex justify-between items-center pt-3">
          <div className="flex">
            <p className="text-gray-600 text-sm">Pages</p>
            <span className="mx-2 text-sm">/</span>
            <p className="text-gray-600 font-semibold text-sm">Dashboard</p>
          </div>

          <div className="flex items-center gap-x-5">
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
            </svg>

            <div className="bg-gray-400 text-gray-50 rounded-full h-8 w-8 flex justify-center items-center">
              I
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-medium mt-6 mb-5">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 border border-gray-300 rounded-lg px-5  py-3">
            <h2 className="text-md">Perspective`s Total</h2>
            <h1 className="font-bold text-2xl">20%</h1>

            <div className="flex mt-7">
              <span className="bg-gray-200 rounded-xl px-3 py-1 me-1 flex">
                <svg className="w-6 h-6 text-gray-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                </svg>
                <span>20%</span>
              </span>

              <span>vs 2024/2025</span>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 rounded-lg px-5  py-3">
            <h2 className="text-md">Percentage Leads</h2>
            <h1 className="font-bold text-2xl">30%</h1>
            <p className="text-gray-500 text-sm mt-1">30 out 100 leads enrolled</p>

            <div className="flex mt-7">
              <span className="bg-gray-200 rounded-xl px-3 py-1 me-1 flex">
                <svg className="w-6 h-6 text-gray-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                </svg>
                <span>20%</span>
              </span>

              <span>vs 2024/2025</span>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 rounded-lg px-5  py-3">
            <h2 className="text-md">Enrolled Total</h2>
            <h1 className="font-bold text-2xl">40%</h1>
            <p className="text-gray-500 text-sm mt-1">20 out 100 leads enrolled</p>

            <div className="flex mt-7">
              <span className="bg-gray-200 rounded-xl px-3 py-1 me-1 flex">
                <svg className="w-6 h-6 text-gray-600 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                </svg>
                <span>20%</span>
              </span>

              <span>vs 2024/2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}