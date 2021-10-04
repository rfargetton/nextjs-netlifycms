export default function Container({children}){
  return (
    <div className="px-4 md:px-6 w-full max-w-screen-lg mx-auto">
      {children}
    </div>
  )
}