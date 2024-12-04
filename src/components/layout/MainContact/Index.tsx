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
    console.log({
      name,
      phone_number,
      email,
      selectedService,
      message,
      acceptTerms,
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
              className='rb-5 mb-5 text-[2rem] md:text-[2.25rem] leading-8 font-bold md:mb-6  lg:text-8xl'
            >
              {heading}
            </h2>
          </div>
          <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
            {/* Form Fields Container */}
            <div className='grid grid-cols-1 gap-y-10 gap-6 lg:grid-cols-2'>
              {/* Name Field */}
              <div className='w-full h-[48px] items-center'>
                <Label
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.regular,
                  }}
                  className=' ms-1 text-[1rem]'
                  htmlFor='name'
                >
                  Name
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

              {/* Another Name Field */}
              <div className='w-full h-[48px] items-center'>
                <Label
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.regular,
                  }}
                  className=' ms-1 text-[1rem]'
                  htmlFor='name2'
                >
                  Email
                </Label>
                <Input
                  type='text'
                  placeholder='Enter email'
                  id='email'
                  className='w-full rounded bg-[#FEE2E263] focus:shadow-medium focus:bg-transparent border-[2px]'
                  style={{ borderColor: theme.colors.border }}
                  value={email}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email Field */}
              <div className='w-full h-[48px] items-center'>
                <Label
                  htmlFor='email'
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.regular,
                  }}
                  className=' ms-1 text-[1rem]'
                >
                  Phone No
                </Label>
                <Input
                  type='number'
                  id='phone_number'
                  placeholder='Enter phone number'
                  className='w-full rounded bg-[#FEE2E263] focus:shadow-medium focus:bg-transparent border-[2px]'
                  style={{ borderColor: theme.colors.border }}
                  value={phone_number}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Another Email Field */}
              <div className='w-full h-[48px] items-center'>
                <Label
                  htmlFor='email2'
                  style={{
                    color: theme.colors.dark,
                    fontWeight: theme.typography.fontWeight.regular,
                  }}
                  className=' ms-1 text-[1rem]'
                >
                  Services
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

            {/* Message Field */}
            <div className='w-full items-center'>
              <Label
                htmlFor='message'
                style={{
                  color: theme.colors.dark,
                  fontWeight: theme.typography.fontWeight.regular,
                }}
                className=' ms-1 text-[1rem]'
              >
                Message
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

            {/* Terms Checkbox */}
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
                className='cursor-pointer ms-1 text-[1rem]'
              >
                I accept the{" "}
                <a
                  style={{
                    fontWeight: theme.typography.fontWeight.medium,
                    color: "red",
                    // background: theme.colors.gradient,
                    // WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                  }}
                  className='ms-1 text-[1rem] !underline'
                  href='#'
                >
                  Terms & Conditions
                </a>
              </Label>
            </div>

            {/* Submit Button */}
            <div className='flex justify-start'>
              <PrimaryButton
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
