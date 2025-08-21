import  { useRef, useState, FormEvent } from "react"; // Import FormEvent
import InputComponent from "../../utils/InputComponent/InputComponent";
import TextAreaComponent from "../../utils/TextAreaComponent/TextAreaComponent";
import styled from "styled-components";
// Import the EmailJS SDK
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const FormComponent = () => {
  // Create a ref for the form with HTMLFormElement type
  const form = useRef<HTMLFormElement>(null);
  // State to track loading status for the button
  const [isSending, setIsSending] = useState<boolean>(false);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

  console.log(serviceID, templateID, publicKey);

  // Function to handle form submission with proper event typing
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Check if form.current exists before proceeding
    if (!form.current) {
      toast.error("Form reference is not available.");
      return;
    }

    setIsSending(true); // Start loading

    // Show a toast that sending is in progress
    const toastId = toast.loading("Sending your message...");

    // Use form.current instead of form.current (which is now guaranteed to be HTMLFormElement | null)
    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          // Update the loading toast to success
          toast.update(toastId, {
            render: "Message sent successfully!",
            type: "success",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: true,
          });
          form.current?.reset(); // Safely reset the form
        },
        (error) => {
          console.log("FAILED...", error, error.text);
          // Update the loading toast to error
          toast.update(toastId, {
            render: "Failed to send message. Please try again.",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            closeButton: true,
          });
        }
      )
      .finally(() => {
        // This runs whether the request succeeds or fails
        setIsSending(false); // Stop loading
      });
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <ContactUsText data-aos="fade-up" data-aos-once="true">
        Contact Us
      </ContactUsText>
      {/* Add ref and onSubmit to the form element */}
      <form ref={form} onSubmit={sendEmail}>
        {/* New Field for Title */}
        <InputComponent
          placeholder={"Message Title"}
          label={""}
          name={"title"}
          id={"title"}
          type={"text"}
          cName={"form-input my-3"}
          hasLabel={false}
          style={{
            width: "93%",
          }}
        />

        <InputComponent
          placeholder={"Name"}
          label={""}
          name={"name"}
          id={"name"}
          type={"text"}
          cName={"form-input my-3"}
          hasLabel={false}
          style={{
            width: "93%",
          }}
        />

        <InputComponent
          placeholder={"Email Address"}
          label={""}
          name={"email"}
          id={"email"}
          type={"email"}
          cName={"form-input my-3"}
          hasLabel={false}
          style={{
            width: "93%",
          }}
        />

        <TextAreaComponent
          placeholder={"Message"}
          label={"description"}
          name={"message"}
          id={"message"}
          cName={"form-input "}
          style={{
            width: "93%",
          }}
        />

        <ButtonComponent type="submit" disabled={isSending}>
          {isSending ? "Sending Message..." : "Send Message"}
        </ButtonComponent>
      </form>
    </div>
  );
};

export default FormComponent;

const ButtonComponent = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 84px;
  gap: 10px;
  font-size: 16px;
  width: 100%;
  height: 80px;
  color: #ffffff;
  background: #273079;
  border-radius: 10px;
  margin-top: 40px;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    font-size: 25px;
    padding: 28px 84px;
  }

  &:hover:not(:disabled) {
    scale: 0.9;
  }
`;

const ContactUsText = styled.h3`
  max-width: 510px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: #000000;

  @media (min-width: 769px) {
    font-size: 60px;
    line-height: 58px;
  }
`;
