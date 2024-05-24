import Section from "~/components/layout/section";
import {
  TypographyH1,
  TypographyH3,
  TypographyLead,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Form, Link } from "@remix-run/react";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Checkbox } from "~/components/ui/checkbox";
import logoImage from "~/assets/images/logo.png";

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="flex w-full max-w-2xl flex-col gap-4">
        <TypographyH1>Contact us</TypographyH1>
        <TypographyLead>
          Have any questions, feedback, or just want to say hi? We'd love to
          hear from you! Feel free to reach out to us!
        </TypographyLead>
      </div>
      <Form className="bg-wild-sand-100 relative flex flex-col gap-8 rounded-lg p-12">
        <img
          src={logoImage}
          alt="Space Chunks"
          className="absolute -top-40 right-0 h-56 w-auto"
        />
        <TypographyH3>Let's chat! Send us a message.</TypographyH3>
        <div className="flex flex-col gap-4">
          <div>
            <Label>Subject</Label>
            <Input name="subject" placeholder="General Inquries" />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <Label>Name</Label>
              <Input name="name" placeholder="Your Name" />
            </div>
            <div className="w-full">
              <Label>E-Mail</Label>
              <Input name="email" type="email" placeholder="name@example.com" />
            </div>
          </div>
          <div className="w-full">
            <Label>Message</Label>
            <Textarea
              name="message"
              placeholder="Your message"
              className="min-h-40 resize-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox />
            <Label>
              I have read and understood the{" "}
              <Link to="privacy" className="font-bold hover:underline">
                Privacy Policy
              </Link>{" "}
              and agree to its terms.
            </Label>
          </div>
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
