# 💭 Anonymous Feedback 💭

## 📌 Project Overview  

Built a full-stack anonymous messaging app using Next.js, TypeScript, and MongoDB.
Integrated AuthJS with custom OTP and email verification via Resend for secure authentication.
Used Zod for validation and React Hook Form with Shadcn for a responsive, modern UI.
Enabled message control via a user dashboard with features to accept, reject, and delete messages.

---

## Demo

### 📸 Project Screenshot
<img width="1280" alt="Screenshot 2025-03-23 004147" src="https://github.com/user-attachments/assets/1be8c07c-1622-447c-a160-d3fdbcc21862" />
<img width="1280" alt="Screenshot 2025-03-23 004228" src="https://github.com/user-attachments/assets/2dda7318-452d-4825-ab55-f072781692f7" />
<img width="1280" alt="Screenshot 2025-03-23 004311" src="https://github.com/user-attachments/assets/da3af8bc-1e55-47a3-ace3-88367fb2b192" />


---

## 🌟 Key Features
- 🔐 Authentication (Signup, Signin, Email Verification with Resend)
- 📱 Custom OTP Verification for secure user actions
- 🙋‍♂️ Unique Username Checks to avoid duplicates
- ✉️ Anonymous Message Sending & Receiving
- 📝 Message Updates in real-time
- 🧮 Zod-based Validation for all forms and APIs
- 🎨 Shadcn UI Components with Tailwind CSS
- 🧾 React Hook Form Integration for smooth form experience
- 🧑‍💻 User Dashboard with full Message Management
- ✅ Accept/Decline Messages with toggle
- 🗑️ Delete Messages with instant feedback
- 🍃 MongoDB Integration for scalable data handling
- 🧪 Production-ready & Fully Responsive UI
- 🔐 Secure API Routes & AuthJS Session Handling

---

## 🚀 Tools & Technologies  

This project leverages the latest tools and frameworks for modern development:  

- **Next.js**: Full-stack React framework with API routes
- **TypeScript**: Ensures type safety across the codebase
- **MongoDB & Mongoose**: Flexible and scalable database solutions  
- **Zod**: Schema-based form & API validation 
- **React Hook Form**: Lightweight form management 
- **TailwindCSS & Shadcn UI**: Beautiful, responsive design  
- **AuthJS**: Authentication library with multiple providers

---

### Set Up Environment Variables  

Create a `.env` file in the root of your project and configure these variables:  

```plaintext  
MONGODB_URI=""
RESEND_API_KEY=""
NEXTAUTH_SECRET=""
```  
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
