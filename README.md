# 🏥 OPD Claim Tracker (Full-Stack Prototype)

A full-stack web application that simulates **OPD insurance claim processing** with automated status handling and real-time tracking.

---

## 🚀 Project Overview

Traditional OPD claim processing is often slow, manual, and inefficient.  
This project demonstrates how a digital system can simplify and automate claim workflows.

Users can submit claim details, and the system automatically assigns a status based on predefined logic — simulating real-world insurance processing.

---

## ✨ Features

- 📝 Submit insurance claims (Patient, Hospital, Amount)
- ⚡ Automated claim status:
  - ✅ Approved
  - ⏳ Pending
  - 🔍 Under Review
- 🆔 Unique Claim ID generation
- 📊 Real-time claim display
- 🎨 Modern UI with status indicators
- 🕒 Timestamp tracking

---

## 🛠 Tech Stack

**Frontend:**
- HTML5  
- CSS3  
- JavaScript  

**Backend:**
- Node.js  
- Express.js  

**Other Tools:**
- REST APIs  
- UUID (for unique IDs)  
- Git & GitHub  

---

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/yashika28062006/opd-claim-tracker.git
cd opd-claim-tracker
2. Run backend
cd backend
npm install
node server.js
3. Run frontend

Open in browser:

frontend/index.html
🔗 API Endpoints
Method	Endpoint	Description
POST	/claim	Submit a new claim
GET	/claims	Get all claims
💡 Problem Solved

This project addresses inefficiencies in manual insurance claim systems by:

Automating claim status decisions
Reducing manual tracking
Improving transparency
🔮 Future Improvements
🤖 AI-based document processing (OCR)
🔐 User authentication system
☁️ Cloud deployment (AWS / GCP)
📱 Mobile-friendly UI
🔄 Real-time updates with WebSockets
👩‍💻 Author

Yashika Sridhar

GitHub: https://github.com/yashika28062006

Fronteend Deployment Link - https://mediclaimtracker.netlify.app/ 

Backend Deployment Link - https://opd-claim-backend.onrender.com
