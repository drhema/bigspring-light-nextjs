import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Services = ({ data }) => {
  const { frontmatter } = data;
  const { content_blocks } = frontmatter;

  const renderBlock = (block) => {
    switch (block.type) {
      case "hero":
        return (
          <section className="section pb-[50px]">
            <div className="container">
              <div className="row text-center">
                <div className="mx-auto lg:col-10">
                  <h1 className="font-primary font-bold">{block.title}</h1>
                  <p className="mt-4">{block.content}</p>
                  {block.button?.enable && (
                    <Link
                      className="btn btn-primary mt-4"
                      href={block.button.link}
                    >
                      {block.button.label}
                    </Link>
                  )}
                  {block.image && (
                    <Image
                      className="mx-auto mt-12"
                      src={block.image}
                      width={750}
                      height={390}
                      alt={block.title}
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        );

      case "features":
        return (
          <section className="section bg-theme-light">
            <div className="container">
              <div className="text-center">
                <h2>{block.title}</h2>
              </div>
              <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                {block.items?.map((item, i) => (
                  <div
                    className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                    key={`feature-${i}`}
                  >
                    {item.icon && (
                      <Image
                        className="mx-auto"
                        src={item.icon}
                        width={30}
                        height={30}
                        alt=""
                      />
                    )}
                    <div className="mt-4">
                      <h3 className="h5">{item.title}</h3>
                      <p className="mt-3">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "benefits":
        return (
          <section className="section">
            <div className="container">
              <div className="text-center">
                <h2>{block.title}</h2>
                <p className="mt-4">{block.content}</p>
              </div>
              <div className="mt-8">
                {block.services?.map((service, index) => (
                  <div
                    key={index}
                    className="mb-8 items-center gap-8 md:grid md:grid-cols-2"
                  >
                    <div className={index % 2 === 0 ? "md:order-2" : ""}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className={index % 2 === 0 ? "md:order-1" : ""}>
                      <h3 className="font-bold">{service.title}</h3>
                      <p className="mt-4">{service.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "cta":
        return (
          <section className="section px-4">
            <div className="container">
              <div className="section rounded-xl bg-theme-light px-4 py-16 dark:bg-darkmode-theme-light xl:p-20">
                <div className="row items-center justify-center">
                  <div className="md:col-8 lg:col-6">
                    <h2 className="text-center">{block.title}</h2>
                    <p className="mt-4 text-center">{block.content}</p>
                    {block.button?.enable && (
                      <div className="text-center">
                        <Link
                          className="btn btn-primary mt-8"
                          href={block.button.link}
                        >
                          {block.button.label}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {content_blocks?.map((block, index) => (
        <div key={index}>{renderBlock(block)}</div>
      ))}
    </>
  );
};

export default Services;