/* ========================================
   道德經 · Dao De Jing Practice App
   Main Application Logic
   ======================================== */

// Application State
const state = {
  selectedChapter: 0,
  selectedLine: 0,
  selectedChar: 0,
  currentView: 'study',
  hanziWriter: null,
  isQuizMode: false
};

// DOM Elements
const elements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  cacheElements();
  setupEventListeners();
  render();
});

// Cache DOM elements for performance
function cacheElements() {
  elements.chapterNav = document.getElementById('chapterNav');
  elements.classicalText = document.getElementById('classicalText');
  elements.pinyinText = document.getElementById('pinyinText');
  elements.modernText = document.getElementById('modernText');
  elements.englishText = document.getElementById('englishText');
  elements.audioBtn = document.getElementById('audioBtn');
  elements.studyView = document.getElementById('studyView');
  elements.practiceView = document.getElementById('practiceView');
  elements.charactersGrid = document.getElementById('charactersGrid');
  elements.strokeDemo = document.getElementById('strokeDemo');
  elements.charPinyin = document.getElementById('charPinyin');
  elements.charMeaning = document.getElementById('charMeaning');
  elements.animateBtn = document.getElementById('animateBtn');
  elements.quizBtn = document.getElementById('quizBtn');
  elements.bigChar = document.getElementById('bigChar');
  elements.practicePinyin = document.getElementById('practicePinyin');
  elements.practiceMeaning = document.getElementById('practiceMeaning');
  elements.charAudioBtn = document.getElementById('charAudioBtn');
  elements.prevBtn = document.getElementById('prevBtn');
  elements.nextBtn = document.getElementById('nextBtn');
  elements.writingCanvas = document.getElementById('writingCanvas');
  elements.clearBtn = document.getElementById('clearBtn');
  elements.lineNav = document.getElementById('lineNav');
  elements.instructions = document.getElementById('instructions');
  elements.viewBtns = document.querySelectorAll('.view-btn');
}

// Setup event listeners
function setupEventListeners() {
  // View toggle
  elements.viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentView = btn.dataset.view;
      updateViewToggle();
      render();
    });
  });

  // Audio buttons
  elements.audioBtn.addEventListener('click', playLineAudio);
  elements.charAudioBtn.addEventListener('click', playCharAudio);

  // Stroke animation controls
  elements.animateBtn.addEventListener('click', animateStrokes);
  elements.quizBtn.addEventListener('click', startQuiz);

  // Navigation
  elements.prevBtn.addEventListener('click', prevChar);
  elements.nextBtn.addEventListener('click', nextChar);

  // Canvas
  setupCanvas();
  elements.clearBtn.addEventListener('click', clearCanvas);
}

// Render the entire UI
function render() {
  renderChapterNav();
  renderLineDisplay();
  renderLineNav();
  
  if (state.currentView === 'study') {
    elements.studyView.classList.remove('hidden');
    elements.practiceView.classList.add('hidden');
    renderStudyView();
    elements.instructions.textContent = '📖 Tap on characters to see stroke order. Click "Animate" to watch the strokes.';
  } else {
    elements.studyView.classList.add('hidden');
    elements.practiceView.classList.remove('hidden');
    renderPracticeView();
    elements.instructions.textContent = '✍️ Use your Apple Pencil or finger to trace the character. The ghost character will guide you.';
  }
}

// Render chapter navigation
function renderChapterNav() {
  elements.chapterNav.innerHTML = chapters.map((ch, idx) => `
    <button class="chapter-btn ${state.selectedChapter === idx ? 'active' : ''}" 
            data-index="${idx}">
      第${ch.number}章 · ${ch.title}
    </button>
  `).join('');

  // Add click listeners
  elements.chapterNav.querySelectorAll('.chapter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedChapter = parseInt(btn.dataset.index);
      state.selectedLine = 0;
      state.selectedChar = 0;
      render();
    });
  });
}

// Render line display
function renderLineDisplay() {
  const line = getCurrentLine();
  elements.classicalText.textContent = line.classical;
  elements.pinyinText.textContent = line.pinyin;
  elements.modernText.textContent = line.modern;
  elements.englishText.textContent = line.english;
}

// Render line navigation dots
function renderLineNav() {
  const chapter = getCurrentChapter();
  elements.lineNav.innerHTML = chapter.lines.map((_, idx) => `
    <button class="line-dot ${state.selectedLine === idx ? 'active' : ''}" 
            data-index="${idx}"></button>
  `).join('');

  elements.lineNav.querySelectorAll('.line-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      state.selectedLine = parseInt(dot.dataset.index);
      state.selectedChar = 0;
      render();
    });
  });
}

// Render study view
function renderStudyView() {
  const line = getCurrentLine();
  
  // Render character grid
  elements.charactersGrid.innerHTML = line.characters.map((char, idx) => `
    <div class="char-card ${state.selectedChar === idx ? 'active' : ''}" 
         data-index="${idx}">
      <div class="char">${char.char}</div>
      <div class="char-pinyin">${char.pinyin}</div>
    </div>
  `).join('');

  elements.charactersGrid.querySelectorAll('.char-card').forEach(card => {
    card.addEventListener('click', () => {
      state.selectedChar = parseInt(card.dataset.index);
      renderStudyView();
    });
  });

  // Update character detail
  const character = getCurrentCharacter();
  elements.charPinyin.textContent = character.pinyin;
  elements.charMeaning.textContent = character.meaning;

  // Initialize HanziWriter
  initHanziWriter(elements.strokeDemo, character.char, 180);
}

// Render practice view
function renderPracticeView() {
  const character = getCurrentCharacter();
  const line = getCurrentLine();
  const chapter = getCurrentChapter();

  elements.bigChar.textContent = character.char;
  elements.practicePinyin.textContent = character.pinyin;
  elements.practiceMeaning.textContent = character.meaning;

  // Update nav button states
  const isFirst = state.selectedChar === 0 && state.selectedLine === 0;
  const isLast = state.selectedChar === line.characters.length - 1 && 
                 state.selectedLine === chapter.lines.length - 1;
  
  elements.prevBtn.disabled = isFirst;
  elements.nextBtn.disabled = isLast;

  // Clear and redraw canvas
  clearCanvas();
}

// Update view toggle buttons
function updateViewToggle() {
  elements.viewBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === state.currentView);
  });
}

// Initialize HanziWriter for stroke animation
function initHanziWriter(container, character, size) {
  container.innerHTML = '';
  
  try {
    state.hanziWriter = HanziWriter.create(container, character, {
      width: size,
      height: size,
      padding: 10,
      showOutline: true,
      showCharacter: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 300,
      strokeColor: '#2d2d2d',
      outlineColor: '#ddd',
      drawingColor: '#8b7355',
      radicalColor: '#8b7355',
      highlightColor: '#8b7355'
    });
  } catch (e) {
    // Fallback if character not in HanziWriter database
    container.innerHTML = `<div style="font-family: 'Noto Serif SC', serif; font-size: ${size * 0.7}px; color: #2d2d2d;">${character}</div>`;
    state.hanziWriter = null;
  }
}

// Animate strokes
function animateStrokes() {
  if (state.hanziWriter) {
    state.hanziWriter.animateCharacter();
  }
}

// Start quiz mode
function startQuiz() {
  if (state.hanziWriter) {
    state.isQuizMode = true;
    elements.strokeDemo.classList.add('quiz-active');
    
    // Remove existing result
    const existingResult = elements.strokeDemo.parentElement.querySelector('.quiz-result');
    if (existingResult) existingResult.remove();
    
    state.hanziWriter.quiz({
      onComplete: (summaryData) => {
        state.isQuizMode = false;
        elements.strokeDemo.classList.remove('quiz-active');
        
        const resultDiv = document.createElement('div');
        resultDiv.className = `quiz-result ${summaryData.totalMistakes === 0 ? 'success' : 'error'}`;
        resultDiv.textContent = summaryData.totalMistakes === 0 
          ? '✓ Perfect!' 
          : `${summaryData.totalMistakes} mistake${summaryData.totalMistakes > 1 ? 's' : ''}`;
        
        elements.strokeDemo.parentElement.appendChild(resultDiv);
        
        setTimeout(() => resultDiv.remove(), 3000);
      }
    });
  }
}

// Audio pronunciation using Web Speech API
function speak(text, lang = 'zh-CN') {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    // Try to find a Chinese voice
    const voices = speechSynthesis.getVoices();
    const chineseVoice = voices.find(v => v.lang.includes('zh') || v.lang.includes('CN'));
    if (chineseVoice) {
      utterance.voice = chineseVoice;
    }
    
    speechSynthesis.speak(utterance);
    return utterance;
  }
  return null;
}

// Play line audio
function playLineAudio() {
  const line = getCurrentLine();
  const utterance = speak(line.classical);
  
  if (utterance) {
    elements.audioBtn.classList.add('playing');
    utterance.onend = () => elements.audioBtn.classList.remove('playing');
  }
}

// Play character audio
function playCharAudio() {
  const character = getCurrentCharacter();
  speak(character.char);
}

// Navigation functions
function prevChar() {
  const line = getCurrentLine();
  const chapter = getCurrentChapter();
  
  if (state.selectedChar > 0) {
    state.selectedChar--;
  } else if (state.selectedLine > 0) {
    state.selectedLine--;
    state.selectedChar = chapter.lines[state.selectedLine].characters.length - 1;
  }
  render();
}

function nextChar() {
  const line = getCurrentLine();
  const chapter = getCurrentChapter();
  
  if (state.selectedChar < line.characters.length - 1) {
    state.selectedChar++;
  } else if (state.selectedLine < chapter.lines.length - 1) {
    state.selectedLine++;
    state.selectedChar = 0;
  }
  render();
}

// Canvas drawing functions
function setupCanvas() {
  const canvas = elements.writingCanvas;
  const ctx = canvas.getContext('2d');
  
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function getCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    if (e.touches && e.touches.length > 0) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  function startDrawing(e) {
    e.preventDefault();
    isDrawing = true;
    const coords = getCoordinates(e);
    lastX = coords.x;
    lastY = coords.y;
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    
    const coords = getCoordinates(e);
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    
    lastX = coords.x;
    lastY = coords.y;
  }

  function stopDrawing() {
    isDrawing = false;
  }

  // Mouse events
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  // Touch events
  canvas.addEventListener('touchstart', startDrawing, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', stopDrawing);
  canvas.addEventListener('touchcancel', stopDrawing);
}

function clearCanvas() {
  const canvas = elements.writingCanvas;
  const ctx = canvas.getContext('2d');
  const character = getCurrentCharacter();
  
  // Clear canvas
  ctx.fillStyle = '#faf8f5';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw grid
  ctx.strokeStyle = '#e0dcd4';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
  
  // Draw diagonal guides
  ctx.strokeStyle = '#ebe7df';
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.moveTo(canvas.width, 0);
  ctx.lineTo(0, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Draw ghost character
  ctx.font = '160px "Noto Serif SC", "Songti SC", serif';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(character.char, canvas.width / 2, canvas.height / 2);
}

// Helper functions
function getCurrentChapter() {
  return chapters[state.selectedChapter];
}

function getCurrentLine() {
  return getCurrentChapter().lines[state.selectedLine];
}

function getCurrentCharacter() {
  return getCurrentLine().characters[state.selectedChar];
}

// Preload voices when available
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
  };
}
