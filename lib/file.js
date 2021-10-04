import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { getPlaiceholder } from "plaiceholder";

const contentDir = path.join(process.cwd(), "/content");

// Get all data for a given file in a folder
export async function getFile(folderName, fileName) {
  const filePath = path.join(contentDir, folderName, `${fileName}.md`);
  const frontmatter = matter.read(filePath);
  const processedContent = await remark()
    .use(html)
    .process(frontmatter.content);
  const htmlContent = processedContent.toString();

  return {
    ...frontmatter.data,
    htmlContent,
  };
}

// Same as getFile with placeholder images 
// provided by Plaiceholder plugin
// Docs: https://plaiceholder.co/docs/plugins/next
export async function getFileWithPlaiceholder(folderName, fileName){
  const fileData = await getFile(folderName, fileName);
  const { blurhash, img } = await getPlaiceholder(fileData.image);

  return {
    imageBlur: {
      blurhash,
      img
    },
    ...fileData
  }
}