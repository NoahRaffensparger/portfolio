import { useState } from "react";

export default function InquiryForm() {

    const [showSuccess, setShowSuccess] = useState(false);

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone_number, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                message,
                phone_number,
            }),
        });

        const data = await response.json();
        console.log(data.message);
        setLoading(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
    };

    return (
        <>
            <div className="bg-gray-300 pt-12 pb-8 px-4 xl:h-[800px] xl:flex xl:flex-col xl:place-content-center">
                <h1 className="text-center text-4xl font-semibold pb-4 text-black/80">let's talk!</h1>
                <form onSubmit={handleSubmit} className="mx-4 bg-white rounded-xl p-4 lg:w-3/5 mx-auto">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-200 border-1 border-gray-300 px-4 py-3 mb-6 w-full"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 border-1 border-gray-300 px-4 py-3 mb-6 w-full"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone (Optional)"
                        value={phone_number}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-gray-200 border-1 border-gray-300 px-4 py-3 mb-6 w-full"
                    />
                    <input
                        type="text"
                        rows="4"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-gray-200 border-1 border-gray-300 px-4 pt-3 pb-16 mb-6 w-full"
                        required
                    />

                    <button type='submit' className="w-full px-6 py-2 bg-gray-200 text-black text-lg font-medium rounded hover:bg-gray-300 transition flex justify-center">
                        {loading ? (
                            <img src='/loading.png' className="h-[28px] animate-spin px-auto"></img>
                        ) : (
                            <div>Submit</div>
                        )
                        }
                    </button>
                </form>

                {showSuccess && (
                    <div className="fixed top-24 left-1/2 -translate-x-[95px] bg-white p-2 rounded-lg text-lg fadeout animate-fade">
                        ✅ Sent successfully!
                    </div>
                )}
            </div>
        </>
    );
}
