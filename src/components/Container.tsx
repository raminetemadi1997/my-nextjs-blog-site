interface IContainerProps {
    children : React.ReactNode
}

const Container = ({children} : IContainerProps) => {
    return (
        <div className="container md:w-7xl w-full mx-auto">
            {children}
        </div>
    );
};

export default Container;