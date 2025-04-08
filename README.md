# 🌐 Web-Based Multi-language Code Editor

> **Code And Diee** — a stylish, browser-based coding playground built with HTML, CSS, and JavaScript, supporting real-time execution of C, C++, Python, Node.js, and PHP code.

![image](https://github.com/user-attachments/assets/90f5b721-8479-4bea-bc46-d38e913c6f98)


---

## 🚀 Features

- ✍️ **ACE Editor Integration** — rich syntax highlighting, theming (Monokai), and customizable editor.
- 🌐 **Multi-language Support** — execute C, C++, Python, Node.js, and PHP code directly from the browser.
- 🧠 **Smart Language Switching** — seamless switching between languages using a dropdown selector.
- 📄 **File Uploading** — upload `.c`, `.cpp`, `.py`, `.php`, or `.js` files to edit and run in-browser.
- ⚙️ **Custom Compiler Backend** — communicates with a backend compiler (via `/ide/app/compiler.php`).
- 🖼️ **Error Display Panel** — shows error code snippets and output side-by-side for easier debugging.
- ✨ **Modern UI/UX** — custom CSS styling with a vibrant theme and glowing text effects.

---

## 📁 Project Structure

```plaintext
├── index.html             # Main HTML structure
├── css/
│   └── style.css          # Modern UI styling with glowing effects
├── js/
│   └── ide.js             # JavaScript logic (ACE setup, language switching, execution, uploads)
├── lib/
│   ├── ace.js             # ACE Editor library (via CDN)
│   └── theme-monokai.js   # Monokai theme for ACE Editor
└── backend/
    └── compiler.php       # (Not included) Expected compiler backend for code execution





---

## 🛠️ Technologies Used

- **Frontend:**
  - HTML5
  - CSS3 (custom styling, glassmorphism)
  - JavaScript (DOM, Fetch API, jQuery)
  - [ACE Editor](https://ace.c9.io/) for code editing

- **Backend (Expected):**
  - PHP script for compiling code on server
  - Support for server-side file uploads (via `/upload` endpoint)

---
```

## ⚙️ How It Works

1. **Choose your language** from the dropdown.
2. **Write or upload** your code using the editor or upload button.
3. **Click "Execute Code"** — the code is sent to the server for compilation.
4. **View results/output** in the dedicated output box or error panel.
---
Run a local server You can use Live Server in VS Code or:

bash
Copy
Edit
php -S localhost:3000

## 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/multilang-web-ide.git
   cd multilang-web-ide 

Backend Requirements Ensure you have a PHP server with the following:

compiler.php at /ide/app/

A /upload endpoint for file handling (returning JSON)

Open in Browser

Arduino
Copy
Edit
http://localhost:3000/


# 📸 Screenshots
Code Editor	Output


![image](https://github.com/user-attachments/assets/f89c4a00-255b-4bb2-9d02-2f5b9db23da2)


Error Display

![image](https://github.com/user-attachments/assets/8a19b575-0b07-46a5-a08e-7b08ede36e96)

📌 To Do
 Integrate WebSocket for real-time collaboration

 Add authentication and user file storage

 Dockerize the backend for portable deployment

 Improve mobile responsiveness

🧑‍💻 Author
Athul Raj K K
🚀 CSE | AI/ML Enthusiast
📧 athul0770@gmail.com
🔗 LinkedIn
🔗 GitHub

📄 License
This project is open-source and available under the MIT License.

