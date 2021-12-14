const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { Customer } = require("./models/Customer");

app.use(bodyParser.json());

app.get("/customers", async (req, resp) => {
  const customers = await Customer.findAll({
    raw: true,
    attributes: ["id", "name", "location"],
  });

  resp.status(200).send(customers);
});

app.post("/customers", async (req, resp) => {
  const { name, location } = req.body;
  const newCustomer = await Customer.create({
    name,
    location,
  });

  resp.status(200).send(newCustomer);
});

app.get("/customers/:id", async (req, resp) => {
  const { id: rawId } = req.params;
  const id = parseInt(rawId);

  const customer = await Customer.findAll({
    raw: true,
    attributes: ["id", "name", "location"],
    where: {
      id,
    },
  });

  resp.status(200).send(customer);
});

app.delete("/customers/:id", async (req, resp) => {
  const { id: rawId } = req.params;
  const id = parseInt(rawId);

  try {
    await Customer.destroy({
      where: {
        id,
      },
    });
    resp.status(200).send({ id });
  } catch (error) {
    resp
      .status(error.status)
      .send({ status: error.status, message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port: 3000");
});

// const init = async () => {
//   const customers = await Customer.findAll({
//     raw: true,
//     attributes: ["id", "name"],
//     where: {
//       location: "london",
//     },
//   });
//   console.log(customers);
// };

// init();
