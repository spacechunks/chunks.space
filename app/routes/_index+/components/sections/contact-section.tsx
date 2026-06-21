import Section from "~/components/layout/section";
import {
  TypographyH1,
  TypographyH3,
  TypographyLead,
} from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Link, useActionData, useFetcher } from "react-router";
import logoImage from "~/assets/images/logo.png";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import {
  CheckboxField,
  ErrorList,
  Field,
  TextareaField,
} from "~/components/forms";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { contactSchema } from "~/service/contact.schema";
import { action } from "~/routes/_index+";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { motion, useAnimationControls } from "framer-motion";
import { CheckCircle } from "lucide-react";

const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-script";
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

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

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          action: string;
          theme: "light" | "dark" | "auto";
          size: "normal" | "compact" | "flexible";
          "error-callback": (errorCode: string) => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type ContactSectionProps = {
  turnstileSiteKey: string;
};

function loadTurnstileScript() {
  if (window.turnstile) {
    return Promise.resolve();
  }

  const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);

  if (existingScript) {
    return new Promise<void>((resolve, reject) => {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
    });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_SRC;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.head.append(script);
  });
}

export default function ContactSection({
  turnstileSiteKey,
}: ContactSectionProps) {
  const fetcher = useFetcher<typeof action>();
  const FetcherForm = fetcher.Form;
  const routeActionData = useActionData<typeof action>();
  const actionData = fetcher.data ?? routeActionData;
  const isSubmitting = fetcher.state !== "idle";
  const [hasSentSuccessfully, setHasSentSuccessfully] = useState(false);
  const rocketControls = useAnimationControls();
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const [form, fields] = useForm({
    id: "contact-form",
    constraint: getZodConstraint(contactSchema),
    lastResult: actionData?.result,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactSchema });
    },

    shouldRevalidate: "onBlur",
  });
  const { onSubmit: conformOnSubmit, ...formProps } = getFormProps(form);
  void conformOnSubmit;

  useEffect(() => {
    let cancelled = false;

    async function renderTurnstile() {
      try {
        await loadTurnstileScript();

        const turnstile = window.turnstile;

        if (!turnstile) {
          return;
        }

        if (
          cancelled ||
          !turnstileContainerRef.current ||
          turnstileWidgetIdRef.current
        ) {
          return;
        }

        turnstileWidgetIdRef.current = turnstile.render(
          turnstileContainerRef.current,
          {
            sitekey: turnstileSiteKey,
            action: "contact",
            theme: "light",
            size: "normal",
            "error-callback": (errorCode) => {
              console.warn("Turnstile widget error:", errorCode);
            },
          },
        );
      } catch (error) {
        console.warn("Failed to load Turnstile:", error);
      }
    }

    renderTurnstile();

    return () => {
      cancelled = true;

      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [turnstileSiteKey]);

  useEffect(() => {
    if (actionData?.result?.status === "success") {
      setHasSentSuccessfully(true);
      form.reset();
      toast.success("Thank you for reaching out! We'll get back to you soon.");
      rocketControls.set("initial");
      void rocketControls.start("fly").then(() => {
        rocketControls.set("initial");
      });
    }
  }, [actionData?.result, rocketControls]);

  useEffect(() => {
    if (actionData?.result) {
      window.turnstile?.reset(turnstileWidgetIdRef.current ?? undefined);
    }
  }, [actionData?.result]);

  useEffect(() => {
    if (fetcher.state === "submitting") {
      setHasSentSuccessfully(false);
    }
  }, [fetcher.state]);

  return (
    <Section id="contact">
      <div className="flex w-full max-w-2xl flex-col gap-4">
        <TypographyH1>Contact us</TypographyH1>
        <TypographyLead>
          Have any questions, feedback, or just want to say hi? We'd love to
          hear from you! Feel free to reach out to us!
        </TypographyLead>
      </div>
      <FetcherForm
        className="relative flex flex-col gap-8 rounded-lg bg-wild-sand-100 p-12"
        method="post"
        action="/?index"
        {...formProps}
      >
        <motion.img
          src={logoImage}
          alt="Space Chunks"
          // className="absolute -top-16 right-0 h-28 w-auto md:-top-40 md:h-56"
          className="absolute -top-12 h-28 w-auto md:-top-32 md:h-56"
          variants={rocketVariants}
          initial="initial"
          animate={rocketControls}
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
          <div
            ref={turnstileContainerRef}
            className="w-fit max-w-full overflow-hidden"
          />
        </div>
        <ErrorList id={form.errorId} errors={form.errors} />
        <ErrorList
          id={fields["cf-turnstile-response"].errorId}
          errors={fields["cf-turnstile-response"].errors}
        />
        {hasSentSuccessfully ? (
          <div
            role="status"
            className="flex items-center gap-3 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-mystical-normal"
          >
            <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
            <span>Thanks! Your message was sent successfully.</span>
          </div>
        ) : null}
        <div>
          <Button
            variant="secondary"
            size="lg"
            className="px-16 uppercase"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending" : "Send"}
          </Button>
        </div>
      </FetcherForm>
    </Section>
  );
}
