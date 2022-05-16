import '../styles/global.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-700">
      <Navbar />
      <Header />
      <main className="mt-6 mb-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
