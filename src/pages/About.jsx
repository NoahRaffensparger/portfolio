import Swiper from '../components/Swiper'

export default function About() {
  return (
    <>
      <div className='bg-gray-300 py-12 px-5'>
        <h3 className='text-4xl font-semibold text-center text-black/80'>biography</h3>
        <div className='flex justify-center'>
          <div className='my-4 bg-white rounded-xl flex flex-col lg:flex-row items-center justify-center lg:w-9/10 xl:w-4/5'>
            <div className='lg:w-4/5 text-lg lg:text-2xl lg:mx-0'>
              <p className='pt-4 px-4'>&nbsp;&nbsp;&nbsp;&nbsp;My name is Noah Raffensparger, I'm 23 years old and I've been living in Minnesota my whole life. Growing up in Minnesota means appreciating the great midwest cultures like kindness, hospitality, hard work, and most of all, hot dish. I have a creative personality, and I've always been inclined towards tech - coding allows me to combine both of those passions into clean, functional products that make clients happy. My goal is to make the best product possible and to make the user happy. If that means learning a new skill or working extra hours to accomplish it, then I'm game.</p>
              <p className='pt-4 px-4'>&nbsp;&nbsp;&nbsp;&nbsp;I recently got married to a wonderful girl named Jackie. We met in 2021 when she trained me in at an old job, and we've been together ever since. I'm excited for our future together. We have two cats at home, Nono and Nuggs. They're brothers, but they act more like old neighbors fighting over property lines.</p>
              <p className='pt-4 px-4'>&nbsp;&nbsp;&nbsp;&nbsp;I'm excited to work together, please feel free to reach out to me with new opportunities.</p>
              <p className='pt-4 pb-4 px-4'>- Noah</p>
            </div>
            <div className='pb-4 lg:pb-0'>
              <Swiper />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
