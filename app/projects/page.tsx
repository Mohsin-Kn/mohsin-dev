import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCard from "../components/project-card"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  My <span className="gradient-text">Projects</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  A showcase of my work and personal projects. Each one represents a unique challenge and learning experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 pb-24 md:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Company Projects */}
                <ProjectCard
                  title="Real-Time Golf Ball Detection and Tracking App"
                  description="Find My Ball is a mobile-integrated tool that detects and tracks golf balls in real time, even in cluttered environments. It uses a custom-trained YOLO model optimized for lightweight mobile deployment on iOS."
                  image="/assets/fmb.png?height=400&width=600"
                  company="AxcelerateAI"
                  tags={["RoboFlow", "Ultralytics", "CoreML"]}
                />

                <ProjectCard
                  title="Spanish Real Estate Ad Classifier"
                  description="Developed an end-to-end text classification system using a fine-tuned BERT model to detect Spanish real estate ads. The model is containerized with Docker and deployed via FastAPI on AWS EC2 for real-time and batch predictions."
                  image="/assets/classification.webp?height=400&width=600"
                  company="AxcelerateAI"
                  tags={["BERT", "FastAPI", "Docker", "AWS"]}
                />

                <ProjectCard
                  title="Restaurant Monitoring System"
                  description="Developed a computer vision–based restaurant monitoring system to analyze customer activity and service patterns from video streams. Designed a YOLO-powered detection and tracking pipeline using ByteTrack and DeepSORT to identify entry events, serving actions, and table interactions."
                  image="/assets/restaurent.webp?height=400&width=600"
                  company="AxcelerateAI"
                  tags={["YOLO", "ByteTrack", "DeepSORT", "Computer Vision"]}
                />

                {/* GitHub Projects */}
                <ProjectCard
                  title="MedChat: Fine-tuning Gemma2 using PEFT QLoRA"
                  description="Fine-tune Google's Gemma 2B model using QLoRA to develop medical question-answering capabilities based on structured meaning representations."
                  image="/assets/finetune-llm.png?height=400&width=600"
                  link="https://github.com/Mohsin-Kn/MedChat_Finetuning_Gemma2_using_PEFT_QLoRA"
                  tags={["HuggingFace", "Python", "PEFT"]}
                />

                <ProjectCard
                  title="Vehicle Orientation Classification"
                  description="A deep learning project that classifies vehicle orientation in images using Convolutional Neural Networks (CNNs) and Support Vector Machines (SVM)"
                  image="/assets/computer-vision.png?height=400&width=600"
                  link="https://github.com/Mohsin-Kn/vehicle-orientation-classification"
                  tags={["TensorFlow", "Pandas", "Scikit-learn"]}
                />

                <ProjectCard
                  title="PSX Stock Forecasting"
                  description="The project uses an LSTM deep learning model to predict next-day stock price movements of OGDC.KA on the PSX by analyzing historical OHLC data and trading volume. It captures complex temporal patterns and market trends to generate accurate predictions."
                  image="/assets/forecasting.jpg?height=400&width=600"
                  link="https://github.com/Mohsin-Kn/PSX_Stock_Forecasting"
                  tags={["TensorFlow", "Pandas", "mplfinance", "LSTM"]}
                />

                <ProjectCard
                  title="Meme Generator with RAG"
                  description="Retrieval-Augmented Generation (RAG) app that creates contextually relevant meme captions using semantic search, not just keywords. Built with FAISS, HuggingFace embeddings, Ollama LLMs"
                  image="/assets/rag.jpg?height=400&width=600"
                  link="https://github.com/Mohsin-Kn/SemanticMemeFinder_RAG"
                  tags={["HuggingFace", "Ollama", "FAISS"]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
