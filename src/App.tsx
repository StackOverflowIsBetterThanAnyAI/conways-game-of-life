import { Footer } from './components/footer'
import { Header } from './components/header'
import { Main } from './components/main'

const App = () => {
    return (
        <div className="flex min-h-dvh flex-col">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
