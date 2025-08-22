# Chat Circle 🎭💬

**Chat Circle** is a fun and modern social platform build from scratch where users can log in with their own avatars, create topic-based chat rooms, and engage in meaningful discussions. Built with **React (frontend)** and **Django REST Framework (backend)**, it provides real-time community experiences with room management, authentication, and dynamic messaging.

---

## ✨ Features

- 🔐 **Authentication & Avatars**
    
    - Secure session-based login/logout
        
    - Choose your own avatar when signing in
        
- 🏠 **Rooms & Discussions**
    
    - Create rooms with **title, description, and topic(s)** (like hashtags)
        
    - Search or discover rooms by **topics of interest**
        
    - See all participants currently in a room
        
    - Only logged-in users can create rooms or post messages
        
- 💬 **Messaging**
    
    - Add new messages in real time
        
    - Delete your own messages
        
    - Topic-based discussions for better organization
        
- 👤 **Profiles**
    
    - View your own profile page
        
    - See all rooms you’ve **created** or **participated in**
        
    - Discover new people and view their activities (rooms and messages)
        
- 🌍 **Discovery**
    
    - Browse topics and join communities
        
    - Find new people based on rooms and conversations
        
- 🎨 **Modern UI**
    
    - Clean, fun, and responsive design with Tailwind CSS
        
    - Smooth navigation with React Router
        

---

## 🛠️ Tech Stack

### Frontend

- **React** (Create React App)
    
- **Tailwind CSS** (modern styling)
    
- **React Router** (navigation)
    
- **Axios** (API integration)
    

### Backend

- **Django** (Python web framework)
    
- **Django REST Framework (DRF)** (custom API development)
    
- **Django Sessions** for authentication
    
- **SQLite/PostgreSQL** (database)


---

## 📂 Project Structure

```
chat-circle/
├── backend/                     # Django backend
│   ├── chatcircle/              # Django project (settings, urls, wsgi)
│   ├── api/                     # Custom REST API app
│   │   ├── models.py            # Models: User, Room, Message, Topic
│   │   ├── views.py             # API views
│   │   ├── serializers.py       # DRF serializers
│   │   └── urls.py              # API routes
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/                    # React frontend
│   ├── public/
│   └── src/
│       ├── components/          # Navbar, RoomCard, ChatBox, etc.
│       ├── pages/               # Login, Rooms, Profile, ChatRoom
│       ├── services/            # API integration (axios calls)
│       ├── App.js
│       └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│
└── README.md
```
`

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/fahadNoufal/chat-circle.git
cd chat-circle
```

---

## 🤝 Contributing

1. Fork this repo
    
2. Create a feature branch: `git checkout -b feature-name`
    
3. Commit changes: `git commit -m "Added feature X"`
    
4. Push branch: `git push origin feature-name`
    
5. Open a Pull Request
    

---

## 🙌 Acknowledgements

- React
    
- Redux
    
- Tailwind CSS
    
- GSAP
    
- Django
    
- Django REST Framework
    
- PythonAnywhere

---

🔥 With **Chat Circle**, you’re not just exploring a chat app — you’re creating a place where like-minded people gather to **connect, share, discover, and discuss** around their favorite topics.
