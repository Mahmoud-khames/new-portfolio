import UseSectionsSelector from '../hooks/useSectionsSelector';
import { motion } from "framer-motion";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';

const Contact = () => {
    const { ref } = UseSectionsSelector("Contact");
    const [senderEmail, setSenderEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        const templateParams = {
            senderEmail: senderEmail, // يربط المتغير بالقالب في EmailJS
            message: message,
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,  // استبدله بـ Service ID من EmailJS
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // استخدم الـ Template ID من EmailJS
                templateParams,
                import.meta.env.VITE_EMAILJS_USER_ID // استبدله بـ User ID من EmailJS
            )
            .then(() => {
                setSuccess(true);
                setSenderEmail("");
                setMessage("");
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    };

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:mahmoudkhames.dev@gmail.com">
                    mahmoudkhames.dev@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
                <input
                    className="h-14 px-4 rounded-lg borderBlack bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none  transition-all"
                    name="senderEmail"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none  transition-all" 
                    name="message"
                    placeholder="Your message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={5000}
                />
                <SubmitBtn loading={loading} />
                {loading && <p className="text-blue-500 mt-2">Sending...</p>}
                {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
                {error && <p className="text-red-500 mt-2">Failed to send message. Try again.</p>}
            </form>
        </motion.section>
    );
};

export default Contact;
