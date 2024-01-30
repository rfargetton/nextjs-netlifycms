import fs from "fs" ;
import path from "path" ;
import matter from "gray-matter";
import remark, { stringify } from "remark";
import html from "remark-html";
import { getPlaiceholder } from "plaiceholder";

const contentDir = path.join(process.cwd(), "/content");

// Get all files in a given folder
// ex: printing post lists 
// Returns data {
//   id: string
//   title: string
//   image: string
//   date: string
// }
export async function getAllFilesData(folderName) {
  const fullDir = path.join(contentDir, folderName);
  const fileNames = fs.readdirSync(fullDir);

  const folderData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");

    const filePath = path.join(fullDir, fileName);
    const frontmatter = matter.read(filePath); 
    const title = frontmatter.data.title;
    const date = frontmatter.data.date.toJSON();
    const image = frontmatter.data.featured_image;

    return {
      id,
      title,
      image,
      date
    }
  })

  return folderData.sort((a, b) => {
    if(a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Same as getAllFilesData with placeholder images 
// provided by Plaiceholder plugin
// Docs: https://plaiceholder.co/docs/plugins/next
export async function getAllFilesDataWithPlaiceholder(folderName){
  const allFilesData = await getAllFilesData(folderName);
  const allFilesDataWithPlaiceholder = await Promise.all(allFilesData.map( async function(data){
    const { base64, img } = await getPlaiceholder(data.image);

    return { 
      ...data, 
      imageProps: {
        base64,
        img
      }
    }
  }))

  return allFilesDataWithPlaiceholder;
}


// Get all files in a given folder
// ex: creating slugs for posts
// Returns data {
//   id: string
// }
export async function getAllFilesId(folderName){
  const fullDir = path.join(contentDir, folderName);
  const fileNames = fs.readdirSync(fullDir);

  return fileNames.map(fileName => {

    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    }
  })
}


// Get specific data for a given file in a folder
// Returns data {
//   id: string
//   title: string
//   image: string
//   date: string
//   htmlContent: string
// }
export async function getFileData(folderName, id) {
  const filePath = path.join(contentDir, folderName, `${id}.md`)
  const frontmatter = matter.read(filePath);
  const title = frontmatter.data.title;
  const date = frontmatter.data.date.toJSON();
  const image = frontmatter.data.featured_image;
  const processedContent = await remark()
    .use(html)
    .process(frontmatter.content)
  const htmlContent = processedContent.toString()

  return {
    id,
    title,
    image,
    date,
    htmlContent
  }
}

// Same as getFileData with placeholder images 
// provided by Plaiceholder plugin
// Docs: https://plaiceholder.co/docs/plugins/next
export async function getFileDataWithPlaiceholder(folderName, id){
  const fileData = await getFileData(folderName, id);
  const { base64, img } = await getPlaiceholder(fileData.image);

  return {
    imageBlur: {
      base64,
      img
    },
    ...fileData
  }
}