import Container from "@components/container";

export default function PageHeader({children}){
  return (
    <div className="bg-gray-200 py-16">
      <div className="w-8/12 mx-auto text-center">
        <Container>
          <div className="">
            {children}
          </div>
        </Container>
      </div>
    </div>
  )
}