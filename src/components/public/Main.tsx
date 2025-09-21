
interface IMain {
    children : React.ReactNode
}

const Main = ({children} : IMain) => {
    return (
        <main className="min-h-screen md:space-y-8 space-y-4 pb-16">
            {children}
        </main>
    );
};

export default Main;