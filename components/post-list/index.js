import Link from "next/link";
import {ArrowRight} from "react-feather";
import Image from "next/image";

import Date from "../date";
import Container from "../container";
import Card from "../card";

export default function PostList({ posts, children }) {
  return (
    <div className="my-8">
      <Container>
        <div className="py-2 md:py-4 w-full md:w-8/12 mx-auto text-center">
          {children}
        </div>
        <div>
          <ul className="grid md:grid-cols-2 gap-6 list-none">
            {posts.map((post) => (
              <li key={post.id} className="transform hover:scale-105 transition">
                <Card>
                  <div className="p-4">
                    <div className="relative h-48 w-full rounded-xl overflow-hidden">
                      <Image 
                        src={post.img}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="mt-4">
                      <Date dateString={post.date} />
                      <h3 className="mt-2">{post.title}</h3>
                      <Link href={`/posts/${post.id}`}>
                        <a>
                          <div className="flex justify-between text-blue-700 items-center mt-4">
                            <div>Read More</div>
                            <div>
                              <ArrowRight />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Card>          
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}