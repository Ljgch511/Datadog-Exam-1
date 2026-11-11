/**
 * SIMULADOR DE EXAMEN DATADOG FUNDAMENTALS
 * Soporta cambio dinámico de idioma (Español / Inglés) en cualquier momento sin perder progreso,
 * Modo Rápido (25 preguntas con feedback instantáneo), Modo Realista (75 preguntas, 90 min)
 * y Modo Completo (108 preguntas con filtros por dominio y explicaciones oficiales).
 */

(function () {
  'use strict';

  // ================= DICCIONARIO DE TRADUCCIONES (I18N) =================
  const I18N = {
    es: {
      brandSubtitle: "Simulador Oficial & Banco de Preguntas",
      studyPlan: "📖 Plan de Estudio",
      heroBadge: "Certificación Oficial Kryterion / Webassessor",
      heroTitle: "Prepárate para aprobar Datadog Fundamentals",
      heroDesc: "Entrena con preguntas reales y de alta fidelidad organizadas bajo el blueprint oficial de 6 dominios. Elige entre el Modo Rápido, Modo Realista o Modo Completo para estudiar a tu ritmo.",
      metaQuickLabel: "Modo Rápido",
      metaQuickVal: "25 Preguntas",
      metaRealisticLabel: "Examen Realista",
      metaRealisticVal: "75 Preguntas (90m)",
      metaPassingLabel: "Puntaje Aprobación",
      metaPassingVal: "70% de Aciertos",
      metaTotalLabel: "Banco Total",
      metaTotalVal: "108 Preguntas",
      modesTitle: "Elige tu Modo de Examen",

      // Modo Rápido
      quickTag: "⚡ Estudio Exprés",
      quickTitle: "Modo Rápido (25 Preguntas)",
      quickDesc: "Sesión ágil de 10-15 minutos para estudiar. Te muestra la respuesta correcta y la explicación técnica al instante apenas haces clic en cada opción.",
      quickFeatures: [
        "25 preguntas aleatorias del banco oficial",
        "Respuesta y explicación inmediata al responder",
        "Feedback visual (acierto en verde / error en rojo)",
        "Cronómetro de estudio sin presión de tiempo límite",
        "Informe de resultados con desglose por dominios"
      ],
      btnStartQuick: "⚡ Iniciar Modo Rápido (25q)",

      // Modo Realista
      realisticTag: "Modo Simulación Real",
      realisticTitle: "Modo Realista (75 Preguntas)",
      realisticDesc: "Simula con exactitud la experiencia del examen oficial de certificación. Selecciona 75 preguntas aleatorias del banco con opciones en orden aleatorio y cronómetro de 90 minutos.",
      realisticFeatures: [
        "75 preguntas seleccionadas al azar",
        "Orden de preguntas y alternativas 100% aleatorio",
        "Cronómetro regresivo oficial de 90 minutos",
        "Marcar preguntas para revisar (Flag for review)",
        "Evaluación y desglose por dominio al finalizar"
      ],
      btnStartRealistic: "🚀 Iniciar Examen Realista",

      // Modo Completo
      completeTag: "Banco Total & Estudio",
      completeTitle: "Modo Completo (Todas las Preguntas)",
      completeDesc: "Práctica guiada ideal para estudiar todas las 108 preguntas del programa oficial. Puedes filtrar por un dominio específico y ver explicaciones técnicas inmediatas.",
      labelStudyMode: "Tipo de Evaluación:",
      optStudyImmediate: "Estudio Inmediato (Ver explicación al responder)",
      optStudyExam: "Modo Prueba (Ver resultados al terminar)",
      labelDomainFilter: "Filtrar por Dominio:",
      allDomainsOption: (count) => `Todos los Dominios (${count} preguntas)`,
      btnStartComplete: "📖 Iniciar Modo Completo",

      // Historial
      historyTitle: "📊 Historial de Intentos Recientes",
      historySubtitle: "Guardado en este navegador",
      historyEmpty: "Aún no has realizado ningún examen. ¡Inicia uno para ver tus progresos!",

      // Quiz top / bottom
      btnOpenNav: "📑 Mapa de Preguntas",
      btnFlagDefault: "🏳️ Marcar",
      btnFlagActive: "🚩 Marcada",
      qCounter: (curr, total) => `Pregunta ${curr} de ${total}`,
      btnPrev: "⬅️ Anterior",
      btnNext: "Siguiente ➡️",
      btnFinish: "🏁 Finalizar y Calificar",
      quizShortcutsTip: "Tip: Usa teclas 1-4 o A-D para seleccionar, flechas para navegar",
      explanationTip: "💡 Tip: Presiona Enter o Espacio para avanzar rápido",
      btnNextInlineNext: "Siguiente Pregunta ➡️",
      btnNextInlineFinish: "🏁 Finalizar y Ver Resultados",

      // Explicación inline
      feedbackCorrect: "<span>✓</span> ¡Respuesta Correcta! Excelente trabajo.",
      feedbackIncorrect: "<span>✗</span> Respuesta Incorrecta",
      correctAnswerLabel: "✓ Respuesta Correcta:",
      explanationRationaleLabel: "💡 Explicación y Justificación Datadog:",

      // Badges
      badgeRealistic: "Modo Realista: 75 Preguntas (90 min)",
      badgeQuick: "⚡ Modo Rápido: 25 Preguntas (Feedback Inmediato)",
      badgeComplete: (count, label) => `Modo Completo: ${count} Preguntas (${label})`,
      typeImmediate: "Estudio Inmediato",
      typeExam: "Simulación",

      // Modal Nav
      modalNavTitle: "📑 Mapa de Preguntas del Examen",
      legendAnswered: "Respondida",
      legendUnanswered: "Sin responder",
      legendFlagged: "Marcada 🚩",
      legendCurrent: "Actual",

      // Diálogos
      confirmFinish: (ans, tot) => `Has respondido ${ans} de ${tot} preguntas. ¿Seguro que deseas enviar el examen ahora?`,
      timeUpAlert: "¡Tiempo cumplido! El examen se enviará automáticamente.",

      // Resultados
      statusPassed: "¡APROBADO! 🎉",
      statusFailed: "NO APROBADO ⚠️",
      subtextPassed: "Has superado con éxito el estándar de certificación de Datadog (70%). ¡Excelente preparación!",
      subtextFailed: "El puntaje mínimo para certificar es 70%. Revisa tus puntos débiles abajo y vuelve a intentar.",
      kpiScore: "Puntaje Final",
      kpiRatio: "Aciertos / Total",
      kpiTime: "Tiempo Empleado",
      btnRetryFailed: (count) => `🔁 Repasar Solo Falladas (${count})`,
      btnRetryExam: "🔄 Nuevo Examen",
      btnGoHome: "🏠 Volver al Inicio",
      domainBreakdownTitle: "📊 Desempeño por los 6 Dominios Oficiales",
      reviewSectionTitle: "🔍 Revisión Detallada de Preguntas",
      tabAll: "Todas",
      tabFailed: "Solo Falladas",
      tabFlagged: "Solo Marcadas 🚩",
      yourAnswer: "Tu Respuesta:",
      correctAnswerReview: "Respuesta Correcta:",
      unansweredReview: "Sin responder",
      flaggedTag: "🚩 Marcada",
      reviewRationaleLabel: "💡 Justificación y Referencia Datadog:",
      reviewEmpty: "No hay preguntas que coincidan con este filtro.",

      // Footer
      footerText: "Simulador y Banco de Estudio para la Certificación Datadog Fundamentals • Basado en preguntas oficiales y dominios del examen."
    },

    en: {
      brandSubtitle: "Official Simulator & Question Bank",
      studyPlan: "📖 Study Plan",
      heroBadge: "Official Kryterion / Webassessor Certification",
      heroTitle: "Get Ready to Pass Datadog Fundamentals",
      heroDesc: "Train with high-fidelity, exam-accurate questions structured under the official 6-domain blueprint. Choose Quick Mode, Realistic Mode, or Complete Mode to study at your own pace.",
      metaQuickLabel: "Quick Mode",
      metaQuickVal: "25 Questions",
      metaRealisticLabel: "Realistic Exam",
      metaRealisticVal: "75 Questions (90m)",
      metaPassingLabel: "Passing Score",
      metaPassingVal: "70% Passing",
      metaTotalLabel: "Question Bank",
      metaTotalVal: "108 Questions",
      modesTitle: "Choose Your Exam Mode",

      // Quick Mode
      quickTag: "⚡ Express Study",
      quickTitle: "Quick Mode (25 Questions)",
      quickDesc: "Fast 10-15 minute study session. Instantly shows the correct answer and technical rationale as soon as you select an option.",
      quickFeatures: [
        "25 random questions from the official bank",
        "Immediate answer & explanation on selection",
        "Visual feedback (green for correct / red for incorrect)",
        "Study stopwatch without time-limit pressure",
        "Full score report with domain breakdown"
      ],
      btnStartQuick: "⚡ Start Quick Mode (25q)",

      // Realistic Mode
      realisticTag: "Real Simulation Mode",
      realisticTitle: "Realistic Mode (75 Questions)",
      realisticDesc: "Accurately replicates the official certification exam experience. Selects 75 random questions with randomized options and an official 90-minute countdown.",
      realisticFeatures: [
        "75 randomly selected questions",
        "100% randomized questions and answer order",
        "Official 90-minute countdown timer",
        "Flag questions for review (Flag for review)",
        "Full scoring & domain breakdown upon completion"
      ],
      btnStartRealistic: "🚀 Start Realistic Exam",

      // Complete Mode
      completeTag: "Full Bank & Study",
      completeTitle: "Complete Mode (All Questions)",
      completeDesc: "Guided practice across all 108 questions from the official syllabus. Filter by specific domain and review detailed technical explanations.",
      labelStudyMode: "Evaluation Type:",
      optStudyImmediate: "Immediate Study (Show explanation on answer)",
      optStudyExam: "Test Mode (Show results upon completion)",
      labelDomainFilter: "Filter by Domain:",
      allDomainsOption: (count) => `All Domains (${count} questions)`,
      btnStartComplete: "📖 Start Complete Mode",

      // History
      historyTitle: "📊 Recent Attempt History",
      historySubtitle: "Saved in this browser",
      historyEmpty: "No exam attempts recorded yet. Start one to track your progress!",

      // Quiz top / bottom
      btnOpenNav: "📑 Question Map",
      btnFlagDefault: "🏳️ Flag",
      btnFlagActive: "🚩 Flagged",
      qCounter: (curr, total) => `Question ${curr} of ${total}`,
      btnPrev: "⬅️ Previous",
      btnNext: "Next ➡️",
      btnFinish: "🏁 Submit & Grade",
      quizShortcutsTip: "Tip: Use keys 1-4 or A-D to select, arrows to navigate",
      explanationTip: "💡 Tip: Press Enter or Space to quickly advance",
      btnNextInlineNext: "Next Question ➡️",
      btnNextInlineFinish: "🏁 Finish & View Results",

      // Inline explanation
      feedbackCorrect: "<span>✓</span> Correct Answer! Excellent job.",
      feedbackIncorrect: "<span>✗</span> Incorrect Answer",
      correctAnswerLabel: "✓ Correct Answer:",
      explanationRationaleLabel: "💡 Datadog Rationale & Explanation:",

      // Badges
      badgeRealistic: "Realistic Mode: 75 Questions (90 min)",
      badgeQuick: "⚡ Quick Mode: 25 Questions (Immediate Feedback)",
      badgeComplete: (count, label) => `Complete Mode: ${count} Questions (${label})`,
      typeImmediate: "Immediate Study",
      typeExam: "Simulation",

      // Modal Nav
      modalNavTitle: "📑 Exam Question Map",
      legendAnswered: "Answered",
      legendUnanswered: "Unanswered",
      legendFlagged: "Flagged 🚩",
      legendCurrent: "Current",

      // Dialogs
      confirmFinish: (ans, tot) => `You have answered ${ans} of ${tot} questions. Are you sure you want to submit the exam now?`,
      timeUpAlert: "Time is up! The exam will be submitted automatically.",

      // Results
      statusPassed: "PASSED! 🎉",
      statusFailed: "NOT PASSED ⚠️",
      subtextPassed: "You successfully passed the Datadog certification standard (70%). Outstanding preparation!",
      subtextFailed: "The minimum score to pass is 70%. Review your weak areas below and try again.",
      kpiScore: "Final Score",
      kpiRatio: "Correct / Total",
      kpiTime: "Time Elapsed",
      btnRetryFailed: (count) => `🔁 Review Failed Only (${count})`,
      btnRetryExam: "🔄 New Exam",
      btnGoHome: "🏠 Back to Home",
      domainBreakdownTitle: "📊 Performance by Official 6 Domains",
      reviewSectionTitle: "🔍 Detailed Question Review",
      tabAll: "All",
      tabFailed: "Failed Only",
      tabFlagged: "Flagged Only 🚩",
      yourAnswer: "Your Answer:",
      correctAnswerReview: "Correct Answer:",
      unansweredReview: "Unanswered",
      flaggedTag: "🚩 Flagged",
      reviewRationaleLabel: "💡 Datadog Rationale & Reference:",
      reviewEmpty: "No questions match this filter.",

      // Footer
      footerText: "Study Bank and Exam Simulator for Datadog Fundamentals Certification • Based on official blueprint and domains."
    }
  };

  // ================= ESTADO DE LA APLICACIÓN =================
  const state = {
    lang: 'es',                   // 'es' | 'en'
    currentView: 'home',          // 'home' | 'quiz' | 'results'
    mode: 'realistic',            // 'quick' | 'realistic' | 'complete'
    studyFeedback: false,         // Si es true, muestra la explicación inmediatamente
    domainFilter: 'all',          // Filtro por dominio en modo completo

    activeQuestions: [],          // Array de { id, sessionIndex, raw, optionOrder, correctIndex }
    currentIndex: 0,
    userAnswers: {},              // { [qIndex]: optionOrderIndex }
    flagged: {},                  // { [qIndex]: boolean }

    timerSeconds: 90 * 60,
    timeElapsed: 0,
    timerInterval: null,
    isSubmitted: false,

    history: [],
    currentReviewFilter: 'all'
  };

  // Cargar idioma guardado
  try {
    const savedLang = localStorage.getItem('datadog_exam_lang');
    if (savedLang === 'en' || savedLang === 'es') {
      state.lang = savedLang;
    }
  } catch (e) {
    console.warn("No se pudo leer el idioma de LocalStorage", e);
  }

  // Cargar historial de LocalStorage
  try {
    const savedHistory = localStorage.getItem('datadog_exam_history');
    if (savedHistory) state.history = JSON.parse(savedHistory);
  } catch (e) {
    console.warn("No se pudo cargar el historial de LocalStorage", e);
  }

  // ================= REFERENCIAS DOM =================
  const dom = {
    // Vistas
    viewHome: document.getElementById('view-home'),
    viewQuiz: document.getElementById('view-quiz'),
    viewResults: document.getElementById('view-results'),

    // Idioma
    btnLangEs: document.getElementById('btn-lang-es'),
    btnLangEn: document.getElementById('btn-lang-en'),

    // Header & Hero
    brandSubtitle: document.getElementById('brand-subtitle'),
    btnStudyPlan: document.getElementById('btn-study-plan'),
    heroBadge: document.getElementById('hero-badge'),
    heroTitle: document.getElementById('hero-title'),
    heroDesc: document.getElementById('hero-desc'),
    metaLabelQuick: document.getElementById('meta-label-quick'),
    metaValQuick: document.getElementById('meta-val-quick'),
    metaLabelRealistic: document.getElementById('meta-label-realistic'),
    metaValRealistic: document.getElementById('meta-val-realistic'),
    metaLabelPassing: document.getElementById('meta-label-passing'),
    metaValPassing: document.getElementById('meta-val-passing'),
    metaLabelTotal: document.getElementById('meta-label-total'),
    metaValTotal: document.getElementById('meta-val-total'),
    modesTitle: document.getElementById('modes-title'),

    // Modo Rápido Card
    tagQuick: document.getElementById('tag-quick'),
    titleQuick: document.getElementById('title-quick'),
    descQuick: document.getElementById('desc-quick'),
    featuresQuick: document.getElementById('features-quick'),
    btnStartQuick: document.getElementById('btn-start-quick'),

    // Modo Realista Card
    tagRealistic: document.getElementById('tag-realistic'),
    titleRealistic: document.getElementById('title-realistic'),
    descRealistic: document.getElementById('desc-realistic'),
    featuresRealistic: document.getElementById('features-realistic'),
    btnStartRealistic: document.getElementById('btn-start-realistic'),

    // Modo Completo Card
    tagComplete: document.getElementById('tag-complete'),
    titleComplete: document.getElementById('title-complete'),
    descComplete: document.getElementById('desc-complete'),
    labelStudyMode: document.getElementById('label-study-mode'),
    optStudyImmediate: document.getElementById('opt-study-immediate'),
    optStudyExam: document.getElementById('opt-study-exam'),
    labelDomainFilter: document.getElementById('label-domain-filter'),
    selectDomainFilter: document.getElementById('select-domain-filter'),
    selectStudyMode: document.getElementById('select-study-mode'),
    btnStartComplete: document.getElementById('btn-start-complete'),

    // Historial
    historyTitle: document.getElementById('history-title'),
    historySubtitle: document.getElementById('history-subtitle'),
    historyList: document.getElementById('history-list'),

    // Quiz Header
    badgeQuizMode: document.getElementById('badge-quiz-mode'),
    qCounter: document.getElementById('q-counter'),
    timerDisplay: document.getElementById('timer-display'),
    timerBox: document.getElementById('timer-box'),
    btnOpenNav: document.getElementById('btn-open-nav'),
    btnFlag: document.getElementById('btn-flag'),
    progressBarFill: document.getElementById('progress-bar-fill'),

    // Question Card
    domainPill: document.getElementById('domain-pill'),
    topicTag: document.getElementById('topic-tag'),
    questionText: document.getElementById('question-text'),
    optionsList: document.getElementById('options-list'),
    explanationBox: document.getElementById('explanation-box'),
    explanationHeader: document.getElementById('explanation-header'),
    explanationBody: document.getElementById('explanation-body'),
    explanationTip: document.getElementById('explanation-tip'),
    btnNextInline: document.getElementById('btn-next-inline'),

    // Quiz Footer
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnFinish: document.getElementById('btn-finish'),
    quizShortcutsTip: document.getElementById('quiz-shortcuts-tip'),

    // Modal Navegador
    modalNav: document.getElementById('modal-nav'),
    modalNavTitle: document.getElementById('modal-nav-title'),
    btnCloseNav: document.getElementById('btn-close-nav'),
    legendAnswered: document.getElementById('legend-answered'),
    legendUnanswered: document.getElementById('legend-unanswered'),
    legendFlagged: document.getElementById('legend-flagged'),
    legendCurrent: document.getElementById('legend-current'),
    qGrid: document.getElementById('q-grid'),

    // Resultados
    resultsBanner: document.getElementById('results-banner'),
    statusBadge: document.getElementById('status-badge'),
    resultsSubtext: document.getElementById('results-subtext'),
    kpiLabelScore: document.getElementById('kpi-label-score'),
    kpiScorePct: document.getElementById('kpi-score-pct'),
    kpiLabelRatio: document.getElementById('kpi-label-ratio'),
    kpiCorrectRatio: document.getElementById('kpi-correct-ratio'),
    kpiLabelTime: document.getElementById('kpi-label-time'),
    kpiTimeSpent: document.getElementById('kpi-time-spent'),
    btnRetryFailed: document.getElementById('btn-retry-failed'),
    btnRetryExam: document.getElementById('btn-retry-exam'),
    btnGoHome: document.getElementById('btn-go-home'),
    domainBreakdownTitle: document.getElementById('domain-breakdown-title'),
    domainBarsList: document.getElementById('domain-bars-list'),

    // Revisión
    reviewSectionTitle: document.getElementById('review-section-title'),
    reviewList: document.getElementById('review-list'),
    tabAll: document.getElementById('tab-all'),
    tabFailed: document.getElementById('tab-failed'),
    tabFlagged: document.getElementById('tab-flagged'),

    // Footer
    footerText: document.getElementById('footer-text')
  };

  // Helper para strings del idioma activo
  function t(key, ...args) {
    const dict = I18N[state.lang] || I18N.es;
    const val = dict[key];
    if (typeof val === 'function') {
      return val(...args);
    }
    return val !== undefined ? val : (I18N.es[key] || key);
  }

  // ================= FUNCIONES DE UTILIDAD =================
  function shuffleArray(array) {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  }

  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ================= CAMBIO DINÁMICO DE IDIOMA =================
  function setLanguage(newLang) {
    if (newLang !== 'es' && newLang !== 'en') return;
    state.lang = newLang;

    try {
      localStorage.setItem('datadog_exam_lang', newLang);
    } catch (e) {}

    document.documentElement.lang = newLang;

    // Actualizar botones de idioma en header
    if (dom.btnLangEs && dom.btnLangEn) {
      dom.btnLangEs.classList.toggle('active', newLang === 'es');
      dom.btnLangEn.classList.toggle('active', newLang === 'en');
    }

    // Aplicar textos estáticos de la UI
    applyTranslations();

    // Actualizar vista activa en tiempo real
    if (state.currentView === 'home') {
      populateDomainSelect();
      renderHistory();
    } else if (state.currentView === 'quiz') {
      updateQuizModeBadge();
      renderQuestion(state.currentIndex);
    } else if (state.currentView === 'results') {
      renderResultsUI();
    }
  }

  function applyTranslations() {
    // Header & Hero
    if (dom.brandSubtitle) dom.brandSubtitle.textContent = t('brandSubtitle');
    if (dom.btnStudyPlan) dom.btnStudyPlan.textContent = t('studyPlan');
    if (dom.heroBadge) dom.heroBadge.textContent = t('heroBadge');
    if (dom.heroTitle) dom.heroTitle.textContent = t('heroTitle');
    if (dom.heroDesc) dom.heroDesc.textContent = t('heroDesc');
    if (dom.metaLabelQuick) dom.metaLabelQuick.textContent = t('metaQuickLabel');
    if (dom.metaValQuick) dom.metaValQuick.textContent = t('metaQuickVal');
    if (dom.metaLabelRealistic) dom.metaLabelRealistic.textContent = t('metaRealisticLabel');
    if (dom.metaValRealistic) dom.metaValRealistic.textContent = t('metaRealisticVal');
    if (dom.metaLabelPassing) dom.metaLabelPassing.textContent = t('metaPassingLabel');
    if (dom.metaValPassing) dom.metaValPassing.textContent = t('metaPassingVal');
    if (dom.metaLabelTotal) dom.metaLabelTotal.textContent = t('metaTotalLabel');
    if (dom.metaValTotal) dom.metaValTotal.textContent = t('metaTotalVal');
    if (dom.modesTitle) dom.modesTitle.textContent = t('modesTitle');

    // Quick Mode Card
    if (dom.tagQuick) dom.tagQuick.textContent = t('quickTag');
    if (dom.titleQuick) dom.titleQuick.textContent = t('quickTitle');
    if (dom.descQuick) dom.descQuick.textContent = t('quickDesc');
    if (dom.featuresQuick) {
      const items = t('quickFeatures');
      dom.featuresQuick.innerHTML = items.map(txt => `<li>${escapeHtml(txt)}</li>`).join('');
    }
    if (dom.btnStartQuick) dom.btnStartQuick.textContent = t('btnStartQuick');

    // Realistic Mode Card
    if (dom.tagRealistic) dom.tagRealistic.textContent = t('realisticTag');
    if (dom.titleRealistic) dom.titleRealistic.textContent = t('realisticTitle');
    if (dom.descRealistic) dom.descRealistic.textContent = t('realisticDesc');
    if (dom.featuresRealistic) {
      const items = t('realisticFeatures');
      dom.featuresRealistic.innerHTML = items.map(txt => `<li>${escapeHtml(txt)}</li>`).join('');
    }
    if (dom.btnStartRealistic) dom.btnStartRealistic.textContent = t('btnStartRealistic');

    // Complete Mode Card
    if (dom.tagComplete) dom.tagComplete.textContent = t('completeTag');
    if (dom.titleComplete) dom.titleComplete.textContent = t('completeTitle');
    if (dom.descComplete) dom.descComplete.textContent = t('completeDesc');
    if (dom.labelStudyMode) dom.labelStudyMode.textContent = t('labelStudyMode');
    if (dom.optStudyImmediate) dom.optStudyImmediate.textContent = t('optStudyImmediate');
    if (dom.optStudyExam) dom.optStudyExam.textContent = t('optStudyExam');
    if (dom.labelDomainFilter) dom.labelDomainFilter.textContent = t('labelDomainFilter');
    if (dom.btnStartComplete) dom.btnStartComplete.textContent = t('btnStartComplete');

    // History
    if (dom.historyTitle) dom.historyTitle.textContent = t('historyTitle');
    if (dom.historySubtitle) dom.historySubtitle.textContent = t('historySubtitle');

    // Quiz elements
    if (dom.btnOpenNav) dom.btnOpenNav.textContent = t('btnOpenNav');
    if (dom.btnPrev) dom.btnPrev.textContent = t('btnPrev');
    if (dom.btnNext) dom.btnNext.textContent = t('btnNext');
    if (dom.btnFinish) dom.btnFinish.textContent = t('btnFinish');
    if (dom.quizShortcutsTip) dom.quizShortcutsTip.textContent = t('quizShortcutsTip');
    if (dom.explanationTip) dom.explanationTip.textContent = t('explanationTip');

    // Modal Navigator
    if (dom.modalNavTitle) dom.modalNavTitle.textContent = t('modalNavTitle');
    if (dom.legendAnswered) dom.legendAnswered.textContent = t('legendAnswered');
    if (dom.legendUnanswered) dom.legendUnanswered.textContent = t('legendUnanswered');
    if (dom.legendFlagged) dom.legendFlagged.textContent = t('legendFlagged');
    if (dom.legendCurrent) dom.legendCurrent.textContent = t('legendCurrent');

    // Results elements
    if (dom.kpiLabelScore) dom.kpiLabelScore.textContent = t('kpiScore');
    if (dom.kpiLabelRatio) dom.kpiLabelRatio.textContent = t('kpiRatio');
    if (dom.kpiLabelTime) dom.kpiLabelTime.textContent = t('kpiTime');
    if (dom.btnRetryExam) dom.btnRetryExam.textContent = t('btnRetryExam');
    if (dom.btnGoHome) dom.btnGoHome.textContent = t('btnGoHome');
    if (dom.domainBreakdownTitle) dom.domainBreakdownTitle.textContent = t('domainBreakdownTitle');
    if (dom.reviewSectionTitle) dom.reviewSectionTitle.textContent = t('reviewSectionTitle');
    if (dom.tabAll) dom.tabAll.textContent = t('tabAll');
    if (dom.tabFailed) dom.tabFailed.textContent = t('tabFailed');
    if (dom.tabFlagged) dom.tabFlagged.textContent = t('tabFlagged');

    // Footer
    if (dom.footerText) dom.footerText.textContent = t('footerText');
  }

  function updateQuizModeBadge() {
    if (!dom.badgeQuizMode) return;
    if (state.mode === 'realistic') {
      dom.badgeQuizMode.textContent = t('badgeRealistic');
    } else if (state.mode === 'quick') {
      dom.badgeQuizMode.textContent = t('badgeQuick');
    } else {
      const modeLabel = state.studyFeedback ? t('typeImmediate') : t('typeExam');
      dom.badgeQuizMode.textContent = t('badgeComplete', state.activeQuestions.length, modeLabel);
    }
  }

  // ================= GESTIÓN DE VISTAS =================
  function switchView(viewName) {
    state.currentView = viewName;
    dom.viewHome.classList.remove('active');
    dom.viewQuiz.classList.remove('active');
    dom.viewResults.classList.remove('active');

    if (viewName === 'home') {
      dom.viewHome.classList.add('active');
      populateDomainSelect();
      renderHistory();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'quiz') {
      dom.viewQuiz.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'results') {
      dom.viewResults.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ================= INICIALIZACIÓN DE SESIÓN =================
  function startQuiz(mode, customQuestions = null) {
    state.mode = mode;
    state.isSubmitted = false;
    state.userAnswers = {};
    state.flagged = {};
    state.currentIndex = 0;
    state.timeElapsed = 0;

    let pool = [];

    if (customQuestions && customQuestions.length > 0) {
      // Reintento de preguntas específicas (ej. solo falladas)
      pool = customQuestions.map(item => item.raw || item);
      state.studyFeedback = false;
    } else if (mode === 'quick') {
      // MODO RÁPIDO: Exactamente 25 preguntas aleatorias con feedback inmediato
      state.studyFeedback = true;
      const shuffledAll = shuffleArray(QUESTION_BANK);
      pool = shuffledAll.slice(0, 25);
    } else if (mode === 'realistic') {
      // MODO REALISTA: Exactamente 75 preguntas aleatorias
      state.studyFeedback = false;
      const shuffledAll = shuffleArray(QUESTION_BANK);
      pool = shuffledAll.slice(0, 75);
    } else {
      // MODO COMPLETO: Todas las preguntas o filtradas por dominio
      const selectedDomain = dom.selectDomainFilter ? dom.selectDomainFilter.value : 'all';
      const studyModeValue = dom.selectStudyMode ? dom.selectStudyMode.value : 'immediate';
      state.studyFeedback = (studyModeValue === 'immediate');

      if (selectedDomain === 'all') {
        pool = [...QUESTION_BANK];
      } else {
        // Filtrar coincidiendo por domain_es o domain_en o domain base
        pool = QUESTION_BANK.filter(q =>
          q.domain === selectedDomain ||
          q.domain_es === selectedDomain ||
          q.domain_en === selectedDomain
        );
      }
      pool = shuffleArray(pool);
    }

    // Preparar preguntas preservando orden aleatorio de opciones por índice
    state.activeQuestions = pool.map((q, idx) => {
      const optionsCount = (q.options_es || q.options || []).length;
      const optionOrder = shuffleArray([...Array(optionsCount).keys()]); // ej. [2, 0, 3, 1]
      const newCorrectIndex = optionOrder.indexOf(q.correctIndex);

      return {
        id: q.id,
        sessionIndex: idx,
        raw: q,
        optionOrder: optionOrder,
        correctIndex: newCorrectIndex
      };
    });

    // Configurar Temporizador
    if (state.timerInterval) clearInterval(state.timerInterval);

    if (mode === 'realistic') {
      state.timerSeconds = 90 * 60; // 90 minutos regresivo
      dom.timerDisplay.textContent = formatTime(state.timerSeconds);
      dom.timerBox.classList.remove('warning', 'danger');

      state.timerInterval = setInterval(() => {
        state.timerSeconds--;
        state.timeElapsed++;
        dom.timerDisplay.textContent = formatTime(state.timerSeconds);

        if (state.timerSeconds <= 15 * 60 && state.timerSeconds > 5 * 60) {
          dom.timerBox.classList.add('warning');
        } else if (state.timerSeconds <= 5 * 60) {
          dom.timerBox.classList.remove('warning');
          dom.timerBox.classList.add('danger');
        }

        if (state.timerSeconds <= 0) {
          clearInterval(state.timerInterval);
          alert(t('timeUpAlert'));
          finishQuiz();
        }
      }, 1000);
    } else {
      // Cronómetro ascendente
      state.timerSeconds = 0;
      dom.timerBox.classList.remove('warning', 'danger');
      dom.timerDisplay.textContent = "00:00";

      state.timerInterval = setInterval(() => {
        state.timerSeconds++;
        state.timeElapsed++;
        dom.timerDisplay.textContent = formatTime(state.timerSeconds);
      }, 1000);
    }

    updateQuizModeBadge();
    switchView('quiz');
    renderQuestion(0);
  }

  // ================= RENDERIZAR PREGUNTA ACTUAL =================
  function renderQuestion(index) {
    state.currentIndex = index;
    const qItem = state.activeQuestions[index];
    if (!qItem) return;

    const total = state.activeQuestions.length;
    const raw = qItem.raw;
    const lang = state.lang;

    // Obtener campos traducidos
    const questionText = lang === 'en' ? (raw.question_en || raw.question) : (raw.question_es || raw.question);
    const domainText = lang === 'en' ? (raw.domain_en || raw.domain) : (raw.domain_es || raw.domain);
    const topicText = lang === 'en' ? (raw.topic_en || raw.topic) : (raw.topic_es || raw.topic);
    const explanationText = lang === 'en' ? (raw.explanation_en || raw.explanation) : (raw.explanation_es || raw.explanation);

    // Opciones en el idioma actual, manteniendo el orden aleatorio establecido para esta sesión
    const rawOptions = (lang === 'en' && raw.options_en) ? raw.options_en : (raw.options_es || raw.options);
    const displayOptions = qItem.optionOrder.map(origIdx => rawOptions[origIdx]);

    // Actualizar contadores y barras
    dom.qCounter.textContent = t('qCounter', index + 1, total);
    const progressPct = ((index + 1) / total) * 100;
    dom.progressBarFill.style.width = `${progressPct}%`;

    // Flag
    const isFlagged = !!state.flagged[index];
    dom.btnFlag.classList.toggle('active', isFlagged);
    dom.btnFlag.innerHTML = isFlagged ? t('btnFlagActive') : t('btnFlagDefault');

    // Encabezado de la pregunta
    dom.domainPill.textContent = domainText;
    dom.topicTag.textContent = topicText ? `• ${topicText}` : '';
    dom.questionText.textContent = questionText;

    // Renderizar Opciones
    dom.optionsList.innerHTML = '';
    const selectedAns = state.userAnswers[index]; // Índice en displayOptions (0..N-1)
    const hasAnswered = (selectedAns !== undefined);

    const keyLetters = ['A', 'B', 'C', 'D', 'E'];

    displayOptions.forEach((optText, optIdx) => {
      const optDiv = document.createElement('div');
      optDiv.className = 'option-item';

      if (hasAnswered && selectedAns === optIdx) {
        optDiv.classList.add('selected');
      }

      // Si estamos en Modo Estudio Inmediato y ya se respondió:
      if (state.studyFeedback && hasAnswered) {
        optDiv.classList.add('disabled');
        if (optIdx === qItem.correctIndex) {
          optDiv.classList.add('correct');
        } else if (selectedAns === optIdx) {
          optDiv.classList.add('incorrect');
        }
      }

      optDiv.innerHTML = `
        <div class="option-key">${keyLetters[optIdx] || optIdx + 1}</div>
        <div class="option-text">${escapeHtml(optText)}</div>
      `;

      optDiv.addEventListener('click', () => {
        if (state.studyFeedback && hasAnswered) return;
        selectOption(index, optIdx);
      });

      dom.optionsList.appendChild(optDiv);
    });

    // Explicación (Solo en Modo Estudio y si ya respondió)
    if (state.studyFeedback && hasAnswered) {
      dom.explanationBox.classList.add('show');
      const isCorrect = (selectedAns === qItem.correctIndex);
      dom.explanationBox.className = `explanation-box show ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
      dom.explanationHeader.className = `explanation-header ${isCorrect ? 'success' : 'error'}`;
      dom.explanationHeader.innerHTML = isCorrect ? t('feedbackCorrect') : t('feedbackIncorrect');

      dom.explanationBody.innerHTML = `
        <div style="margin-bottom: 0.65rem; font-size: 0.95rem;">
          <span style="color: var(--success); font-weight: 700;">${t('correctAnswerLabel')}</span>
          <strong>${keyLetters[qItem.correctIndex]}</strong>: ${escapeHtml(displayOptions[qItem.correctIndex])}
        </div>
        <div style="color: #cbd5e1; line-height: 1.55;">
          <strong style="color: #93c5fd;">${t('explanationRationaleLabel')}</strong><br>
          ${escapeHtml(explanationText)}
        </div>
      `;

      if (dom.btnNextInline) {
        if (index === total - 1) {
          dom.btnNextInline.textContent = t('btnNextInlineFinish');
          dom.btnNextInline.className = 'btn btn-danger btn-sm';
        } else {
          dom.btnNextInline.textContent = t('btnNextInlineNext');
          dom.btnNextInline.className = 'btn btn-primary btn-sm';
        }
      }
    } else {
      dom.explanationBox.className = 'explanation-box';
    }

    // Botones Prev / Next / Finish
    dom.btnPrev.disabled = (index === 0);
    if (index === total - 1) {
      dom.btnNext.style.display = 'none';
      dom.btnFinish.style.display = 'inline-flex';
    } else {
      dom.btnNext.style.display = 'inline-flex';
      dom.btnFinish.style.display = 'none';
    }
  }

  // ================= SELECCIONAR OPCION =================
  function selectOption(qIndex, optionIndex) {
    state.userAnswers[qIndex] = optionIndex;
    renderQuestion(qIndex);
  }

  // ================= TOGGLE FLAG =================
  function toggleFlag(qIndex) {
    state.flagged[qIndex] = !state.flagged[qIndex];
    renderQuestion(qIndex);
  }

  // ================= NAVEGADOR DE PREGUNTAS (MODAL) =================
  function openNavModal() {
    dom.qGrid.innerHTML = '';
    const total = state.activeQuestions.length;

    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.className = 'grid-btn';
      btn.textContent = (i + 1);

      if (state.userAnswers[i] !== undefined) {
        btn.classList.add('answered');
      }
      if (state.flagged[i]) {
        btn.classList.add('flagged');
      }
      if (state.currentIndex === i) {
        btn.classList.add('current');
      }

      btn.addEventListener('click', () => {
        dom.modalNav.classList.remove('open');
        renderQuestion(i);
      });

      dom.qGrid.appendChild(btn);
    }

    dom.modalNav.classList.add('open');
  }

  // ================= FINALIZAR EXAMEN =================
  function finishQuiz() {
    if (state.timerInterval) clearInterval(state.timerInterval);

    // Contar respondidas
    const total = state.activeQuestions.length;
    let answeredCount = 0;
    for (let i = 0; i < total; i++) {
      if (state.userAnswers[i] !== undefined) answeredCount++;
    }

    if (answeredCount < total && state.timerSeconds > 0) {
      const confirmFinish = confirm(t('confirmFinish', answeredCount, total));
      if (!confirmFinish) return;
    }

    state.isSubmitted = true;
    showResults();
  }

  // ================= MOSTRAR RESULTADOS =================
  function showResults() {
    // Guardar en Historial si es un intento nuevo recién calificado
    const total = state.activeQuestions.length;
    let correctCount = 0;
    state.activeQuestions.forEach((q, idx) => {
      if (state.userAnswers[idx] === q.correctIndex) correctCount++;
    });

    const scorePct = Math.round((correctCount / total) * 100);
    const passed = (scorePct >= 70);

    const historyEntry = {
      date: new Date().toLocaleDateString(state.lang === 'en' ? 'en-US' : 'es-ES', {
        day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
      }),
      mode: state.mode === 'realistic'
        ? (state.lang === 'en' ? 'Realistic (75q)' : 'Realista (75q)')
        : (state.mode === 'quick' ? (state.lang === 'en' ? 'Quick (25q)' : 'Rápido (25q)') : (state.lang === 'en' ? 'Complete' : 'Completo')),
      scorePct: scorePct,
      correct: correctCount,
      total: total,
      passed: passed
    };

    state.history.unshift(historyEntry);
    if (state.history.length > 10) state.history.pop();
    try {
      localStorage.setItem('datadog_exam_history', JSON.stringify(state.history));
    } catch (e) {}

    renderResultsUI();
    switchView('results');
  }

  // Renderizar o refrescar toda la pantalla de resultados (útil al cambiar idioma en resultados)
  function renderResultsUI() {
    const total = state.activeQuestions.length;
    let correctCount = 0;
    const domainStats = {};

    state.activeQuestions.forEach((q, idx) => {
      const isCorrect = (state.userAnswers[idx] === q.correctIndex);
      if (isCorrect) correctCount++;

      // Dominio según idioma activo
      const domainName = state.lang === 'en'
        ? (q.raw.domain_en || q.raw.domain)
        : (q.raw.domain_es || q.raw.domain);

      if (!domainStats[domainName]) {
        domainStats[domainName] = { total: 0, correct: 0 };
      }
      domainStats[domainName].total++;
      if (isCorrect) domainStats[domainName].correct++;
    });

    const scorePct = Math.round((correctCount / total) * 100);
    const passed = (scorePct >= 70);

    // Banner de Aprobación
    dom.resultsBanner.className = `results-banner ${passed ? 'pass' : 'fail'}`;
    dom.statusBadge.textContent = passed ? t('statusPassed') : t('statusFailed');
    dom.resultsSubtext.textContent = passed ? t('subtextPassed') : t('subtextFailed');

    // KPIs
    dom.kpiScorePct.textContent = `${scorePct}%`;
    dom.kpiScorePct.style.color = passed ? 'var(--success)' : 'var(--danger)';
    dom.kpiCorrectRatio.textContent = `${correctCount} / ${total}`;
    dom.kpiTimeSpent.textContent = formatTime(state.timeElapsed);

    // Desglose por Dominios
    dom.domainBarsList.innerHTML = '';
    const sortedDomains = Object.keys(domainStats).sort();

    sortedDomains.forEach(domainName => {
      const d = domainStats[domainName];
      const dPct = Math.round((d.correct / d.total) * 100);

      let colorClass = 'low';
      if (dPct >= 80) colorClass = 'high';
      else if (dPct >= 70) colorClass = 'medium';

      const barItem = document.createElement('div');
      barItem.className = 'domain-bar-item';
      barItem.innerHTML = `
        <div class="domain-bar-header">
          <span class="domain-bar-name">${escapeHtml(domainName)}</span>
          <span class="domain-bar-pct">${d.correct}/${d.total} (${dPct}%)</span>
        </div>
        <div class="domain-bar-track">
          <div class="domain-bar-val ${colorClass}" style="width: ${dPct}%;"></div>
        </div>
      `;
      dom.domainBarsList.appendChild(barItem);
    });

    // Botón de Repasar Solo Falladas
    const failedQuestions = state.activeQuestions.filter((q, idx) => state.userAnswers[idx] !== q.correctIndex);
    if (failedQuestions.length > 0) {
      dom.btnRetryFailed.style.display = 'inline-flex';
      dom.btnRetryFailed.textContent = t('btnRetryFailed', failedQuestions.length);
      dom.btnRetryFailed.onclick = () => {
        startQuiz('complete', failedQuestions);
      };
    } else {
      dom.btnRetryFailed.style.display = 'none';
    }

    // Lista de Revisión
    renderReviewList(state.currentReviewFilter || 'all');
  }

  // ================= LISTA DE REVISIÓN EN RESULTADOS =================
  function renderReviewList(filterType) {
    state.currentReviewFilter = filterType;
    dom.reviewList.innerHTML = '';

    dom.tabAll.classList.toggle('active', filterType === 'all');
    dom.tabFailed.classList.toggle('active', filterType === 'failed');
    dom.tabFlagged.classList.toggle('active', filterType === 'flagged');

    const keyLetters = ['A', 'B', 'C', 'D', 'E'];
    const lang = state.lang;

    state.activeQuestions.forEach((qItem, idx) => {
      const userAns = state.userAnswers[idx];
      const isCorrect = (userAns === qItem.correctIndex);
      const isFlagged = !!state.flagged[idx];

      if (filterType === 'failed' && isCorrect) return;
      if (filterType === 'flagged' && !isFlagged) return;

      const raw = qItem.raw;
      const questionText = lang === 'en' ? (raw.question_en || raw.question) : (raw.question_es || raw.question);
      const domainText = lang === 'en' ? (raw.domain_en || raw.domain) : (raw.domain_es || raw.domain);
      const explanationText = lang === 'en' ? (raw.explanation_en || raw.explanation) : (raw.explanation_es || raw.explanation);

      const rawOptions = (lang === 'en' && raw.options_en) ? raw.options_en : (raw.options_es || raw.options);
      const displayOptions = qItem.optionOrder.map(origIdx => rawOptions[origIdx]);

      const userChoiceText = (userAns !== undefined)
        ? `${keyLetters[userAns]}: ${displayOptions[userAns]}`
        : t('unansweredReview');
      const correctChoiceText = `${keyLetters[qItem.correctIndex]}: ${displayOptions[qItem.correctIndex]}`;

      const card = document.createElement('div');
      card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-incorrect'}`;

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span class="domain-pill">${escapeHtml(domainText)}</span>
          ${isFlagged ? `<span style="color: var(--warning); font-size: 0.82rem; font-weight: bold;">${t('flaggedTag')}</span>` : ''}
        </div>
        <div class="review-q-title">${idx + 1}. ${escapeHtml(questionText)}</div>
        <div class="review-ans-row">
          <span class="review-ans-label ${isCorrect ? 'correct-ans' : 'your-ans'}">${t('yourAnswer')}</span>
          <span>${escapeHtml(userChoiceText)}</span>
        </div>
        ${!isCorrect ? `
          <div class="review-ans-row">
            <span class="review-ans-label correct-ans">${t('correctAnswerReview')}</span>
            <span>${escapeHtml(correctChoiceText)}</span>
          </div>
        ` : ''}
        <div class="review-explanation">
          <strong>${t('reviewRationaleLabel')}</strong><br>
          ${escapeHtml(explanationText)}
        </div>
      `;

      dom.reviewList.appendChild(card);
    });

    if (dom.reviewList.children.length === 0) {
      dom.reviewList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">${t('reviewEmpty')}</div>`;
    }
  }

  // ================= HISTORIAL EN EL HOME =================
  function renderHistory() {
    if (!dom.historyList) return;
    dom.historyList.innerHTML = '';

    if (state.history.length === 0) {
      dom.historyList.innerHTML = `<div style="color: var(--text-dim); font-size: 0.85rem; padding: 0.5rem 0;">${t('historyEmpty')}</div>`;
      return;
    }

    state.history.forEach(item => {
      const div = document.createElement('div');
      div.className = 'history-item';
      div.innerHTML = `
        <div class="history-info">
          <span class="history-mode">${escapeHtml(item.mode)}</span>
          <span class="history-date">${escapeHtml(item.date)}</span>
        </div>
        <div class="history-score ${item.passed ? 'pass' : 'fail'}">${item.scorePct}%</div>
      `;
      dom.historyList.appendChild(div);
    });
  }

  // ================= POBLAR SELECT DE DOMINIOS =================
  function populateDomainSelect() {
    if (!dom.selectDomainFilter) return;
    const currentVal = dom.selectDomainFilter.value;
    const lang = state.lang;

    // Obtener pares de dominios (clave canónica, label traducido)
    const domainMap = new Map();
    QUESTION_BANK.forEach(q => {
      const key = q.domain || q.domain_es;
      const label = lang === 'en' ? (q.domain_en || q.domain) : (q.domain_es || q.domain);
      if (!domainMap.has(key)) {
        domainMap.set(key, { label, count: 0 });
      }
      domainMap.get(key).count++;
    });

    dom.selectDomainFilter.innerHTML = `<option value="all">${t('allDomainsOption', QUESTION_BANK.length)}</option>`;

    Array.from(domainMap.entries()).sort((a, b) => a[1].label.localeCompare(b[1].label)).forEach(([key, info]) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = `${info.label} (${info.count} ${lang === 'en' ? 'questions' : 'preguntas'})`;
      if (key === currentVal) opt.selected = true;
      dom.selectDomainFilter.appendChild(opt);
    });
  }

  // ================= EVENT LISTENERS =================
  function setupEventListeners() {
    // Selectores de Idioma en el header
    if (dom.btnLangEs) {
      dom.btnLangEs.addEventListener('click', () => setLanguage('es'));
    }
    if (dom.btnLangEn) {
      dom.btnLangEn.addEventListener('click', () => setLanguage('en'));
    }

    // Iniciar modos
    if (dom.btnStartQuick) {
      dom.btnStartQuick.addEventListener('click', () => startQuiz('quick'));
    }
    if (dom.btnStartRealistic) {
      dom.btnStartRealistic.addEventListener('click', () => startQuiz('realistic'));
    }
    if (dom.btnStartComplete) {
      dom.btnStartComplete.addEventListener('click', () => startQuiz('complete'));
    }

    // Botón siguiente en la caja de explicación inline
    if (dom.btnNextInline) {
      dom.btnNextInline.addEventListener('click', () => {
        if (state.currentIndex < state.activeQuestions.length - 1) {
          renderQuestion(state.currentIndex + 1);
        } else {
          finishQuiz();
        }
      });
    }

    // Navegación en Quiz
    dom.btnPrev.addEventListener('click', () => {
      if (state.currentIndex > 0) renderQuestion(state.currentIndex - 1);
    });

    dom.btnNext.addEventListener('click', () => {
      if (state.currentIndex < state.activeQuestions.length - 1) {
        renderQuestion(state.currentIndex + 1);
      }
    });

    dom.btnFinish.addEventListener('click', finishQuiz);
    dom.btnFlag.addEventListener('click', () => toggleFlag(state.currentIndex));

    // Modal Grid Navegador
    dom.btnOpenNav.addEventListener('click', openNavModal);
    dom.btnCloseNav.addEventListener('click', () => dom.modalNav.classList.remove('open'));
    dom.modalNav.addEventListener('click', (e) => {
      if (e.target === dom.modalNav) dom.modalNav.classList.remove('open');
    });

    // Tabs de revisión en Resultados
    dom.tabAll.addEventListener('click', () => renderReviewList('all'));
    dom.tabFailed.addEventListener('click', () => renderReviewList('failed'));
    dom.tabFlagged.addEventListener('click', () => renderReviewList('flagged'));

    // Botones de acción en Resultados
    dom.btnRetryExam.addEventListener('click', () => startQuiz(state.mode));
    dom.btnGoHome.addEventListener('click', () => switchView('home'));

    // Atajos de Teclado
    window.addEventListener('keydown', (e) => {
      if (!dom.viewQuiz.classList.contains('active')) return;
      if (dom.modalNav.classList.contains('open')) return;

      const key = e.key.toLowerCase();

      // Enter o Barra Espaciadora para avanzar rápidamente al responder en modo estudio / rápido
      if (['enter', ' '].includes(e.key) && state.studyFeedback && state.userAnswers[state.currentIndex] !== undefined) {
        e.preventDefault();
        if (state.currentIndex < state.activeQuestions.length - 1) {
          renderQuestion(state.currentIndex + 1);
        } else {
          finishQuiz();
        }
        return;
      }

      // Selección de opciones 1, 2, 3, 4, 5 o a, b, c, d, e
      if (['1', 'a'].includes(key)) selectOption(state.currentIndex, 0);
      else if (['2', 'b'].includes(key)) selectOption(state.currentIndex, 1);
      else if (['3', 'c'].includes(key)) selectOption(state.currentIndex, 2);
      else if (['4', 'd'].includes(key)) selectOption(state.currentIndex, 3);
      else if (['5', 'e'].includes(key)) selectOption(state.currentIndex, 4);

      // Flechas
      else if (e.key === 'ArrowLeft' && state.currentIndex > 0) {
        renderQuestion(state.currentIndex - 1);
      } else if (e.key === 'ArrowRight' && state.currentIndex < state.activeQuestions.length - 1) {
        renderQuestion(state.currentIndex + 1);
      }

      // Marcar con F
      else if (key === 'f') {
        toggleFlag(state.currentIndex);
      }
    });
  }

  // ================= ARRANQUE =================
  document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    setLanguage(state.lang);
    switchView('home');
  });

})();