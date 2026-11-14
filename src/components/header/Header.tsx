import Logo from './../../assets/logo.png'

const Header = () => {
    return (
        <header className="h-20 px-4 py-2 flex items-center justify-center border-b-2 border-border">
            <div className="w-full max-w-7xl items-center justify-between flex">
                <section className="flex items-center gap-16">
                    <h1 className="flex gap-4 items-center">
                        <img
                            src={Logo}
                            alt=""
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <span className="flex flex-col">
                            <div className="font-semibold text-xl text-text">
                                Conway&apos;s
                            </div>
                            <div className="text-base uppercase">
                                Game of Life
                            </div>
                        </span>
                    </h1>
                    <h2 className="text-base">
                        Simple rules. Endless possibilities.
                    </h2>
                </section>
            </div>
        </header>
    )
}

export default Header
