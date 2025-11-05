import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/webhooks";
import { internal } from "./_generated/api";

const http = httpRouter();


const validatePayload = async (req: Request): Promise<WebhookEvent | undefined> => {
  const payload = await req.text();

  const svixHeaders = {
    "svix-id": req.headers.get("svix-id")!,
    "svix-timestamp": req.headers.get("svix-timestamp")!,
    "svix-signature": req.headers.get("svix-signature")!,
  };

  const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET||"");

  try {
    const event = webhook.verify(payload, svixHeaders) as WebhookEvent;
    return event;
  } catch (err) {
    console.error("Clerk webhook could not be verified:", err);
    return undefined;
  }
};


const handleClerkWebhook = httpAction(async (ctx, req: Request) => {
  const event = await validatePayload(req);

  if (!event) {
    return new Response("Invalid payload", { status: 400 });
  }


  switch (event.type) {
    case "user.created": {
      // Check if user already exists
      const existingUser = await ctx.runQuery(internal.user.get, {
        clerkId: event.data.id,
      });

      if (existingUser) {
        console.log(`User already exists: ${event.data.id}`);
        break;
      }
    }

    case "user.updated": {
      console.log(`🔄 Updating user: ${event.data.id}`);

     
      await ctx.runMutation(internal.user.create, {
        username: `${event.data.first_name} ${event.data.last_name}` || "",
        imageUrl: event.data.image_url || "",
        clerkId: event.data.id,
        email: event.data.email_addresses[0]?.email_address || "",
      });
     
    }
      default:
      console.log(`⚠️ Unhandled event type: ${event.type}`);
    
  }

  return new Response("OK", { status: 200 });
});



http.route({
  path: "/clerk-users-webhook",
  method: "POST",
  handler: handleClerkWebhook,
});



export default http;
