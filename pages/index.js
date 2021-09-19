import { getAllFilesData } from "../lib/folder";
import { getFile } from "../lib/file";
import Layout from "@components/layout";
import Hero from "@components/hero";
import PostList from "@components/post-list";
import { getPlaiceholder } from "plaiceholder";

export default function Home({ allPostsDataWithPlaiceholder, pageDataWithPlaiceholder }) { 
  return (
    <Layout url="/" title={pageDataWithPlaiceholder.title}>
      <div>
        <Hero imageProps={pageDataWithPlaiceholder.imageProps}>
          <h1 className="my-0">{pageDataWithPlaiceholder.heading}</h1>
          <p className="text-xl mb-6">{pageDataWithPlaiceholder.subheading}</p>
          <a className="btn" href="https://app.netlify.com/start/deploy?repository=https://github.com/rfargetton/nextjs-netlifycms">Deploy to Netlify</a>
        </Hero>

        <PostList posts={allPostsDataWithPlaiceholder}>
          <h2>Recent Posts</h2>
        </PostList>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllFilesData("posts");
  const pageData = await getFile("pages", "home");

  const { blurhash, img } = await getPlaiceholder(pageData.image);

  const pageDataWithPlaiceholder = {
    ...pageData,
    imageProps : {
      blurhash,
      img
    }
  }

  const allPostsDataWithPlaiceholder = await Promise.all(allPostsData.map( async function(data){
    const { blurhash, img } = await getPlaiceholder(data.img);

    return { 
      ...data, 
      imageProps: {
        blurhash, 
        img
      }
    }
  }))


  return {
    props: {
      allPostsDataWithPlaiceholder,
      pageDataWithPlaiceholder
    },
  };
}
