const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IwUguSEYW0seHIDl2fSbSSozTGk0uin28hkBVvYskuZj8evXEDlCzRD047uHZ4rey5GqRntzK8lFx6q3srhP3bf00nfnM1trH");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("helo world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);









