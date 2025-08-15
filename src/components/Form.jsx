export default function InquiryForm() {
    return (
        <>
            <div className="bg-gray-300 pt-12 pb-8 px-4 xl:h-[800px] xl:flex xl:flex-col xl:place-content-center">
                <h1 className="text-center text-4xl font-semibold pb-4 text-black/80">let's talk!</h1>
                <form className="mx-4 bg-white rounded-xl p-4 lg:w-3/5 mx-auto">
                    <input className="bg-gray-200 border-1 border-gray-300 px-4 py-3 mb-6 w-full" type="text" id="name" name="name" required placeholder="Name" />
                    <input className="bg-gray-200 border-1 border-gray-300 px-4 py-3 mb-6 w-full" type="email" id="email" name="email" required placeholder="Email" />
                    <input className="bg-gray-200 border-1 border-gray-300 px-4 py-3 mb-6 w-full" type="tel" id="phone" name="phone" placeholder="Phone" />
                    <textarea className="bg-gray-200 border-1 border-gray-300 px-4 pt-3 pb-16 mb-6 w-full" type="text" id="message" name="message" rows="4" required placeholder="Message" />
                    <button className="w-full px-6 py-2 bg-gray-200 text-black text-lg font-medium rounded hover:bg-gray-300 transition">
                        Submit
                    </button>
                </form>
            </div>
        </>


    );
}
