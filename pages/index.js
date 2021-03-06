import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="banner">
        <Image
          src="/image/banner2.jpg"
          alt=""
          layout="fill"
        />
        <div className="banner_title">
          <h1>Uniworld ecosystem</h1>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p>
        </div>
      </div>
      <main className="home">
        <div className="block">
          <div className="container block_flex">
            <div className="block_title">
              <h2 className="block_title_h2">
                Technology is the most powerful tool to build a smart society
                5.0
              </h2>
              <p className="block_title_note">
                The Smart Society 5.0 is a revolutionizing concept first
                introduced by Japan in 2016. In society 5.0, technologies
                elevate human well-being and advance humanity. Striving towards
                Society 5.0 has become a global inspiration for governments,
                engineers, and entrepreneurs ever since.
                <br />
                We - Uniworld are building, supplying, and leasing AI &amp;
                Blockchain-based technology infrastructure. Our products and
                services serve as the brick and stone of Society 5.0.
              </p>
            </div>
            <div className="block_img">
              <Image
                src="/image/blog1.png"
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          </div>
          <div className="container block_flex">
            <div className="block_title">
              <h2 className="block_title_h2">
                Re-Evolution For The Next Generation!
              </h2>
              <p className="block_title_sub">
                We Re-Evolve the existing things to a higher form. At Uniworld,
                we constantly rethink, reinvent and upgrade the existing
                technologies.
              </p>
            </div>
            <div className="block_img">
              <Image
                src="/image/blog2.png"
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          </div>
          <div className="container block_flex">
            <div className="block_title">
              <h2 className="block_title_h2">
                All values created by people are for people is happiness
              </h2>
              <p className="block_title_note">
                It is flawed if what you create is only to satisfy personal
                creativity.
                <br />
                Uniworld is powered by passion, creativity, and the desire to
                contribute to the betterment of humanity.
              </p>
              <button className="block_title_btn">Create a Wallet</button>
            </div>
            <div className="block_img">
              <Image
                src="/image/blog3.png"
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          </div>
          <div className="container block_flex">
            <div className="block_title">
              <h2 className="block_title_h2">All-in-one account</h2>
              <p className="block_title_sub">
                Take 1 minute to create yourself an All-in-one account.
              </p>
              <p className="block_title_note">
                It is your bank, your digital asset insurance cabinet, your
                identity without being controlled by anyone
              </p>
              <button className="block_title_btn">Create a Wallet</button>
            </div>
            <div className="block_img">
              <Image
                src="/image/blog4.png"
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
