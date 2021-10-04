import Date from "@components/date";
import Layout from "@components/layout";
import Hero from "@components/hero";
import PostContent from "@components/post-content";
import { getAllFilesId, getFileDataWithPlaiceholder } from "../../lib/folder";

import settings from "../../../config.json";

export default function Post({ postData }) {
  return (
    <Layout
      url={`/posts/${postData.id}`}
      title={`${postData.title} | ${settings.site_name}`}
      image={postData.img}
      description="Some description text"
    >
      <Hero
        imageProps={postData.imageBlur}
      >
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
      </Hero>

      <PostContent htmlContent={postData.htmlContent} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllFilesId("posts");
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getFileDataWithPlaiceholder("posts", params.id);

  return {
    props: {
      postData
    },
  };
}
