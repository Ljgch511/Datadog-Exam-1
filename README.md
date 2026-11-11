# 🐶 Datadog Fundamentals Exam Simulator

[![Language: Bilingual](https://img.shields.io/badge/Language-Bilingual%20(ES%20%7C%20EN)-blue.svg)](#)
[![Questions: 108](https://img.shields.io/badge/Questions-108%20Verified-purple.svg)](#)
[![Passing Score: 70%](https://img.shields.io/badge/Passing%20Score-70%25-green.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](#)

Simulador interactivo y banco de preguntas de alta fidelidad diseñado para aprobar el examen oficial de certificación **Datadog Fundamentals** (Kryterion / Webassessor).

---

## 🌟 Características Principales / Key Features

- **🌐 Soporte Bilingüe al Vuelo (ES 🇪🇸 / EN 🇺🇸)**:
  - Cambia de idioma en **cualquier momento** con un solo clic en la barra superior.
  - El cambio actualiza enunciados, opciones y explicaciones técnicas en tiempo real **sin reiniciar el temporizador, sin perder tu selección y sin reiniciar la sesión**.
- **📚 Banco de 108 Preguntas Técnicas**:
  - Cobertura 100% fiel al blueprint oficial de los 6 dominios de la certificación.
  - Preguntas con explicaciones oficiales detalladas y justificación de respuestas.
- **⚡ Tres Modos de Examen**:
  - **⚡ Modo Rápido (25 Preguntas)**: Sesión ágil de 10-15 minutos con feedback visual inmediato (verde/rojo) y justificación técnica al responder cada opción. Ideal para repasar rápido.
  - **⏱️ Modo Realista (75 Preguntas - 90 Minutos)**: Simula exactamente las condiciones de Kryterion/Webassessor. Cronómetro regresivo oficial, preguntas y opciones 100% aleatorias y botón de marcar preguntas (*Flag for review*).
  - **📖 Modo Completo (108 Preguntas)**: Práctica guiada por dominios específicos para estudiar a tu propio ritmo.
- **📊 Métricas y Desglose por Dominios**:
  - Evaluación automática con umbral de certificación del 70%.
  - Desglose gráfico de rendimiento por cada uno de los 6 dominios.
  - Revisión detallada pregunta por pregunta con filtros de todas, solo falladas y marcadas.
- **💾 Historial Local**:
  - Registra tus últimos 10 intentos con fecha y puntaje en `localStorage`.

---

## 🎯 Estructura de los 6 Dominios Oficiales

1. **Domain 1**: Computer & OS Fundamentals
2. **Domain 2**: Datadog Architecture & Agent Fundamentals
3. **Domain 3**: Metrics, Events, & Logs Collection
4. **Domain 4**: Monitoring & Alerting Fundamentals
5. **Domain 5**: Dashboards & Data Visualization
6. **Domain 6**: APM, Tracing, & Integrations

---

## 🚀 Cómo Usar Localmente / How to Run Locally

### Opción 1: Abrir directamente en el navegador
Haz doble clic en el archivo `index.html`. Funciona directamente con JavaScript vanilla sin necesidad de instalar dependencias ni NodeJS.

### Opción 2: Usar el lanzador automático (Windows)
Haz doble clic en `iniciar_simulador.bat`. Iniciará un servidor HTTP local en Python y abrirá el navegador automáticamente.

### Opción 3: Servidor Python
```bash
python server.py
```
Abre en tu navegador `http://localhost:8000`.

---

## 🌐 Publicar en GitHub Pages (Gratis)

Puedes alojar este simulador en GitHub Pages para estudiar desde cualquier dispositivo (PC, tablet o móvil):
1. Ve a tu repositorio en GitHub: `https://github.com/Ljgch511/Datadog-Exam-1`
2. Ve a **Settings** > **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment** > **Source**, selecciona `Deploy from a branch`.
4. Elige la rama `main` y la carpeta `/ (root)`. Haz clic en **Save**.
5. En unos segundos tu simulador estará disponible en:
   `https://ljgch511.github.io/Datadog-Exam-1/`

---

## 📁 Estructura del Proyecto

```text
├── index.html                 # Estructura principal y vistas del simulador
├── style.css                  # Estilos modernos basados en la paleta oficial Datadog
├── app.js                     # Lógica de la aplicación, estados, temporizadores e i18n
├── questions.js               # Banco bilingüe de 108 preguntas con explicaciones
├── PLAN_DE_ESTUDIO_DATADOG.md # Guía completa de estudio para la certificación
├── iniciar_simulador.bat      # Lanzador de un clic para Windows
└── server.py                  # Servidor HTTP local opcional
```

---

¡Mucho éxito en tu preparación para la certificación Datadog Fundamentals! 🚀🐶
