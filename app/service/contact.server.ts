import { ContactForm } from "~/service/contact.schema";
import { EmbedBuilder, WebhookClient } from "discord.js";

const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1244581112508842075/alIBT6js4idJKS4gw_mvboa81y5st4Iy-c9SGmk00eU14Nsu_oO89BycC5COufCAAD4Y",
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
