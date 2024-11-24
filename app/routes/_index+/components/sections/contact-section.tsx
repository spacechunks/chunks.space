import Section from "~/components/layout/section";
import {
  TypographyH1,
  TypographyH3,
  TypographyLead,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Form, Link, useActionData } from "react-router";
import logoImage from "~/assets/images/logo.png";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { CheckboxField, Field, TextareaField } from "~/components/forms";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { contactSchema } from "~/service/contact.schema";
import { action } from "~/routes/_index+";
import { useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const rocketVariants = {
  initial: { right: 0, rotate: 0, opacity: 100 },
  fly: {
    right: -1000,
    rotate: 68,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      right: { delay: 0.5 },
      opacity: { delay: 1.5 },
    },
  },
};

export default function ContactSection() {
  const actionData = useActionData<typeof action>();
  const [form, fields] = useForm({
    id: "contact-form",
    constraint: getZodConstraint(contactSchema),
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactSchema });
    },

    shouldRevalidate: "onBlur",
  });
  const successfullySent = actionData?.result?.status === "success";

  useEffect(() => {
    if (actionData?.result?.status === "success") {
      form.reset();
      toast.success("Thank you for reaching out! We'll get back to you soon.");
    }
  }, [actionData?.result?.status]);

  return (
    <Section id="contact">
      <div className="flex w-full max-w-2xl flex-col gap-4">
        <TypographyH1>Contact us</TypographyH1>
        <TypographyLead>
          Have any questions, feedback, or just want to say hi? We'd love to
          hear from you! Feel free to reach out to us!
        </TypographyLead>
      </div>
      <Form
        className="relative flex flex-col gap-8 rounded-lg bg-wild-sand-100 p-12"
        method="post"
        {...getFormProps(form)}
      >
        <motion.img
          src={logoImage}
          alt="Space Chunks"
          // className="absolute -top-16 right-0 h-28 w-auto md:-top-40 md:h-56"
          className="absolute -top-12 h-28 w-auto md:-top-32 md:h-56"
          variants={rocketVariants}
          initial="initial"
          animate={successfullySent ? "fly" : ""}
        />
        <TypographyH3>Let's chat! Send us a message.</TypographyH3>
        <div className="flex flex-col">
          <Field
            labelProps={{
              children: "Subject",
            }}
            inputProps={{
              ...getInputProps(fields.subject, { type: "text" }),
              placeholder: "General Inquries",
            }}
            errors={fields.subject.errors}
          />

          <div className="flex flex-col gap-4 md:flex-row">
            <Field
              className="w-full"
              labelProps={{
                children: "Name",
              }}
              inputProps={{
                ...getInputProps(fields.name, { type: "text" }),
                placeholder: "Your Name",
              }}
              errors={fields.name.errors}
            />

            <Field
              className="w-full"
              labelProps={{
                children: "E-Mail",
              }}
              inputProps={{
                ...getInputProps(fields.email, { type: "email" }),
                placeholder: "test@example.com",
              }}
              errors={fields.email.errors}
            />
          </div>
          <TextareaField
            labelProps={{ children: "Message" }}
            textareaProps={{
              ...getInputProps(fields.message, { type: "text" }),
              placeholder: "Your message",
              className: "min-h-40 resize-none",
            }}
            errors={fields.message.errors}
          />
          <CheckboxField
            labelProps={{
              children: (
                <>
                  I have read and understood the{" "}
                  <Link to="privacy" className="font-bold hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and agree to its terms.
                </>
              ),
            }}
            buttonProps={getInputProps(fields.privacy, { type: "checkbox" })}
            errors={fields.privacy.errors}
          />
          <input
            type="text"
            name="website"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div>
          <Button variant="secondary" size="lg" className="px-16 uppercase">
            Send
          </Button>
        </div>
      </Form>
    </Section>
  );
}
