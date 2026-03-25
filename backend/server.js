import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(express.json());

let claims = [];

// Simple approval logic
function getClaimStatus(amount) {
  if (amount < 1000) return "Approved";
  if (amount < 5000) return "Pending";
  return "Under Review";
}

// POST claim
app.post("/claim", (req, res) => {
  const { name, hospital, amount } = req.body;

  if (!name || !hospital || !amount) {
    return res.status(400).json({ message: "All fields required" });
  }

  const claim = {
    id: uuidv4(),
    name,
    hospital,
    amount,
    status: getClaimStatus(amount),
    createdAt: new Date()
  };

  claims.push(claim);
  res.json(claim);
});

// GET all claims
app.get("/claims", (req, res) => {
  res.json(claims);
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});