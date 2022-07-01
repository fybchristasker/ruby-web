import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const Home = () => {
  const dayOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="absolute inset-0 z-10 flex h-full items-center">
        <div className="mx-auto mt-[-120px] flex justify-center md:text-4xl">
          <div className="font-merriweather flex max-w-3xl flex-col gap-3">
            <div className="cursor-default">
              <h2 className="text-[3.375rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem] lg:text-[110px] lg:leading-[110px]">
                Hi
              </h2>
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-[3.375rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem] lg:text-[110px] lg:leading-[8.5rem]">
                  我是
                </h2>
                <div className="opacity-70">
                  <h2 className="text-[1.625rem] leading-[1.625rem] md:text-[2.688rem] md:leading-[2.688rem] lg:text-[52px] lg:leading-[52px]">
                    热爱编程的
                  </h2>
                  <h2 className="text-[1.625rem] leading-[1.625rem] md:text-[2.688rem] md:leading-[2.688rem] lg:text-[52px] lg:leading-[52px]">
                    前端开发工程师
                  </h2>
                </div>
              </div>
              <h2 className="text-[3.375rem] leading-[3.375rem] md:text-[5.375rem] md:leading-[5.375rem] lg:text-[110px] lg:leading-[110px]">
                fybchristasker
              </h2>
            </div>
            <Link href="/blog">
              <h3 className="font-merriweather mt-4 text-sm md:text-xl">我的博客 →</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
