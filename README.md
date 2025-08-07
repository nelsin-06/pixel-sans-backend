# Santipage Backend

An intelligent blog content generation system that combines AI-powered workflows with YouTube video transcription to automatically create blog posts.

## 🚀 Features

- **Automated Content Generation**: Create blog posts using AI-powered n8n workflows
- **YouTube Video Transcription**: Extract content from YouTube videos using OpenAI Whisper
- **RESTful API**: Complete CRUD operations for blog post management
- **Intelligent Content Processing**: Generate clickbait titles, extract images, and create structured content
- **Scalable Architecture**: Built with NestJS, MongoDB, and Docker support

## 🛠️ Technology Stack

- **Backend**: NestJS (Node.js/TypeScript)
- **Database**: MongoDB with Mongoose
- **AI Integration**: OpenAI Whisper API for transcription
- **Automation**: n8n workflows for content generation
- **Media Processing**: youtube-dl-exec, FFmpeg
- **Containerization**: Docker & Docker Compose
- **Validation**: class-validator, class-transformer

## 📋 Project Overview

This project is a backend service for a blog, built with NestJS. It provides APIs for managing blog posts, and includes a module for transcribing YouTube videos to generate content. The project also leverages n8n workflows to automate content creation.

## 🤖 n8n Workflows

The project uses n8n for automating content creation through two main workflows:

### 📈 Generate Post Clickbait

Automates the creation of engaging blog posts with AI-generated content and images.

**Workflow Steps:**
1. **Idea Generation**: LLM generates diverse blog post ideas
2. **Idea Splitting**: Individual processing of each generated idea
3. **Parallel Content Creation**:
   - **Image Generation**: Identifies main topics and fetches relevant images from free sources
   - **Content Creation**: Generates complete blog post content
4. **Integration**: Merges content and images, sends to backend API for post creation

### 🎥 Generator Post Blog from Source

Creates blog posts from YouTube video content using AI transcription and content generation.

**Workflow Steps:**
1. **Channel Research**: Search the best videogames YouTube channels
2. **Video Selection**: Selects 5 most recent videos from target channels
3. **Data Extraction**: Retrieves channel, playlist, and video metadata via YouTube API
4. **Video Processing**:
   - Downloads video audio (`.m4a` format)
   - Transcribes using OpenAI Whisper API
   - Returns text transcription
5. **Content Generation Pipeline**:
   - Feeds transcription + video data to LLM for idea generation
   - Creates structured sections for each idea
   - Generates complete blog post content
6. **Post Creation**: Sanitizes content and creates final blog post via backend API

## 🔌 API Endpoints

### Posts Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/post` | Create a new blog post |
| `GET` | `/post` | Retrieve paginated list of posts |
| `GET` | `/post/:id` | Get specific post by ID |
| `PATCH` | `/post/:id` | Update existing post |
| `DELETE` | `/post/:id` | Delete post |

### Video Transcription

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/transcription-videos/transcribe` | Transcribe single YouTube video |
| `POST` | `/transcription-videos/transcribe-multiple` | Transcribe multiple videos |

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=mongodb://localhost:27017/santipage

# API Keys
OPENAI_API_KEY=your_openai_api_key

# Server Configuration
PORT=8080
ENV=development
```

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local or cloud instance)
- **FFmpeg** (for audio processing)
- **Docker** (optional, for containerized deployment)

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

```

### Docker Deployment

```bash
# Start all services (backend + n8n)
docker compose up --build

# View logs
docker compose logs -f backend

```

### n8n Setup

Access n8n at `http://localhost:5678` after running docker compose. Import the workflow files from the `n8n/workflows/` directory.

## 📁 Project Structure

```
src/
├── common/           # Shared utilities and helpers
├── config/           # Environment configuration
├── database/         # Database connection setup
├── post/            # Blog post CRUD operations
└── transcription-videos/  # YouTube transcription service
```

## 🔧 Development Features

- **Global Exception Filter**: Consistent error handling across all endpoints
- **Response Interceptor**: Standardized API response format
- **Input Validation**: Comprehensive DTOs with class-validator
- **Pagination Support**: Built-in pagination for post listings
- **Type Safety**: Full TypeScript implementation

## 📝 License

This project is licensed under the UNLICENSED license.

---

## 🤝 Author

**Nelson Gallego**  
[GitHub](https://github.com/nelsin-06)  
[LinkedIn](https://www.linkedin.com/in/nelson-gallego-tec-dev)

---