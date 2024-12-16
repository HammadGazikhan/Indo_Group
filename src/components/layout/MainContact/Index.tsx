/** @format */

"use client";
import {
  Checkbox,
  Input,
  Label,
  Textarea,
  useMediaQuery,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useState } from "react";
import { theme } from "../../../constants/theme";
import PrimaryButton from "../../inputs/primaryButton/Index";
import { FaArrowRightLong } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  image: ImageProps;
  heading: string;
  button: ButtonProps;
};

export type Contact7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContactUs = (props: Contact7Props) => {
  const { image, heading, button } = {
    ...Contact7Defaults,
    ...props,
  } as Props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");

  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
    false
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation
    if (!name || !email || !phone_number || !selectedService || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!acceptTerms) {
      toast.error("You must accept the Terms & Conditions.");
      return;
    }

    // EmailJS Configuration
    const serviceID = "service_py8eg29"; // Replace with your EmailJS service ID
    const templateID = "template_y1hi0ow"; // Replace with your EmailJS template ID
    const publicKey = "8FVoCmWi63PSx8lPJ"; // Replace with your EmailJS public key

    const templateParams = {
      name,
      email,
      phone_number,
      selectedService,
      message,
    };

    // Sending email via EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone_number("");
        setSelectedService("");
        setMessage("");
        setAcceptTerms(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };
  const md = useMediaQuery("(max-width:900px)");

  return (
    <section id='relume' className='px-[5%] py-20 md:py-24 lg:py-28'>
      <div
        style={{ fontFamily: theme.typography.fontFamily }}
        className='container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20'
      >
        <div>
          <div className='rb-6 mb-6 md:mb-8'>
            <h2
              style={{
                fontFamily: theme.typography.fontFamilyHeading,
                fontWeight: theme.typography.fontWeight.ExtraBold,
                background: theme.colors.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className='rb-5 mb-5 text-[2.2rem] md:text-[2.7rem]  font-bold md:mb-6  lg:text-[3.2rem]'
            >
              {heading}
            </h2>
          </div>
          <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-y-10 gap-6 lg:grid-cols-2'>
              <div className='w-full h-[48px] items-center'>
                <Label
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.regular,
                  }}
                  className=' ms-1 text-[1rem] md:text-[1.125rem]'
                  htmlFor='name'
                >
                  Name{" "}
                  <span
                    style={{
                      background: theme.colors.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    *
                  </span>
                </Label>
                <Input
                  type='text'
                  id='name'
                  placeholder='Enter name'
                  className='w-full rounded bg-[#FEE2E263] focus:shadow-medium focus:bg-transparent border-[2px]'
                  style={{ borderColor: theme.colors.border }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className='w-full h-[48px] items-center'>
                <Label
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.regular,
                  }}
                  className=' ms-1 text-[1rem] md:text-[1.125rem]'
                  htmlFor='name2'
                >
                  Email{" "}
                  <span
                    style={{
                      background: theme.colors.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    *
                  </span>
                </Label>
                <Input
                  type='email'
                  placeholder='Enter email'
                  id='email'
                  className='w-full rounded bg-[#FEE2E263] focus:shadow-medium focus:bg-transparent border-[2px]'
                  style={{ borderColor: theme.colors.border }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='w-full h-[48px] items-center'>
                <Label
                  htmlFor='number'
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.regular,
                  }}
                  className=' ms-1 text-[1rem] md:text-[1.125rem]'
                >
                  Phone No{" "}
                  <span
                    style={{
                      background: theme.colors.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    *
                  </span>
                </Label>
                <Input
                  type='number'
                  id='phone_number'
                  placeholder='Enter phone number'
                  className='w-full rounded bg-[#FEE2E263] focus:shadow-medium focus:bg-transparent border-[2px]'
                  style={{ borderColor: theme.colors.border }}
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </div>

              <div className='w-full h-[48px] items-center'>
                <Label
                  htmlFor='serivces'
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.regular,
                  }}
                  className=' ms-1 text-[1rem] md:text-[1.125rem]'
                >
                  Services{" "}
                  <span
                    style={{
                      background: theme.colors.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    *
                  </span>
                </Label>
                <select
                  id='services'
                  className='w-full h-[48px] rounded bg-[#FEE2E263] active:border-[red] focus:shadow-medium focus:bg-transparent border-[2px]'
                  style={{ borderColor: theme.colors.border }}
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value='' disabled>
                    Select Service
                  </option>
                  <option value='indo_manpower'>Indo Manpower</option>
                  <option value='indo_electricals'>Indo Electricals</option>
                  <option value='indo_solar'>Indo Solar Solutions</option>
                  <option value='indo_construction'>
                    Indo Construction & Developers
                  </option>
                </select>
              </div>
            </div>

            <div className='w-full items-center'>
              <Label
                htmlFor='message'
                style={{
                  color: theme.colors.dark,
                  fontWeight: theme.typography.fontWeight.regular,
                }}
                className=' ms-1 text-[1rem] md:text-[1.125rem]'
              >
                Message{" "}
                <span
                  style={{
                    background: theme.colors.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  *
                </span>
              </Label>
              <Textarea
                id='message'
                placeholder='Type your message...'
                style={{ borderColor: theme.colors.border }}
                className='w-full min-h-[11.25rem] bg-[#FEE2E263] focus:shadow-medium focus:bg-transparent rounded border-[2px]'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className=' flex items-center space-x-2 text-sm '>
              <Checkbox
                id='terms'
                className={acceptTerms ? "!bg-red-500 border-red-500" : ""}
                checked={acceptTerms}
                onCheckedChange={setAcceptTerms}
              />
              <Label
                style={{ fontWeight: theme.typography.fontWeight.regular }}
                htmlFor='terms'
                className='cursor-pointer ms-1 text-[1rem] md:text-[1.125rem]'
              >
                I accept the{" "}
                <a
                  style={{
                    fontWeight: theme.typography.fontWeight.medium,
                  }}
                  className='ms-1 text-[1rem] text-red-600 md:text-[1.125rem] !underline'
                  href='#'
                >
                  Terms & Conditions
                </a>{" "}
                <span
                  style={{
                    background: theme.colors.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  *
                </span>
              </Label>
            </div>

            {/* Submit Button */}
            <div className='flex justify-start'>
              <PrimaryButton
                type='submit'
                sx={{
                  width: md ? "160px" : "154px",
                  height: md ? "45px" : "51px",
                  fontSize: md ? "16px" : "18px",
                  fontWeight: theme.typography.fontWeight.medium,
                }}
              >
                {button.title}
                <FaArrowRightLong
                  style={{
                    marginLeft: "2px",
                    color: theme.colors.secondary,
                  }}
                />
              </PrimaryButton>
            </div>
          </form>
        </div>
        <div>
          <img
            src={image.src}
            alt={image.alt}
            className='size-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export const Contact7Defaults: Contact7Props = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  heading: "Send Us a Message",
  button: { title: "Submit" },
};
