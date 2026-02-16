import { Card } from "@/components/ui/card"
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiGnubash,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiLangchain,
  SiPandas,
  SiNumpy,
  SiScipy,
  SiWeightsandbiases,
  SiFastapi,
  SiStreamlit,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiHuggingface,
  SiGit,
  SiOllama,
} from "react-icons/si"
import { TbBrandXbox } from "react-icons/tb"
import { BsDatabase } from "react-icons/bs"
import { Code2, Brain, Database, Rocket } from "lucide-react"

// Define icon map for each skill
const iconMap: { [key: string]: React.ReactNode } = {
  Python: <SiPython className="w-4 h-4" />,
  "C++": <SiCplusplus className="w-4 h-4" />,
  SQL: <SiMysql className="w-4 h-4" />,
  Bash: <SiGnubash className="w-4 h-4" />,
  TensorFlow: <SiTensorflow className="w-4 h-4" />,
  PyTorch: <SiPytorch className="w-4 h-4" />,
  "scikit-learn": <SiScikitlearn className="w-4 h-4" />,
  XGBoost: <TbBrandXbox className="w-4 h-4" />,
  OpenCV: <SiOpencv className="w-4 h-4" />,
  LangChain: <SiLangchain className="w-4 h-4" />,
  LangGraph: <SiLangchain className="w-4 h-4" />,
  Pandas: <SiPandas className="w-4 h-4" />,
  NumPy: <SiNumpy className="w-4 h-4" />,
  SciPy: <SiScipy className="w-4 h-4" />,
  FAISS: <BsDatabase className="w-4 h-4" />,
  "Vector Databases": <BsDatabase className="w-4 h-4" />,
  "Weights & Biases (WandB)": <SiWeightsandbiases className="w-4 h-4" />,
  FastAPI: <SiFastapi className="w-4 h-4" />,
  Streamlit: <SiStreamlit className="w-4 h-4" />,
  Docker: <SiDocker className="w-4 h-4" />,
  Kubernetes: <SiKubernetes className="w-4 h-4" />,
  AWS: <SiAmazonwebservices className="w-4 h-4" />,
  "Hugging Face": <SiHuggingface className="w-4 h-4" />,
  Ollama: <SiOllama className="w-4 h-4" />,
  Git: <SiGit className="w-4 h-4" />,
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Languages": <Code2 className="w-5 h-5" />,
  "ML & AI Frameworks": <Brain className="w-5 h-5" />,
  "Data & Model Development": <Database className="w-5 h-5" />,
  "Deployment & Platforms": <Rocket className="w-5 h-5" />,
}

const technologies = [
  {
    category: "Languages",
    skills: ["Python", "C++", "SQL", "Bash"],
  },
  {
    category: "ML & AI Frameworks",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "OpenCV", "LangChain", "LangGraph"],
  },
  {
    category: "Data & Model Development",
    skills: ["Pandas", "NumPy", "SciPy", "FAISS", "Vector Databases", "Weights & Biases (WandB)"],
  },
  {
    category: "Deployment & Platforms",
    skills: ["FastAPI", "Streamlit", "Docker", "Kubernetes", "AWS", "Hugging Face", "Ollama", "Git"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
      {technologies.map((tech, index) => (
        <Card
          key={tech.category}
          className="glass card-hover shine p-6 border-border/50"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Category header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg gradient-bg text-white">
              {categoryIcons[tech.category]}
            </div>
            <h3 className="text-lg font-semibold">{tech.category}</h3>
          </div>

          {/* Skills grid */}
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm font-medium text-foreground/90 border border-border/50 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary group"
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {iconMap[skill]}
                </span>
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
