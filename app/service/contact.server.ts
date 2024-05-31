import { ContactForm } from "~/service/contact.schema";
import { EmbedBuilder, WebhookClient } from "discord.js";
import * as process from "node:process";

const webhookClient = new WebhookClient({
  url: process.env.CONTACT_DISCORD_WEBHOOK,
});

export async function logContactForm(contactForm: ContactForm) {
  console.log("Contact form submitted: ", contactForm);
  const embed = new EmbedBuilder()
    .setTitle("Contact form submitted")
    .addFields({
      name: "Subject",
      value: contactForm.subject,
    })
    .addFields({
      name: "Name",
      value: contactForm.name,
    })
    .addFields({
      name: "Email",
      value: contactForm.email,
    })
    .addFields({
      name: "Message",
      value: contactForm.message,
    })
    .setColor("#0099ff")
    .setTimestamp();

  await webhookClient.send({
    embeds: [embed],
  });
}
