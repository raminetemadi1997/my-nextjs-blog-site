
interface IMain {
    children:React.ReactNode
}

const Main = ({children} : IMain) => {
    return (
        <main className="min-h-screen space-y-8 pb-16">
            {children}
        </main>
    );
};

export default Main;