import Head from "next/head" ;
import settings from "../../config.json"

import Date from "../../components/date" ;
import Layout from "../../components/layout" ;
import { getAllPostsId, getPostData } from "../../lib/posts" ;
import utilsStyles from "../../styles/utils.module.css" ;

export default function Post({postData}){
  console.log(postData);
  return (
    <Layout 
      url={`/posts/${postData.id}`}
      title={`${postData.title} | ${settings.site_name}`}
      image={postData.img}
      description="Some description text"
    >

      <div className={utilsStyles.container}>
        <div>
          <img src={postData.img}/>
        </div>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){
  const paths = await getAllPostsId();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}