

import logo from '../images/logo.svg';

export default function ErrorPage() {
    return (
      <>
        <div className="min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-bold tracking-tight text-red-600 sm:text-5xl">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    <img src={logo} alt="logo" className="h-8 w-8 inline mr-4 mb-1" />Page non trouvée
                  </h1>
                  <p className="mt-1 text-base text-gray-500">Vérifiez le lien ou essayez à nouveau.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <a
                    href="/"
                    className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Retourner au site
                  </a>
                  <a
                    href="mailto:martin@joyouscoding.com"
                    className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Contacter le support
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    )
  }