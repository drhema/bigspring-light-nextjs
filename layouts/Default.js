// layouts/Default.js
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const Default = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, description, image } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto lg:col-10">
            {markdownify(title, "h1", "h1 text-center font-normal")}
            {markdownify(description, "p", "mt-4 text-center")}
            {image && (
              <Image
                src={image}
                width={1200}
                height={600}
                alt={title}
                className="rounded-lg"
                priority
              />
            )}
            <div className="content mt-16">{markdownify(content)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Default;