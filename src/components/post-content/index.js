import Container from "@components/container";
import Card from "@components/card";

export default function PostContent({htmlContent}){
  return(
    <div className="-mt-4">
      <Container>
        <div className="w-full md:w-10/12">
          <Card>
            <div className="p-8 unreset" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </Card>
        </div>
      </Container>
    </div>
  )
}