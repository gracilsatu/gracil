import dotenv from "dotenv";
import Fastify from "fastify";

dotenv.config();

const fastify = Fastify({
  logger: true
});

fastify.get("/health", async () => {
  return { status: "ok" };
});

fastify.get("/api/products", async () => {
  return {
    items: [],
    message: "Placeholder product list. Integrate with Qiospay/Tokovoucher/manual tables."
  };
});

fastify.post("/api/orders", async (request) => {
  const { productId, customer, paymentMethod } = request.body ?? {};

  return {
    orderId: "ORD-PLACEHOLDER",
    productId,
    customer,
    paymentMethod,
    status: "PENDING_PAYMENT"
  };
});

fastify.post("/api/webhooks/ipaymu", async (request) => {
  return {
    received: true,
    payload: request.body ?? null
  };
});

const port = Number(process.env.PORT ?? 4000);

const start = async () => {
  try {
    await fastify.listen({ port, host: "0.0.0.0" });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
