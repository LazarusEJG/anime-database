import "../aboutbottom/AboutBottom.css"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "bbd4f395-bea6-46ea-aefd-fd35f560ea08");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? toast.success("Email Sent!", {
            style: {
                border: '1px solid rgba(124, 58, 237, 0.4)',
                padding: '16px',
                color: 'rgba(124, 58, 237, 0.4)',
                background: '#07070F'
            }, iconTheme: {
                primary: 'rgba(124, 58, 237, 0.4)',
                secondary: '#FFFAEE',
            }
        }) : toast.error("Error"), {
            style: {
                border: '1px solid rgba(124, 58, 237, 0.4)',
                padding: '16px',
                color: 'rgba(124, 58, 237, 0.4)',
                background: '#07070F'
            }, iconTheme: {
                primary: 'rgba(124, 58, 237, 0.4)',
                secondary: '#FFFAEE',
            }
        });
    };

    return (
        <div>
            <Toaster
                position="bottom-left"

            />
            <form id="contact-form" onSubmit={onSubmit}>
                <p>
                    <label className="section-label" for="name">Name:</label>
                    <input className="about-text-area" type="text" name="name" required />
                </p>
                <p>
                    <label className="section-label" for="email">Email:</label>
                    <input className="about-text-area" type="email" name="email" required />
                </p>
                <p>
                    <label className="section-label" for="message">Message:</label>
                    <textarea className="about-text-area" name="message" required></textarea>
                </p>
                <p><button id="about-button" type="submit">Submit</button></p>
            </form>
        </div>
    )
}

export default Contact