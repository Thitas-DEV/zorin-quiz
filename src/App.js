import React, { useState } from 'react';
import { ChevronRight, Download, RotateCcw, Check } from 'lucide-react';

export default function ZorinOSQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'usage',
      question: 'Qual será o uso principal do seu sistema?',
      options: [
        { value: 'gaming', label: 'Jogos e Entretenimento', icon: '🎮' },
        { value: 'work', label: 'Trabalho e Produtividade', icon: '💼' },
        { value: 'programming', label: 'Programação e Desenvolvimento', icon: '💻' },
        { value: 'study', label: 'Estudos e Educação', icon: '📚' }
      ]
    },
    {
      id: 'experience',
      question: 'Qual seu nível de experiência com Linux?',
      options: [
        { value: 'beginner', label: 'Iniciante - Primeira vez', icon: '🌱' },
        { value: 'intermediate', label: 'Intermediário - Já usei antes', icon: '🌿' },
        { value: 'advanced', label: 'Avançado - Uso regularmente', icon: '🌳' }
      ]
    },
    {
      id: 'apps',
      question: 'Quais aplicativos você mais utiliza no dia a dia?',
      options: [
        { value: 'steam', label: 'Steam, Discord, OBS', icon: '🎮' },
        { value: 'office', label: 'Office, Email, Navegadores', icon: '📊' },
        { value: 'code', label: 'IDEs, Terminal, Git', icon: '⌨' },
        { value: 'study', label: 'PDFs, Anotações, Pesquisa', icon: '📖' }
      ]
    },
    {
      id: 'hardware',
      question: 'Como é o seu hardware?',
      options: [
        { value: 'old', label: 'Antigo ou limitado', icon: '🐢' },
        { value: 'medium', label: 'Intermediário', icon: '🚗' },
        { value: 'powerful', label: 'Potente e moderno', icon: '🚀' }
      ]
    },
    {
      id: 'priority',
      question: 'O que é mais importante para você?',
      options: [
        { value: 'performance', label: 'Performance e velocidade', icon: '⚡' },
        { value: 'stability', label: 'Estabilidade e confiabilidade', icon: '🛡' },
        { value: 'features', label: 'Recursos e funcionalidades', icon: '✨' },
        { value: 'simplicity', label: 'Simplicidade e facilidade', icon: '🎯' }
      ]
    },
    {
      id: 'style',
      question: 'Qual estilo de interface você prefere?',
      options: [
        { value: 'modern', label: 'Moderna e chamativa', icon: '🌟' },
        { value: 'professional', label: 'Profissional e limpa', icon: '💼' },
        { value: 'minimal', label: 'Minimalista e funcional', icon: '⬜' },
        { value: 'customizable', label: 'Personalizável ao máximo', icon: '🎨' }
      ]
    },
    {
      id: 'time',
      question: 'Quanto tempo por dia você passa no computador?',
      options: [
        { value: 'few', label: 'Menos de 2 horas', icon: '⏰' },
        { value: 'moderate', label: '2 a 6 horas', icon: '⏳' },
        { value: 'intensive', label: '6 a 10 horas', icon: '⌛' },
        { value: 'allday', label: 'Mais de 10 horas', icon: '🕐' }
      ]
    },
    {
      id: 'internet',
      question: 'Como você usa a internet?',
      options: [
        { value: 'streaming', label: 'Streaming e redes sociais', icon: '📺' },
        { value: 'work', label: 'E-mails e reuniões online', icon: '💻' },
        { value: 'research', label: 'Pesquisa e documentação', icon: '🔍' },
        { value: 'download', label: 'Downloads e transferências', icon: '📥' }
      ]
    }
  ];

  const downloadISO = (filename) => {
    const downloadLinks = {
      'linux-gaming-edition.iso': 'https://drive.google.com/uc?export=download&id=1QJBHpmGVht8_dOpGfcDU3yvR_ZdZLUyb'',
      'linux-work-edition.iso': 'https://drive.google.com/uc?export=download&id=1QJBHpmGVht8_dOpGfcDU3yvR_ZdZLUyb',
      'linux-developer-edition.iso': 'https://drive.google.com/uc?export=download&id=1QJBHpmGVht8_dOpGfcDU3yvR_ZdZLUyb'',
      'linux-education-edition.iso': 'https://drive.google.com/uc?export=download&id=1QJBHpmGVht8_dOpGfcDU3yvR_ZdZLUyb''
    };

    const link = downloadLinks[filename];
    
    if (link) {
      window.open(link, '_blank');
    } else {
      alert('ISO não disponível no momento.');
    }
  };

  const getRecommendation = () => {
    const { usage } = answers;
    
    const editions = {
      gaming: {
        name: 'linux Gaming Edition',
        tagline: 'Pronto para jogar',
        description: 'Versão otimizada do Zorin OS com todos os drivers e ferramentas para gaming pré-instalados. Interface familiar do Windows, perfeita para gamers.',
        download: 'zorin-os-gaming-edition.iso',
        size: '4.2 GB',
        preInstalled: [
          'Steam + Proton configurado',
          'Lutris com Wine otimizado',
          'Discord para comunicação',
          'OBS Studio para streaming',
          'Drivers NVIDIA/AMD atualizados',
          'GameMode para performance',
          'MangoHud para monitoramento',
          'Controler support completo'
        ]
      },
      work: {
        name: 'linux Work Edition',
        tagline: 'Produtividade total',
        description: 'Versão profissional do Zorin OS com suite completa de aplicativos para trabalho. Interface intuitiva que funciona desde o primeiro boot.',
        download: 'linux-work-edition.iso',
        size: '3.8 GB',
        preInstalled: [
          'LibreOffice Suite completa',
          'GIMP para edição de imagens',
          'Inkscape para design vetorial',
          'Thunderbird para e-mails',
          'Zoom e Microsoft Teams',
          'Remmina para acesso remoto',
          'PDF tools avançadas',
          'Timeshift para backups'
        ]
      },
      programming: {
        name: 'linux Developer Edition',
        tagline: 'Ambiente de desenvolvimento completo',
        description: 'Versão do Zorin OS otimizada para desenvolvedores com todas as ferramentas e IDEs pré-configuradas. Comece a codar imediatamente.',
        download: 'linux-developer-edition.iso',
        size: '4.5 GB',
        preInstalled: [
          'Visual Studio Code configurado',
          'Git + GitHub CLI',
          'Docker + Docker Compose',
          'Node.js + npm/yarn',
          'Python 3 + pip + venv',
          'JDK (Java Development Kit)',
          'PostgreSQL + MySQL',
          'Postman + cURL + wget'
        ]
      },
      study: {
        name: 'linux Education Edition',
        tagline: 'Aprendizado sem limites',
        description: 'Versão educacional do Zorin OS com aplicativos para estudos, pesquisa e aprendizado. Tudo pronto para uso acadêmico.',
        download: 'linux-education-edition.iso',
        size: '3.6 GB',
        preInstalled: [
          'LibreOffice para trabalhos',
          'Zotero para referências',
          'Anki para memorização',
          'Calibre para e-books',
          'GeoGebra para matemática',
          'Stellarium para astronomia',
          'Blender para 3D/animação',
          'Audacity para áudio'
        ]
      }
    };

    return editions[usage];
  };

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResult(getRecommendation());
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white p-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h1 className="text-2xl font-light">AstroLogic</h1>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-600/20 border border-green-500/30 rounded-full px-6 py-2 mb-4">
                <span className="text-green-400 text-sm font-medium flex items-center gap-2">
                  <Check size={16} /> RECOMENDAÇÃO PERFEITA
                </span>
              </div>
              <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {result.name}
              </h2>
              <p className="text-blue-300 text-xl font-medium mb-4">{result.tagline}</p>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                {result.description}
              </p>
            </div>

            <div className="bg-slate-800/70 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-blue-400">✨</span> Pré-instalado e pronto para usar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.preInstalled.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-700/40 rounded-lg p-3">
                    <div className="mt-0.5">
                      <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/50">
                        <Check size={12} className="text-blue-400" />
                      </div>
                    </div>
                    <span className="text-slate-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-slate-400 text-sm mb-1">Baseado em</div>
                <div className="text-white font-semibold">linux</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 text-center">
                <div className="text-3xl mb-2">💾</div>
                <div className="text-slate-400 text-sm mb-1">Tamanho do arquivo</div>
                <div className="text-white font-semibold">{result.size}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 text-center">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-slate-400 text-sm mb-1">Configuração</div>
                <div className="text-white font-semibold">Zero setup</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 mb-8">
              <h4 className="font-semibold mb-3 text-blue-300 flex items-center gap-2">
                <span>ℹ</span> Como usar sua ISO personalizada
              </h4>
              <ol className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span>Baixe o arquivo ISO clicando no botão abaixo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span>Crie um pendrive bootável usando Rufus (Windows) ou Etcher (qualquer OS)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <span>Inicie seu computador pelo pendrive e siga as instruções na tela</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <span>Tudo já está instalado e configurado - apenas aproveite! 🎉</span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => downloadISO(result.download)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-800/50 hover:scale-105"
              >
                <Download size={22} />
                <div className="text-left">
                  <div>Baixar ISO agora</div>
                  <div className="text-xs opacity-80">{result.download}</div>
                </div>
              </button>
              <button
                onClick={restart}
                className="bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all border border-slate-600"
              >
                <RotateCcw size={20} />
                Refazer Quiz
              </button>
            </div>
          </div>

          <div className="text-center mt-6 text-slate-400 text-sm">
            <p>27 March, 2024 • nebula.app.br</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🐧</span>
            </div>
            <h1 className="text-2xl font-light">AstroLogic</h1>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Linux
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Edições Personalizadas
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Responda algumas perguntas e baixe sua ISO com tudo pré-instalado
          </p>
          <div className="mt-4 inline-block bg-blue-600/20 border border-blue-500/30 rounded-lg px-4 py-2">
            <p className="text-blue-300 text-sm">
              ✨ <strong>Zero configuração</strong> - Todos os programas já vêm instalados e prontos para usar
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-slate-400">Questão {step + 1} de {questions.length}</span>
              <span className="text-sm text-blue-400 font-medium">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%`}}
              ></div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-slate-100">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className="group relative bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 rounded-xl p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-lg text-slate-100 mb-1">
                      {option.label}
                    </div>
                  </div>
                  <ChevronRight className="text-slate-500 group-hover:text-blue-400 transition-colors" size={24} />
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              ← Voltar
            </button>
          )}
        </div>

        <div className="text-center mt-6 text-slate-400 text-sm">
          <p>27 March, 2024 • nebula.app.br</p>
        </div>

        <div className="fixed top-20 left-10 w-16 h-16 bg-blue-600 rounded-full opacity-50 blur-2xl"></div>
        <div className="fixed top-40 right-20 w-24 h-24 bg-purple-600 rounded-full opacity-30 blur-3xl"></div>
        <div className="fixed bottom-20 left-1/4 w-20 h-20 bg-blue-500 rounded-full opacity-40 blur-2xl"></div>
      </div>
    </div>
  );
}