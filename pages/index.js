import { getAllFilesDataWithPlaiceholder } from "../lib/folder";
import { getFileWithPlaiceholder } from "../lib/file";
import Layout from "@components/layout";
import Hero from "@components/hero";
import PostList from "@components/post-list";

export default function Home({ allPostsData, pageData }) { 
  return (
    <Layout url="/" title={pageData.title}>
      <div>
        <Hero imageProps={pageData.imageBlur}>
          <h1 className="my-0">{pageData.heading}</h1>
          <p className="text-xl mb-6">{pageData.subheading}</p>
          <a className="btn" href="https://app.netlify.com/start/deploy?repository=https://github.com/rfargetton/nextjs-netlifycms">Deploy to Netlify</a>
        </Hero>

        <PostList posts={allPostsData}>
          <h2>Recent Posts</h2>
        </PostList>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllFilesDataWithPlaiceholder("posts");
  const pageData = await getFileWithPlaiceholder("pages", "home");

  return {
    props: {
      allPostsData,
      pageData
    },
  };
}
