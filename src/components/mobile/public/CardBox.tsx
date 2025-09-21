



interface ICardBoxProps {
    children : Readonly<React.ReactNode>;
    padding ? : number
}




export default function CardBox({children , padding = 2}:ICardBoxProps) {
  return (
    <section className={`p-${padding} bg-[#F2F2F2]`}>
        {children}
    </section>
  )
}
