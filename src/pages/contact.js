import {getFile} from "../lib/file";
import Layout from "@components/layout";
import PageHeader from "@components/page-header";

export default function Contact({pageData}){
  return (
    <Layout url="/contact" title={pageData.title}>
      <PageHeader>
        <h1>{pageData.heading}</h1>
        <p>{pageData.subheading}</p>
      </PageHeader>
    </Layout>
  )
}

export async function getStaticProps(){
  const pageData = await getFile("pages", "contact");
  return {
    props: {
      pageData
    }
  }
}