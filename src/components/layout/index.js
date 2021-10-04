import Head from "next/head" ;
import Header from "@components/header";
import Footer from "@components/footer";
import settings from "../../../config.json"

export default function Layout({ children, url, title, description, image }) {
  return (
    <div>
      <Head>
        <title>
          {title ? title : settings.site_name}
        </title>
        <meta 
          name="description" 
          content={description ? description : settings.description} 
        />
        <link 
          rel="canonical" 
          href={settings.base_url + url} 
        />

        <meta 
          property="og:site_name" 
          content={settings.site_name}
        />
        <meta 
          property="og:title"
          content={title ? `${title} | ${settings.site_name}` : ""}
        />
        <meta 
          property="og:description"
          content={description ? description : settings.description}
        />
        <meta 
          property="og:url" 
          content={settings.base_url + url} 
        />  
        <meta 
          property="og:type" 
          content="article" 
        />       
        <meta 
          property="og:image" 
          content={image ? settings.base_url + image : settings.base_url + "/images/og_image.png"} 
        />
      </Head>

      <Header siteName={settings.site_name}/>

      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}