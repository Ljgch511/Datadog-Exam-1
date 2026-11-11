# 🎯 PLAN DE ESTUDIO DEFINITIVO: DATADOG CERTIFIED FUNDAMENTALS

> **Objetivo:** Aprobar con éxito el examen de certificación oficial **Datadog Fundamentals**.
> **Puntaje de Aprobación:** ~70% (mínimo recomendado para asegurar: 75%+)
> **Duración del Examen:** 90 minutos (simulado con 75 preguntas aleatorias)
> **Formato:** Selección simple (opciones múltiples A, B, C, D)

---

## 📌 1. Visión General de la Certificación

La certificación **Datadog Fundamentals** evalúa los conocimientos esenciales para operar, configurar y diagnosticar la plataforma Datadog, así como fundamentos de computación, redes y métricas de sistemas operativos.

### Los 6 Dominios Oficiales Evaluados:
| N° | Dominio Oficial | Peso Aprox. | Temas Clave |
|---|---|---|---|
| **1** | **Computer & OS Fundamentals** | 18% | CPU (user, system, idle, iowait), RAM, Swap, Page Faults, Linux CLI (`pstree`, `cat`, `top`), Subredes CIDR, TCP vs UDP, Puertos |
| **2** | **Infrastructure Deployment & Architecture** | 18% | Arquitectura del Agente, Daemon/Servicio, API Keys vs Application Keys, ciclo de vida de claves, directivas `datadog.yaml` |
| **3** | **Networking & Agent Configuration** | 16% | Puertos del Agente (8125, 8126, 5000), `ip-ranges.datadoghq.com`, proxy y `no_proxy`, Autodiscovery (`ad_identifiers`, `%%port%%`, `%%host%%`) |
| **4** | **Data Collection & Metrics** | 18% | Tipos de métricas (Gauge, Count, Rate, Histogram, Distribution), DogStatsD (UDP, flush 10s), cheques personalizados Python (`min_collection_interval`), Agent vs Crawler |
| **5** | **Troubleshooting Datadog** | 15% | Comandos CLI (`status`, `flare`, `check`, `configcheck`, `diagnose`), logs del Agente en runtime (`agent config set log_level debug`) |
| **6** | **Data Visualization, Monitors & Observability** | 15% | Unified Service Tagging (`env`, `service`, `version`), Dashboards y Widgets, Monitores (Metric, Host, Anomaly, Outlier, Composite), Plantillas de notificación |

---

## 🧠 2. Conceptos Fundamentales y Preguntas Trampa del Examen

### 🔑 A. Claves API vs Claves de Aplicación (Diferencia Crítica)
* **API Key (`DD_API_KEY`):**
  * **Propósito:** Requerida por el Datadog Agent, bibliotecas y DogStatsD para **enviar métricas, trazas, logs y eventos** a Datadog.
  * **Permisos:** No tiene permisos de lectura ni administración.
  * **Ciclo de vida:** Si el usuario que creó la API Key es deshabilitado, la API Key **NO se revoca** automáticamente; sigue funcionando.
* **Application Key (`DD_APP_KEY`):**
  * **Propósito:** Se usa junto con la API Key para interactuar con la **API REST de Datadog** (crear/modificar monitores, dashboards, usuarios, descargar métricas).
  * **Permisos:** Hereda los permisos del usuario que la generó.
  * **Ciclo de vida:** Si el usuario es deshabilitado o eliminado, sus Application Keys **se revocan de inmediato**.

---

### 🖥️ B. Puertos y Direcciones Clave
* **8125 (UDP):** Puerto predeterminado de **DogStatsD** para recibir métricas, eventos y checks de servicio de aplicaciones.
* **8126 (TCP):** Puerto predeterminado del **Trace Agent (APM)** para recibir trazas distribuidas.
* **5000 (TCP):** Expone métricas de runtime/expvar del Datadog Agent.
* **5001 (TCP):** Utilizado para comunicación IPC local del Agente y comandos CLI.
* **443 (TCP - Outbound):** Todo el tráfico saliente desde el Agente hacia la nube de Datadog viaja cifrado por HTTPS en el puerto 443.
* **`https://ip-ranges.datadoghq.com`:** Endpoint oficial JSON que publica los rangos de direcciones IP públicas de Datadog para configurar listas blancas de firewall de salida.

---

### ⚙️ C. Archivos y Rutas del Datadog Agent
* **Ruta de configuración en Linux:** `/etc/datadog-agent/datadog.yaml`
* **Ruta de configuración en Windows:** `C:\ProgramData\Datadog\datadog.yaml`
* **Directorio de integraciones:** `/etc/datadog-agent/conf.d/<nombre_integracion>.d/conf.yaml`
* **Para activar una integración:**
  1. Copiar `conf.yaml.example` a `conf.yaml` en el subdirectorio correspondiente (ej. `/etc/datadog-agent/conf.d/nginx.d/conf.yaml`).
  2. Editar los parámetros de conexión.
  3. Reiniciar el Agente (`sudo systemctl restart datadog-agent`).
  4. Validar con `datadog-agent status` o `datadog-agent check <integracion>`.

---

### 📊 D. Tipos de Métricas y DogStatsD
* **GAUGE:** Toma una instantánea de un valor que puede subir o bajar continuamente (ej. uso de memoria RAM, espacio en disco, conexiones activas).
* **COUNT:** Cuenta el número de ocurrencias acumuladas (ej. cantidad de solicitudes HTTP, errores). Datadog lo normaliza a Rate por segundo en cada intervalo de flush (10 segundos por defecto).
* **RATE:** Mide la variación de eventos por segundo directamente.
* **HISTOGRAM:** Mide la distribución estadística de valores (percentiles p50, p75, p90, p95, p99, avg, max) calculados en el **lado del Agente** por host.
* **DISTRIBUTION:** Calcula percentiles estadísticos globales en el **lado del servidor (Datadog)** a través de múltiples hosts simultáneamente.
* **¿Por qué DogStatsD usa UDP?:** Porque UDP es **no bloqueante** (*connectionless*). Si el Agente está sobrecargado o se detiene, la aplicación de usuario no se congela ni experimenta retrasos esperando respuestas.
* **Marcas de tiempo fraccionales:** Datadog rechaza métricas enviadas con marcas de tiempo en fracciones de segundo (milisegundos); deben enviarse en segundos UNIX enteros.

---

### 🏷️ E. Unified Service Tagging (Etiquetado Unificado)
Para correlacionar métricas, logs y trazas de APM en toda la plataforma, Datadog define tres etiquetas reservadas estándar:
1. `env`: Entorno (`production`, `staging`, `dev`).
2. `service`: Nombre del microservicio o aplicación (`auth-service`, `payment-api`).
3. `version`: Versión del software desplegado (`v2.1.0`, git commit sha).
* **Reglas de sintaxis de etiquetas:** Deben comenzar con una letra, en minúsculas, sin espacios ni caracteres especiales prohibidos (permitidos: `_`, `-`, `:`, `.`, `/`).

---

### 🚨 F. Monitores y Alertas
* **Metric Monitor:** Evalúa umbrales fijos (Critical, Warning, OK).
* **Anomaly Monitor:** Utiliza algoritmos de aprendizaje automático para detectar anomalías estacionales o patrones inusuales según el historial.
* **Outlier Monitor:** Identifica hosts o contenedores dentro de un grupo homogéneo que se comportan de forma divergente respecto a sus pares (algoritmos DBSCAN, MAD).
* **Forecast Monitor:** Predice cuándo una métrica alcanzará un límite crítico en el futuro (ej. cuándo se llenará el disco).
* **Composite Monitor:** Combina múltiples monitores independientes mediante operadores booleanos (`A && B` o `A || B`).
* **Plantillas de mensaje:** Usan sintaxis de Mustache (`{{#is_alert}}...{{/is_alert}}`, `{{host.name}}`, `{{value}}`, `@slack-canal`, `@pagerduty-oncall`).

---

## 🛠️ 3. Comandos Esenciales de la CLI del Agente

| Comando | Función en el Examen |
|---|---|
| `datadog-agent status` | Muestra el estado del Agente, colectores activos, errores de checks y métricas enviadas. **Primer paso ante fallos.** |
| `datadog-agent flare` | Empaqueta logs y configuraciones, **censura datos sensibles/contraseñas automáticamente** y los envía a Soporte Datadog. |
| `datadog-agent check <check_name>` | Ejecuta un check específico de inmediato y muestra en consola las métricas y tags recolectados. |
| `datadog-agent configcheck` | Muestra todas las configuraciones cargadas activas y detecta errores de sintaxis YAML. |
| `datadog-agent diagnose` | Valida la conectividad de red y comunicación hacia los endpoints de Datadog. |
| `agent config set log_level debug` | Cambia dinámicamente el nivel de log a `debug` **sin reiniciar el Agente**. |

---

## 📅 4. Cronograma de Estudio Recomendado (Ruta de 2 Semanas)

### 🔹 Semana 1: Núcleo Técnico y Agente
* **Día 1-2:** Dominio 1 (Fundamentos de SO Linux, CPU `system.cpu.system`, RAM vs Swap, Page Faults, subredes CIDR y puertos TCP/UDP).
* **Día 3-4:** Dominio 2 (Arquitectura del Agente, Daemon, `datadog.yaml`, API vs App Keys, ciclo de vida de credenciales).
* **Día 5-7:** Dominio 3 y 4 (Puertos, proxy, DogStatsD UDP, flush 10s, tipos de métricas Gauge vs Count vs Distribution, `conf.d/`).

### 🔹 Semana 2: Observabilidad, Monitores y Simulacros
* **Día 8-9:** Dominio 5 (Resolución de problemas, comandos CLI: `status`, `flare`, `check`, `configcheck`, `diagnose`, `log_level`).
* **Día 10-11:** Dominio 6 (Unified Service Tagging, Dashboards, Widgets, Monitores Anomaly/Outlier/Composite, sintaxis `@notificaciones`).
* **Día 12-14:** **Simulacros Intensivos con el Simulador Web**:
  * Realizar 3 exámenes en **Modo Realista (75 preguntas, 90 minutos)** hasta promediar más de 85%.
  * Revisar exhaustivamente las preguntas marcadas y erradas con las explicaciones técnicas.

---

## 💻 5. Instrucciones de Uso del Simulador Web

La aplicación web cuenta con 3 modalidades diseñadas para diferentes fases de preparación:

1. **⚡ Modo Rápido (25 Preguntas • Feedback Inmediato):**
   * **Objetivo:** Sesiones ágiles de estudio diario de 10 a 15 minutos (ideal para repetición espaciada).
   * **25 preguntas aleatorias** seleccionadas del banco oficial.
   * **Corrección instantánea**: al hacer clic en cualquier opción, se revela de inmediato si es correcta (verde) o incorrecta (rojo), junto con la opción correcta y la justificación técnica completa.
   * **Atajos ágiles**: puedes usar las teclas `1-4` o `A-D` para responder y presionar `Enter` o `Barra Espaciadora` para avanzar a la siguiente pregunta.
   * **Sin límite de tiempo**: cronómetro de estudio ascendente e informe final de desempeño por dominio.

2. **⏱️ Modo Realista (Examen de Certificación - 75 Preguntas):**
   * **Objetivo:** Medir tu nivel real simulando las condiciones exactas del examen oficial (Kryterion Webassessor).
   * **75 preguntas aleatorias** con alternativas barajadas.
   * **Cronómetro regresivo de 90 minutos** con avisos de advertencia.
   * Permite marcar preguntas para revisión (*Flag for Review*) y revisar el examen al finalizar.
   * Umbral oficial de aprobación: **70%** con reporte de fortalezas y debilidades por los 6 dominios.

3. **📚 Modo Completo (Banco Total & Estudio Guiado - 108 Preguntas):**
   * Acceso al 100% de las preguntas existentes en el programa.
   * Opciones configurables: Modo Estudio Inmediato o Modo Prueba al terminar.
   * Filtro por Dominio oficial (permite entrenar únicamente un área específica como *Networking*, *Data Collection* o *Troubleshooting*).
   * Botón especial **"Repasar Solo Falladas"** al finalizar para reintentar únicamente los errores.

Para iniciar el simulador, simplemente abre `index.html` en tu navegador o ejecuta el servidor local con `python server.py`.
