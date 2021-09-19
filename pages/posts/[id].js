import settings from "../../config.json";

import Date from "@components/date";
import Layout from "@components/layout";
import Hero from "@components/hero";
import PostContent from "@components/post-content";
import { getAllFilesId, getFileData } from "../../lib/folder";
import { getPlaiceholder } from "plaiceholder";

export default function Post({ postData, imageProps }) {
  return (
    <Layout
      url={`/posts/${postData.id}`}
      title={`${postData.title} | ${settings.site_name}`}
      image={postData.img}
      description="Some description text"
    >
      <Hero
        imageProps={imageProps}
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
  const postData = await getFileData("posts", params.id);
  const { blurhash, img } = await getPlaiceholder(postData.img);

  return {
    props: {
      postData,
      imageProps: {
        img,
        blurhash
      }
    },
  };
}
