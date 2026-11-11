/**
 * BANCO DE PREGUNTAS BILINGÜE: DATADOG FUNDAMENTALS CERTIFICATION
 * Soporta cambio dinámico de idioma (Español / Inglés) en cualquier momento.
 * Total: 108 preguntas con traducciones completas de preguntas, opciones y explicaciones.
 */

const QUESTION_BANK = [
  {
    "id": 1,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Memoria y Swap",
    "topic_en": "Memory & Swap Space",
    "topic": "Memoria y Swap",
    "question_es": "En el contexto de la memoria del sistema operativo, ¿cuál es el propósito principal del espacio de intercambio (swap space)?",
    "question_en": "In the context of operating system memory, what is the primary purpose of swap space?",
    "question": "En el contexto de la memoria del sistema operativo, ¿cuál es el propósito principal del espacio de intercambio (swap space)?",
    "options_es": [
      "Sustituir espacio en disco por memoria RAM cuando la memoria RAM física está al máximo de su capacidad.",
      "Realizar un intercambio bit a bit (bitwise swap) en una dirección de memoria arbitraria.",
      "Definir y exportar un dispositivo de bloques para almacenamiento externo de archivos.",
      "Acelerar las operaciones de lectura de la CPU mediante el uso de memoria caché L3."
    ],
    "options_en": [
      "Substitute disk space for RAM when physical RAM is at maximum capacity.",
      "Perform a bitwise swap on an arbitrary memory location.",
      "Define and export a block device for external file storage.",
      "Accelerate CPU read operations using L3 cache memory."
    ],
    "options": [
      "Sustituir espacio en disco por memoria RAM cuando la memoria RAM física está al máximo de su capacidad.",
      "Realizar un intercambio bit a bit (bitwise swap) en una dirección de memoria arbitraria.",
      "Definir y exportar un dispositivo de bloques para almacenamiento externo de archivos.",
      "Acelerar las operaciones de lectura de la CPU mediante el uso de memoria caché L3."
    ],
    "correctIndex": 0,
    "explanation_es": "El espacio de intercambio (swap space) en Linux/Unix es un área designada en el disco que actúa como una extensión de la memoria RAM. Cuando la RAM física se satura, el kernel traslada las páginas inactivas de memoria al swap para liberar RAM para los procesos activos.",
    "explanation_en": "Swap space on Linux/Unix systems is a designated area on storage that acts as an overflow extension of physical RAM. When physical RAM is fully utilized, the kernel pages out inactive memory to swap to free up physical memory for active processes.",
    "explanation": "El espacio de intercambio (swap space) en Linux/Unix es un área designada en el disco que actúa como una extensión de la memoria RAM. Cuando la RAM física se satura, el kernel traslada las páginas inactivas de memoria al swap para liberar RAM para los procesos activos."
  },
  {
    "id": 2,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Métricas de CPU",
    "topic_en": "CPU Metrics",
    "topic": "Métricas de CPU",
    "question_es": "La métrica del sistema 'system.cpu.system' representa el porcentaje de tiempo que la CPU dedicó a ejecutar:",
    "question_en": "The system metric 'system.cpu.system' represents the percentage of time the CPU spent running:",
    "question": "La métrica del sistema 'system.cpu.system' representa el porcentaje de tiempo que la CPU dedicó a ejecutar:",
    "options_es": [
      "El procesador virtual o hipervisor.",
      "Los procesos que se ejecutan en el espacio de usuario (user space).",
      "El kernel del sistema operativo.",
      "Las rutinas de recolección de basura del lenguaje de programación."
    ],
    "options_en": [
      "The virtual processor or hypervisor.",
      "Processes executing in user space.",
      "The operating system kernel.",
      "Language garbage collection routines."
    ],
    "options": [
      "El procesador virtual o hipervisor.",
      "Los procesos que se ejecutan en el espacio de usuario (user space).",
      "El kernel del sistema operativo.",
      "Las rutinas de recolección de basura del lenguaje de programación."
    ],
    "correctIndex": 2,
    "explanation_es": "En la métricas de CPU de Datadog, 'system.cpu.system' cuantifica el porcentaje de tiempo que la CPU ejecutó código en el espacio de kernel (kernel space/system level). El tiempo en aplicaciones de usuario se mide con 'system.cpu.user'.",
    "explanation_en": "In Datadog CPU metrics, 'system.cpu.system' quantifies the percentage of time the processor spent executing kernel-level code (system space). Time spent in user-space applications is measured by 'system.cpu.user'.",
    "explanation": "En la métricas de CPU de Datadog, 'system.cpu.system' cuantifica el porcentaje de tiempo que la CPU ejecutó código en el espacio de kernel (kernel space/system level). El tiempo en aplicaciones de usuario se mide con 'system.cpu.user'."
  },
  {
    "id": 3,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Memoria RAM",
    "topic_en": "RAM Memory",
    "topic": "Memoria RAM",
    "question_es": "¿Cuál de las siguientes opciones describe MEJOR el rol de la memoria RAM en un sistema informático?",
    "question_en": "Which of the following BEST describes the role of RAM in a computer system?",
    "question": "¿Cuál de las siguientes opciones describe MEJOR el rol de la memoria RAM en un sistema informático?",
    "options_es": [
      "Es el lugar donde se mantienen las aplicaciones y los datos que están actualmente en uso por el procesador.",
      "Es un dispositivo de almacenamiento no volátil y persistente a largo plazo.",
      "Es la unidad responsable de ejecutar las instrucciones matemáticas y lógicas del procesador.",
      "Es un bus de comunicación de alta velocidad exclusivo para transferencias entre tarjetas de red."
    ],
    "options_en": [
      "It is where applications and data currently in active use by the processor are kept.",
      "It is a non-volatile, persistent long-term storage device.",
      "It is the unit responsible for executing mathematical and logical instructions.",
      "It is a dedicated high-speed bus exclusively for network interface card transfers."
    ],
    "options": [
      "Es el lugar donde se mantienen las aplicaciones y los datos que están actualmente en uso por el procesador.",
      "Es un dispositivo de almacenamiento no volátil y persistente a largo plazo.",
      "Es la unidad responsable de ejecutar las instrucciones matemáticas y lógicas del procesador.",
      "Es un bus de comunicación de alta velocidad exclusivo para transferencias entre tarjetas de red."
    ],
    "correctIndex": 0,
    "explanation_es": "La RAM (Random Access Memory) es memoria de trabajo volátil de acceso ultrarrápido que almacena las instrucciones y datos de los procesos que el procesador está ejecutando activamente.",
    "explanation_en": "RAM (Random Access Memory) provides fast, volatile workspace storage that holds program code and data actively executed by the central processing unit.",
    "explanation": "La RAM (Random Access Memory) es memoria de trabajo volátil de acceso ultrarrápido que almacena las instrucciones y datos de los procesos que el procesador está ejecutando activamente."
  },
  {
    "id": 4,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Paginación y Fallos de Página",
    "topic_en": "Paging & Page Faults",
    "topic": "Paginación y Fallos de Página",
    "question_es": "Una tasa inusualmente alta de fallos de página mayores (major page faults) generalmente indica:",
    "question_en": "An unusually high rate of major page faults typically indicates:",
    "question": "Una tasa inusualmente alta de fallos de página mayores (major page faults) generalmente indica:",
    "options_es": [
      "Insuficiente espacio de almacenamiento en disco para guardar logs.",
      "Memoria RAM física insuficiente, forzando al sistema a paginar desde el disco o swap.",
      "Cuello de botella térmico en los núcleos de la CPU.",
      "Problemas de ancho de banda o pérdida de paquetes en la tarjeta de red (NIC)."
    ],
    "options_en": [
      "Insufficient disk storage space to save logs.",
      "Insufficient physical RAM, forcing the operating system to page memory from disk or swap.",
      "A thermal bottleneck across CPU cores.",
      "Bandwidth saturation or packet drops on the network interface card (NIC)."
    ],
    "options": [
      "Insuficiente espacio de almacenamiento en disco para guardar logs.",
      "Memoria RAM física insuficiente, forzando al sistema a paginar desde el disco o swap.",
      "Cuello de botella térmico en los núcleos de la CPU.",
      "Problemas de ancho de banda o pérdida de paquetes en la tarjeta de red (NIC)."
    ],
    "correctIndex": 1,
    "explanation_es": "Un fallo de página mayor (major page fault) ocurre cuando el sistema operativo solicita una página de memoria que no está en la RAM física y debe cargarse desde el disco secundario o swap. Un número elevado es el síntoma clásico de presión de memoria RAM.",
    "explanation_en": "A major page fault occurs when a requested memory page is not present in physical RAM and must be read from disk (swap space). High major page fault rates are a classic symptom of memory pressure.",
    "explanation": "Un fallo de página mayor (major page fault) ocurre cuando el sistema operativo solicita una página de memoria que no está en la RAM física y debe cargarse desde el disco secundario o swap. Un número elevado es el síntoma clásico de presión de memoria RAM."
  },
  {
    "id": 5,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Subredes y Direccionamiento IP",
    "topic_en": "Subnets & IP Addressing",
    "topic": "Subredes y Direccionamiento IP",
    "question_es": "¿Cuáles de las siguientes dos direcciones IP se encuentran dentro de la misma subred de red?",
    "question_en": "Which two IP addresses are located in the same network subnet?",
    "question": "¿Cuáles de las siguientes dos direcciones IP se encuentran dentro de la misma subred de red?",
    "options_es": [
      "192.168.1.1/16 y 192.168.2.1/16",
      "192.168.1.1/24 y 192.168.2.1/24",
      "10.0.1.5/24 y 10.0.2.5/24",
      "192.168.1.1/32 y 192.168.1.65/32"
    ],
    "options_en": [
      "192.168.1.1/16 and 192.168.2.1/16",
      "192.168.1.1/24 and 192.168.2.1/24",
      "10.0.1.5/24 and 10.0.2.5/24",
      "192.168.1.1/32 and 192.168.1.65/32"
    ],
    "options": [
      "192.168.1.1/16 y 192.168.2.1/16",
      "192.168.1.1/24 y 192.168.2.1/24",
      "10.0.1.5/24 y 10.0.2.5/24",
      "192.168.1.1/32 y 192.168.1.65/32"
    ],
    "correctIndex": 0,
    "explanation_es": "Una máscara /16 indica que los primeros 16 bits (los primeros 2 octetos: 192.168.0.0 a 192.168.255.255) representan la red. Por lo tanto, tanto 192.168.1.1 como 192.168.2.1 pertenecen a la misma subred /16. En cambio con /24 estarían en redes diferentes.",
    "explanation_en": "A /16 subnet mask indicates that the first 16 bits (the first two octets: 192.168.0.0 through 192.168.255.255) designate the network. Therefore, both 192.168.1.1 and 192.168.2.1 reside in the same /16 subnet.",
    "explanation": "Una máscara /16 indica que los primeros 16 bits (los primeros 2 octetos: 192.168.0.0 a 192.168.255.255) representan la red. Por lo tanto, tanto 192.168.1.1 como 192.168.2.1 pertenecen a la misma subred /16. En cambio con /24 estarían en redes diferentes."
  },
  {
    "id": 6,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Notación CIDR",
    "topic_en": "CIDR Notation",
    "topic": "Notación CIDR",
    "question_es": "Para la dirección IP '192.168.1.1/24', ¿qué indica el valor '/24'?",
    "question_en": "For the IP address '192.168.1.1/24', what does the value '/24' indicate?",
    "question": "Para la dirección IP '192.168.1.1/24', ¿qué indica el valor '/24'?",
    "options_es": [
      "El valor de la máscara de subred (número de bits de red) asignada a la dirección.",
      "La dirección física MAC del gateway predeterminado.",
      "El puerto de comunicación predeterminado para el protocolo de enlace.",
      "El identificador del dominio de difusión físico (broadcast domain ID)."
    ],
    "options_en": [
      "The subnet mask value (number of network bits) assigned to the address.",
      "The physical MAC address of the default gateway.",
      "The default communication port for the link protocol.",
      "The broadcast domain physical identifier."
    ],
    "options": [
      "El valor de la máscara de subred (número de bits de red) asignada a la dirección.",
      "La dirección física MAC del gateway predeterminado.",
      "El puerto de comunicación predeterminado para el protocolo de enlace.",
      "El identificador del dominio de difusión físico (broadcast domain ID)."
    ],
    "correctIndex": 0,
    "explanation_es": "En la notación CIDR, '/24' representa la longitud del prefijo de red, es decir, 24 bits asignados a la máscara de subred (equivalente a 255.255.255.0), dejando 8 bits para direcciones de host (254 hosts utilizables).",
    "explanation_en": "In CIDR notation, '/24' specifies the prefix length (24 network bits, equivalent to a 255.255.255.0 subnet mask), leaving 8 bits for host addresses.",
    "explanation": "En la notación CIDR, '/24' representa la longitud del prefijo de red, es decir, 24 bits asignados a la máscara de subred (equivalente a 255.255.255.0), dejando 8 bits para direcciones de host (254 hosts utilizables)."
  },
  {
    "id": 7,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Protocolos de Transporte",
    "topic_en": "Transport Protocols",
    "topic": "Protocolos de Transporte",
    "question_es": "En comparación con la comunicación basada en TCP, la comunicación basada en UDP es:",
    "question_en": "Compared to TCP-based communication, UDP-based communication is:",
    "question": "En comparación con la comunicación basada en TCP, la comunicación basada en UDP es:",
    "options_es": [
      "Más segura y con cifrado nativo obligatorio.",
      "Menos confiable, pero sin sobrecarga de establecimiento de conexión (connectionless y no bloqueante).",
      "Más comprimida debido a algoritmos de compresión en el encabezado de transporte.",
      "Garantizada con reordenamiento y retransmisión automática de paquetes perdidos."
    ],
    "options_en": [
      "More secure, with mandatory native encryption.",
      "Less reliable, but connectionless and non-blocking without connection overhead.",
      "More compressed due to transport header compression algorithms.",
      "Guaranteed with automatic packet reordering and retransmissions."
    ],
    "options": [
      "Más segura y con cifrado nativo obligatorio.",
      "Menos confiable, pero sin sobrecarga de establecimiento de conexión (connectionless y no bloqueante).",
      "Más comprimida debido a algoritmos de compresión en el encabezado de transporte.",
      "Garantizada con reordenamiento y retransmisión automática de paquetes perdidos."
    ],
    "correctIndex": 1,
    "explanation_es": "UDP es un protocolo no orientado a conexión que no garantiza la entrega, el orden ni la retransmisión de paquetes, haciéndolo menos confiable que TCP pero significativamente más rápido, ligero y no bloqueante (motivo por el cual DogStatsD usa UDP).",
    "explanation_en": "UDP is a connectionless transport protocol that does not guarantee delivery, order, or retransmissions, making it less reliable than TCP but significantly faster, lighter, and non-blocking.",
    "explanation": "UDP es un protocolo no orientado a conexión que no garantiza la entrega, el orden ni la retransmisión de paquetes, haciéndolo menos confiable que TCP pero significativamente más rápido, ligero y no bloqueante (motivo por el cual DogStatsD usa UDP)."
  },
  {
    "id": 8,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Métricas de Red",
    "topic_en": "Network Metrics",
    "topic": "Métricas de Red",
    "question_es": "¿Cuál de las siguientes métricas se puede graficar directamente a partir de las métricas expuestas por Cloud Network Monitoring?",
    "question_en": "Which of the following can be graphed with metrics exposed by Cloud Network Monitoring?",
    "question": "¿Cuál de las siguientes métricas se puede graficar directamente a partir de las métricas expuestas por Cloud Network Monitoring?",
    "options_es": [
      "Rendimiento de tráfico (Throughput) en bytes/segundo.",
      "Retransmisiones nativas de datagramas UDP.",
      "Tamaño promedio de paquetes en el firmware de la BIOS.",
      "Voltaje de los transceptores de fibra óptica del rack."
    ],
    "options_en": [
      "Network throughput in bytes/second.",
      "Native UDP datagram retransmits.",
      "Average packet size in BIOS firmware.",
      "Fiber optic transceiver rack voltage."
    ],
    "options": [
      "Rendimiento de tráfico (Throughput) en bytes/segundo.",
      "Retransmisiones nativas de datagramas UDP.",
      "Tamaño promedio de paquetes en el firmware de la BIOS.",
      "Voltaje de los transceptores de fibra óptica del rack."
    ],
    "correctIndex": 0,
    "explanation_es": "Cloud Network Monitoring de Datadog expone métricas de rendimiento de red como Throughput (volumen de tráfico transferido por segundo), latencia de conexión TCP y retransmisiones TCP. Cabe recordar que UDP no tiene retransmisiones.",
    "explanation_en": "Cloud Network Monitoring in Datadog provides metrics for network throughput (volume of traffic transferred per second), TCP connection latency, and TCP retransmits.",
    "explanation": "Cloud Network Monitoring de Datadog expone métricas de rendimiento de red como Throughput (volumen de tráfico transferido por segundo), latencia de conexión TCP y retransmisiones TCP. Cabe recordar que UDP no tiene retransmisiones."
  },
  {
    "id": 9,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Puertos de Red",
    "topic_en": "Network Ports",
    "topic": "Puertos de Red",
    "question_es": "¿Cuál de las siguientes opciones describe MEJOR el propósito de un puerto de red en los sistemas operativos?",
    "question_en": "Which of the following BEST describes the purpose of a networking port in operating systems?",
    "question": "¿Cuál de las siguientes opciones describe MEJOR el propósito de un puerto de red en los sistemas operativos?",
    "options_es": [
      "Asignar una dirección IP pública única a cada dispositivo de la red local.",
      "Proporcionar un punto final estandarizado (endpoint) para dirigir la comunicación hacia un proceso o servicio específico.",
      "Regular el flujo físico de voltaje en las tarjetas de interfaz de red.",
      "Determinar la ruta física de conmutación entre routers adyacentes."
    ],
    "options_en": [
      "Assign a unique public IP address to each local network device.",
      "Provide a standardized endpoint to direct communication to a specific process or service.",
      "Regulate physical voltage flow across network interface cards.",
      "Determine the physical switching path between adjacent routers."
    ],
    "options": [
      "Asignar una dirección IP pública única a cada dispositivo de la red local.",
      "Proporcionar un punto final estandarizado (endpoint) para dirigir la comunicación hacia un proceso o servicio específico.",
      "Regular el flujo físico de voltaje en las tarjetas de interfaz de red.",
      "Determinar la ruta física de conmutación entre routers adyacentes."
    ],
    "correctIndex": 1,
    "explanation_es": "Un puerto de red (0 a 65535) es una abstracción de software que identifica el proceso o servicio destino específico en un host para un paquete IP entrante o saliente.",
    "explanation_en": "A network port (0 to 65535) is a logical endpoint mapped to an IP address that identifies the specific application or process responsible for handling incoming or outgoing traffic.",
    "explanation": "Un puerto de red (0 a 65535) es una abstracción de software que identifica el proceso o servicio destino específico en un host para un paquete IP entrante o saliente."
  },
  {
    "id": 10,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Comandos Linux - Procesos",
    "topic_en": "Linux Commands - Processes",
    "topic": "Comandos Linux - Procesos",
    "question_es": "¿Qué comando de Linux utilizarías para mostrar una vista jerárquica de árbol que refleje las relaciones padre-hijo de todos los procesos en ejecución?",
    "question_en": "Which Linux command would you use to display a hierarchical tree view showing parent-child relationships of all running processes?",
    "question": "¿Qué comando de Linux utilizarías para mostrar una vista jerárquica de árbol que refleje las relaciones padre-hijo de todos los procesos en ejecución?",
    "options_es": [
      "ps -ef",
      "top",
      "pstree",
      "kill -9"
    ],
    "options_en": [
      "ps -ef",
      "top",
      "pstree",
      "kill -9"
    ],
    "options": [
      "ps -ef",
      "top",
      "pstree",
      "kill -9"
    ],
    "correctIndex": 2,
    "explanation_es": "El comando `pstree` muestra los procesos en ejecución en un formato de diagrama de árbol, facilitando la visualización clara de qué procesos son hijos de otros (ej. procesos hijos del Datadog Agent).",
    "explanation_en": "The `pstree` command displays running processes as a tree diagram, making parent-child process ownership clearly visible.",
    "explanation": "El comando `pstree` muestra los procesos en ejecución en un formato de diagrama de árbol, facilitando la visualización clara de qué procesos son hijos de otros (ej. procesos hijos del Datadog Agent)."
  },
  {
    "id": 11,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Comandos Linux - Archivos",
    "topic_en": "Linux Commands - Files",
    "topic": "Comandos Linux - Archivos",
    "question_es": "¿Qué comando estándar de Linux permite visualizar el contenido completo de un archivo de configuración YAML en la terminal sin abrir un editor de texto interactivo?",
    "question_en": "Which standard Linux command allows you to view the full content of a YAML configuration file in the terminal without opening an interactive text editor?",
    "question": "¿Qué comando estándar de Linux permite visualizar el contenido completo de un archivo de configuración YAML en la terminal sin abrir un editor de texto interactivo?",
    "options_es": [
      "vi datadog.yaml",
      "cat datadog.yaml",
      "edit datadog.yaml",
      "nano datadog.yaml"
    ],
    "options_en": [
      "vi datadog.yaml",
      "cat datadog.yaml",
      "edit datadog.yaml",
      "nano datadog.yaml"
    ],
    "options": [
      "vi datadog.yaml",
      "cat datadog.yaml",
      "edit datadog.yaml",
      "nano datadog.yaml"
    ],
    "correctIndex": 1,
    "explanation_es": "El comando `cat` (concatenate) imprime directamente el contenido del archivo en la salida estándar (terminal) sin entrar en un modo de edición interactivo.",
    "explanation_en": "The `cat` (concatenate) command outputs the complete content of a file directly to standard output without entering an interactive text editing session.",
    "explanation": "El comando `cat` (concatenate) imprime directamente el contenido del archivo en la salida estándar (terminal) sin entrar en un modo de edición interactivo."
  },
  {
    "id": 12,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Sintaxis YAML",
    "topic_en": "YAML Syntax",
    "topic": "Sintaxis YAML",
    "question_es": "En el siguiente bloque de configuración YAML, ¿cuál es el tipo de dato de 'excluded_filesystems'?\n\ninstances:\n  - use_mount: false\nexcluded_filesystems:\n  - tmpfs\n  - /dev/sda2\n  - /dev/sda",
    "question_en": "In the following YAML configuration block, what is the data type of 'excluded_filesystems'?\n\ninstances:\n  - use_mount: false\nexcluded_filesystems:\n  - tmpfs\n  - /dev/sda2\n  - /dev/sda",
    "question": "En el siguiente bloque de configuración YAML, ¿cuál es el tipo de dato de 'excluded_filesystems'?\n\ninstances:\n  - use_mount: false\nexcluded_filesystems:\n  - tmpfs\n  - /dev/sda2\n  - /dev/sda",
    "options_es": [
      "Una tupla inmutable (tuple).",
      "Una lista o secuencia (list/sequence).",
      "Un mapeo o diccionario (mapping/dictionary).",
      "Un valor escalar booleano."
    ],
    "options_en": [
      "An immutable tuple.",
      "A list or sequence.",
      "A mapping or dictionary.",
      "A scalar boolean value."
    ],
    "options": [
      "Una tupla inmutable (tuple).",
      "Una lista o secuencia (list/sequence).",
      "Un mapeo o diccionario (mapping/dictionary).",
      "Un valor escalar booleano."
    ],
    "correctIndex": 1,
    "explanation_es": "En YAML, los elementos precedidos por un guion '-' a un mismo nivel de indentación representan elementos de una lista o secuencia (List/Array).",
    "explanation_en": "In YAML syntax, entries preceded by a hyphen '-' at the same indentation level represent items in a list or sequence (array).",
    "explanation": "En YAML, los elementos precedidos por un guion '-' a un mismo nivel de indentación representan elementos de una lista o secuencia (List/Array)."
  },
  {
    "id": 13,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Reglas de Sintaxis YAML",
    "topic_en": "YAML Syntax Rules",
    "topic": "Reglas de Sintaxis YAML",
    "question_es": "¿Cuál de los siguientes errores es el causante más común de que el analizador (parser) de YAML del Datadog Agent falle al leer 'datadog.yaml'?",
    "question_en": "Which of the following is the most common reason the Datadog Agent's YAML parser fails when reading 'datadog.yaml'?",
    "question": "¿Cuál de los siguientes errores es el causante más común de que el analizador (parser) de YAML del Datadog Agent falle al leer 'datadog.yaml'?",
    "options_es": [
      "Utilizar espacios en blanco para la indentación en lugar de caracteres de tabulación.",
      "Utilizar caracteres de tabulación (TAB) para la indentación en lugar de espacios.",
      "Dejar comentarios que comiencen con el símbolo '#'.",
      "Colocar comillas dobles en valores que contienen cadenas de texto."
    ],
    "options_en": [
      "Using whitespace spaces for indentation instead of tab characters.",
      "Using tab characters (TAB) for indentation instead of spaces.",
      "Leaving comments that begin with the '#' symbol.",
      "Using double quotes around string values."
    ],
    "options": [
      "Utilizar espacios en blanco para la indentación en lugar de caracteres de tabulación.",
      "Utilizar caracteres de tabulación (TAB) para la indentación en lugar de espacios.",
      "Dejar comentarios que comiencen con el símbolo '#'.",
      "Colocar comillas dobles en valores que contienen cadenas de texto."
    ],
    "correctIndex": 1,
    "explanation_es": "La especificación oficial de YAML prohíbe terminantemente el uso de tabuladores (TAB) para la indentación. Siempre se deben utilizar espacios (habitualmente 2 espacios por nivel).",
    "explanation_en": "The official YAML specification strictly prohibits the use of tab characters for indentation. Only spaces (typically 2 spaces per level) are permitted.",
    "explanation": "La especificación oficial de YAML prohíbe terminantemente el uso de tabuladores (TAB) para la indentación. Siempre se deben utilizar espacios (habitualmente 2 espacios por nivel)."
  },
  {
    "id": 14,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Códigos de Estado HTTP",
    "topic_en": "HTTP Status Codes",
    "topic": "Códigos de Estado HTTP",
    "question_es": "En el monitoreo de aplicaciones web con Datadog, ¿a qué categoría pertenecen los códigos de respuesta HTTP de la serie 5xx (ej. 500, 502, 503, 504)?",
    "question_en": "When monitoring web applications with Datadog, which category do 5xx series HTTP response status codes belong to (e.g., 500, 502, 503, 504)?",
    "question": "En el monitoreo de aplicaciones web con Datadog, ¿a qué categoría pertenecen los códigos de respuesta HTTP de la serie 5xx (ej. 500, 502, 503, 504)?",
    "options_es": [
      "Errores atribuibles al cliente que originó la petición (Client Errors).",
      "Redirecciones de URL y cambios de ubicación de recursos.",
      "Errores generados en el lado del servidor (Server Errors).",
      "Respuestas informativas y de establecimiento de protocolo."
    ],
    "options_en": [
      "Errors attributable to the client initiating the request (Client Errors).",
      "URL redirections and resource location changes.",
      "Errors generated on the server side (Server Errors).",
      "Informational protocol handshake responses."
    ],
    "options": [
      "Errores atribuibles al cliente que originó la petición (Client Errors).",
      "Redirecciones de URL y cambios de ubicación de recursos.",
      "Errores generados en el lado del servidor (Server Errors).",
      "Respuestas informativas y de establecimiento de protocolo."
    ],
    "correctIndex": 2,
    "explanation_es": "Los códigos de estado HTTP 5xx indican condiciones de error producidas en el servidor (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout).",
    "explanation_en": "HTTP status codes in the 5xx series indicate server-side failure conditions where the server was unable to fulfill an apparently valid request.",
    "explanation": "Los códigos de estado HTTP 5xx indican condiciones de error producidas en el servidor (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout)."
  },
  {
    "id": 15,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Fugas de Memoria (Memory Leaks)",
    "topic_en": "Memory Leaks",
    "topic": "Fugas de Memoria (Memory Leaks)",
    "question_es": "¿Qué comportamiento en las métricas del sistema operativo evidencia de manera más concluyente la existencia de una fuga de memoria (memory leak) en una aplicación?",
    "question_en": "Which behavior in operating system metrics most conclusively indicates a memory leak in an application?",
    "question": "¿Qué comportamiento en las métricas del sistema operativo evidencia de manera más concluyente la existencia de una fuga de memoria (memory leak) en una aplicación?",
    "options_es": [
      "Un incremento abrupto pero momentáneo en el uso de CPU que regresa inmediatamente a la línea base.",
      "Un crecimiento constante y progresivo del uso de memoria RAM (RSS) y espacio swap a lo largo del tiempo sin liberarse.",
      "Un aumento en el número de paquetes TCP descartados en la interfaz de loopback.",
      "Una caída a cero en el número de subprocesos creados por el sistema operativo."
    ],
    "options_en": [
      "A sudden momentary spike in CPU usage that immediately returns to baseline.",
      "A steady, progressive increase in RAM usage (RSS) and swap over time that is never released.",
      "An increase in dropped TCP packets on the loopback interface.",
      "A sudden drop to zero in the number of system threads."
    ],
    "options": [
      "Un incremento abrupto pero momentáneo en el uso de CPU que regresa inmediatamente a la línea base.",
      "Un crecimiento constante y progresivo del uso de memoria RAM (RSS) y espacio swap a lo largo del tiempo sin liberarse.",
      "Un aumento en el número de paquetes TCP descartados en la interfaz de loopback.",
      "Una caída a cero en el número de subprocesos creados por el sistema operativo."
    ],
    "correctIndex": 1,
    "explanation_es": "Una fuga de memoria se caracteriza por una retención continua de memoria que nunca se desasigna, reflejándose como una pendiente ascendente ininterrumpida de RAM/swap hasta agotar la capacidad del sistema.",
    "explanation_en": "A memory leak occurs when an application allocates memory and fails to deallocate it, resulting in a persistent, monotonically increasing consumption of RAM and swap over time.",
    "explanation": "Una fuga de memoria se caracteriza por una retención continua de memoria que nunca se desasigna, reflejándose como una pendiente ascendente ininterrumpida de RAM/swap hasta agotar la capacidad del sistema."
  },
  {
    "id": 16,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Almacenamiento: IOPS vs Throughput",
    "topic_en": "Storage: IOPS vs Throughput",
    "topic": "Almacenamiento: IOPS vs Throughput",
    "question_es": "Al supervisar volúmenes de disco en la infraestructura, ¿cuál es la diferencia fundamental entre IOPS y Throughput?",
    "question_en": "When monitoring storage volumes in infrastructure, what is the fundamental difference between IOPS and Throughput?",
    "question": "Al supervisar volúmenes de disco en la infraestructura, ¿cuál es la diferencia fundamental entre IOPS y Throughput?",
    "options_es": [
      "IOPS mide el volumen de datos en MB/s, mientras que Throughput mide la latencia de las lecturas en milisegundos.",
      "IOPS mide la cantidad de operaciones de lectura/escritura por segundo, mientras que Throughput mide la tasa de volumen de datos transferidos (ej. MB/s).",
      "IOPS solo aplica a discos mecánicos HDD, mientras que Throughput solo aplica a unidades de estado sólido NVMe.",
      "Son métricas idénticas y se calculan con la misma fórmula matemática en Datadog."
    ],
    "options_en": [
      "IOPS measures data volume in MB/s, while Throughput measures read latency in milliseconds.",
      "IOPS measures the number of discrete read/write operations per second, while Throughput measures the data transfer rate (e.g., MB/s).",
      "IOPS only applies to mechanical HDDs, while Throughput only applies to NVMe SSDs.",
      "They are identical metrics calculated with the same formula in Datadog."
    ],
    "options": [
      "IOPS mide el volumen de datos en MB/s, mientras que Throughput mide la latencia de las lecturas en milisegundos.",
      "IOPS mide la cantidad de operaciones de lectura/escritura por segundo, mientras que Throughput mide la tasa de volumen de datos transferidos (ej. MB/s).",
      "IOPS solo aplica a discos mecánicos HDD, mientras que Throughput solo aplica a unidades de estado sólido NVMe.",
      "Son métricas idénticas y se calculan con la misma fórmula matemática en Datadog."
    ],
    "correctIndex": 1,
    "explanation_es": "IOPS (Input/Output Operations Per Second) mide la frecuencia de operaciones discretas de I/O por segundo, mientras que Throughput mide la cantidad de datos brutos transmitidos por unidad de tiempo (MB/s).",
    "explanation_en": "IOPS (Input/Output Operations Per Second) measures the rate of discrete I/O transactions completed per second, whereas Throughput measures the gross volume of data transferred per unit of time (MB/s).",
    "explanation": "IOPS (Input/Output Operations Per Second) mide la frecuencia de operaciones discretas de I/O por segundo, mientras que Throughput mide la cantidad de datos brutos transmitidos por unidad de tiempo (MB/s)."
  },
  {
    "id": 17,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Métricas de CPU en Virtualización",
    "topic_en": "CPU Metrics in Virtualization",
    "topic": "Métricas de CPU en Virtualización",
    "question_es": "La métrica 'system.cpu.steal' reportada en una máquina virtual invitada (ej. instancia EC2 en AWS) cuantifica:",
    "question_en": "The metric 'system.cpu.steal' reported in a guest virtual machine (e.g., an AWS EC2 instance) measures:",
    "question": "La métrica 'system.cpu.steal' reportada en una máquina virtual invitada (ej. instancia EC2 en AWS) cuantifica:",
    "options_es": [
      "El tiempo que el hipervisor le arrebató a la CPU virtual para atender a otras máquinas virtuales en el mismo host físico.",
      "La cantidad de ciclos de reloj robados por ataques de denegación de servicio (DDoS).",
      "El porcentaje de CPU consumido por procesos no autorizados en el espacio de usuario.",
      "El tiempo en que la CPU estuvo esperando que se completaran operaciones de lectura en disco (I/O wait)."
    ],
    "options_en": [
      "The percentage of time the hypervisor took CPU cycles away from the virtual CPU to service other guest VMs sharing the physical host.",
      "The number of clock cycles hijacked by distributed denial-of-service (DDoS) attacks.",
      "The percentage of CPU consumed by unauthorized user-space processes.",
      "The time the CPU spent waiting for disk I/O operations to finish."
    ],
    "options": [
      "El tiempo que el hipervisor le arrebató a la CPU virtual para atender a otras máquinas virtuales en el mismo host físico.",
      "La cantidad de ciclos de reloj robados por ataques de denegación de servicio (DDoS).",
      "El porcentaje de CPU consumido por procesos no autorizados en el espacio de usuario.",
      "El tiempo en que la CPU estuvo esperando que se completaran operaciones de lectura en disco (I/O wait)."
    ],
    "correctIndex": 0,
    "explanation_es": "'CPU steal time' es el porcentaje de tiempo que una CPU virtual debe esperar mientras el hipervisor de virtualización atiende a otro huésped o máquina virtual que comparte el mismo núcleo físico.",
    "explanation_en": "CPU steal time is the percentage of time a virtual CPU must wait for real physical processor cycles while the virtualization hypervisor schedules other guest virtual machines.",
    "explanation": "'CPU steal time' es el porcentaje de tiempo que una CPU virtual debe esperar mientras el hipervisor de virtualización atiende a otro huésped o máquina virtual que comparte el mismo núcleo físico."
  },
  {
    "id": 18,
    "domain_es": "Dominio 1: Computer & OS Fundamentals",
    "domain_en": "Domain 1: Computer & OS Fundamentals",
    "domain": "Dominio 1: Computer & OS Fundamentals",
    "topic_es": "Permisos de Archivos en Linux",
    "topic_en": "Linux File Permissions",
    "topic": "Permisos de Archivos en Linux",
    "question_es": "¿Qué comando de Linux establece permisos para que ÚNICAMENTE el propietario del archivo pueda leer y escribir en él (permisos recomendados para archivos con claves o secretos del agente)?",
    "question_en": "Which Linux command sets permissions so that ONLY the file owner can read and write to it (recommended permissions for files containing agent keys or secrets)?",
    "question": "¿Qué comando de Linux establece permisos para que ÚNICAMENTE el propietario del archivo pueda leer y escribir en él (permisos recomendados para archivos con claves o secretos del agente)?",
    "options_es": [
      "chmod 777 datadog.yaml",
      "chmod 600 datadog.yaml",
      "chmod 644 datadog.yaml",
      "chmod 755 datadog.yaml"
    ],
    "options_en": [
      "chmod 777 datadog.yaml",
      "chmod 600 datadog.yaml",
      "chmod 644 datadog.yaml",
      "chmod 755 datadog.yaml"
    ],
    "options": [
      "chmod 777 datadog.yaml",
      "chmod 600 datadog.yaml",
      "chmod 644 datadog.yaml",
      "chmod 755 datadog.yaml"
    ],
    "correctIndex": 1,
    "explanation_es": "El modo octal `600` (`rw-------`) otorga permisos de lectura y escritura exclusivamente al usuario propietario del archivo, impidiendo que el grupo u otros usuarios del sistema puedan acceder al contenido sensible.",
    "explanation_en": "Octal permissions `600` (`rw-------`) grant read and write access strictly to the file's owner, preventing group members and other system accounts from inspecting sensitive credentials.",
    "explanation": "El modo octal `600` (`rw-------`) otorga permisos de lectura y escritura exclusivamente al usuario propietario del archivo, impidiendo que el grupo u otros usuarios del sistema puedan acceder al contenido sensible."
  },
  {
    "id": 19,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Agente como Servicio / Daemon",
    "topic_en": "Agent as Service / Daemon",
    "topic": "Agente como Servicio / Daemon",
    "question_es": "¿Por qué el Datadog Agent se instala habitualmente como un servicio en segundo plano o daemon en los hosts?",
    "question_en": "Why is the Datadog Agent typically installed as a background service or daemon on hosts?",
    "question": "¿Por qué el Datadog Agent se instala habitualmente como un servicio en segundo plano o daemon en los hosts?",
    "options_es": [
      "Porque solo puede ejecutarse mientras un usuario interactivo mantiene una sesión de escritorio abierta.",
      "Para recolectar y reenviar telemetría de forma continua e ininterrumpida sin requerir una sesión de usuario activa.",
      "Porque es indispensable para renderizar y compilar los paneles (dashboards) localmente en el host.",
      "Para forzar la conversión de todo el tráfico TCP saliente del host en paquetes UDP."
    ],
    "options_en": [
      "Because it can only run while an interactive desktop session is open.",
      "To continuously collect and forward telemetry without requiring an active interactive user session.",
      "Because it is required to render and compile dashboards locally on the host.",
      "To force the conversion of all outbound host TCP traffic into UDP datagrams."
    ],
    "options": [
      "Porque solo puede ejecutarse mientras un usuario interactivo mantiene una sesión de escritorio abierta.",
      "Para recolectar y reenviar telemetría de forma continua e ininterrumpida sin requerir una sesión de usuario activa.",
      "Porque es indispensable para renderizar y compilar los paneles (dashboards) localmente en el host.",
      "Para forzar la conversión de todo el tráfico TCP saliente del host en paquetes UDP."
    ],
    "correctIndex": 1,
    "explanation_es": "El Agente opera como un servicio o daemon del sistema (ej. systemd en Linux o Windows Service) para garantizar la recolección constante de métricas, trazas y logs incluso a través de reinicios y sin necesidad de que un operador humano inicie sesión.",
    "explanation_en": "The Datadog Agent runs as a background system service or daemon (e.g., systemd on Linux, Windows Service) to ensure uninterrupted metric, trace, and log collection across reboots without human intervention.",
    "explanation": "El Agente opera como un servicio o daemon del sistema (ej. systemd en Linux o Windows Service) para garantizar la recolección constante de métricas, trazas y logs incluso a través de reinicios y sin necesidad de que un operador humano inicie sesión."
  },
  {
    "id": 20,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Archivo Principal de Configuración",
    "topic_en": "Main Configuration File",
    "topic": "Archivo Principal de Configuración",
    "question_es": "En un host estándar con sistema operativo Linux, ¿cuál es la ruta absoluta del archivo de configuración principal del Datadog Agent (versiones 6 y 7)?",
    "question_en": "On a standard Linux host, what is the absolute path to the main Datadog Agent configuration file (versions 6 and 7)?",
    "question": "En un host estándar con sistema operativo Linux, ¿cuál es la ruta absoluta del archivo de configuración principal del Datadog Agent (versiones 6 y 7)?",
    "options_es": [
      "/var/log/datadog-agent/datadog.yaml",
      "/etc/datadog-agent/datadog.yaml",
      "/usr/local/datadog/conf/agent.json",
      "/opt/datadog-agent/conf.d/main.conf"
    ],
    "options_en": [
      "/var/log/datadog-agent/datadog.yaml",
      "/etc/datadog-agent/datadog.yaml",
      "/usr/local/datadog/conf/agent.json",
      "/opt/datadog-agent/conf.d/main.conf"
    ],
    "options": [
      "/var/log/datadog-agent/datadog.yaml",
      "/etc/datadog-agent/datadog.yaml",
      "/usr/local/datadog/conf/agent.json",
      "/opt/datadog-agent/conf.d/main.conf"
    ],
    "correctIndex": 1,
    "explanation_es": "En Linux, la configuración global del Agente (API key, site, tags globales, logs_enabled, etc.) se aloja en `/etc/datadog-agent/datadog.yaml`.",
    "explanation_en": "On Linux distributions, the main configuration file containing the API key, site, global tags, and core agent parameters is located at `/etc/datadog-agent/datadog.yaml`.",
    "explanation": "En Linux, la configuración global del Agente (API key, site, tags globales, logs_enabled, etc.) se aloja en `/etc/datadog-agent/datadog.yaml`."
  },
  {
    "id": 21,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Ruta en Windows",
    "topic_en": "Windows Configuration Path",
    "topic": "Ruta en Windows",
    "question_es": "¿Cuál es la ruta predeterminada del archivo principal 'datadog.yaml' en un servidor con sistema operativo Windows?",
    "question_en": "What is the default file path of the main 'datadog.yaml' file on a Windows server?",
    "question": "¿Cuál es la ruta predeterminada del archivo principal 'datadog.yaml' en un servidor con sistema operativo Windows?",
    "options_es": [
      "C:\\\\Program Files\\\\Datadog\\\\Datadog Agent\\\\datadog.yaml",
      "C:\\\\ProgramData\\\\Datadog\\\\datadog.yaml",
      "C:\\\\Windows\\\\System32\\\\datadog.yaml",
      "C:\\\\Users\\\\Default\\\\AppData\\\\Datadog\\\\datadog.yaml"
    ],
    "options_en": [
      "C:\\Program Files\\Datadog\\Datadog Agent\\datadog.yaml",
      "C:\\ProgramData\\Datadog\\datadog.yaml",
      "C:\\Windows\\System32\\datadog.yaml",
      "C:\\Users\\Default\\AppData\\Datadog\\datadog.yaml"
    ],
    "options": [
      "C:\\\\Program Files\\\\Datadog\\\\Datadog Agent\\\\datadog.yaml",
      "C:\\\\ProgramData\\\\Datadog\\\\datadog.yaml",
      "C:\\\\Windows\\\\System32\\\\datadog.yaml",
      "C:\\\\Users\\\\Default\\\\AppData\\\\Datadog\\\\datadog.yaml"
    ],
    "correctIndex": 1,
    "explanation_es": "En sistemas operativos Windows, Datadog almacena sus archivos de configuración y datos variables en el directorio del sistema `C:\\\\ProgramData\\\\Datadog\\\\datadog.yaml`.",
    "explanation_en": "On Windows operating systems, Datadog stores configuration files and runtime data in the system application data directory at `C:\\ProgramData\\Datadog\\datadog.yaml`.",
    "explanation": "En sistemas operativos Windows, Datadog almacena sus archivos de configuración y datos variables en el directorio del sistema `C:\\\\ProgramData\\\\Datadog\\\\datadog.yaml`."
  },
  {
    "id": 22,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Evolución de Versiones del Agente",
    "topic_en": "Agent Version Evolution",
    "topic": "Evolución de Versiones del Agente",
    "question_es": "¿Cuál es el nombre y formato del archivo de configuración principal utilizado a partir de las versiones 6 y 7 del Datadog Agent?",
    "question_en": "What is the name and format of the main configuration file used starting with Datadog Agent versions 6 and 7?",
    "question": "¿Cuál es el nombre y formato del archivo de configuración principal utilizado a partir de las versiones 6 y 7 del Datadog Agent?",
    "options_es": [
      "datadog.conf (formato INI heredado de la versión 5)",
      "datadog.yaml (formato YAML)",
      "integrations.yaml (formato YAML)",
      "agent.json (formato JSON)"
    ],
    "options_en": [
      "datadog.conf (legacy INI format from version 5)",
      "datadog.yaml (YAML format)",
      "integrations.yaml (YAML format)",
      "agent.json (JSON format)"
    ],
    "options": [
      "datadog.conf (formato INI heredado de la versión 5)",
      "datadog.yaml (formato YAML)",
      "integrations.yaml (formato YAML)",
      "agent.json (formato JSON)"
    ],
    "correctIndex": 1,
    "explanation_es": "El Agent v5 utilizaba `datadog.conf` con formato INI. A partir del Agent v6 (reescrito en Go) y v7 (soporte Python 3), el archivo principal pasó a ser `datadog.yaml` con sintaxis YAML estándar.",
    "explanation_en": "Agent v5 used `datadog.conf` in INI format. Starting with Agent v6 (rewritten in Go) and continuing in Agent v7, the primary configuration file is `datadog.yaml` using standard YAML syntax.",
    "explanation": "El Agent v5 utilizaba `datadog.conf` con formato INI. A partir del Agent v6 (reescrito en Go) y v7 (soporte Python 3), el archivo principal pasó a ser `datadog.yaml` con sintaxis YAML estándar."
  },
  {
    "id": 23,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Definición y Rol de API Key",
    "topic_en": "API Key Definition & Role",
    "topic": "Definición y Rol de API Key",
    "question_es": "¿Cuál es la función PRIMARIA de una Datadog API Key?",
    "question_en": "What is the PRIMARY function of a Datadog API Key?",
    "question": "¿Cuál es la función PRIMARIA de una Datadog API Key?",
    "options_es": [
      "Autorizar a los componentes (como el Agente o DogStatsD) a enviar telemetría a la plataforma Datadog.",
      "Especificar qué métricas deben ser devueltas en una consulta a la API REST.",
      "Almacenar el valor de una solicitud cifrada para auditoría contable.",
      "Autenticar a los usuarios humanos que inician sesión en la consola web."
    ],
    "options_en": [
      "Authorize components (such as the Agent or DogStatsD) to submit telemetry data to the Datadog platform.",
      "Specify which metrics should be returned in a REST API query.",
      "Store the value of an encrypted request for accounting audit.",
      "Authenticate human users logging into the web console."
    ],
    "options": [
      "Autorizar a los componentes (como el Agente o DogStatsD) a enviar telemetría a la plataforma Datadog.",
      "Especificar qué métricas deben ser devueltas en una consulta a la API REST.",
      "Almacenar el valor de una solicitud cifrada para auditoría contable.",
      "Autenticar a los usuarios humanos que inician sesión en la consola web."
    ],
    "correctIndex": 0,
    "explanation_es": "Una API Key es una credencial alfanumérica única que identifica tu organización y permite al Datadog Agent, SDKs o integraciones publicar datos (métricas, trazas, logs) en la plataforma Datadog.",
    "explanation_en": "A Datadog API Key is a unique alphanumeric token that identifies your organization and authorizes the Datadog Agent, integrations, and SDKs to submit metrics, traces, and logs.",
    "explanation": "Una API Key es una credencial alfanumérica única que identifica tu organización y permite al Datadog Agent, SDKs o integraciones publicar datos (métricas, trazas, logs) en la plataforma Datadog."
  },
  {
    "id": 24,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Permisos de una API Key",
    "topic_en": "API Key Permissions",
    "topic": "Permisos de una API Key",
    "question_es": "¿Qué permisos de lectura o administración sobre la cuenta de Datadog tiene asociados una API Key por sí sola?",
    "question_en": "What read or administrative permissions over the Datadog organization does an API Key have on its own?",
    "question": "¿Qué permisos de lectura o administración sobre la cuenta de Datadog tiene asociados una API Key por sí sola?",
    "options_es": [
      "Permisos de lectura completa de dashboards y monitores.",
      "Ninguno (None). Es un token exclusivamente de ingestión de datos y no otorga acceso de lectura ni gestión.",
      "Permisos equivalentes al rol de administrador de la organización.",
      "Permisos de exportación de trazas y usuarios en formato CSV."
    ],
    "options_en": [
      "Full read permissions for all dashboards and monitors.",
      "None. It is strictly a data ingestion token and grants no read or management access.",
      "Permissions equivalent to the organization administrator role.",
      "Permissions to export traces and user accounts in CSV format."
    ],
    "options": [
      "Permisos de lectura completa de dashboards y monitores.",
      "Ninguno (None). Es un token exclusivamente de ingestión de datos y no otorga acceso de lectura ni gestión.",
      "Permisos equivalentes al rol de administrador de la organización.",
      "Permisos de exportación de trazas y usuarios en formato CSV."
    ],
    "correctIndex": 1,
    "explanation_es": "Las API Keys de Datadog son 'write-only' de cara a la ingestión de telemetría. No permiten leer dashboards, consultar métricas guardadas ni modificar la configuración de la cuenta.",
    "explanation_en": "Datadog API Keys are write-only ingestion credentials. They cannot be used to query data, read dashboards, or configure account settings.",
    "explanation": "Las API Keys de Datadog son 'write-only' de cara a la ingestión de telemetría. No permiten leer dashboards, consultar métricas guardadas ni modificar la configuración de la cuenta."
  },
  {
    "id": 25,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Application Key (APP Key)",
    "topic_en": "Application Key (APP Key)",
    "topic": "Application Key (APP Key)",
    "question_es": "¿Cuál de las siguientes opciones describe MEJOR el propósito de una Application Key (APP Key) en Datadog?",
    "question_en": "Which of the following BEST describes the purpose of an Application Key (APP Key) in Datadog?",
    "question": "¿Cuál de las siguientes opciones describe MEJOR el propósito de una Application Key (APP Key) en Datadog?",
    "options_es": [
      "Se utiliza junto con una API Key para autenticar llamadas de lectura y escritura sobre la API REST de Datadog.",
      "Se encarga de cifrar el tráfico entre el kernel y el servicio DogStatsD en el host local.",
      "Es un certificado SSL que el Agente instala en los navegadores web para monitoreo de usuarios reales (RUM).",
      "Permite a los contenedores de Docker obtener licencias gratuitas de Datadog."
    ],
    "options_en": [
      "It is used alongside an API Key to authenticate read and write operations against the Datadog REST API.",
      "It encrypts traffic between the kernel and the DogStatsD daemon on the local host.",
      "It is an SSL certificate installed in web browsers for Real User Monitoring (RUM).",
      "It grants Docker containers free Datadog licensing tiers."
    ],
    "options": [
      "Se utiliza junto con una API Key para autenticar llamadas de lectura y escritura sobre la API REST de Datadog.",
      "Se encarga de cifrar el tráfico entre el kernel y el servicio DogStatsD en el host local.",
      "Es un certificado SSL que el Agente instala en los navegadores web para monitoreo de usuarios reales (RUM).",
      "Permite a los contenedores de Docker obtener licencias gratuitas de Datadog."
    ],
    "correctIndex": 0,
    "explanation_es": "Una Application Key se utiliza junto con la API Key para autorizar solicitudes administrativas y programáticas a los endpoints REST de Datadog (por ejemplo, para crear monitores, clonar dashboards o consultar métricas históricas vía scripts o Terraform).",
    "explanation_en": "An Application Key is used in combination with an API Key to authorize administrative and programmatic requests to Datadog's REST API (e.g., creating monitors, dashboards, or automating via Terraform).",
    "explanation": "Una Application Key se utiliza junto con la API Key para autorizar solicitudes administrativas y programáticas a los endpoints REST de Datadog (por ejemplo, para crear monitores, clonar dashboards o consultar métricas históricas vía scripts o Terraform)."
  },
  {
    "id": 26,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Ciclo de Vida de Credenciales",
    "topic_en": "Credential Lifecycle",
    "topic": "Ciclo de Vida de Credenciales",
    "question_es": "Si la cuenta de un usuario administrador que creó varias API Keys y Application Keys es deshabilitada en Datadog, ¿qué sucede con dichas claves?",
    "question_en": "If an administrator account that created several API Keys and Application Keys is disabled in Datadog, what happens to those keys?",
    "question": "Si la cuenta de un usuario administrador que creó varias API Keys y Application Keys es deshabilitada en Datadog, ¿qué sucede con dichas claves?",
    "options_es": [
      "Tanto las API Keys como las Application Keys se revocan de inmediato.",
      "Las Application Keys creadas por ese usuario son revocadas, pero las API Keys continúan siendo válidas.",
      "Todas las claves permanecen activas indefinidamente hasta ser eliminadas manualmente.",
      "El Agente Datadog entra en modo de suspensión automática en todos los servidores."
    ],
    "options_en": [
      "Both the API Keys and Application Keys are revoked immediately.",
      "Application Keys created by that user are revoked, but API Keys remain valid.",
      "All keys remain active indefinitely until manually deleted.",
      "The Datadog Agent enters automatic sleep mode on all hosts."
    ],
    "options": [
      "Tanto las API Keys como las Application Keys se revocan de inmediato.",
      "Las Application Keys creadas por ese usuario son revocadas, pero las API Keys continúan siendo válidas.",
      "Todas las claves permanecen activas indefinidamente hasta ser eliminadas manualmente.",
      "El Agente Datadog entra en modo de suspensión automática en todos los servidores."
    ],
    "correctIndex": 1,
    "explanation_es": "Las Application Keys están vinculadas directamente a la identidad y permisos del usuario que las generó, por lo que se revocan al deshabilitarlo. En cambio, las API Keys pertenecen a la organización general y continúan operando para no interrumpir el flujo de telemetría de producción.",
    "explanation_en": "Application Keys inherit the permissions of the individual user and are revoked as soon as the user is deactivated. API Keys belong to the organization and remain valid to prevent data ingestion outages.",
    "explanation": "Las Application Keys están vinculadas directamente a la identidad y permisos del usuario que las generó, por lo que se revocan al deshabilitarlo. En cambio, las API Keys pertenecen a la organización general y continúan operando para no interrumpir el flujo de telemetría de producción."
  },
  {
    "id": 27,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Configuración del Hostname",
    "topic_en": "Hostname Configuration",
    "topic": "Configuración del Hostname",
    "question_es": "En 'datadog.yaml', ¿qué directiva permite forzar un nombre de host específico y sobrescribir el hostname detectado automáticamente por el Agente?",
    "question_en": "In 'datadog.yaml', which directive explicitly overrides the automatically resolved host name reported to Datadog?",
    "question": "En 'datadog.yaml', ¿qué directiva permite forzar un nombre de host específico y sobrescribir el hostname detectado automáticamente por el Agente?",
    "options_es": [
      "host_alias:",
      "hostname:",
      "node_name:",
      "custom_host_id:"
    ],
    "options_en": [
      "host_alias:",
      "hostname:",
      "node_name:",
      "custom_host_id:"
    ],
    "options": [
      "host_alias:",
      "hostname:",
      "node_name:",
      "custom_host_id:"
    ],
    "correctIndex": 1,
    "explanation_es": "La directiva `hostname: mi-servidor-produccion` en `datadog.yaml` reemplaza cualquier nombre de host resuelto automáticamente por el sistema operativo o el proveedor de nube.",
    "explanation_en": "The `hostname:` setting in `datadog.yaml` overrides any hostname detected automatically by the operating system or cloud metadata service.",
    "explanation": "La directiva `hostname: mi-servidor-produccion` en `datadog.yaml` reemplaza cualquier nombre de host resuelto automáticamente por el sistema operativo o el proveedor de nube."
  },
  {
    "id": 28,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Integración con Docker Daemon",
    "topic_en": "Docker Daemon Integration",
    "topic": "Integración con Docker Daemon",
    "question_es": "¿Qué configuración de permisos es necesaria en un servidor Linux tradicional para que el Datadog Agent pueda interactuar con el socket del daemon de Docker?",
    "question_en": "What permission configuration is required on a standard Linux host so the Datadog Agent can communicate with the Docker daemon socket?",
    "question": "¿Qué configuración de permisos es necesaria en un servidor Linux tradicional para que el Datadog Agent pueda interactuar con el socket del daemon de Docker?",
    "options_es": [
      "Ejecutar el Agente con privilegios de root absolutos en todo momento.",
      "Añadir el usuario del Agente ('dd-agent') al grupo del sistema 'docker'.",
      "Deshabilitar SELinux y el cortafuegos de iptables en el host.",
      "Cambiar los permisos del socket `/var/run/docker.sock` a 777."
    ],
    "options_en": [
      "Run the Agent with absolute root privileges at all times.",
      "Add the Agent user ('dd-agent') to the system 'docker' group.",
      "Disable SELinux and the iptables firewall on the host.",
      "Change the permissions of `/var/run/docker.sock` to 777."
    ],
    "options": [
      "Ejecutar el Agente con privilegios de root absolutos en todo momento.",
      "Añadir el usuario del Agente ('dd-agent') al grupo del sistema 'docker'.",
      "Deshabilitar SELinux y el cortafuegos de iptables en el host.",
      "Cambiar los permisos del socket `/var/run/docker.sock` a 777."
    ],
    "correctIndex": 1,
    "explanation_es": "La práctica recomendada y oficial de Datadog es incorporar el usuario `dd-agent` al grupo `docker` (`usermod -a -G docker dd-agent`), lo que otorga acceso de lectura al socket de Docker sin necesidad de ejecutar el Agente como root.",
    "explanation_en": "The official recommendation is adding the `dd-agent` user to the `docker` system group (`usermod -a -G docker dd-agent`), granting read access to the Docker socket without running the Agent as root.",
    "explanation": "La práctica recomendada y oficial de Datadog es incorporar el usuario `dd-agent` al grupo `docker` (`usermod -a -G docker dd-agent`), lo que otorga acceso de lectura al socket de Docker sin necesidad de ejecutar el Agente como root."
  },
  {
    "id": 29,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "GUI del Agente",
    "topic_en": "Agent GUI",
    "topic": "GUI del Agente",
    "question_es": "Respecto a la interfaz gráfica web (Datadog Agent GUI) en sistemas operativos Linux, ¿cuál es su comportamiento predeterminado?",
    "question_en": "Regarding the Datadog Agent web graphical interface (Agent GUI) on Linux operating systems, what is its default behavior?",
    "question": "Respecto a la interfaz gráfica web (Datadog Agent GUI) en sistemas operativos Linux, ¿cuál es su comportamiento predeterminado?",
    "options_es": [
      "Se encuentra deshabilitada de forma predeterminada.",
      "Se inicia automáticamente en el puerto 80 para cualquier usuario de la red.",
      "Reemplaza por completo a la interfaz de línea de comandos (CLI).",
      "Solo funciona si el host cuenta con una tarjeta gráfica dedicada."
    ],
    "options_en": [
      "It is disabled by default.",
      "It starts automatically on port 80 for all network users.",
      "It completely replaces the command line interface (CLI).",
      "It only functions if the host has a dedicated graphics card."
    ],
    "options": [
      "Se encuentra deshabilitada de forma predeterminada.",
      "Se inicia automáticamente en el puerto 80 para cualquier usuario de la red.",
      "Reemplaza por completo a la interfaz de línea de comandos (CLI).",
      "Solo funciona si el host cuenta con una tarjeta gráfica dedicada."
    ],
    "correctIndex": 0,
    "explanation_es": "En Linux, la GUI del Agente viene deshabilitada por defecto. Para utilizarla se debe habilitar o ejecutar mediante el comando `datadog-agent launch-gui`. Establecer el puerto en `-1` en la configuración la deshabilita por completo.",
    "explanation_en": "On Linux, the Agent GUI is disabled by default. It can be launched manually with `datadog-agent launch-gui`. Setting the port to `-1` disables it entirely.",
    "explanation": "En Linux, la GUI del Agente viene deshabilitada por defecto. Para utilizarla se debe habilitar o ejecutar mediante el comando `datadog-agent launch-gui`. Establecer el puerto en `-1` en la configuración la deshabilita por completo."
  },
  {
    "id": 30,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Beneficio de Metadatos",
    "topic_en": "Benefit of Metadata",
    "topic": "Beneficio de Metadatos",
    "question_es": "¿Cuál es el beneficio primordial de adjuntar metadatos y etiquetas a las entidades monitoreadas en Datadog?",
    "question_en": "What is the primary benefit of attaching metadata and tags to monitored entities in Datadog?",
    "question": "¿Cuál es el beneficio primordial de adjuntar metadatos y etiquetas a las entidades monitoreadas en Datadog?",
    "options_es": [
      "Cifrar la información confidencial transmitida por el cable de red.",
      "Proporcionar contexto adicional y atributos para organizar, filtrar y correlacionar los datos.",
      "Reducir automáticamente el consumo de memoria RAM del kernel.",
      "Eliminar la necesidad de renovar las claves API periódicamente."
    ],
    "options_en": [
      "Encrypting sensitive information transmitted over the network cable.",
      "Providing additional context and attributes for organizing, filtering, and correlating data.",
      "Automatically reducing kernel RAM utilization.",
      "Eliminating the need to periodically rotate API keys."
    ],
    "options": [
      "Cifrar la información confidencial transmitida por el cable de red.",
      "Proporcionar contexto adicional y atributos para organizar, filtrar y correlacionar los datos.",
      "Reducir automáticamente el consumo de memoria RAM del kernel.",
      "Eliminar la necesidad de renovar las claves API periódicamente."
    ],
    "correctIndex": 1,
    "explanation_es": "Los metadatos y etiquetas enriquecen la telemetría agregando contexto operacional (ej. entorno, equipo, versión, región), lo que permite filtrar, desglosar métricas y crear dashboards dinámicos sin importar la cantidad de hosts subyacentes.",
    "explanation_en": "Metadata and tags provide contextual dimensions (such as environment, team, service, region), enabling seamless filtering, aggregation, and correlation across dynamic infrastructure.",
    "explanation": "Los metadatos y etiquetas enriquecen la telemetría agregando contexto operacional (ej. entorno, equipo, versión, región), lo que permite filtrar, desglosar métricas y crear dashboards dinámicos sin importar la cantidad de hosts subyacentes."
  },
  {
    "id": 31,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Módulos del Agente",
    "topic_en": "Agent Modules",
    "topic": "Módulos del Agente",
    "question_es": "¿Cuál de los siguientes submódulos del Datadog Agent es el responsable específico de recibir y procesar trazas distribuidas enviadas por las aplicaciones instrumentadas con APM?",
    "question_en": "Which specific Datadog Agent sub-module is responsible for receiving and processing distributed traces sent by APM-instrumented applications?",
    "question": "¿Cuál de los siguientes submódulos del Datadog Agent es el responsable específico de recibir y procesar trazas distribuidas enviadas por las aplicaciones instrumentadas con APM?",
    "options_es": [
      "Process Agent",
      "Trace Agent",
      "Security Agent",
      "DogStatsD Server"
    ],
    "options_en": [
      "Process Agent",
      "Trace Agent",
      "Security Agent",
      "DogStatsD Server"
    ],
    "options": [
      "Process Agent",
      "Trace Agent",
      "Security Agent",
      "DogStatsD Server"
    ],
    "correctIndex": 1,
    "explanation_es": "El **Trace Agent** (escuchando habitualmente en el puerto TCP 8126) es el componente especializado del Datadog Agent encargado de recolectar, muestrear y reenviar las trazas de APM.",
    "explanation_en": "The **Trace Agent** (listening on TCP port 8126 by default) is the specialized sub-component of the Datadog Agent that ingests, samples, and forwards APM traces.",
    "explanation": "El **Trace Agent** (escuchando habitualmente en el puerto TCP 8126) es el componente especializado del Datadog Agent encargado de recolectar, muestrear y reenviar las trazas de APM."
  },
  {
    "id": 32,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "System Probe y eBPF",
    "topic_en": "System Probe & eBPF",
    "topic": "System Probe y eBPF",
    "question_es": "¿Qué componente del Datadog Agent utiliza tecnología eBPF a nivel de kernel para permitir Network Performance Monitoring (NPM) y Universal Service Monitoring?",
    "question_en": "Which Datadog Agent component uses eBPF technology at the kernel level to power Network Performance Monitoring (NPM) and Universal Service Monitoring?",
    "question": "¿Qué componente del Datadog Agent utiliza tecnología eBPF a nivel de kernel para permitir Network Performance Monitoring (NPM) y Universal Service Monitoring?",
    "options_es": [
      "Forwarder",
      "System-Probe",
      "DogStatsD",
      "JMX Fetcher"
    ],
    "options_en": [
      "Forwarder",
      "System-Probe",
      "DogStatsD",
      "JMX Fetcher"
    ],
    "options": [
      "Forwarder",
      "System-Probe",
      "DogStatsD",
      "JMX Fetcher"
    ],
    "correctIndex": 1,
    "explanation_es": "El `system-probe` es un componente de bajo nivel del Datadog Agent que se ejecuta con privilegios para interactuar con eBPF en el kernel de Linux y monitorear flujos de red y seguridad sin introducir latencia perceptible.",
    "explanation_en": "The `system-probe` is a low-level Agent component that runs with elevated privileges to attach eBPF programs to the Linux kernel, capturing network flows and security telemetry with minimal overhead.",
    "explanation": "El `system-probe` es un componente de bajo nivel del Datadog Agent que se ejecuta con privilegios para interactuar con eBPF en el kernel de Linux y monitorear flujos de red y seguridad sin introducir latencia perceptible."
  },
  {
    "id": 33,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Alcances de Autorización de la API (Scopes)",
    "topic_en": "API Authorization Scopes",
    "topic": "Alcances de Autorización de la API (Scopes)",
    "question_es": "Un ingeniero necesita consultar programáticamente las definiciones de las listas de dashboards de su organización usando la API de Datadog. ¿Qué scope o permiso debe tener el token utilizado?",
    "question_en": "An engineer needs to fetch dashboard list definitions programmatically using the Datadog API. What authorization scope must the token have?",
    "question": "Un ingeniero necesita consultar programáticamente las definiciones de las listas de dashboards de su organización usando la API de Datadog. ¿Qué scope o permiso debe tener el token utilizado?",
    "options_es": [
      "user_access_read",
      "dashboards_read",
      "dashboards_public_share",
      "monitors_write"
    ],
    "options_en": [
      "user_access_read",
      "dashboards_read",
      "dashboards_public_share",
      "monitors_write"
    ],
    "options": [
      "user_access_read",
      "dashboards_read",
      "dashboards_public_share",
      "monitors_write"
    ],
    "correctIndex": 1,
    "explanation_es": "El permiso o scope `dashboards_read` es el requerido específicamente para leer listas y definiciones de paneles de control mediante la API de Datadog.",
    "explanation_en": "The `dashboards_read` scope is explicitly required to read dashboard lists and dashboard definitions through the Datadog REST API.",
    "explanation": "El permiso o scope `dashboards_read` es el requerido específicamente para leer listas y definiciones de paneles de control mediante la API de Datadog."
  },
  {
    "id": 34,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Sitios de Datadog (Datadog Sites)",
    "topic_en": "Datadog Sites",
    "topic": "Sitios de Datadog (Datadog Sites)",
    "question_es": "Si una empresa con sede en la Unión Europea debe alojar sus datos exclusivamente en centros de datos europeos bajo normativas GDPR, ¿qué parámetro debe modificar en 'datadog.yaml'?",
    "question_en": "If a European company must ensure telemetry data is stored strictly in EU data centers for GDPR compliance, which setting must be configured in 'datadog.yaml'?",
    "question": "Si una empresa con sede en la Unión Europea debe alojar sus datos exclusivamente en centros de datos europeos bajo normativas GDPR, ¿qué parámetro debe modificar en 'datadog.yaml'?",
    "options_es": [
      "region: europe-west1",
      "site: datadoghq.eu",
      "cloud_provider: eu-central",
      "gdpr_compliance: true"
    ],
    "options_en": [
      "region: europe-west1",
      "site: datadoghq.eu",
      "cloud_provider: eu-central",
      "gdpr_compliance: true"
    ],
    "options": [
      "region: europe-west1",
      "site: datadoghq.eu",
      "cloud_provider: eu-central",
      "gdpr_compliance: true"
    ],
    "correctIndex": 1,
    "explanation_es": "Datadog opera múltiples regiones o 'sites' independientes (ej. `datadoghq.com` para US1, `datadoghq.eu` para Europa, `us3.datadoghq.com`, etc.). El parámetro `site:` en `datadog.yaml` dirige toda la telemetría a la región correspondiente.",
    "explanation_en": "Datadog operates independent regional sites. Setting `site: datadoghq.eu` in `datadog.yaml` routes all telemetry to Datadog's European cloud infrastructure.",
    "explanation": "Datadog opera múltiples regiones o 'sites' independientes (ej. `datadoghq.com` para US1, `datadoghq.eu` para Europa, `us3.datadoghq.com`, etc.). El parámetro `site:` en `datadog.yaml` dirige toda la telemetría a la región correspondiente."
  },
  {
    "id": 35,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Lenguajes de Backend Soportados",
    "topic_en": "Supported Backend Languages",
    "topic": "Lenguajes de Backend Soportados",
    "question_es": "¿Cuáles de los siguientes lenguajes de programación de backend cuentan con librerías oficiales de trazado y soporte completo por parte de Datadog?",
    "question_en": "Which of the following backend programming languages have official tracing libraries and first-class APM support from Datadog?",
    "question": "¿Cuáles de los siguientes lenguajes de programación de backend cuentan con librerías oficiales de trazado y soporte completo por parte de Datadog?",
    "options_es": [
      "Ruby y Go",
      "COBOL y Fortran",
      "Assembly y Pascal",
      "Haskell y ActionScript"
    ],
    "options_en": [
      "Ruby and Go",
      "COBOL and Fortran",
      "Assembly and Pascal",
      "Haskell and ActionScript"
    ],
    "options": [
      "Ruby y Go",
      "COBOL y Fortran",
      "Assembly y Pascal",
      "Haskell y ActionScript"
    ],
    "correctIndex": 0,
    "explanation_es": "Datadog provee SDKs de trazado y monitoreo de primer nivel para lenguajes modernos de backend que incluyen Python, Go, Ruby, Java, Node.js, C#, PHP y C++.",
    "explanation_en": "Datadog provides first-class tracing libraries and official support for modern backend languages including Python, Go, Ruby, Java, Node.js, C#/.NET, PHP, and C++.",
    "explanation": "Datadog provee SDKs de trazado y monitoreo de primer nivel para lenguajes modernos de backend que incluyen Python, Go, Ruby, Java, Node.js, C#, PHP y C++."
  },
  {
    "id": 36,
    "domain_es": "Dominio 2: Infrastructure Deployment & Architecture",
    "domain_en": "Domain 2: Infrastructure Deployment & Architecture",
    "domain": "Dominio 2: Infrastructure Deployment & Architecture",
    "topic_es": "Estructura de Directorios del Agente",
    "topic_en": "Agent Directory Structure",
    "topic": "Estructura de Directorios del Agente",
    "question_es": "Al inspeccionar la raíz de `/etc/datadog-agent/`, ¿qué subdirectorio almacena las plantillas y archivos de configuración para cada una de las integraciones activas del Agente?",
    "question_en": "When inspecting `/etc/datadog-agent/`, which subdirectory stores configuration templates and settings for active Agent integrations?",
    "question": "Al inspeccionar la raíz de `/etc/datadog-agent/`, ¿qué subdirectorio almacena las plantillas y archivos de configuración para cada una de las integraciones activas del Agente?",
    "options_es": [
      "checks.d/",
      "conf.d/",
      "runtime-security.d/",
      "integrations.d/"
    ],
    "options_en": [
      "checks.d/",
      "conf.d/",
      "runtime-security.d/",
      "integrations.d/"
    ],
    "options": [
      "checks.d/",
      "conf.d/",
      "runtime-security.d/",
      "integrations.d/"
    ],
    "correctIndex": 1,
    "explanation_es": "El subdirectorio `/etc/datadog-agent/conf.d/` contiene carpetas individuales para cada tecnología (ej. `nginx.d/`, `redisdb.d/`, `mysql.d/`) con sus respectivos archivos `conf.yaml`.",
    "explanation_en": "The `/etc/datadog-agent/conf.d/` directory contains subdirectories for individual checks and integrations (e.g., `nginx.d/`, `redisdb.d/`) with their respective `conf.yaml` files.",
    "explanation": "El subdirectorio `/etc/datadog-agent/conf.d/` contiene carpetas individuales para cada tecnología (ej. `nginx.d/`, `redisdb.d/`, `mysql.d/`) con sus respectivos archivos `conf.yaml`."
  },
  {
    "id": 37,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Puertos de Red - DogStatsD",
    "topic_en": "Network Ports - DogStatsD",
    "topic": "Puertos de Red - DogStatsD",
    "question_es": "¿Cuál es el puerto predeterminado y el protocolo de transporte utilizado por DogStatsD para recibir métricas personalizadas enviadas desde las aplicaciones?",
    "question_en": "What is the default port and transport protocol used by DogStatsD to receive custom metrics from applications?",
    "question": "¿Cuál es el puerto predeterminado y el protocolo de transporte utilizado por DogStatsD para recibir métricas personalizadas enviadas desde las aplicaciones?",
    "options_es": [
      "Puerto 8125 vía UDP",
      "Puerto 8126 vía TCP",
      "Puerto 443 vía HTTPS",
      "Puerto 5000 vía TCP"
    ],
    "options_en": [
      "Port 8125 via UDP",
      "Port 8126 via TCP",
      "Port 443 via HTTPS",
      "Port 5000 via TCP"
    ],
    "options": [
      "Puerto 8125 vía UDP",
      "Puerto 8126 vía TCP",
      "Puerto 443 vía HTTPS",
      "Puerto 5000 vía TCP"
    ],
    "correctIndex": 0,
    "explanation_es": "DogStatsD escucha de forma predeterminada en el puerto `8125 UDP` para aceptar métricas, eventos y checks de servicio.",
    "explanation_en": "DogStatsD listens by default on port `8125 UDP` to accept custom metrics, events, and service checks from application clients.",
    "explanation": "DogStatsD escucha de forma predeterminada en el puerto `8125 UDP` para aceptar métricas, eventos y checks de servicio."
  },
  {
    "id": 38,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Puertos de Red - APM Tracing",
    "topic_en": "Network Ports - APM Tracing",
    "topic": "Puertos de Red - APM Tracing",
    "question_es": "¿Cuál de los siguientes puertos de entrada TCP es utilizado por el Datadog Agent para recibir trazas de APM desde las aplicaciones?",
    "question_en": "Which inbound TCP port is used by the Datadog Agent to receive APM traces from applications?",
    "question": "¿Cuál de los siguientes puertos de entrada TCP es utilizado por el Datadog Agent para recibir trazas de APM desde las aplicaciones?",
    "options_es": [
      "Puerto 8080",
      "Puerto 8123",
      "Puerto 8126",
      "Puerto 9090"
    ],
    "options_en": [
      "Port 8080",
      "Port 8123",
      "Port 8126",
      "Port 9090"
    ],
    "options": [
      "Puerto 8080",
      "Puerto 8123",
      "Puerto 8126",
      "Puerto 9090"
    ],
    "correctIndex": 2,
    "explanation_es": "El Trace Agent de Datadog escucha solicitudes de trazado entrantes en el puerto TCP `8126` por defecto.",
    "explanation_en": "The Datadog Trace Agent listens for incoming application tracing payloads on TCP port `8126` by default.",
    "explanation": "El Trace Agent de Datadog escucha solicitudes de trazado entrantes en el puerto TCP `8126` por defecto."
  },
  {
    "id": 39,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Puertos de Red - Runtime del Agente",
    "topic_en": "Network Ports - Agent Runtime",
    "topic": "Puertos de Red - Runtime del Agente",
    "question_es": "¿Qué puerto TCP se utiliza para exponer métricas de tiempo de ejecución (expvar/runtime metrics) acerca del propio Datadog Agent?",
    "question_en": "Which TCP port is used to expose runtime metrics (expvar metrics) about the Datadog Agent process itself?",
    "question": "¿Qué puerto TCP se utiliza para exponer métricas de tiempo de ejecución (expvar/runtime metrics) acerca del propio Datadog Agent?",
    "options_es": [
      "Puerto 5000",
      "Puerto 80",
      "Puerto 3306",
      "Puerto 22"
    ],
    "options_en": [
      "Port 5000",
      "Port 80",
      "Port 3306",
      "Port 22"
    ],
    "options": [
      "Puerto 5000",
      "Puerto 80",
      "Puerto 3306",
      "Puerto 22"
    ],
    "correctIndex": 0,
    "explanation_es": "El puerto TCP `5000` es utilizado por el Agente para exponer métricas internas de su runtime de Go (expvar), mientras que el `5001` se emplea habitualmente para IPC interno.",
    "explanation_en": "TCP port `5000` is used by the Datadog Agent to expose Go runtime expvar metrics, while port `5001` is typically used for local IPC.",
    "explanation": "El puerto TCP `5000` es utilizado por el Agente para exponer métricas internas de su runtime de Go (expvar), mientras que el `5001` se emplea habitualmente para IPC interno."
  },
  {
    "id": 40,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Tráfico de Salida (Egress)",
    "topic_en": "Egress Traffic",
    "topic": "Tráfico de Salida (Egress)",
    "question_es": "¿Por qué puerto y protocolo viaja toda la telemetría que el Datadog Agent envía hacia la plataforma en la nube de Datadog?",
    "question_en": "Through which outbound port and protocol does all telemetry travel from the Datadog Agent to the Datadog cloud platform?",
    "question": "¿Por qué puerto y protocolo viaja toda la telemetría que el Datadog Agent envía hacia la plataforma en la nube de Datadog?",
    "options_es": [
      "Puerto 80 vía HTTP sin cifrar.",
      "Puerto 443 saliente vía TCP/HTTPS con cifrado TLS.",
      "Puerto 53 vía datagramas DNS encapsulados.",
      "Puerto 21 vía conexiones FTP seguras."
    ],
    "options_en": [
      "Port 80 via unencrypted HTTP.",
      "Outbound port 443 via TCP/HTTPS with TLS encryption.",
      "Port 53 via encapsulated DNS datagrams.",
      "Port 21 via secure FTP connections."
    ],
    "options": [
      "Puerto 80 vía HTTP sin cifrar.",
      "Puerto 443 saliente vía TCP/HTTPS con cifrado TLS.",
      "Puerto 53 vía datagramas DNS encapsulados.",
      "Puerto 21 vía conexiones FTP seguras."
    ],
    "correctIndex": 1,
    "explanation_es": "Toda la comunicación de salida del Agente hacia los endpoints de ingestión de Datadog se efectúa a través de conexiones seguras HTTPS sobre el puerto TCP 443 con cifrado TLS.",
    "explanation_en": "All outbound communication from the Datadog Agent to Datadog's intake endpoints uses encrypted HTTPS over TCP port 443 with TLS.",
    "explanation": "Toda la comunicación de salida del Agente hacia los endpoints de ingestión de Datadog se efectúa a través de conexiones seguras HTTPS sobre el puerto TCP 443 con cifrado TLS."
  },
  {
    "id": 41,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Rangos de IP de Datadog",
    "topic_en": "Datadog IP Ranges",
    "topic": "Rangos de IP de Datadog",
    "question_es": "¿Para qué se utiliza la dirección pública oficial 'https://ip-ranges.datadoghq.com'?",
    "question_en": "What is the purpose of the official public URL 'https://ip-ranges.datadoghq.com'?",
    "question": "¿Para qué se utiliza la dirección pública oficial 'https://ip-ranges.datadoghq.com'?",
    "options_es": [
      "Para que el usuario asigne manualmente direcciones IP a sus servidores.",
      "Para identificar la lista actualizada de rangos de direcciones IP a las que el Datadog Agent necesita enviar telemetría (para listas blancas de firewall).",
      "Para verificar en qué servidores del mundo está instalado el Agente actualmente.",
      "Para generar certificados TLS automáticamente en cada contenedor."
    ],
    "options_en": [
      "To allow users to manually assign IP addresses to servers.",
      "To identify the updated list of IP address ranges where the Agent sends telemetry (for firewall allowlisting).",
      "To verify which worldwide servers currently have the Agent installed.",
      "To automatically generate TLS certificates in every container."
    ],
    "options": [
      "Para que el usuario asigne manualmente direcciones IP a sus servidores.",
      "Para identificar la lista actualizada de rangos de direcciones IP a las que el Datadog Agent necesita enviar telemetría (para listas blancas de firewall).",
      "Para verificar en qué servidores del mundo está instalado el Agente actualmente.",
      "Para generar certificados TLS automáticamente en cada contenedor."
    ],
    "correctIndex": 1,
    "explanation_es": "El endpoint `https://ip-ranges.datadoghq.com` publica en formato JSON los prefijos de red y rangos de IP públicos oficiales de Datadog para que los administradores de redes puedan configurar reglas de salida en sus firewalls corporativos.",
    "explanation_en": "The `https://ip-ranges.datadoghq.com` endpoint publishes a JSON list of Datadog's official ingress IP prefixes, allowing network administrators to configure egress firewall rules.",
    "explanation": "El endpoint `https://ip-ranges.datadoghq.com` publica en formato JSON los prefijos de red y rangos de IP públicos oficiales de Datadog para que los administradores de redes puedan configurar reglas de salida en sus firewalls corporativos."
  },
  {
    "id": 42,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Configuración de Proxy",
    "topic_en": "Proxy Configuration",
    "topic": "Configuración de Proxy",
    "question_es": "¿Cuál es el propósito de la directiva 'no_proxy' en la sección de proxy del archivo de configuración del Agente?",
    "question_en": "What is the purpose of the 'no_proxy' setting in the proxy configuration section of the Datadog Agent?",
    "question": "¿Cuál es el propósito de la directiva 'no_proxy' en la sección de proxy del archivo de configuración del Agente?",
    "options_es": [
      "Deshabilitar de forma permanente cualquier comunicación de red del Agente.",
      "Especificar una lista de hosts o subredes que deben ser contactados directamente, evitando el servidor proxy.",
      "Forzar al Agente a enviar telemetría sin utilizar cifrado SSL.",
      "Indicar al Agente que ignore las variables de entorno del sistema."
    ],
    "options_en": [
      "Permanently disable all network communication for the Agent.",
      "Specify a list of hosts or subnets that must be contacted directly, bypassing the forward proxy.",
      "Force the Agent to send telemetry without SSL encryption.",
      "Instruct the Agent to ignore system environment variables."
    ],
    "options": [
      "Deshabilitar de forma permanente cualquier comunicación de red del Agente.",
      "Especificar una lista de hosts o subredes que deben ser contactados directamente, evitando el servidor proxy.",
      "Forzar al Agente a enviar telemetría sin utilizar cifrado SSL.",
      "Indicar al Agente que ignore las variables de entorno del sistema."
    ],
    "correctIndex": 1,
    "explanation_es": "La directiva `no_proxy` define una lista de dominios, IPs o subredes que el Agente debe alcanzar de manera directa sin pasar por el servidor proxy HTTP/HTTPS configurado.",
    "explanation_en": "The `no_proxy` directive defines a list of hostnames, domains, or IP addresses that the Agent should contact directly without routing through the configured HTTP/HTTPS proxy.",
    "explanation": "La directiva `no_proxy` define una lista de dominios, IPs o subredes que el Agente debe alcanzar de manera directa sin pasar por el servidor proxy HTTP/HTTPS configurado."
  },
  {
    "id": 43,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Autodiscovery en Contenedores",
    "topic_en": "Autodiscovery in Containers",
    "topic": "Autodiscovery en Contenedores",
    "question_es": "¿Cómo identifica el Datadog Agent los servicios y aplicaciones que se ejecutan dentro de contenedores en entornos como Docker o Kubernetes?",
    "question_en": "How does the Datadog Agent identify services and applications running in containerized environments like Docker or Kubernetes?",
    "question": "¿Cómo identifica el Datadog Agent los servicios y aplicaciones que se ejecutan dentro de contenedores en entornos como Docker o Kubernetes?",
    "options_es": [
      "Ejecutando repetidamente 'kubectl get pods' cada segundo.",
      "Mediante plantillas de configuración de Autodiscovery que detectan etiquetas o imágenes de contenedores coincidentes.",
      "Inyectando código binario en los archivos ejecutables de la imagen del contenedor.",
      "Reiniciando el contenedor cada vez que detecta un cambio de tráfico."
    ],
    "options_en": [
      "By repeatedly running 'kubectl get pods' every second.",
      "Using Autodiscovery configuration templates that match container labels or image names.",
      "By injecting binary code into container image executables.",
      "By restarting the container whenever network traffic changes."
    ],
    "options": [
      "Ejecutando repetidamente 'kubectl get pods' cada segundo.",
      "Mediante plantillas de configuración de Autodiscovery que detectan etiquetas o imágenes de contenedores coincidentes.",
      "Inyectando código binario en los archivos ejecutables de la imagen del contenedor.",
      "Reiniciando el contenedor cada vez que detecta un cambio de tráfico."
    ],
    "correctIndex": 1,
    "explanation_es": "Autodiscovery escucha eventos de los runtimes de contenedores (Docker/Kubernetes). Cuando se crea un contenedor, compara su imagen o etiquetas contra plantillas de integración definidas y levanta automáticamente los checks correspondientes.",
    "explanation_en": "Autodiscovery listens to container runtime events (Docker/Kubernetes). When a container starts, the Agent matches its image or labels against check templates and initializes the check automatically.",
    "explanation": "Autodiscovery escucha eventos de los runtimes de contenedores (Docker/Kubernetes). Cuando se crea un contenedor, compara su imagen o etiquetas contra plantillas de integración definidas y levanta automáticamente los checks correspondientes."
  },
  {
    "id": 44,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Variables de Plantilla Autodiscovery",
    "topic_en": "Autodiscovery Template Variables",
    "topic": "Variables de Plantilla Autodiscovery",
    "question_es": "En una plantilla de Autodiscovery, si un contenedor expone los puertos 80 y 443, ¿cuál de las siguientes variables proporcionará el puerto con el índice numérico más alto (443)?",
    "question_en": "In an Autodiscovery template, if a container exposes ports 80 and 443, which variable provides the port with the highest numeric index (443)?",
    "question": "En una plantilla de Autodiscovery, si un contenedor expone los puertos 80 y 443, ¿cuál de las siguientes variables proporcionará el puerto con el índice numérico más alto (443)?",
    "options_es": [
      "%%port_0%%",
      "%%port_1%%",
      "%%port%%",
      "%%highest_port%%"
    ],
    "options_en": [
      "%%port_0%%",
      "%%port_1%%",
      "%%port%%",
      "%%highest_port%%"
    ],
    "options": [
      "%%port_0%%",
      "%%port_1%%",
      "%%port%%",
      "%%highest_port%%"
    ],
    "correctIndex": 1,
    "explanation_es": "Las variables de puerto de Autodiscovery se indexan en base cero de menor a mayor. `%%port_0%%` corresponde a 80 y `%%port_1%%` corresponde a 443.",
    "explanation_en": "Autodiscovery port variables are zero-indexed in ascending numeric order. `%%port_0%%` resolves to 80, and `%%port_1%%` resolves to 443.",
    "explanation": "Las variables de puerto de Autodiscovery se indexan en base cero de menor a mayor. `%%port_0%%` corresponde a 80 y `%%port_1%%` corresponde a 443."
  },
  {
    "id": 45,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Autodiscovery - Identificadores",
    "topic_en": "Autodiscovery - Identifiers",
    "topic": "Autodiscovery - Identificadores",
    "question_es": "Para monitorear un contenedor Docker que ejecuta una imagen llamada 'custom_repo/nginx:1.21', ¿qué valor debe asignarse en 'ad_identifiers' en el archivo de configuración de la plantilla del Agente?",
    "question_en": "To monitor an NGINX Docker container running an image named 'custom_repo/nginx:1.21', what value must be assigned to 'ad_identifiers' in the Agent check template?",
    "question": "Para monitorear un contenedor Docker que ejecuta una imagen llamada 'custom_repo/nginx:1.21', ¿qué valor debe asignarse en 'ad_identifiers' en el archivo de configuración de la plantilla del Agente?",
    "options_es": [
      "nginx:1.21",
      "custom_repo/nginx:1.21",
      "nginx",
      "docker_container_nginx"
    ],
    "options_en": [
      "nginx:1.21",
      "custom_repo/nginx:1.21",
      "nginx",
      "docker_container_nginx"
    ],
    "options": [
      "nginx:1.21",
      "custom_repo/nginx:1.21",
      "nginx",
      "docker_container_nginx"
    ],
    "correctIndex": 1,
    "explanation_es": "En las plantillas de Autodiscovery, la clave `ad_identifiers` debe coincidir con el nombre de imagen exacto con el que se ejecuta el contenedor (en este caso `custom_repo/nginx:1.21`).",
    "explanation_en": "In Autodiscovery check templates, `ad_identifiers` must match the exact container image name (in this case `custom_repo/nginx:1.21`).",
    "explanation": "En las plantillas de Autodiscovery, la clave `ad_identifiers` debe coincidir con el nombre de imagen exacto con el que se ejecuta el contenedor (en este caso `custom_repo/nginx:1.21`)."
  },
  {
    "id": 46,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Variable %%host%% de Autodiscovery",
    "topic_en": "Autodiscovery %%host%% Variable",
    "topic": "Variable %%host%% de Autodiscovery",
    "question_es": "En las plantillas de verificación de Autodiscovery de Datadog, ¿a qué valor se resuelve dinámicamente la variable de plantilla '%%host%%'?",
    "question_en": "In Datadog Autodiscovery check templates, what value does the template variable '%%host%%' dynamically resolve to?",
    "question": "En las plantillas de verificación de Autodiscovery de Datadog, ¿a qué valor se resuelve dinámicamente la variable de plantilla '%%host%%'?",
    "options_es": [
      "Al nombre DNS de la sede central de Datadog.",
      "A la dirección IP interna o hostname resoluble del contenedor o pod evaluado.",
      "A la dirección IP 127.0.0.1 fija en todos los casos.",
      "Al identificador MAC de la tarjeta de red física del servidor anfitrión."
    ],
    "options_en": [
      "The DNS name of Datadog headquarters.",
      "The internal IP address or resolvable hostname of the evaluated container or pod.",
      "The static IP address 127.0.0.1 in all cases.",
      "The physical MAC identifier of the host network card."
    ],
    "options": [
      "Al nombre DNS de la sede central de Datadog.",
      "A la dirección IP interna o hostname resoluble del contenedor o pod evaluado.",
      "A la dirección IP 127.0.0.1 fija en todos los casos.",
      "Al identificador MAC de la tarjeta de red física del servidor anfitrión."
    ],
    "correctIndex": 1,
    "explanation_es": "La variable `%%host%%` es reemplazada dinámicamente por la dirección IP de red asignada al contenedor individual o pod sobre el cual se ejecutará el check.",
    "explanation_en": "The `%%host%%` template variable is dynamically substituted with the IP address of the target container or pod where the check is executed.",
    "explanation": "La variable `%%host%%` es reemplazada dinámicamente por la dirección IP de red asignada al contenedor individual o pod sobre el cual se ejecutará el check."
  },
  {
    "id": 47,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Socket de Docker",
    "topic_en": "Docker Socket",
    "topic": "Socket de Docker",
    "question_es": "Al desplegar el Datadog Agent como un contenedor Docker, ¿qué volumen crítico debe montarse para que el Agente pueda consultar las estadísticas de los otros contenedores?",
    "question_en": "When deploying the Datadog Agent as a Docker container, which critical volume must be mounted so the Agent can collect stats from other containers?",
    "question": "Al desplegar el Datadog Agent como un contenedor Docker, ¿qué volumen crítico debe montarse para que el Agente pueda consultar las estadísticas de los otros contenedores?",
    "options_es": [
      "/etc/shadow:/etc/shadow:ro",
      "/var/run/docker.sock:/var/run/docker.sock:ro",
      "/dev/null:/dev/null:rw",
      "/boot:/boot:ro"
    ],
    "options_en": [
      "/etc/shadow:/etc/shadow:ro",
      "/var/run/docker.sock:/var/run/docker.sock:ro",
      "/dev/null:/dev/null:rw",
      "/boot:/boot:ro"
    ],
    "options": [
      "/etc/shadow:/etc/shadow:ro",
      "/var/run/docker.sock:/var/run/docker.sock:ro",
      "/dev/null:/dev/null:rw",
      "/boot:/boot:ro"
    ],
    "correctIndex": 1,
    "explanation_es": "Montar el socket de comunicación de Docker `/var/run/docker.sock` en modo de solo lectura (`:ro`) permite al Agente en contenedor consultar la API de Docker para descubrir contenedores y métricas de CPU/memoria.",
    "explanation_en": "Mounting the Docker socket `/var/run/docker.sock` in read-only mode (`:ro`) allows the containerized Datadog Agent to query the Docker API for container discovery and performance metrics.",
    "explanation": "Montar el socket de comunicación de Docker `/var/run/docker.sock` en modo de solo lectura (`:ro`) permite al Agente en contenedor consultar la API de Docker para descubrir contenedores y métricas de CPU/memoria."
  },
  {
    "id": 48,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Dual Shipping (Múltiples Endpoints)",
    "topic_en": "Dual Shipping (Multiple Endpoints)",
    "topic": "Dual Shipping (Múltiples Endpoints)",
    "question_es": "¿Qué funcionalidad o directiva de 'datadog.yaml' permite a una empresa enviar simultáneamente una copia de su telemetría a dos organizaciones de Datadog distintas (ej. migración o auditoría)?",
    "question_en": "Which 'datadog.yaml' directive allows an organization to send a concurrent copy of its telemetry to two separate Datadog organizations (e.g., during migration)?",
    "question": "¿Qué funcionalidad o directiva de 'datadog.yaml' permite a una empresa enviar simultáneamente una copia de su telemetría a dos organizaciones de Datadog distintas (ej. migración o auditoría)?",
    "options_es": [
      "additional_endpoints",
      "duplicate_metrics",
      "dual_tenant_mode",
      "multicast_traffic"
    ],
    "options_en": [
      "additional_endpoints",
      "duplicate_metrics",
      "dual_tenant_mode",
      "multicast_traffic"
    ],
    "options": [
      "additional_endpoints",
      "duplicate_metrics",
      "dual_tenant_mode",
      "multicast_traffic"
    ],
    "correctIndex": 0,
    "explanation_es": "La directiva `additional_endpoints` en `datadog.yaml` permite especificar destinos secundarios adicionales (con sus respectivas API Keys) para duplicar el envío de telemetría hacia múltiples cuentas.",
    "explanation_en": "The `additional_endpoints` directive in `datadog.yaml` allows you to specify secondary ingestion endpoints and API keys to duplicate telemetry streams to multiple accounts.",
    "explanation": "La directiva `additional_endpoints` en `datadog.yaml` permite especificar destinos secundarios adicionales (con sus respectivas API Keys) para duplicar el envío de telemetría hacia múltiples cuentas."
  },
  {
    "id": 49,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Sincronización de Tiempo (NTP)",
    "topic_en": "Time Synchronization (NTP)",
    "topic": "Sincronización de Tiempo (NTP)",
    "question_es": "¿Por qué el Datadog Agent incluye un check de NTP (Network Time Protocol) habilitado de forma predeterminada?",
    "question_en": "Why does the Datadog Agent include an NTP (Network Time Protocol) check enabled by default?",
    "question": "¿Por qué el Datadog Agent incluye un check de NTP (Network Time Protocol) habilitado de forma predeterminada?",
    "options_es": [
      "Para ajustar la hora del reloj del sistema operativo automáticamente mediante privilegios de root.",
      "Para alertar si el reloj del host tiene una desviación de tiempo (clock drift) que pudiera ocasionar que Datadog rechace métricas con marcas de tiempo desfasadas.",
      "Para sincronizar las zonas horarias de los navegadores de los usuarios con el servidor.",
      "Para medir la velocidad de rotación de los discos duros del servidor."
    ],
    "options_en": [
      "To automatically adjust the operating system clock using root privileges.",
      "To alert if the host clock has clock drift that could cause Datadog to reject metrics with out-of-bounds timestamps.",
      "To synchronize client browser time zones with the server.",
      "To measure hard drive rotational speed."
    ],
    "options": [
      "Para ajustar la hora del reloj del sistema operativo automáticamente mediante privilegios de root.",
      "Para alertar si el reloj del host tiene una desviación de tiempo (clock drift) que pudiera ocasionar que Datadog rechace métricas con marcas de tiempo desfasadas.",
      "Para sincronizar las zonas horarias de los navegadores de los usuarios con el servidor.",
      "Para medir la velocidad de rotación de los discos duros del servidor."
    ],
    "correctIndex": 1,
    "explanation_es": "Datadog requiere que los timestamps de las métricas no tengan una discrepancia excesiva con la hora real. Si el reloj local del host se desvía demasiado (clock drift), las métricas pueden aparecer en el futuro o ser descartadas por antiguas.",
    "explanation_en": "Datadog requires metric timestamps to match real time within reasonable limits. Significant clock drift causes metrics to appear in the future or be discarded as stale.",
    "explanation": "Datadog requiere que los timestamps de las métricas no tengan una discrepancia excesiva con la hora real. Si el reloj local del host se desvía demasiado (clock drift), las métricas pueden aparecer en el futuro o ser descartadas por antiguas."
  },
  {
    "id": 50,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Valores por Defecto de APM",
    "topic_en": "APM Default Values",
    "topic": "Valores por Defecto de APM",
    "question_es": "Al inicializar el trazado de APM en el código de una aplicación con el SDK de Datadog, ¿cuáles son los valores predeterminados para el host, puerto y HTTPS para enviar las trazas?",
    "question_en": "When initializing APM tracing in application code using the Datadog SDK, what are the default host, port, and HTTPS values for sending traces?",
    "question": "Al inicializar el trazado de APM en el código de una aplicación con el SDK de Datadog, ¿cuáles son los valores predeterminados para el host, puerto y HTTPS para enviar las trazas?",
    "options_es": [
      "localhost, puerto 8126 y HTTPS=False",
      "app.datadoghq.com, puerto 443 y HTTPS=True",
      "127.0.0.1, puerto 8125 y HTTPS=True",
      "0.0.0.0, puerto 80 y HTTPS=False"
    ],
    "options_en": [
      "localhost, port 8126, and HTTPS=False",
      "app.datadoghq.com, port 443, and HTTPS=True",
      "127.0.0.1, port 8125, and HTTPS=True",
      "0.0.0.0, port 80, and HTTPS=False"
    ],
    "options": [
      "localhost, puerto 8126 y HTTPS=False",
      "app.datadoghq.com, puerto 443 y HTTPS=True",
      "127.0.0.1, puerto 8125 y HTTPS=True",
      "0.0.0.0, puerto 80 y HTTPS=False"
    ],
    "correctIndex": 0,
    "explanation_es": "Por defecto, las bibliotecas cliente de APM asumen que el Datadog Agent se ejecuta localmente en la misma máquina o contenedor en `localhost`, en el puerto TCP `8126` y sin cifrado HTTPS local (`HTTPS=False`).",
    "explanation_en": "By default, Datadog APM client libraries assume the Trace Agent is running locally on the same host or pod at `localhost`, on port `8126`, and without HTTPS (`HTTPS=False`).",
    "explanation": "Por defecto, las bibliotecas cliente de APM asumen que el Datadog Agent se ejecuta localmente en la misma máquina o contenedor en `localhost`, en el puerto TCP `8126` y sin cifrado HTTPS local (`HTTPS=False`)."
  },
  {
    "id": 51,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Anotaciones en Kubernetes",
    "topic_en": "Kubernetes Annotations",
    "topic": "Anotaciones en Kubernetes",
    "question_es": "¿Cómo se configuran las plantillas de Autodiscovery directamente en un Pod de Kubernetes sin necesidad de tocar los archivos del host?",
    "question_en": "How are Autodiscovery templates configured directly on a Kubernetes Pod without modifying host files?",
    "question": "¿Cómo se configuran las plantillas de Autodiscovery directamente en un Pod de Kubernetes sin necesidad de tocar los archivos del host?",
    "options_es": [
      "Configurando anotaciones (annotations) en el manifiesto del Pod con el prefijo 'ad.datadoghq.com/'.",
      "Creando un archivo .bat dentro del contenedor principal.",
      "Modificando la tabla de rutas del router BGP del clúster.",
      "Creando un volumen persistente NFS con nombre datadog.yaml."
    ],
    "options_en": [
      "By configuring annotations on the Pod manifest with the prefix 'ad.datadoghq.com/'.",
      "By creating a .bat file inside the main container.",
      "By altering the cluster's BGP routing table.",
      "By creating an NFS persistent volume named datadog.yaml."
    ],
    "options": [
      "Configurando anotaciones (annotations) en el manifiesto del Pod con el prefijo 'ad.datadoghq.com/'.",
      "Creando un archivo .bat dentro del contenedor principal.",
      "Modificando la tabla de rutas del router BGP del clúster.",
      "Creando un volumen persistente NFS con nombre datadog.yaml."
    ],
    "correctIndex": 0,
    "explanation_es": "En Kubernetes, Datadog Autodiscovery lee las anotaciones del Pod con el esquema `ad.datadoghq.com/<nombre_contenedor>.check_names`, `.init_configs` e `.instances` para configurar los checks.",
    "explanation_en": "In Kubernetes, Datadog Autodiscovery parses pod annotations formatted as `ad.datadoghq.com/<container_name>.check_names`, `.init_configs`, and `.instances` to apply monitoring checks.",
    "explanation": "En Kubernetes, Datadog Autodiscovery lee las anotaciones del Pod con el esquema `ad.datadoghq.com/<nombre_contenedor>.check_names`, `.init_configs` e `.instances` para configurar los checks."
  },
  {
    "id": 52,
    "domain_es": "Dominio 3: Networking & Agent Configuration",
    "domain_en": "Domain 3: Networking & Agent Configuration",
    "domain": "Dominio 3: Networking & Agent Configuration",
    "topic_es": "Parámetros de Buffer de Red",
    "topic_en": "Network Buffer Parameters",
    "topic": "Parámetros de Buffer de Red",
    "question_es": "Si el Datadog Agent reporta que está descartando paquetes DogStatsD debido a un tráfico volumétrico masivo, ¿qué ajuste a nivel de kernel de Linux suele recomendarse?",
    "question_en": "If the Datadog Agent reports dropped DogStatsD packets due to massive traffic volume, which Linux kernel tuning is commonly recommended?",
    "question": "Si el Datadog Agent reporta que está descartando paquetes DogStatsD debido a un tráfico volumétrico masivo, ¿qué ajuste a nivel de kernel de Linux suele recomendarse?",
    "options_es": [
      "Incrementar el tamaño máximo del búfer de recepción de sockets UDP ('sysctl net.core.rmem_max').",
      "Deshabilitar las interfaces de red inalámbricas.",
      "Reducir el tamaño de la memoria RAM del servidor.",
      "Cambiar el sistema de archivos de ext4 a FAT32."
    ],
    "options_en": [
      "Increase the maximum UDP socket receive buffer size ('sysctl net.core.rmem_max').",
      "Disable all wireless network interfaces.",
      "Reduce server physical RAM capacity.",
      "Convert the filesystem format from ext4 to FAT32."
    ],
    "options": [
      "Incrementar el tamaño máximo del búfer de recepción de sockets UDP ('sysctl net.core.rmem_max').",
      "Deshabilitar las interfaces de red inalámbricas.",
      "Reducir el tamaño de la memoria RAM del servidor.",
      "Cambiar el sistema de archivos de ext4 a FAT32."
    ],
    "correctIndex": 0,
    "explanation_es": "Cuando una aplicación envía millones de datagramas UDP a DogStatsD, el buffer del socket del sistema puede desbordarse. Incrementar `net.core.rmem_max` y `net.core.rmem_default` previene la pérdida de paquetes a nivel de socket del kernel.",
    "explanation_en": "When applications send millions of UDP packets to DogStatsD, the kernel socket receive buffer can overflow. Increasing `net.core.rmem_max` and `net.core.rmem_default` prevents packet drops at the socket buffer level.",
    "explanation": "Cuando una aplicación envía millones de datagramas UDP a DogStatsD, el buffer del socket del sistema puede desbordarse. Incrementar `net.core.rmem_max` y `net.core.rmem_default` previene la pérdida de paquetes a nivel de socket del kernel."
  },
  {
    "id": 53,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Tipo de Métrica - GAUGE",
    "topic_en": "Metric Type - GAUGE",
    "topic": "Tipo de Métrica - GAUGE",
    "question_es": "¿Qué tipo de métrica de Datadog debe utilizarse para representar un valor continuo que puede subir o bajar constantemente, como el uso actual de memoria RAM o la temperatura de la CPU?",
    "question_en": "Which Datadog metric type should be used for a continuous value that can fluctuate up or down, such as current RAM utilization or CPU temperature?",
    "question": "¿Qué tipo de métrica de Datadog debe utilizarse para representar un valor continuo que puede subir o bajar constantemente, como el uso actual de memoria RAM o la temperatura de la CPU?",
    "options_es": [
      "Counter",
      "Gauge",
      "Rate",
      "Histogram"
    ],
    "options_en": [
      "Counter",
      "Gauge",
      "Rate",
      "Histogram"
    ],
    "options": [
      "Counter",
      "Gauge",
      "Rate",
      "Histogram"
    ],
    "correctIndex": 1,
    "explanation_es": "Una métrica de tipo GAUGE registra una foto instantánea de un valor en un punto en el tiempo que puede fluctuar libremente hacia arriba o hacia abajo (ej. porcentaje de memoria libre, conexiones activas, temperatura).",
    "explanation_en": "A GAUGE metric takes a point-in-time snapshot of an instantaneous value that can increase or decrease freely (e.g., available memory, concurrent connections, temperature).",
    "explanation": "Una métrica de tipo GAUGE registra una foto instantánea de un valor en un punto en el tiempo que puede fluctuar libremente hacia arriba o hacia abajo (ej. porcentaje de memoria libre, conexiones activas, temperatura)."
  },
  {
    "id": 54,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Tipo de Métrica - COUNT",
    "topic_en": "Metric Type - COUNT",
    "topic": "Tipo de Métrica - COUNT",
    "question_es": "¿Cuál de las siguientes es una razón válida para elegir un tipo de métrica COUNT en lugar de un GAUGE?",
    "question_en": "Which of the following is a valid reason to choose a COUNT metric type over a GAUGE?",
    "question": "¿Cuál de las siguientes es una razón válida para elegir un tipo de métrica COUNT en lugar de un GAUGE?",
    "options_es": [
      "Para medir la cantidad acumulada de solicitudes HTTP recibidas o errores producidos en un periodo de tiempo.",
      "Para medir el espacio disponible en disco en gigabytes.",
      "Para registrar el porcentaje instantáneo de uso de CPU.",
      "Para representar un valor booleano estático de configuración."
    ],
    "options_en": [
      "To measure the cumulative count of HTTP requests received or database errors occurring over an interval.",
      "To measure available disk storage in gigabytes.",
      "To record the instantaneous CPU usage percentage.",
      "To represent a static boolean configuration flag."
    ],
    "options": [
      "Para medir la cantidad acumulada de solicitudes HTTP recibidas o errores producidos en un periodo de tiempo.",
      "Para medir el espacio disponible en disco en gigabytes.",
      "Para registrar el porcentaje instantáneo de uso de CPU.",
      "Para representar un valor booleano estático de configuración."
    ],
    "correctIndex": 0,
    "explanation_es": "El tipo COUNT cuantifica el número de sucesos u ocurrencias acumuladas durante un intervalo de tiempo (ej. número de visitas, fallos de pago, errores de base de datos).",
    "explanation_en": "A COUNT metric tracks the number of discrete event occurrences over time (e.g., total web requests, shopping cart checkouts, error events).",
    "explanation": "El tipo COUNT cuantifica el número de sucesos u ocurrencias acumuladas durante un intervalo de tiempo (ej. número de visitas, fallos de pago, errores de base de datos)."
  },
  {
    "id": 55,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Histogram vs Distribution",
    "topic_en": "Histogram vs Distribution",
    "topic": "Histogram vs Distribution",
    "question_es": "¿Cuál es la diferencia FUNDAMENTAL entre una métrica HISTOGRAM y una métrica DISTRIBUTION en Datadog?",
    "question_en": "What is the FUNDAMENTAL difference between a HISTOGRAM and a DISTRIBUTION metric in Datadog?",
    "question": "¿Cuál es la diferencia FUNDAMENTAL entre una métrica HISTOGRAM y una métrica DISTRIBUTION en Datadog?",
    "options_es": [
      "Histogram solo admite números enteros, mientras que Distribution admite decimales.",
      "Histogram calcula los percentiles estadísticos localmente en el host (lado del Agente), mientras que Distribution envía los datos crudos para calcular percentiles globales en los servidores de Datadog.",
      "Histogram solo funciona con tráfico HTTP, mientras que Distribution solo funciona con bases de datos SQL.",
      "No existe ninguna diferencia; son dos nombres para el mismo tipo de métrica en DogStatsD."
    ],
    "options_en": [
      "Histogram only supports integers, while Distribution supports floating point numbers.",
      "Histogram computes statistical percentiles locally on each host (Agent side), while Distribution sends raw data to compute global percentiles server-side in Datadog.",
      "Histogram only works with HTTP traffic, while Distribution only works with SQL databases.",
      "There is no difference; they are aliases for the same metric type in DogStatsD."
    ],
    "options": [
      "Histogram solo admite números enteros, mientras que Distribution admite decimales.",
      "Histogram calcula los percentiles estadísticos localmente en el host (lado del Agente), mientras que Distribution envía los datos crudos para calcular percentiles globales en los servidores de Datadog.",
      "Histogram solo funciona con tráfico HTTP, mientras que Distribution solo funciona con bases de datos SQL.",
      "No existe ninguna diferencia; son dos nombres para el mismo tipo de métrica en DogStatsD."
    ],
    "correctIndex": 1,
    "explanation_es": "Los HISTOGRAMAS calculan agregaciones estadísticas (p95, p99, etc.) en cada Agente localmente por host, lo que impide calcular un percentil global exacto para una flota completa. Las DISTRIBUTIONS envían las muestras de los datos crudos a Datadog para calcular agregaciones y percentiles matemáticamente precisos a nivel global de toda la infraestructura.",
    "explanation_en": "HISTOGRAMS compute statistical percentiles (p95, p99, etc.) on each Agent per host, which cannot be mathematically aggregated across hosts. DISTRIBUTIONS send raw samples to Datadog to calculate mathematically accurate global percentiles across your entire fleet.",
    "explanation": "Los HISTOGRAMAS calculan agregaciones estadísticas (p95, p99, etc.) en cada Agente localmente por host, lo que impide calcular un percentil global exacto para una flota completa. Las DISTRIBUTIONS envían las muestras de los datos crudos a Datadog para calcular agregaciones y percentiles matemáticamente precisos a nivel global de toda la infraestructura."
  },
  {
    "id": 56,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Intervalo de Flush de DogStatsD",
    "topic_en": "DogStatsD Flush Interval",
    "topic": "Intervalo de Flush de DogStatsD",
    "question_es": "¿Cuál es el intervalo de descarga o envío periódico (flush interval) predeterminado con el que DogStatsD agrega métricas y las despacha al backend de Datadog?",
    "question_en": "What is the default periodic flush interval at which DogStatsD aggregates metrics and flushes them to the Datadog backend?",
    "question": "¿Cuál es el intervalo de descarga o envío periódico (flush interval) predeterminado con el que DogStatsD agrega métricas y las despacha al backend de Datadog?",
    "options_es": [
      "10 segundos",
      "1 segundo",
      "60 segundos",
      "5 minutos"
    ],
    "options_en": [
      "10 seconds",
      "1 second",
      "60 seconds",
      "5 minutes"
    ],
    "options": [
      "10 segundos",
      "1 segundo",
      "60 segundos",
      "5 minutos"
    ],
    "correctIndex": 0,
    "explanation_es": "Por defecto, el servidor DogStatsD empaqueta y despacha las métricas agregadas al backend de Datadog cada 10 segundos.",
    "explanation_en": "By default, the DogStatsD server aggregates custom metrics locally and flushes them to the Datadog intake endpoint every 10 seconds.",
    "explanation": "Por defecto, el servidor DogStatsD empaqueta y despacha las métricas agregadas al backend de Datadog cada 10 segundos."
  },
  {
    "id": 57,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Por qué DogStatsD usa UDP",
    "topic_en": "Why DogStatsD Uses UDP",
    "topic": "Por qué DogStatsD usa UDP",
    "question_es": "¿Cuál es la razón PRIMARIA por la que el protocolo DogStatsD utiliza datagramas UDP en lugar de conexiones TCP?",
    "question_en": "What is the PRIMARY reason the DogStatsD protocol uses UDP datagrams rather than TCP connections?",
    "question": "¿Cuál es la razón PRIMARIA por la que el protocolo DogStatsD utiliza datagramas UDP en lugar de conexiones TCP?",
    "options_es": [
      "UDP es un protocolo que garantiza criptográficamente el no repudio de la entrega.",
      "UDP es no bloqueante; permite a la aplicación enviar métricas y continuar su procesamiento inmediatamente sin sufrir penalizaciones de latencia si el Agente no responde.",
      "UDP permite comprimir automáticamente las métricas a la mitad de su tamaño en bytes.",
      "Los cortafuegos corporativos bloquean siempre todo el tráfico TCP en redes locales."
    ],
    "options_en": [
      "UDP is a protocol that cryptographically guarantees non-repudiation of delivery.",
      "UDP is non-blocking; it allows applications to send metrics and resume immediately without latency penalties if the Agent is unavailable.",
      "UDP automatically compresses metrics to half their size in bytes.",
      "Corporate firewalls always block all TCP traffic on local networks."
    ],
    "options": [
      "UDP es un protocolo que garantiza criptográficamente el no repudio de la entrega.",
      "UDP es no bloqueante; permite a la aplicación enviar métricas y continuar su procesamiento inmediatamente sin sufrir penalizaciones de latencia si el Agente no responde.",
      "UDP permite comprimir automáticamente las métricas a la mitad de su tamaño en bytes.",
      "Los cortafuegos corporativos bloquean siempre todo el tráfico TCP en redes locales."
    ],
    "correctIndex": 1,
    "explanation_es": "DogStatsD usa UDP porque es no bloqueante y 'fire-and-forget'. Si el Agente Datadog se reinicia o está saturado, la aplicación principal del usuario no se detiene ni experimenta degradación de rendimiento esperando un handshake o confirmación de entrega.",
    "explanation_en": "DogStatsD uses UDP because it is non-blocking and fire-and-forget. If the Datadog Agent restarts or experiences heavy load, client application execution is never blocked waiting for TCP acknowledgments.",
    "explanation": "DogStatsD usa UDP porque es no bloqueante y 'fire-and-forget'. Si el Agente Datadog se reinicia o está saturado, la aplicación principal del usuario no se detiene ni experimenta degradación de rendimiento esperando un handshake o confirmación de entrega."
  },
  {
    "id": 58,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Marcas de Tiempo (Timestamps) en Métricas",
    "topic_en": "Metric Timestamps",
    "topic": "Marcas de Tiempo (Timestamps) en Métricas",
    "question_es": "¿Qué ocurre si una aplicación intenta enviar métricas personalizadas a la API de Datadog utilizando marcas de tiempo (timestamps) con fracciones de segundo (ej. milisegundos)?",
    "question_en": "What happens if an application submits custom metrics to the Datadog API using timestamps with fractions of a second (e.g., milliseconds)?",
    "question": "¿Qué ocurre si una aplicación intenta enviar métricas personalizadas a la API de Datadog utilizando marcas de tiempo (timestamps) con fracciones de segundo (ej. milisegundos)?",
    "options_es": [
      "Datadog redondea automáticamente al microsegundo más próximo.",
      "El endpoint de métricas de Datadog rechaza la solicitud al momento de la entrega por formato inválido.",
      "La métrica se almacena como un evento en lugar de una métrica.",
      "La cuenta de Datadog se bloquea por sobrepasar el límite de peticiones."
    ],
    "options_en": [
      "Datadog automatically rounds the timestamp to the nearest microsecond.",
      "The Datadog metrics intake endpoint rejects the request upon submission due to invalid format.",
      "The metric is automatically converted into an Event instead of a Metric.",
      "The Datadog account is temporarily locked for exceeding rate limits."
    ],
    "options": [
      "Datadog redondea automáticamente al microsegundo más próximo.",
      "El endpoint de métricas de Datadog rechaza la solicitud al momento de la entrega por formato inválido.",
      "La métrica se almacena como un evento en lugar de una métrica.",
      "La cuenta de Datadog se bloquea por sobrepasar el límite de peticiones."
    ],
    "correctIndex": 1,
    "explanation_es": "Los endpoints de métricas de Datadog requieren timestamps en segundos Unix (enteros positivos de 10 dígitos). Si se envían fracciones de segundo o milisegundos (13 dígitos), la petición es rechazada.",
    "explanation_en": "Datadog metric endpoints require timestamps in POSIX seconds (10-digit integers). Submitting millisecond timestamps (13 digits) causes the metric payload to be rejected.",
    "explanation": "Los endpoints de métricas de Datadog requieren timestamps en segundos Unix (enteros positivos de 10 dígitos). Si se envían fracciones de segundo o milisegundos (13 dígitos), la petición es rechazada."
  },
  {
    "id": 59,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Integración Basada en Agente vs Crawler",
    "topic_en": "Agent-based vs Crawler Integrations",
    "topic": "Integración Basada en Agente vs Crawler",
    "question_es": "¿Para cuál de las siguientes tecnologías se utiliza una integración basada en el Agente de Datadog en lugar de una integración tipo crawler/autenticación en la nube?",
    "question_en": "For which of the following technologies is an Agent-based integration used instead of a crawler/cloud-authentication integration?",
    "question": "¿Para cuál de las siguientes tecnologías se utiliza una integración basada en el Agente de Datadog en lugar de una integración tipo crawler/autenticación en la nube?",
    "options_es": [
      "Google Cloud Platform (GCP)",
      "Slack",
      "NGINX",
      "PagerDuty"
    ],
    "options_en": [
      "Google Cloud Platform (GCP)",
      "Slack",
      "NGINX",
      "PagerDuty"
    ],
    "options": [
      "Google Cloud Platform (GCP)",
      "Slack",
      "NGINX",
      "PagerDuty"
    ],
    "correctIndex": 2,
    "explanation_es": "NGINX es una integración basada en el Agente (el Agente instalado en el host consulta localmente el módulo `stub_status`). Servicios como Slack, PagerDuty o GCP usan integraciones crawler/API configuradas directamente en la plataforma web de Datadog.",
    "explanation_en": "NGINX is an Agent-based integration where the Datadog Agent installed on the host queries NGINX's `stub_status` module locally. Services like Slack, PagerDuty, and GCP use crawler/API-based integrations.",
    "explanation": "NGINX es una integración basada en el Agente (el Agente instalado en el host consulta localmente el módulo `stub_status`). Servicios como Slack, PagerDuty o GCP usan integraciones crawler/API configuradas directamente en la plataforma web de Datadog."
  },
  {
    "id": 60,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Integraciones de Tipo Crawler",
    "topic_en": "Crawler-based Integrations",
    "topic": "Integraciones de Tipo Crawler",
    "question_es": "¿Cuál de las siguientes afirmaciones es CORRECTA respecto a las integraciones de tipo Crawler (Crawler-based integrations)?",
    "question_en": "Which of the following statements is CORRECT regarding Crawler-based integrations?",
    "question": "¿Cuál de las siguientes afirmaciones es CORRECTA respecto a las integraciones de tipo Crawler (Crawler-based integrations)?",
    "options_es": [
      "Requieren instalar un Agente Datadog en cada servidor de la infraestructura del proveedor SaaS.",
      "Son utilizadas para extraer (pull) métricas directamente desde las APIs de servicios en la nube a los servidores de Datadog.",
      "Solo pueden funcionar sobre redes locales privadas sin conexión a internet.",
      "Transmiten datos exclusivamente mediante el puerto 8125 UDP."
    ],
    "options_en": [
      "They require installing a Datadog Agent on every server of the SaaS provider's infrastructure.",
      "They are used to pull metrics directly from cloud service APIs to Datadog's servers.",
      "They can only operate over private local networks without internet access.",
      "They transmit data exclusively using port 8125 UDP."
    ],
    "options": [
      "Requieren instalar un Agente Datadog en cada servidor de la infraestructura del proveedor SaaS.",
      "Son utilizadas para extraer (pull) métricas directamente desde las APIs de servicios en la nube a los servidores de Datadog.",
      "Solo pueden funcionar sobre redes locales privadas sin conexión a internet.",
      "Transmiten datos exclusivamente mediante el puerto 8125 UDP."
    ],
    "correctIndex": 1,
    "explanation_es": "Las integraciones tipo crawler no requieren que instales un Agente en el servicio destino; los propios servidores de Datadog hacen solicitudes periódicas (pull) a las APIs de servicios como AWS CloudWatch, Azure Monitor o Google Cloud mediante credenciales autorizadas.",
    "explanation_en": "Crawler-based integrations do not require host agents; Datadog's servers periodically make authenticated API requests (pull) to external cloud providers (e.g., AWS CloudWatch, Azure Monitor).",
    "explanation": "Las integraciones tipo crawler no requieren que instales un Agente en el servicio destino; los propios servidores de Datadog hacen solicitudes periódicas (pull) a las APIs de servicios como AWS CloudWatch, Azure Monitor o Google Cloud mediante credenciales autorizadas."
  },
  {
    "id": 61,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Autenticación de Integraciones Crawler",
    "topic_en": "Crawler Integration Authentication",
    "topic": "Autenticación de Integraciones Crawler",
    "question_es": "¿Qué paso inicial es indispensable para habilitar una integración tipo crawler de Datadog con un proveedor de nube (como AWS o Azure)?",
    "question_en": "What initial step is required to enable a Datadog crawler-based integration with a public cloud provider (such as AWS or Azure)?",
    "question": "¿Qué paso inicial es indispensable para habilitar una integración tipo crawler de Datadog con un proveedor de nube (como AWS o Azure)?",
    "options_es": [
      "Crear una cuenta de servicio, rol IAM o identidad con permisos de lectura en el proveedor de nube y configurar la confianza con Datadog.",
      "Abrir el puerto 22 SSH en todos los servidores de la nube hacia internet.",
      "Instalar el Datadog Agent en el hipervisor físico del proveedor de nube.",
      "Enviar una solicitud física firmada por correo postal a la sede del proveedor."
    ],
    "options_en": [
      "Create a service account, IAM role, or identity with read permissions in the cloud provider and configure trust with Datadog.",
      "Open port 22 SSH on all cloud servers to the public internet.",
      "Install the Datadog Agent inside the cloud provider's physical hypervisor.",
      "Send a physically signed written request by postal mail to the provider."
    ],
    "options": [
      "Crear una cuenta de servicio, rol IAM o identidad con permisos de lectura en el proveedor de nube y configurar la confianza con Datadog.",
      "Abrir el puerto 22 SSH en todos los servidores de la nube hacia internet.",
      "Instalar el Datadog Agent en el hipervisor físico del proveedor de nube.",
      "Enviar una solicitud física firmada por correo postal a la sede del proveedor."
    ],
    "correctIndex": 0,
    "explanation_es": "Las integraciones con nubes públicas requieren crear una entidad de autenticación (ej. Rol IAM con External ID en AWS, o Service Principal en Azure) que otorgue a Datadog permisos de solo lectura para extraer métricas de la API.",
    "explanation_en": "Cloud integrations require configuring an authentication identity (e.g., an IAM Role with an External ID in AWS, or an Azure Service Principal) granting Datadog read access to pull cloud metrics.",
    "explanation": "Las integraciones con nubes públicas requieren crear una entidad de autenticación (ej. Rol IAM con External ID en AWS, o Service Principal en Azure) que otorgue a Datadog permisos de solo lectura para extraer métricas de la API."
  },
  {
    "id": 62,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Cheques Personalizados en Python",
    "topic_en": "Custom Checks in Python",
    "topic": "Cheques Personalizados en Python",
    "question_es": "¿Qué es un cheque personalizado (custom check) en el contexto de las integraciones del Datadog Agent?",
    "question_en": "What is a custom check in the context of Datadog Agent integrations?",
    "question": "¿Qué es un cheque personalizado (custom check) en el contexto de las integraciones del Datadog Agent?",
    "options_es": [
      "Una rutina interna para verificar la compatibilidad del Agente con el hardware.",
      "Una clase o función definida por el usuario en Python que extiende 'AgentCheck' para recolectar métricas propietarias específicas.",
      "Una verificación de sintaxis para comprobar la integridad del instalador del Agente.",
      "Un test de penetración automatizado que ejecuta el Agente contra el puerto 443."
    ],
    "options_en": [
      "An internal routine to verify Agent hardware compatibility.",
      "A user-defined Python class extending 'AgentCheck' to collect specific proprietary metrics.",
      "A syntax validator verifying the integrity of the Agent installer.",
      "An automated penetration test executed by the Agent against port 443."
    ],
    "options": [
      "Una rutina interna para verificar la compatibilidad del Agente con el hardware.",
      "Una clase o función definida por el usuario en Python que extiende 'AgentCheck' para recolectar métricas propietarias específicas.",
      "Una verificación de sintaxis para comprobar la integridad del instalador del Agente.",
      "Un test de penetración automatizado que ejecuta el Agente contra el puerto 443."
    ],
    "correctIndex": 1,
    "explanation_es": "Un Custom Check es un script en Python (ubicado en `checks.d/`) que hereda de la clase base `AgentCheck` para recolectar datos de aplicaciones personalizadas o servicios no soportados nativamente por las integraciones oficiales.",
    "explanation_en": "A Custom Check is a Python script placed in `checks.d/` that inherits from `AgentCheck` to gather telemetry from custom internal services not covered by official integrations.",
    "explanation": "Un Custom Check es un script en Python (ubicado en `checks.d/`) que hereda de la clase base `AgentCheck` para recolectar datos de aplicaciones personalizadas o servicios no soportados nativamente por las integraciones oficiales."
  },
  {
    "id": 63,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Frecuencia de Cheques Personalizados",
    "topic_en": "Custom Check Frequency",
    "topic": "Frecuencia de Cheques Personalizados",
    "question_es": "Un cheque personalizado llamado 'custom_apprunner.py' necesita ejecutarse cada dos minutos. ¿Cuál es el nombre de archivo y el contenido correcto para su archivo de configuración?",
    "question_en": "A custom check named 'custom_apprunner.py' needs to run every two minutes. What is the correct configuration file name and setting?",
    "question": "Un cheque personalizado llamado 'custom_apprunner.py' necesita ejecutarse cada dos minutos. ¿Cuál es el nombre de archivo y el contenido correcto para su archivo de configuración?",
    "options_es": [
      "Archivo 'conf.d/custom_apprunner.yaml' con el parámetro 'min_collection_interval: 120' en la instancia.",
      "Archivo 'checks.d/custom_apprunner.conf' con el parámetro 'frequency: 2m'.",
      "Archivo 'datadog.yaml' con el parámetro 'apprunner_timer: 120s'.",
      "Archivo 'cron.d/apprunner' con la instrucción '* /2 * * *'."
    ],
    "options_en": [
      "File 'conf.d/custom_apprunner.yaml' with parameter 'min_collection_interval: 120' in the instance.",
      "File 'checks.d/custom_apprunner.conf' with parameter 'frequency: 2m'.",
      "File 'datadog.yaml' with parameter 'apprunner_timer: 120s'.",
      "File 'cron.d/apprunner' with instruction '* /2 * * *'."
    ],
    "options": [
      "Archivo 'conf.d/custom_apprunner.yaml' con el parámetro 'min_collection_interval: 120' en la instancia.",
      "Archivo 'checks.d/custom_apprunner.conf' con el parámetro 'frequency: 2m'.",
      "Archivo 'datadog.yaml' con el parámetro 'apprunner_timer: 120s'.",
      "Archivo 'cron.d/apprunner' con la instrucción '* /2 * * *'."
    ],
    "correctIndex": 0,
    "explanation_es": "Para configurar la frecuencia de un check, se crea su archivo YAML en `conf.d/<nombre_check>.yaml` y se define `min_collection_interval: 120` (valor en segundos) dentro de la sección `instances:`.",
    "explanation_en": "To set custom collection intervals, configure `min_collection_interval: 120` (in seconds) under `instances:` in `/etc/datadog-agent/conf.d/<check_name>.yaml`.",
    "explanation": "Para configurar la frecuencia de un check, se crea su archivo YAML en `conf.d/<nombre_check>.yaml` y se define `min_collection_interval: 120` (valor en segundos) dentro de la sección `instances:`."
  },
  {
    "id": 64,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Activación de Integraciones",
    "topic_en": "Activating Integrations",
    "topic": "Activación de Integraciones",
    "question_es": "Dada la siguiente estructura de carpetas:\n/etc/datadog-agent/conf.d/nicedatabase.d/\n  |-- conf.yaml.example\n  '-- metrics.yaml\n¿Cuál es la secuencia correcta para configurar y activar la integración de NiceDatabase?",
    "question_en": "Given the directory structure:\n/etc/datadog-agent/conf.d/nicedatabase.d/\n  |-- conf.yaml.example\n  '-- metrics.yaml\nWhat is the correct sequence to configure and activate the NiceDatabase integration?",
    "question": "Dada la siguiente estructura de carpetas:\n/etc/datadog-agent/conf.d/nicedatabase.d/\n  |-- conf.yaml.example\n  '-- metrics.yaml\n¿Cuál es la secuencia correcta para configurar y activar la integración de NiceDatabase?",
    "options_es": [
      "Copiar 'conf.yaml.example' a 'conf.yaml' en ese subdirectorio, editar los parámetros de conexión, reiniciar el Agente y verificar con 'datadog-agent status'.",
      "Renombrar 'metrics.yaml' a 'datadog.yaml', sobrescribiendo la raíz del Agente.",
      "Ejecutar 'datadog-agent enable nicedatabase' desde la línea de comandos sin crear archivos.",
      "Borrar la carpeta 'nicedatabase.d' y esperar que Autodiscovery la descargue de nuevo."
    ],
    "options_en": [
      "Copy 'conf.yaml.example' to 'conf.yaml' in that subdirectory, edit connection settings, restart the Agent, and verify with 'datadog-agent status'.",
      "Rename 'metrics.yaml' to 'datadog.yaml', overwriting the Agent root file.",
      "Run 'datadog-agent enable nicedatabase' from the command line without creating files.",
      "Delete the 'nicedatabase.d' directory and wait for Autodiscovery to re-download it."
    ],
    "options": [
      "Copiar 'conf.yaml.example' a 'conf.yaml' en ese subdirectorio, editar los parámetros de conexión, reiniciar el Agente y verificar con 'datadog-agent status'.",
      "Renombrar 'metrics.yaml' a 'datadog.yaml', sobrescribiendo la raíz del Agente.",
      "Ejecutar 'datadog-agent enable nicedatabase' desde la línea de comandos sin crear archivos.",
      "Borrar la carpeta 'nicedatabase.d' y esperar que Autodiscovery la descargue de nuevo."
    ],
    "correctIndex": 0,
    "explanation_es": "El procedimiento estándar para activar una integración en Datadog consiste en copiar el archivo `conf.yaml.example` como `conf.yaml` en la carpeta de la integración, rellenar los datos de conexión requeridos, reiniciar el servicio del Agente y confirmar su ejecución con `datadog-agent status`.",
    "explanation_en": "Standard integration activation involves copying `conf.yaml.example` to `conf.yaml` in the integration directory, editing connection parameters, restarting the Agent, and running `datadog-agent status`.",
    "explanation": "El procedimiento estándar para activar una integración en Datadog consiste en copiar el archivo `conf.yaml.example` como `conf.yaml` en la carpeta de la integración, rellenar los datos de conexión requeridos, reiniciar el servicio del Agente y confirmar su ejecución con `datadog-agent status`."
  },
  {
    "id": 65,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Ejemplo de Metadatos",
    "topic_en": "Metadata Example",
    "topic": "Ejemplo de Metadatos",
    "question_es": "¿Cuál de los siguientes es un ejemplo de metadato asociado a una métrica en Datadog?",
    "question_en": "Which of the following is an example of metadata associated with a metric in Datadog?",
    "question": "¿Cuál de los siguientes es un ejemplo de metadato asociado a una métrica en Datadog?",
    "options_es": [
      "La unidad de medida (Unit, ej. bytes, milisegundos, porcentaje).",
      "La contraseña del usuario que ejecuta el proceso.",
      "El número de serie de la placa base del servidor.",
      "La versión del kernel de la tarjeta de sonido."
    ],
    "options_en": [
      "The unit of measurement (Unit, e.g., bytes, milliseconds, percent).",
      "The password of the user executing the process.",
      "The serial number of the server motherboard.",
      "The sound card kernel driver version."
    ],
    "options": [
      "La unidad de medida (Unit, ej. bytes, milisegundos, porcentaje).",
      "La contraseña del usuario que ejecuta el proceso.",
      "El número de serie de la placa base del servidor.",
      "La versión del kernel de la tarjeta de sonido."
    ],
    "correctIndex": 0,
    "explanation_es": "Los metadatos de las métricas en Datadog proporcionan propiedades descriptivas como la Unidad (Unit, ej. `byte`, `percent`, `second`), el Tipo de métrica (Gauge, Count) y la Descripción legible para humanos.",
    "explanation_en": "Metric metadata in Datadog defines descriptive attributes such as the metric's Unit (e.g., `byte`, `percent`), Type (Gauge, Count), and human-readable Description.",
    "explanation": "Los metadatos de las métricas en Datadog proporcionan propiedades descriptivas como la Unidad (Unit, ej. `byte`, `percent`, `second`), el Tipo de métrica (Gauge, Count) y la Descripción legible para humanos."
  },
  {
    "id": 66,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Modificador .as_count()",
    "topic_en": ".as_count() Modifier",
    "topic": "Modificador .as_count()",
    "question_es": "¿Qué efecto tiene aplicar el modificador '.as_count()' a una consulta de métrica en Datadog?",
    "question_en": "What effect does applying the '.as_count()' modifier have on a metric query in Datadog?",
    "question": "¿Qué efecto tiene aplicar el modificador '.as_count()' a una consulta de métrica en Datadog?",
    "options_es": [
      "Fuerza el agregador temporal a 'sum' y muestra la variación absoluta de eventos en lugar de la tasa normalizada por segundo.",
      "Convierte la métrica en una tasa por segundo dividida entre 60.",
      "Elimina todos los datos anteriores a 24 horas del gráfico.",
      "Transforma una métrica de CPU en una métrica de red."
    ],
    "options_en": [
      "It locks the time aggregator to 'sum' and displays absolute event variation instead of per-second normalized rates.",
      "It converts the metric into a per-second rate divided by 60.",
      "It deletes all data older than 24 hours from the chart.",
      "It converts a CPU metric into a network metric."
    ],
    "options": [
      "Fuerza el agregador temporal a 'sum' y muestra la variación absoluta de eventos en lugar de la tasa normalizada por segundo.",
      "Convierte la métrica en una tasa por segundo dividida entre 60.",
      "Elimina todos los datos anteriores a 24 horas del gráfico.",
      "Transforma una métrica de CPU en una métrica de red."
    ],
    "correctIndex": 0,
    "explanation_es": "El modificador `.as_count()` le indica a Datadog que trate la métrica como un conteo acumulativo, fijando el agregador de tiempo en `sum` y mostrando el volumen total real de eventos ocurridos en el intervalo en lugar de normalizarlo por segundo (`.as_rate()`).",
    "explanation_en": "The `.as_count()` modifier instructs Datadog to treat the metric as raw counts, locking the time aggregator to `sum` and showing actual event totals rather than normalized rates per second (`.as_rate()`).",
    "explanation": "El modificador `.as_count()` le indica a Datadog que trate la métrica como un conteo acumulativo, fijando el agregador de tiempo en `sum` y mostrando el volumen total real de eventos ocurridos en el intervalo en lugar de normalizarlo por segundo (`.as_rate()`)."
  },
  {
    "id": 67,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Rollup en Métricas",
    "topic_en": "Metric Rollup",
    "topic": "Rollup en Métricas",
    "question_es": "Al utilizar la función '.rollup(method, time)' en una consulta de métricas (por ejemplo: '.rollup(avg, 60)'), ¿qué operación se está realizando?",
    "question_en": "When using the '.rollup(method, time)' function in a metric query (e.g., '.rollup(avg, 60)'), what operation is performed?",
    "question": "Al utilizar la función '.rollup(method, time)' en una consulta de métricas (por ejemplo: '.rollup(avg, 60)'), ¿qué operación se está realizando?",
    "options_es": [
      "Se están eliminando los últimos 60 minutos de datos de la base de datos.",
      "Se están agrupando los puntos de datos en intervalos de tiempo de 60 segundos aplicando el método de agregación especificado (promedio).",
      "Se está forzando a que la métrica solo se actualice una vez cada 60 días.",
      "Se está creando una copia de seguridad en formato tar.gz cada minuto."
    ],
    "options_en": [
      "Deleting the last 60 minutes of data from the database.",
      "Aggregating data points into 60-second time buckets using the specified aggregation method (average).",
      "Forcing the metric to refresh only once every 60 days.",
      "Creating a tar.gz backup file every minute."
    ],
    "options": [
      "Se están eliminando los últimos 60 minutos de datos de la base de datos.",
      "Se están agrupando los puntos de datos en intervalos de tiempo de 60 segundos aplicando el método de agregación especificado (promedio).",
      "Se está forzando a que la métrica solo se actualice una vez cada 60 días.",
      "Se está creando una copia de seguridad en formato tar.gz cada minuto."
    ],
    "correctIndex": 1,
    "explanation_es": "La función `rollup(agregador, intervalo_en_segundos)` permite controlar explícitamente cómo Datadog combina y colapsa los puntos de datos dentro de ventanas de tiempo continuas.",
    "explanation_en": "The `rollup(aggregator, interval_in_seconds)` function explicitly defines the time interval and mathematical method (`sum`, `avg`, `min`, `max`) used to combine data points over time.",
    "explanation": "La función `rollup(agregador, intervalo_en_segundos)` permite controlar explícitamente cómo Datadog combina y colapsa los puntos de datos dentro de ventanas de tiempo continuas."
  },
  {
    "id": 68,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Tipos de Métricas en DogStatsD",
    "topic_en": "DogStatsD Metric Types",
    "topic": "Tipos de Métricas en DogStatsD",
    "question_es": "¿Cuál de los siguientes tipos de datos de DogStatsD se utiliza para rastrear la cantidad de elementos únicos en un conjunto (por ejemplo, el número de usuarios únicos que visitaron un sitio hoy)?",
    "question_en": "Which DogStatsD metric type is used to track the number of unique elements in a group (e.g., unique active users visiting a website today)?",
    "question": "¿Cuál de los siguientes tipos de datos de DogStatsD se utiliza para rastrear la cantidad de elementos únicos en un conjunto (por ejemplo, el número de usuarios únicos que visitaron un sitio hoy)?",
    "options_es": [
      "Set",
      "Counter",
      "Gauge",
      "Rate"
    ],
    "options_en": [
      "Set",
      "Counter",
      "Gauge",
      "Rate"
    ],
    "options": [
      "Set",
      "Counter",
      "Gauge",
      "Rate"
    ],
    "correctIndex": 0,
    "explanation_es": "El tipo de métrica **Set** en DogStatsD recibe identificadores (como user_ids o IP addresses) y cuenta la cantidad de elementos únicos en cada intervalo de tiempo.",
    "explanation_en": "The **Set** metric type in DogStatsD ingests unique identifiers (such as user IDs or IP addresses) and counts the unique cardinality per flush window.",
    "explanation": "El tipo de métrica **Set** en DogStatsD recibe identificadores (como user_ids o IP addresses) y cuenta la cantidad de elementos únicos en cada intervalo de tiempo."
  },
  {
    "id": 69,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Extensiones de DogStatsD sobre StatsD",
    "topic_en": "DogStatsD Extensions over StatsD",
    "topic": "Extensiones de DogStatsD sobre StatsD",
    "question_es": "¿Qué funcionalidad clave añade DogStatsD como extensión sobre la especificación original de StatsD de Etsy?",
    "question_en": "What key feature does DogStatsD add as an extension over the original Etsy StatsD specification?",
    "question": "¿Qué funcionalidad clave añade DogStatsD como extensión sobre la especificación original de StatsD de Etsy?",
    "options_es": [
      "Soporte nativo para etiquetas (tags), verificaciones de servicio (service checks) y eventos.",
      "Soporte para bases de datos relacionales embebidas.",
      "Conversión automática de código Python a binarios en lenguaje C.",
      "Reemplazo de los sockets UDP por llamadas RPC sobre Bluetooth."
    ],
    "options_en": [
      "Native support for tags, service checks, and events.",
      "Embedded relational database support.",
      "Automatic compilation of Python code into C binaries.",
      "Replacing UDP sockets with Bluetooth RPC calls."
    ],
    "options": [
      "Soporte nativo para etiquetas (tags), verificaciones de servicio (service checks) y eventos.",
      "Soporte para bases de datos relacionales embebidas.",
      "Conversión automática de código Python a binarios en lenguaje C.",
      "Reemplazo de los sockets UDP por llamadas RPC sobre Bluetooth."
    ],
    "correctIndex": 0,
    "explanation_es": "DogStatsD amplía el protocolo estándar de StatsD agregando capacidades de etiquetado dimensional (`|#tag1:val1,tag2:val2`), comprobaciones de estado de servicio (`_sc|`) y eventos (`_e|`).",
    "explanation_en": "DogStatsD extends traditional StatsD by adding multi-dimensional tagging (`|#tag1:val1,tag2:val2`), service checks (`_sc|`), and events (`_e|`).",
    "explanation": "DogStatsD amplía el protocolo estándar de StatsD agregando capacidades de etiquetado dimensional (`|#tag1:val1,tag2:val2`), comprobaciones de estado de servicio (`_sc|`) y eventos (`_e|`)."
  },
  {
    "id": 70,
    "domain_es": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "domain_en": "Domain 4: Data Collection, Metrics & DogStatsD",
    "domain": "Dominio 4: Data Collection, Metrics & DogStatsD",
    "topic_es": "Métricas Rechazadas",
    "topic_en": "Rejected Metrics",
    "topic": "Métricas Rechazadas",
    "question_es": "Si envías métricas a la API de Datadog con una marca de tiempo que se encuentra 24 horas en el futuro o más de 1 hora en el pasado respecto a los límites de retención, ¿qué hace el backend de Datadog?",
    "question_en": "If you send metrics to the Datadog API with a timestamp 24 hours in the future or older than acceptable retention limits, how does Datadog respond?",
    "question": "Si envías métricas a la API de Datadog con una marca de tiempo que se encuentra 24 horas en el futuro o más de 1 hora en el pasado respecto a los límites de retención, ¿qué hace el backend de Datadog?",
    "options_es": [
      "Descarta los puntos de datos y responde con un error indicando timestamp fuera de rango.",
      "Ajusta automáticamente el reloj del servidor para que coincida con la métrica.",
      "Guarda los puntos en una cola temporal por 30 días.",
      "Crea un dashboard nuevo con el nombre del error."
    ],
    "options_en": [
      "It rejects the data points with an out-of-bounds timestamp error.",
      "It automatically adjusts the server clock to match the metric.",
      "It buffers the points in a temporary queue for 30 days.",
      "It creates a new dashboard named after the error."
    ],
    "options": [
      "Descarta los puntos de datos y responde con un error indicando timestamp fuera de rango.",
      "Ajusta automáticamente el reloj del servidor para que coincida con la métrica.",
      "Guarda los puntos en una cola temporal por 30 días.",
      "Crea un dashboard nuevo con el nombre del error."
    ],
    "correctIndex": 0,
    "explanation_es": "Datadog rechaza los puntos de datos con marcas de tiempo demasiado alejadas en el futuro o demasiado antiguas según su ventana de admisión de ingestión en tiempo real.",
    "explanation_en": "Datadog strictly rejects metric points with timestamps too far in the future or past, returning an HTTP error.",
    "explanation": "Datadog rechaza los puntos de datos con marcas de tiempo demasiado alejadas en el futuro o demasiado antiguas según su ventana de admisión de ingestión en tiempo real."
  },
  {
    "id": 71,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Comando Status",
    "topic_en": "Status Command",
    "topic": "Comando Status",
    "question_es": "El Datadog Agent se ha instalado y está corriendo en un host, pero una de las integraciones recién configuradas no reporta datos. ¿Cuál es la PRIMERA acción que debe tomarse para diagnosticar el problema?",
    "question_en": "The Datadog Agent is running on a host, but a newly configured integration is not reporting data. What is the FIRST troubleshooting action to take?",
    "question": "El Datadog Agent se ha instalado y está corriendo en un host, pero una de las integraciones recién configuradas no reporta datos. ¿Cuál es la PRIMERA acción que debe tomarse para diagnosticar el problema?",
    "options_es": [
      "Desinstalar y reinstalar el sistema operativo completo.",
      "Ejecutar el comando 'datadog-agent status' para revisar el estado y los errores de los checks del Agente.",
      "Generar un flare inmediatamente y esperar la respuesta de soporte técnico.",
      "Eliminar el archivo datadog.yaml del servidor."
    ],
    "options_en": [
      "Reinstall the operating system from scratch.",
      "Run 'datadog-agent status' to inspect check states and error messages.",
      "Immediately generate a flare and wait for support.",
      "Delete the datadog.yaml file from the server."
    ],
    "options": [
      "Desinstalar y reinstalar el sistema operativo completo.",
      "Ejecutar el comando 'datadog-agent status' para revisar el estado y los errores de los checks del Agente.",
      "Generar un flare inmediatamente y esperar la respuesta de soporte técnico.",
      "Eliminar el archivo datadog.yaml del servidor."
    ],
    "correctIndex": 1,
    "explanation_es": "El comando `datadog-agent status` es la herramienta de diagnóstico primaria. Muestra si el Agente está activo, qué integraciones se han cargado, y detalla los mensajes de error exactos si algún check falló al ejecutarse.",
    "explanation_en": "Running `datadog-agent status` is the primary diagnostic step. It shows active collectors, loaded integrations, and detailed error messages if checks fail.",
    "explanation": "El comando `datadog-agent status` es la herramienta de diagnóstico primaria. Muestra si el Agente está activo, qué integraciones se han cargado, y detalla los mensajes de error exactos si algún check falló al ejecutarse."
  },
  {
    "id": 72,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Comando Flare",
    "topic_en": "Flare Command",
    "topic": "Comando Flare",
    "question_es": "¿Cuál de las siguientes opciones describe con precisión el comportamiento del comando 'datadog-agent flare'?",
    "question_en": "Which of the following accurately describes the behavior of the 'datadog-agent flare' command?",
    "question": "¿Cuál de las siguientes opciones describe con precisión el comportamiento del comando 'datadog-agent flare'?",
    "options_es": [
      "Empaqueta los archivos de configuración y logs del Agente en un archivo comprimido, censura automáticamente contraseñas y claves sensibles, y permite enviarlo a Soporte de Datadog.",
      "Fuerza un reinicio en caliente del servidor y vacía la memoria caché de la CPU.",
      "Elimina todos los datos históricos del host en los servidores de Datadog.",
      "Genera una alarma visual de emergencia en la consola de todos los usuarios."
    ],
    "options_en": [
      "Packages configuration files and Agent logs into an archive, automatically scrubs passwords and API keys, and uploads it to Datadog Support.",
      "Forces an immediate server warm reboot and flushes CPU cache.",
      "Permanently erases all host telemetry from Datadog cloud servers.",
      "Broadcasts an emergency visual alert across all user web consoles."
    ],
    "options": [
      "Empaqueta los archivos de configuración y logs del Agente en un archivo comprimido, censura automáticamente contraseñas y claves sensibles, y permite enviarlo a Soporte de Datadog.",
      "Fuerza un reinicio en caliente del servidor y vacía la memoria caché de la CPU.",
      "Elimina todos los datos históricos del host en los servidores de Datadog.",
      "Genera una alarma visual de emergencia en la consola de todos los usuarios."
    ],
    "correctIndex": 0,
    "explanation_es": "El comando `flare` recopila logs, configuraciones y datos de telemetría de diagnóstico en un archivo .zip, aplicando un filtro de saneamiento estricto para eliminar secretos, contraseñas y API keys antes de enviarlo de forma segura a Datadog Support con un ID de ticket.",
    "explanation_en": "The `flare` command archives logs and configs while automatically scrubbing sensitive secrets (passwords, tokens, API keys) before securely uploading the archive to Datadog Support.",
    "explanation": "El comando `flare` recopila logs, configuraciones y datos de telemetría de diagnóstico en un archivo .zip, aplicando un filtro de saneamiento estricto para eliminar secretos, contraseñas y API keys antes de enviarlo de forma segura a Datadog Support con un ID de ticket."
  },
  {
    "id": 73,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Comando Check",
    "topic_en": "Check Command",
    "topic": "Comando Check",
    "question_es": "¿Qué subcomando de la CLI del Datadog Agent permite ejecutar un check específico de inmediato e imprimir en la terminal las métricas y etiquetas recolectadas?",
    "question_en": "Which Datadog Agent CLI subcommand executes a specific check on demand and prints collected metrics and tags to the terminal?",
    "question": "¿Qué subcomando de la CLI del Datadog Agent permite ejecutar un check específico de inmediato e imprimir en la terminal las métricas y etiquetas recolectadas?",
    "options_es": [
      "datadog-agent test <nombre_check>",
      "datadog-agent check <nombre_check>",
      "datadog-agent run <nombre_check>",
      "datadog-agent debug <nombre_check>"
    ],
    "options_en": [
      "datadog-agent test <check_name>",
      "datadog-agent check <check_name>",
      "datadog-agent run <check_name>",
      "datadog-agent debug <check_name>"
    ],
    "options": [
      "datadog-agent test <nombre_check>",
      "datadog-agent check <nombre_check>",
      "datadog-agent run <nombre_check>",
      "datadog-agent debug <nombre_check>"
    ],
    "correctIndex": 1,
    "explanation_es": "El comando `datadog-agent check <nombre_check>` (ej. `datadog-agent check nginx`) ejecuta manualmente una única corrida del check especificado y muestra en consola exactamente qué métricas, estados y etiquetas se obtuvieron.",
    "explanation_en": "Running `datadog-agent check <check_name>` (e.g., `datadog-agent check nginx`) manually executes one run of the check and displays all collected metrics, tags, and errors.",
    "explanation": "El comando `datadog-agent check <nombre_check>` (ej. `datadog-agent check nginx`) ejecuta manualmente una única corrida del check especificado y muestra en consola exactamente qué métricas, estados y etiquetas se obtuvieron."
  },
  {
    "id": 74,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Comando Configcheck",
    "topic_en": "Configcheck Command",
    "topic": "Comando Configcheck",
    "question_es": "¿Qué comando de la CLI del Agente se utiliza para inspeccionar todas las configuraciones cargadas activas y detectar posibles errores de sintaxis en los archivos YAML?",
    "question_en": "Which Agent CLI command is used to inspect all active loaded configurations and detect YAML syntax errors?",
    "question": "¿Qué comando de la CLI del Agente se utiliza para inspeccionar todas las configuraciones cargadas activas y detectar posibles errores de sintaxis en los archivos YAML?",
    "options_es": [
      "datadog-agent configcheck",
      "datadog-agent status --yaml",
      "datadog-agent lint",
      "datadog-agent verify-all"
    ],
    "options_en": [
      "datadog-agent configcheck",
      "datadog-agent status --yaml",
      "datadog-agent lint",
      "datadog-agent verify-all"
    ],
    "options": [
      "datadog-agent configcheck",
      "datadog-agent status --yaml",
      "datadog-agent lint",
      "datadog-agent verify-all"
    ],
    "correctIndex": 0,
    "explanation_es": "El comando `datadog-agent configcheck` muestra todas las configuraciones cargadas activas para el Agente y cada integración, señalando errores de formato o archivos YAML mal estructurados.",
    "explanation_en": "`datadog-agent configcheck` displays all loaded configurations across the Agent and its integrations, highlighting formatting and YAML parsing errors.",
    "explanation": "El comando `datadog-agent configcheck` muestra todas las configuraciones cargadas activas para el Agente y cada integración, señalando errores de formato o archivos YAML mal estructurados."
  },
  {
    "id": 75,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Comando Diagnose",
    "topic_en": "Diagnose Command",
    "topic": "Comando Diagnose",
    "question_es": "Para validar la conectividad de red y comunicación entre el Datadog Agent local y los endpoints de la cuenta en la nube de Datadog, ¿qué comando debe ejecutarse?",
    "question_en": "To validate network connectivity and firewall communication between the local Agent and Datadog cloud endpoints, which command should be run?",
    "question": "Para validar la conectividad de red y comunicación entre el Datadog Agent local y los endpoints de la cuenta en la nube de Datadog, ¿qué comando debe ejecutarse?",
    "options_es": [
      "datadog-agent diagnose",
      "datadog-agent ping",
      "datadog-agent traceroute",
      "curl -X GET https://app.datadoghq.com"
    ],
    "options_en": [
      "datadog-agent diagnose",
      "datadog-agent ping",
      "datadog-agent traceroute",
      "curl -X GET https://app.datadoghq.com"
    ],
    "options": [
      "datadog-agent diagnose",
      "datadog-agent ping",
      "datadog-agent traceroute",
      "curl -X GET https://app.datadoghq.com"
    ],
    "correctIndex": 0,
    "explanation_es": "El comando `datadog-agent diagnose` realiza un conjunto de pruebas automatizadas de conectividad, validando si el Agente puede alcanzar con éxito los endpoints de métricas, trazas y logs de Datadog.",
    "explanation_en": "The `datadog-agent diagnose` command runs automated connectivity checks, validating whether the Agent can reach Datadog metric, trace, and log endpoints.",
    "explanation": "El comando `datadog-agent diagnose` realiza un conjunto de pruebas automatizadas de conectividad, validando si el Agente puede alcanzar con éxito los endpoints de métricas, trazas y logs de Datadog."
  },
  {
    "id": 76,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Cambio Dinámico de Log Level",
    "topic_en": "Dynamic Log Level Change",
    "topic": "Cambio Dinámico de Log Level",
    "question_es": "¿Cuál es el comando que permite cambiar el nivel de log a 'debug' en el Datadog Agent en tiempo de ejecución SIN necesidad de reiniciar el servicio?",
    "question_en": "Which command dynamically changes the Datadog Agent's log level to 'debug' at runtime WITHOUT restarting the service?",
    "question": "¿Cuál es el comando que permite cambiar el nivel de log a 'debug' en el Datadog Agent en tiempo de ejecución SIN necesidad de reiniciar el servicio?",
    "options_es": [
      "agent config set log_level debug",
      "datadog-agent restart --debug",
      "systemctl set-level datadog debug",
      "echo 'debug' > /var/log/datadog/level"
    ],
    "options_en": [
      "agent config set log_level debug",
      "datadog-agent restart --debug",
      "systemctl set-level datadog debug",
      "echo 'debug' > /var/log/datadog/level"
    ],
    "options": [
      "agent config set log_level debug",
      "datadog-agent restart --debug",
      "systemctl set-level datadog debug",
      "echo 'debug' > /var/log/datadog/level"
    ],
    "correctIndex": 0,
    "explanation_es": "El comando `agent config set log_level debug` permite cambiar la verbosidad de los logs al instante sin incurrir en caídas o reinicios del proceso del Agente.",
    "explanation_en": "The command `agent config set log_level debug` dynamically updates the logging verbosity to debug without interrupting or restarting the running Agent process.",
    "explanation": "El comando `agent config set log_level debug` permite cambiar la verbosidad de los logs al instante sin incurrir en caídas o reinicios del proceso del Agente."
  },
  {
    "id": 77,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Sintaxis de Log Level en YAML",
    "topic_en": "Log Level Syntax in YAML",
    "topic": "Sintaxis de Log Level en YAML",
    "question_es": "Para configurar de forma persistente el nivel de log en modo debug dentro del archivo 'datadog.yaml', ¿cuál es la sintaxis YAML válida requerida?",
    "question_en": "To permanently configure debug log level in 'datadog.yaml', what is the required valid YAML syntax?",
    "question": "Para configurar de forma persistente el nivel de log en modo debug dentro del archivo 'datadog.yaml', ¿cuál es la sintaxis YAML válida requerida?",
    "options_es": [
      "log_level: 'debug'",
      "log_level = debug",
      "log_level -> debug",
      "log_level: TRUE(debug)"
    ],
    "options_en": [
      "log_level: 'debug'",
      "log_level = debug",
      "log_level -> debug",
      "log_level: TRUE(debug)"
    ],
    "options": [
      "log_level: 'debug'",
      "log_level = debug",
      "log_level -> debug",
      "log_level: TRUE(debug)"
    ],
    "correctIndex": 0,
    "explanation_es": "En YAML, los valores se definen con dos puntos seguidos de un espacio: `log_level: 'debug'`. Usar signos de igualdad `=` provocará un fallo de parseo de YAML.",
    "explanation_en": "In YAML, settings must use key-value syntax with a colon followed by a space: `log_level: 'debug'`. Equal signs cause syntax errors.",
    "explanation": "En YAML, los valores se definen con dos puntos seguidos de un espacio: `log_level: 'debug'`. Usar signos de igualdad `=` provocará un fallo de parseo de YAML."
  },
  {
    "id": 78,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Límite de Archivos de Log Abiertos",
    "topic_en": "Open Log Files Limit",
    "topic": "Límite de Archivos de Log Abiertos",
    "question_es": "En el archivo 'datadog.yaml', ¿qué parámetro se utiliza para especificar el número máximo de archivos de log que el Agente puede seguir (tailear) en paralelo?",
    "question_en": "In 'datadog.yaml', which parameter specifies the maximum number of log files the Agent can tail in parallel?",
    "question": "En el archivo 'datadog.yaml', ¿qué parámetro se utiliza para especificar el número máximo de archivos de log que el Agente puede seguir (tailear) en paralelo?",
    "options_es": [
      "logs_config.open_files_limit",
      "max_log_tails",
      "log_files_capacity",
      "logs.file_limit"
    ],
    "options_en": [
      "logs_config.open_files_limit",
      "max_log_tails",
      "log_files_capacity",
      "logs.file_limit"
    ],
    "options": [
      "logs_config.open_files_limit",
      "max_log_tails",
      "log_files_capacity",
      "logs.file_limit"
    ],
    "correctIndex": 0,
    "explanation_es": "El parámetro `logs_config.open_files_limit` (valor por defecto habitualmente 100) determina la cantidad máxima de archivos de log que el recolector de logs del Agente puede mantener abiertos simultáneamente.",
    "explanation_en": "The setting `logs_config.open_files_limit` (defaulting to 100) defines the maximum number of simultaneous log files the Agent log collector can tail.",
    "explanation": "El parámetro `logs_config.open_files_limit` (valor por defecto habitualmente 100) determina la cantidad máxima de archivos de log que el recolector de logs del Agente puede mantener abiertos simultáneamente."
  },
  {
    "id": 79,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Ubicación de Logs del Agente en Linux",
    "topic_en": "Agent Log Location on Linux",
    "topic": "Ubicación de Logs del Agente en Linux",
    "question_es": "En un sistema Linux estándar, ¿en qué ruta de archivo se almacenan los logs generados por el proceso del Datadog Agent?",
    "question_en": "On a standard Linux system, what is the default file path where Datadog Agent logs are stored?",
    "question": "En un sistema Linux estándar, ¿en qué ruta de archivo se almacenan los logs generados por el proceso del Datadog Agent?",
    "options_es": [
      "/var/log/datadog/agent.log",
      "/etc/datadog-agent/agent.log",
      "/tmp/datadog/logs.txt",
      "/var/run/datadog/agent.out"
    ],
    "options_en": [
      "/var/log/datadog/agent.log",
      "/etc/datadog-agent/agent.log",
      "/tmp/datadog/logs.txt",
      "/var/run/datadog/agent.out"
    ],
    "options": [
      "/var/log/datadog/agent.log",
      "/etc/datadog-agent/agent.log",
      "/tmp/datadog/logs.txt",
      "/var/run/datadog/agent.out"
    ],
    "correctIndex": 0,
    "explanation_es": "En Linux, el Agente escribe sus propios registros operativos en `/var/log/datadog/agent.log`.",
    "explanation_en": "On Linux, the Datadog Agent writes its own diagnostic log entries to `/var/log/datadog/agent.log`.",
    "explanation": "En Linux, el Agente escribe sus propios registros operativos en `/var/log/datadog/agent.log`."
  },
  {
    "id": 80,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Ubicación de Logs del Agente en Windows",
    "topic_en": "Agent Log Location on Windows",
    "topic": "Ubicación de Logs del Agente en Windows",
    "question_es": "¿En qué directorio se encuentran los archivos de log del Datadog Agent en un sistema operativo Windows?",
    "question_en": "In which directory are Datadog Agent log files located on a Windows operating system?",
    "question": "¿En qué directorio se encuentran los archivos de log del Datadog Agent en un sistema operativo Windows?",
    "options_es": [
      "C:\\\\ProgramData\\\\Datadog\\\\logs\\\\agent.log",
      "C:\\\\Windows\\\\Logs\\\\Datadog\\\\agent.log",
      "C:\\\\Users\\\\datadog\\\\agent.log",
      "C:\\\\Program Files\\\\Datadog\\\\agent.log"
    ],
    "options_en": [
      "C:\\ProgramData\\Datadog\\logs\\agent.log",
      "C:\\Windows\\Logs\\Datadog\\agent.log",
      "C:\\Users\\datadog\\agent.log",
      "C:\\Program Files\\Datadog\\agent.log"
    ],
    "options": [
      "C:\\\\ProgramData\\\\Datadog\\\\logs\\\\agent.log",
      "C:\\\\Windows\\\\Logs\\\\Datadog\\\\agent.log",
      "C:\\\\Users\\\\datadog\\\\agent.log",
      "C:\\\\Program Files\\\\Datadog\\\\agent.log"
    ],
    "correctIndex": 0,
    "explanation_es": "En Windows, los registros del Agente se almacenan dentro del directorio de datos de la aplicación en `C:\\\\ProgramData\\\\Datadog\\\\logs\\\\agent.log`.",
    "explanation_en": "On Windows, Agent log files reside in `C:\\ProgramData\\Datadog\\logs\\agent.log`.",
    "explanation": "En Windows, los registros del Agente se almacenan dentro del directorio de datos de la aplicación en `C:\\\\ProgramData\\\\Datadog\\\\logs\\\\agent.log`."
  },
  {
    "id": 81,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Reinicio del Servicio en Linux (systemd)",
    "topic_en": "Service Restart on Linux (systemd)",
    "topic": "Reinicio del Servicio en Linux (systemd)",
    "question_es": "¿Cuál es el comando estándar para reiniciar el servicio del Datadog Agent en distribuciones modernas de Linux administradas con systemd (ej. Ubuntu, RHEL, CentOS)?",
    "question_en": "What is the standard command to restart the Datadog Agent on modern systemd-managed Linux distributions (e.g., Ubuntu, RHEL, CentOS)?",
    "question": "¿Cuál es el comando estándar para reiniciar el servicio del Datadog Agent en distribuciones modernas de Linux administradas con systemd (ej. Ubuntu, RHEL, CentOS)?",
    "options_es": [
      "sudo systemctl restart datadog-agent",
      "service datadog reboot",
      "killall datadog-agent",
      "/etc/init.d/datadog start"
    ],
    "options_en": [
      "sudo systemctl restart datadog-agent",
      "service datadog reboot",
      "killall datadog-agent",
      "/etc/init.d/datadog start"
    ],
    "options": [
      "sudo systemctl restart datadog-agent",
      "service datadog reboot",
      "killall datadog-agent",
      "/etc/init.d/datadog start"
    ],
    "correctIndex": 0,
    "explanation_es": "En sistemas Linux con systemd, el servicio se administra con `sudo systemctl restart datadog-agent` (o `status`, `start`, `stop`).",
    "explanation_en": "On modern systemd Linux systems, the Agent service is restarted using `sudo systemctl restart datadog-agent`.",
    "explanation": "En sistemas Linux con systemd, el servicio se administra con `sudo systemctl restart datadog-agent` (o `status`, `start`, `stop`)."
  },
  {
    "id": 82,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Habilitar Recolección de Logs",
    "topic_en": "Enable Log Collection",
    "topic": "Habilitar Recolección de Logs",
    "question_es": "¿Qué parámetro booleano DEBE establecerse en 'true' dentro de 'datadog.yaml' para que el Agente active su motor de recolección de logs?",
    "question_en": "Which boolean parameter MUST be set to 'true' in 'datadog.yaml' to activate the Agent's log collection engine?",
    "question": "¿Qué parámetro booleano DEBE establecerse en 'true' dentro de 'datadog.yaml' para que el Agente active su motor de recolección de logs?",
    "options_es": [
      "logs_enabled: true",
      "enable_logging: 1",
      "collect_all_logs: true",
      "log_stream_active: true"
    ],
    "options_en": [
      "logs_enabled: true",
      "enable_logging: 1",
      "collect_all_logs: true",
      "log_stream_active: true"
    ],
    "options": [
      "logs_enabled: true",
      "enable_logging: 1",
      "collect_all_logs: true",
      "log_stream_active: true"
    ],
    "correctIndex": 0,
    "explanation_es": "Por defecto, la recolección de logs viene desactivada. Se debe especificar `logs_enabled: true` en `datadog.yaml` para habilitar el pipeline de recolección de logs en el Agente.",
    "explanation_en": "Log collection is disabled by default. Setting `logs_enabled: true` in `datadog.yaml` activates the Agent log collection pipeline.",
    "explanation": "Por defecto, la recolección de logs viene desactivada. Se debe especificar `logs_enabled: true` en `datadog.yaml` para habilitar el pipeline de recolección de logs en el Agente."
  },
  {
    "id": 83,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Permisos en Archivos de Log",
    "topic_en": "Log File Permissions",
    "topic": "Permisos en Archivos de Log",
    "question_es": "Si el Datadog Agent tiene activada la recolección de logs para un archivo en '/var/log/myapp/app.log', pero los logs no aparecen en Datadog y en 'agent.log' figura 'permission denied', ¿cuál es la causa más probable?",
    "question_en": "The Agent has log collection enabled for '/var/log/myapp/app.log', but logs do not appear in Datadog and 'agent.log' reports 'permission denied'. What is the most likely cause?",
    "question": "Si el Datadog Agent tiene activada la recolección de logs para un archivo en '/var/log/myapp/app.log', pero los logs no aparecen en Datadog y en 'agent.log' figura 'permission denied', ¿cuál es la causa más probable?",
    "options_es": [
      "El usuario 'dd-agent' no tiene permisos de lectura sobre el archivo o el directorio que lo contiene.",
      "El archivo de logs tiene demasiadas líneas y superó los 10 Terabytes.",
      "La clave de API utilizada ha caducado por falta de saldo en la cuenta.",
      "El formato de fecha del log no coincide con el meridiano de Greenwich."
    ],
    "options_en": [
      "The 'dd-agent' user lacks read permissions on the file or execute permissions on its parent directories.",
      "The log file exceeded 10 Terabytes in size.",
      "The API key expired due to insufficient account balance.",
      "The log timestamp format does not match Greenwich Mean Time."
    ],
    "options": [
      "El usuario 'dd-agent' no tiene permisos de lectura sobre el archivo o el directorio que lo contiene.",
      "El archivo de logs tiene demasiadas líneas y superó los 10 Terabytes.",
      "La clave de API utilizada ha caducado por falta de saldo en la cuenta.",
      "El formato de fecha del log no coincide con el meridiano de Greenwich."
    ],
    "correctIndex": 0,
    "explanation_es": "El daemon del Agente corre bajo el usuario sin privilegios `dd-agent`. Si este usuario no tiene permisos POSIX de lectura (`r`) sobre el archivo de logs y de ejecución (`x`) sobre sus directorios padres, no podrá abrir ni tailear el archivo.",
    "explanation_en": "The Agent process runs as the unprivileged `dd-agent` user. If this user does not have POSIX read permissions on the log file, the Agent cannot open or tail it.",
    "explanation": "El daemon del Agente corre bajo el usuario sin privilegios `dd-agent`. Si este usuario no tiene permisos POSIX de lectura (`r`) sobre el archivo de logs y de ejecución (`x`) sobre sus directorios padres, no podrá abrir ni tailear el archivo."
  },
  {
    "id": 84,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Prueba de un Check de Integración",
    "topic_en": "Testing an Integration Check",
    "topic": "Prueba de un Check de Integración",
    "question_es": "Acabas de modificar la configuración de la integración de PostgreSQL en '/etc/datadog-agent/conf.d/postgres.d/conf.yaml'. ¿Qué comando permite probar de forma aislada que el Agente se conecta a la base de datos sin necesidad de esperar el ciclo regular de recolección?",
    "question_en": "You modified PostgreSQL integration settings in '/etc/datadog-agent/conf.d/postgres.d/conf.yaml'. Which command tests connectivity immediately without waiting for regular collection cycles?",
    "question": "Acabas de modificar la configuración de la integración de PostgreSQL en '/etc/datadog-agent/conf.d/postgres.d/conf.yaml'. ¿Qué comando permite probar de forma aislada que el Agente se conecta a la base de datos sin necesidad de esperar el ciclo regular de recolección?",
    "options_es": [
      "datadog-agent check postgres",
      "datadog-agent status postgres",
      "datadog-agent flare postgres",
      "datadog-agent restart postgres"
    ],
    "options_en": [
      "datadog-agent check postgres",
      "datadog-agent status postgres",
      "datadog-agent flare postgres",
      "datadog-agent restart postgres"
    ],
    "options": [
      "datadog-agent check postgres",
      "datadog-agent status postgres",
      "datadog-agent flare postgres",
      "datadog-agent restart postgres"
    ],
    "correctIndex": 0,
    "explanation_es": "`datadog-agent check postgres` prueba de inmediato la configuración de la integración especificada, realiza la conexión y muestra las métricas recolectadas o el traceback del error en caso de fallo.",
    "explanation_en": "Running `datadog-agent check postgres` executes an isolated run of the PostgreSQL check, printing collected metrics or error traces to the console.",
    "explanation": "`datadog-agent check postgres` prueba de inmediato la configuración de la integración especificada, realiza la conexión y muestra las métricas recolectadas o el traceback del error en caso de fallo."
  },
  {
    "id": 85,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Host Desconectado (Host Down)",
    "topic_en": "Host Down",
    "topic": "Host Desconectado (Host Down)",
    "question_es": "Si un host físico pierde repentinamente la conexión de red o se apaga, ¿qué monitor predeterminado de Datadog alertará que el host ha dejado de comunicarse?",
    "question_en": "If a physical host loses network connectivity or powers off abruptly, which default Datadog monitor alerts that the host has stopped communicating?",
    "question": "Si un host físico pierde repentinamente la conexión de red o se apaga, ¿qué monitor predeterminado de Datadog alertará que el host ha dejado de comunicarse?",
    "options_es": [
      "Host Monitor (comprobación 'datadog.agent.up' o check de host)",
      "Anomaly Monitor en la métrica de temperatura",
      "Composite Monitor de logs vacíos",
      "Synthetic API Test de loopback"
    ],
    "options_en": [
      "Host Monitor (evaluating 'datadog.agent.up' or host check)",
      "Anomaly Monitor on CPU temperature",
      "Composite Monitor on empty logs",
      "Synthetic API Test on loopback"
    ],
    "options": [
      "Host Monitor (comprobación 'datadog.agent.up' o check de host)",
      "Anomaly Monitor en la métrica de temperatura",
      "Composite Monitor de logs vacíos",
      "Synthetic API Test de loopback"
    ],
    "correctIndex": 0,
    "explanation_es": "Un **Host Monitor** evalúa el latido constante del Agente (`datadog.agent.up`) y emite una alerta cuando un host deja de reportar telemetría durante un número determinado de minutos.",
    "explanation_en": "A **Host Monitor** evaluates heartbeats sent by the Agent (`datadog.agent.up`) and triggers an alert when a host stops reporting telemetry for a specified duration.",
    "explanation": "Un **Host Monitor** evalúa el latido constante del Agente (`datadog.agent.up`) y emite una alerta cuando un host deja de reportar telemetría durante un número determinado de minutos."
  },
  {
    "id": 86,
    "domain_es": "Dominio 5: Troubleshooting Datadog",
    "domain_en": "Domain 5: Troubleshooting Datadog",
    "domain": "Dominio 5: Troubleshooting Datadog",
    "topic_es": "Seguridad y Censura de Secretos en el Agente",
    "topic_en": "Secret Scrubber & Security in Agent",
    "topic": "Seguridad y Censura de Secretos en el Agente",
    "question_es": "¿Cómo protege el Datadog Agent las credenciales secretas (como contraseñas de bases de datos o tokens) configuradas en los archivos YAML al generar un flare?",
    "question_en": "How does the Datadog Agent protect secret credentials (such as database passwords or tokens) configured in YAML files when generating a flare?",
    "question": "¿Cómo protege el Datadog Agent las credenciales secretas (como contraseñas de bases de datos o tokens) configuradas en los archivos YAML al generar un flare?",
    "options_es": [
      "Aplica un módulo interno de saneamiento (scrubber) con expresiones regulares que reemplaza los valores de palabras clave sensibles por asteriscos o cadenas ofuscadas.",
      "Elimina todos los archivos del servidor para evitar filtraciones.",
      "Pide al usuario que borre manualmente las contraseñas antes de ejecutar el comando.",
      "Cifra todo el disco duro con BitLocker."
    ],
    "options_en": [
      "It runs an internal secret scrubber using regex patterns that replaces sensitive keyword values with asterisks or obfuscated strings.",
      "It deletes all server files to prevent data leaks.",
      "It requires the user to manually erase passwords before running the command.",
      "It encrypts the entire hard drive with BitLocker."
    ],
    "options": [
      "Aplica un módulo interno de saneamiento (scrubber) con expresiones regulares que reemplaza los valores de palabras clave sensibles por asteriscos o cadenas ofuscadas.",
      "Elimina todos los archivos del servidor para evitar filtraciones.",
      "Pide al usuario que borre manualmente las contraseñas antes de ejecutar el comando.",
      "Cifra todo el disco duro con BitLocker."
    ],
    "correctIndex": 0,
    "explanation_es": "El código del Agente incluye un 'secret scrubber' automático que escanea los archivos en busca de campos sensibles conocidos (como `api_key`, `password`, `token`, `secret`) y los reemplaza por cadenas censuradas antes de generar el paquete del flare.",
    "explanation_en": "The Agent contains an automated 'secret scrubber' that scans configuration files for sensitive patterns (`api_key`, `password`, `token`, `secret`) and redacts them prior to packaging the flare.",
    "explanation": "El código del Agente incluye un 'secret scrubber' automático que escanea los archivos en busca de campos sensibles conocidos (como `api_key`, `password`, `token`, `secret`) y los reemplaza por cadenas censuradas antes de generar el paquete del flare."
  },
  {
    "id": 87,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Unified Service Tagging",
    "topic_en": "Unified Service Tagging",
    "topic": "Unified Service Tagging",
    "question_es": "¿Cuáles son las TRES etiquetas (tags) reservadas y obligatorias que componen el estándar de 'Unified Service Tagging' en Datadog?",
    "question_en": "Which THREE reserved tags comprise the standard for 'Unified Service Tagging' in Datadog?",
    "question": "¿Cuáles son las TRES etiquetas (tags) reservadas y obligatorias que componen el estándar de 'Unified Service Tagging' en Datadog?",
    "options_es": [
      "host, source, env",
      "service, env, version",
      "source, version, device",
      "team, app, cluster"
    ],
    "options_en": [
      "host, source, env",
      "service, env, version",
      "source, version, device",
      "team, app, cluster"
    ],
    "options": [
      "host, source, env",
      "service, env, version",
      "source, version, device",
      "team, app, cluster"
    ],
    "correctIndex": 1,
    "explanation_es": "Unified Service Tagging conecta métricas, logs y trazas a través de toda la plataforma de Datadog usando exactamente tres etiquetas estándar: `service` (nombre del servicio), `env` (entorno: dev, prod) y `version` (versión del código).",
    "explanation_en": "Unified Service Tagging ties together metrics, logs, and APM traces across the Datadog platform using three reserved tags: `service`, `env`, and `version`.",
    "explanation": "Unified Service Tagging conecta métricas, logs y trazas a través de toda la plataforma de Datadog usando exactamente tres etiquetas estándar: `service` (nombre del servicio), `env` (entorno: dev, prod) y `version` (versión del código)."
  },
  {
    "id": 88,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Reglas de Sintaxis de Etiquetas (Tags)",
    "topic_en": "Tag Syntax Rules",
    "topic": "Reglas de Sintaxis de Etiquetas (Tags)",
    "question_es": "¿Cuál de las siguientes definiciones de etiqueta (tag) cumple con las reglas de sintaxis oficiales de Datadog y se considera VÁLIDA?",
    "question_en": "Which of the following tag definitions adheres to official Datadog syntax rules and is considered VALID?",
    "question": "¿Cuál de las siguientes definiciones de etiqueta (tag) cumple con las reglas de sintaxis oficiales de Datadog y se considera VÁLIDA?",
    "options_es": [
      "image_name:nginx/ingress",
      "2_python_version:2.7.11",
      "namespace:kube-system-*",
      "env:production environment con espacios"
    ],
    "options_en": [
      "image_name:nginx/ingress",
      "2_python_version:2.7.11",
      "namespace:kube-system-*",
      "env:production environment with spaces"
    ],
    "options": [
      "image_name:nginx/ingress",
      "2_python_version:2.7.11",
      "namespace:kube-system-*",
      "env:production environment con espacios"
    ],
    "correctIndex": 0,
    "explanation_es": "Las etiquetas en Datadog deben comenzar con una letra, estar en minúsculas, no contener espacios ni comodines como `*`, y pueden contener caracteres alfanuméricos, guiones bajos `_`, guiones `-`, dos puntos `:`, puntos `.` y barras `/`. `image_name:nginx/ingress` es perfectamente válida.",
    "explanation_en": "Datadog tags must start with a letter, be lowercase, contain no spaces or wildcards (`*`), and can include alphanumerics, underscores, hyphens, colons, dots, and slashes. `image_name:nginx/ingress` is valid.",
    "explanation": "Las etiquetas en Datadog deben comenzar con una letra, estar en minúsculas, no contener espacios ni comodines como `*`, y pueden contener caracteres alfanuméricos, guiones bajos `_`, guiones `-`, dos puntos `:`, puntos `.` y barras `/`. `image_name:nginx/ingress` es perfectamente válida."
  },
  {
    "id": 89,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Estrategia de Etiquetado Multi-Cloud",
    "topic_en": "Multi-Cloud Tagging Strategy",
    "topic": "Estrategia de Etiquetado Multi-Cloud",
    "question_es": "¿Qué estrategia recomienda Datadog para el etiquetado de métricas procedentes de servicios que operan en múltiples nubes distintas (ej. AWS y Azure)?",
    "question_en": "What strategy does Datadog recommend for tagging metrics originating from services running across multiple different clouds (e.g., AWS and Azure)?",
    "question": "¿Qué estrategia recomienda Datadog para el etiquetado de métricas procedentes de servicios que operan en múltiples nubes distintas (ej. AWS y Azure)?",
    "options_es": [
      "Utilizar exclusivamente las etiquetas del proveedor sin añadir etiquetas personalizadas.",
      "Aplicar etiquetas personalizadas consistentes y agnósticas de la plataforma junto con el Unified Service Tagging (env, service, version).",
      "Renombrar manualmente las métricas para cada proveedor de nube.",
      "Crear una organización de Datadog separada para cada proveedor."
    ],
    "options_en": [
      "Rely exclusively on provider-specific tags without adding custom tags.",
      "Apply consistent, platform-agnostic custom tags alongside unified service tagging (env, service, version).",
      "Manually rename metrics for each cloud provider.",
      "Create a separate Datadog organization for each cloud provider."
    ],
    "options": [
      "Utilizar exclusivamente las etiquetas del proveedor sin añadir etiquetas personalizadas.",
      "Aplicar etiquetas personalizadas consistentes y agnósticas de la plataforma junto con el Unified Service Tagging (env, service, version).",
      "Renombrar manualmente las métricas para cada proveedor de nube.",
      "Crear una organización de Datadog separada para cada proveedor."
    ],
    "correctIndex": 1,
    "explanation_es": "Para consultar y comparar servicios en entornos híbridos y multi-nube sin acoplarse a la nomenclatura de un proveedor, Datadog recomienda utilizar etiquetas agnósticas y universales alineadas con Unified Service Tagging.",
    "explanation_en": "To query and correlate multi-cloud infrastructure seamlessly without vendor lock-in, Datadog recommends consistent, platform-agnostic custom tags combined with Unified Service Tagging.",
    "explanation": "Para consultar y comparar servicios en entornos híbridos y multi-nube sin acoplarse a la nomenclatura de un proveedor, Datadog recomienda utilizar etiquetas agnósticas y universales alineadas con Unified Service Tagging."
  },
  {
    "id": 90,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Software Catalog",
    "topic_en": "Software Catalog",
    "topic": "Software Catalog",
    "question_es": "¿Qué componente de la plataforma de observabilidad de Datadog muestra todos los servicios descubiertos en una vista consolidada con información de dependencias, propiedad de equipos y estado de salud?",
    "question_en": "Which Datadog observability component displays all discovered services in a consolidated view with dependency mapping, team ownership, and health status?",
    "question": "¿Qué componente de la plataforma de observabilidad de Datadog muestra todos los servicios descubiertos en una vista consolidada con información de dependencias, propiedad de equipos y estado de salud?",
    "options_es": [
      "Resource Catalog",
      "Software Catalog (o Service Catalog)",
      "Host Map",
      "Network Map"
    ],
    "options_en": [
      "Resource Catalog",
      "Software Catalog (or Service Catalog)",
      "Host Map",
      "Network Map"
    ],
    "options": [
      "Resource Catalog",
      "Software Catalog (o Service Catalog)",
      "Host Map",
      "Network Map"
    ],
    "correctIndex": 1,
    "explanation_es": "El **Software Catalog** (anteriormente Service Catalog) ofrece una vista centralizada de todos los microservicios y aplicaciones descubiertos, mapeando dependencias, métricas clave (latencia, error rate, throughput), documentación y equipos responsables.",
    "explanation_en": "The **Software Catalog** (formerly Service Catalog) provides a centralized inventory of all discovered microservices, detailing dependencies, golden metrics, team ownership, and documentation.",
    "explanation": "El **Software Catalog** (anteriormente Service Catalog) ofrece una vista centralizada de todos los microservicios y aplicaciones descubiertos, mapeando dependencias, métricas clave (latencia, error rate, throughput), documentación y equipos responsables."
  },
  {
    "id": 91,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Universal Service Monitoring (USM)",
    "topic_en": "Universal Service Monitoring (USM)",
    "topic": "Universal Service Monitoring (USM)",
    "question_es": "¿Cuál es la ventaja principal de Universal Service Monitoring (USM) frente a la instrumentación tradicional de APM?",
    "question_en": "What is the primary advantage of Universal Service Monitoring (USM) compared to traditional APM instrumentation?",
    "question": "¿Cuál es la ventaja principal de Universal Service Monitoring (USM) frente a la instrumentación tradicional de APM?",
    "options_es": [
      "Descubre y monitorea automáticamente métricas de tráfico y errores de servicios sin requerir cambios en el código de la aplicación ni SDKs dedicados.",
      "Reemplaza a los servidores de bases de datos por archivos planos.",
      "Elimina por completo la necesidad de tener firewalls en la red.",
      "Permite compilar código Java en servidores sin JVM."
    ],
    "options_en": [
      "It automatically discovers and monitors service golden metrics and errors without requiring application code changes or dedicated SDKs.",
      "It replaces relational database servers with flat text files.",
      "It completely eliminates the need for network firewalls.",
      "It compiles Java code on servers without a JVM."
    ],
    "options": [
      "Descubre y monitorea automáticamente métricas de tráfico y errores de servicios sin requerir cambios en el código de la aplicación ni SDKs dedicados.",
      "Reemplaza a los servidores de bases de datos por archivos planos.",
      "Elimina por completo la necesidad de tener firewalls en la red.",
      "Permite compilar código Java en servidores sin JVM."
    ],
    "correctIndex": 0,
    "explanation_es": "Universal Service Monitoring utiliza tecnologías basadas en eBPF en el Agente para detectar automáticamente el tráfico de red de los servicios y generar métricas doradas (throughput, latencia, errores) sin necesidad de modificar el código ni añadir dependencias.",
    "explanation_en": "Universal Service Monitoring uses eBPF technology in the Datadog Agent to capture inbound and outbound network traffic, auto-generating golden metrics (throughput, latency, errors) with zero code modifications.",
    "explanation": "Universal Service Monitoring utiliza tecnologías basadas en eBPF en el Agente para detectar automáticamente el tráfico de red de los servicios y generar métricas doradas (throughput, latencia, errores) sin necesidad de modificar el código ni añadir dependencias."
  },
  {
    "id": 92,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Composite Monitor",
    "topic_en": "Composite Monitor",
    "topic": "Composite Monitor",
    "question_es": "Una aplicación es estable cuando el rendimiento de red o la I/O de disco son altos de forma aislada, pero se vuelve inestable cuando AMBAS métricas son inusualmente altas al mismo tiempo. ¿Qué solución debe configurarse en Datadog?",
    "question_en": "An application is stable when either network throughput or disk I/O is high in isolation, but unstable when BOTH are high simultaneously. What should be configured?",
    "question": "Una aplicación es estable cuando el rendimiento de red o la I/O de disco son altos de forma aislada, pero se vuelve inestable cuando AMBAS métricas son inusualmente altas al mismo tiempo. ¿Qué solución debe configurarse en Datadog?",
    "options_es": [
      "Crear dos monitores métricos individuales y un Composite Monitor con la condición booleana 'A && B' que envíe la notificación.",
      "Crear un monitor de anomalías con dos métricas sumadas en la misma consulta.",
      "Crear un monitor métrico que notifique a Watchdog.",
      "Crear un Forecast monitor que multiplique las dos métricas por cero."
    ],
    "options_en": [
      "Create two individual metric monitors and a Composite Monitor with the boolean condition 'A && B' to send the notification.",
      "Create an anomaly monitor that sums both metrics in the same query.",
      "Create a metric monitor that notifies Watchdog.",
      "Create a Forecast monitor that multiplies both metrics by zero."
    ],
    "options": [
      "Crear dos monitores métricos individuales y un Composite Monitor con la condición booleana 'A && B' que envíe la notificación.",
      "Crear un monitor de anomalías con dos métricas sumadas en la misma consulta.",
      "Crear un monitor métrico que notifique a Watchdog.",
      "Crear un Forecast monitor que multiplique las dos métricas por cero."
    ],
    "correctIndex": 0,
    "explanation_es": "Un **Composite Monitor** combina el estado de dos o más monitores existentes mediante operadores booleanos (`&&`, `||`, `!`). Esto permite alertar solo cuando la condición combinada (ej. `monitor_red && monitor_disco`) se satisface simultáneamente.",
    "explanation_en": "A **Composite Monitor** combines the states of two or more existing monitors using boolean logic (`&&`, `||`, `!`), allowing alerts to trigger only when joint conditions occur together.",
    "explanation": "Un **Composite Monitor** combina el estado de dos o más monitores existentes mediante operadores booleanos (`&&`, `||`, `!`). Esto permite alertar solo cuando la condición combinada (ej. `monitor_red && monitor_disco`) se satisface simultáneamente."
  },
  {
    "id": 93,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Anomaly Monitor",
    "topic_en": "Anomaly Monitor",
    "topic": "Anomaly Monitor",
    "question_es": "¿Para qué caso de uso es IDEAL un monitor de tipo Anomaly (Anomaly Monitor)?",
    "question_en": "For which use case is an Anomaly Monitor IDEAL?",
    "question": "¿Para qué caso de uso es IDEAL un monitor de tipo Anomaly (Anomaly Monitor)?",
    "options_es": [
      "Detectar desviaciones en métricas que exhiben patrones estacionales o tendencias predecibles según la hora o el día de la semana (ej. tráfico web con picos en horario comercial).",
      "Verificar si un proceso de sistema operativo se detuvo por completo.",
      "Comprobar si el certificado SSL de un dominio ha expirado.",
      "Alertar cuando el espacio en disco supera un umbral estático de 90%."
    ],
    "options_en": [
      "Detecting deviations in metrics that exhibit seasonal patterns or predictable trends (e.g., web traffic with business-hour peaks).",
      "Checking if an operating system process has completely terminated.",
      "Verifying whether a domain's SSL certificate has expired.",
      "Alerting when disk space exceeds a static 90% threshold."
    ],
    "options": [
      "Detectar desviaciones en métricas que exhiben patrones estacionales o tendencias predecibles según la hora o el día de la semana (ej. tráfico web con picos en horario comercial).",
      "Verificar si un proceso de sistema operativo se detuvo por completo.",
      "Comprobar si el certificado SSL de un dominio ha expirado.",
      "Alertar cuando el espacio en disco supera un umbral estático de 90%."
    ],
    "correctIndex": 0,
    "explanation_es": "Los monitores de anomalías emplean algoritmos de Machine Learning para calcular una banda de comportamiento normal basada en el historial y la estacionalidad (horaria, diaria, semanal), emitiendo alertas cuando la métrica sale de esa banda esperada.",
    "explanation_en": "Anomaly Monitors use machine learning algorithms to compute dynamic normal bands based on historical seasonality (hourly, daily, weekly), triggering alerts when metrics deviate from expected patterns.",
    "explanation": "Los monitores de anomalías emplean algoritmos de Machine Learning para calcular una banda de comportamiento normal basada en el historial y la estacionalidad (horaria, diaria, semanal), emitiendo alertas cuando la métrica sale de esa banda esperada."
  },
  {
    "id": 94,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Outlier Monitor",
    "topic_en": "Outlier Monitor",
    "topic": "Outlier Monitor",
    "question_es": "¿Qué función cumple un Outlier Monitor en un clúster de servidores de aplicaciones idénticos?",
    "question_en": "What is the function of an Outlier Monitor in a cluster of identical application servers?",
    "question": "¿Qué función cumple un Outlier Monitor en un clúster de servidores de aplicaciones idénticos?",
    "options_es": [
      "Detecta automáticamente si uno o más hosts se comportan de forma anormal en comparación con el resto de sus pares homogéneos en el mismo grupo.",
      "Predice la fecha exacta en la que un disco duro fallará mecánicamente.",
      "Combina cinco alertas diferentes en un solo correo de resumen semanal.",
      "Genera tráfico sintético hacia la API cada cinco minutos."
    ],
    "options_en": [
      "It automatically detects if one or more hosts behave abnormally compared to the rest of their homogeneous peers in the same group.",
      "It predicts the exact date when a hard drive will suffer mechanical failure.",
      "It merges five different alerts into a single weekly digest email.",
      "It generates synthetic API traffic every five minutes."
    ],
    "options": [
      "Detecta automáticamente si uno o más hosts se comportan de forma anormal en comparación con el resto de sus pares homogéneos en el mismo grupo.",
      "Predice la fecha exacta en la que un disco duro fallará mecánicamente.",
      "Combina cinco alertas diferentes en un solo correo de resumen semanal.",
      "Genera tráfico sintético hacia la API cada cinco minutos."
    ],
    "correctIndex": 0,
    "explanation_es": "Los Outlier Monitors comparan un grupo de entidades que deberían comportarse de manera similar (ej. servidores web tras un balanceador) utilizando algoritmos como DBSCAN o MAD, alertando si uno de ellos diverge del grupo (ej. latencia 10 veces mayor que sus pares).",
    "explanation_en": "Outlier Monitors compare entities within a homogeneous group (e.g., web servers behind a load balancer) using algorithms like DBSCAN or MAD to detect and alert when a host diverges from its peers.",
    "explanation": "Los Outlier Monitors comparan un grupo de entidades que deberían comportarse de manera similar (ej. servidores web tras un balanceador) utilizando algoritmos como DBSCAN o MAD, alertando si uno de ellos diverge del grupo (ej. latencia 10 veces mayor que sus pares)."
  },
  {
    "id": 95,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Forecast Monitor",
    "topic_en": "Forecast Monitor",
    "topic": "Forecast Monitor",
    "question_es": "¿Cuál es el propósito principal de un Forecast Monitor en Datadog?",
    "question_en": "What is the primary purpose of a Forecast Monitor in Datadog?",
    "question": "¿Cuál es el propósito principal de un Forecast Monitor en Datadog?",
    "options_es": [
      "Predecir en función del historial cuándo una métrica alcanzará un umbral crítico en el futuro (ej. predecir cuántos días faltan para que se llene el disco).",
      "Consultar el pronóstico del clima para refrigerar el centro de datos.",
      "Contar el número total de errores HTTP 404 del último minuto.",
      "Verificar la validez de las claves de acceso de los usuarios."
    ],
    "options_en": [
      "Predicting based on historical trends when a metric will breach a critical threshold in the future (e.g., days remaining before disk full).",
      "Checking weather forecasts to cool data center facilities.",
      "Counting the total number of HTTP 404 errors in the last minute.",
      "Validating user access token expirations."
    ],
    "options": [
      "Predecir en función del historial cuándo una métrica alcanzará un umbral crítico en el futuro (ej. predecir cuántos días faltan para que se llene el disco).",
      "Consultar el pronóstico del clima para refrigerar el centro de datos.",
      "Contar el número total de errores HTTP 404 del último minuto.",
      "Verificar la validez de las claves de acceso de los usuarios."
    ],
    "correctIndex": 0,
    "explanation_es": "Los Forecast Monitors proyectan la tendencia futura de una métrica para alertar de forma proactiva antes de que ocurra una saturación o incidente (ej. alertar con 3 semanas de anticipación si el almacenamiento se agotará).",
    "explanation_en": "Forecast Monitors extrapolate future metric behavior based on past trends, providing proactive alerts before capacity or storage limits are exhausted.",
    "explanation": "Los Forecast Monitors proyectan la tendencia futura de una métrica para alertar de forma proactiva antes de que ocurra una saturación o incidente (ej. alertar con 3 semanas de anticipación si el almacenamiento se agotará)."
  },
  {
    "id": 96,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Plantillas de Notificación de Alertas",
    "topic_en": "Alert Notification Templates",
    "topic": "Plantillas de Notificación de Alertas",
    "question_es": "En el mensaje de alerta de un monitor, ¿qué sintaxis permite mostrar un bloque de texto ÚNICAMENTE cuando el monitor entra en estado de Alerta crítica (y no en Warning ni Recovery)?",
    "question_en": "In monitor notification messages, which syntax displays a block of text ONLY when the monitor enters a Critical Alert state (not in Warning or Recovery)?",
    "question": "En el mensaje de alerta de un monitor, ¿qué sintaxis permite mostrar un bloque de texto ÚNICAMENTE cuando el monitor entra en estado de Alerta crítica (y no en Warning ni Recovery)?",
    "options_es": [
      "{{#is_alert}} Este mensaje solo se muestra en estado crítico {{/is_alert}}",
      "[[if alert]] Este mensaje solo se muestra en estado crítico [[endif]]",
      "{% alert_block %} Este mensaje solo se muestra en estado crítico {% end %}",
      "<!CRITICAL!> Este mensaje solo se muestra en estado crítico <!CRITICAL!>"
    ],
    "options_en": [
      "{{#is_alert}} This message only displays in critical state {{/is_alert}}",
      "[[if alert]] This message only displays in critical state [[endif]]",
      "{% alert_block %} This message only displays in critical state {% end %}",
      "<!CRITICAL!> This message only displays in critical state <!CRITICAL!>"
    ],
    "options": [
      "{{#is_alert}} Este mensaje solo se muestra en estado crítico {{/is_alert}}",
      "[[if alert]] Este mensaje solo se muestra en estado crítico [[endif]]",
      "{% alert_block %} Este mensaje solo se muestra en estado crítico {% end %}",
      "<!CRITICAL!> Este mensaje solo se muestra en estado crítico <!CRITICAL!>"
    ],
    "correctIndex": 0,
    "explanation_es": "Datadog utiliza etiquetas condicionales de Mustache. `{{#is_alert}}...{{/is_alert}}` muestra el contenido solo si el estado evaluado es Alerta (mientras que `{{#is_warning}}` o `{{#is_recovery}}` se usan para otros estados).",
    "explanation_en": "Datadog uses Mustache conditional tags. `{{#is_alert}}...{{/is_alert}}` renders content strictly when the monitor evaluates to an Alert state.",
    "explanation": "Datadog utiliza etiquetas condicionales de Mustache. `{{#is_alert}}...{{/is_alert}}` muestra el contenido solo si el estado evaluado es Alerta (mientras que `{{#is_warning}}` o `{{#is_recovery}}` se usan para otros estados)."
  },
  {
    "id": 97,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Enrutamiento de Notificaciones (@-mentions)",
    "topic_en": "Notification Routing (@-mentions)",
    "topic": "Enrutamiento de Notificaciones (@-mentions)",
    "question_es": "¿Cuál es la sintaxis correcta en el cuerpo del mensaje de un monitor para enviar una notificación directa al canal de Slack llamado '#alertas-produccion'?",
    "question_en": "What is the correct syntax in a monitor message body to route an alert notification directly to a Slack channel named '#alertas-produccion'?",
    "question": "¿Cuál es la sintaxis correcta en el cuerpo del mensaje de un monitor para enviar una notificación directa al canal de Slack llamado '#alertas-produccion'?",
    "options_es": [
      "@slack-alertas-produccion",
      "slack://alertas-produccion",
      "#slack.alertas-produccion",
      "send_to_slack('#alertas-produccion')"
    ],
    "options_en": [
      "@slack-alertas-produccion",
      "slack://alertas-produccion",
      "#slack.alertas-produccion",
      "send_to_slack('#alertas-produccion')"
    ],
    "options": [
      "@slack-alertas-produccion",
      "slack://alertas-produccion",
      "#slack.alertas-produccion",
      "send_to_slack('#alertas-produccion')"
    ],
    "correctIndex": 0,
    "explanation_es": "En Datadog, las notificaciones se dirigen mediante `@-mentions`. Para integraciones de Slack conectadas, el formato es `@slack-<nombre_del_canal>` o `@slack-<nombre_cuenta>-<nombre_canal>`.",
    "explanation_en": "Notifications in Datadog use `@-mentions`. For Slack channels, the standard syntax is `@slack-<channel_name>` or `@slack-<account_name>-<channel_name>`.",
    "explanation": "En Datadog, las notificaciones se dirigen mediante `@-mentions`. Para integraciones de Slack conectadas, el formato es `@slack-<nombre_del_canal>` o `@slack-<nombre_cuenta>-<nombre_canal>`."
  },
  {
    "id": 98,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Downtimes (Ventanas de Mantenimiento)",
    "topic_en": "Downtimes (Maintenance Windows)",
    "topic": "Downtimes (Ventanas de Mantenimiento)",
    "question_es": "¿Para qué sirve configurar un 'Downtime' en Datadog?",
    "question_en": "What is the purpose of configuring a 'Downtime' in Datadog?",
    "question": "¿Para qué sirve configurar un 'Downtime' en Datadog?",
    "options_es": [
      "Para programar periodos en los cuales se silencian las notificaciones de los monitores durante ventanas de mantenimiento planificadas.",
      "Para apagar físicamente los servidores durante la noche y ahorrar energía.",
      "Para eliminar los logs antiguos que superen los 30 días de antigüedad.",
      "Para suspender la facturación mensual de la cuenta de Datadog."
    ],
    "options_en": [
      "Scheduling maintenance windows during which monitor notifications are muted without disabling metric collection.",
      "Physically shutting down servers at night to conserve power.",
      "Deleting log entries older than 30 days.",
      "Suspending monthly Datadog billing."
    ],
    "options": [
      "Para programar periodos en los cuales se silencian las notificaciones de los monitores durante ventanas de mantenimiento planificadas.",
      "Para apagar físicamente los servidores durante la noche y ahorrar energía.",
      "Para eliminar los logs antiguos que superen los 30 días de antigüedad.",
      "Para suspender la facturación mensual de la cuenta de Datadog."
    ],
    "correctIndex": 0,
    "explanation_es": "Los Downtimes permiten silenciar temporalmente las notificaciones de alertas de uno o varios monitores (por etiquetas o IDs) durante mantenimientos o despliegues programados, evitando falsas alarmas sin dejar de recolectar métricas.",
    "explanation_en": "Downtimes allow teams to suppress alert notifications during scheduled maintenance or deployment windows while telemetry continues to be recorded.",
    "explanation": "Los Downtimes permiten silenciar temporalmente las notificaciones de alertas de uno o varios monitores (por etiquetas o IDs) durante mantenimientos o despliegues programados, evitando falsas alarmas sin dejar de recolectar métricas."
  },
  {
    "id": 99,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Variables de Plantilla en Dashboards",
    "topic_en": "Dashboard Template Variables",
    "topic": "Variables de Plantilla en Dashboards",
    "question_es": "¿Cuál es la función principal de las variables de plantilla (Template Variables, ej. '$env' o '$service') en un Dashboard de Datadog?",
    "question_en": "What is the primary function of Template Variables (e.g., '$env' or '$service') in a Datadog Dashboard?",
    "question": "¿Cuál es la función principal de las variables de plantilla (Template Variables, ej. '$env' o '$service') en un Dashboard de Datadog?",
    "options_es": [
      "Permitir a los usuarios filtrar dinámicamente todos los widgets del panel mediante menús desplegables según etiquetas sin tener que editar las consultas.",
      "Almacenar contraseñas y claves de acceso de forma segura en los gráficos.",
      "Crear copias del dashboard en diferentes idiomas automáticamente.",
      "Modificar el tamaño de las fuentes y el color de fondo del navegador."
    ],
    "options_en": [
      "Allow users to dynamically filter all dashboard widgets via dropdown menus based on tags without editing queries.",
      "Securely store passwords and secret access keys inside widgets.",
      "Automatically translate dashboards into different languages.",
      "Change browser font sizes and background colors."
    ],
    "options": [
      "Permitir a los usuarios filtrar dinámicamente todos los widgets del panel mediante menús desplegables según etiquetas sin tener que editar las consultas.",
      "Almacenar contraseñas y claves de acceso de forma segura en los gráficos.",
      "Crear copias del dashboard en diferentes idiomas automáticamente.",
      "Modificar el tamaño de las fuentes y el color de fondo del navegador."
    ],
    "correctIndex": 0,
    "explanation_es": "Las Template Variables introducen menús desplegables en la cabecera del panel que inyectan etiquetas (`$env`, `$datacenter`, etc.) en las consultas de los widgets, permitiendo alternar entre producción, staging o regiones en un solo clic.",
    "explanation_en": "Template Variables add dropdown menus to dashboards that dynamically inject tag scopes into widget queries, enabling quick switching between environments, services, or clusters.",
    "explanation": "Las Template Variables introducen menús desplegables en la cabecera del panel que inyectan etiquetas (`$env`, `$datacenter`, etc.) en las consultas de los widgets, permitiendo alternar entre producción, staging o regiones en un solo clic."
  },
  {
    "id": 100,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Widgets de Dashboard",
    "topic_en": "Dashboard Widgets",
    "topic": "Widgets de Dashboard",
    "question_es": "¿Qué widget de visualización de Datadog es el más adecuado para mostrar un único valor numérico destacado en tiempo real, como el número total actual de usuarios conectados?",
    "question_en": "Which Datadog visualization widget is best suited for displaying a prominent, single real-time numeric value, such as total currently active users?",
    "question": "¿Qué widget de visualización de Datadog es el más adecuado para mostrar un único valor numérico destacado en tiempo real, como el número total actual de usuarios conectados?",
    "options_es": [
      "Query Value",
      "Heatmap",
      "Distribution",
      "Timeseries"
    ],
    "options_en": [
      "Query Value",
      "Heatmap",
      "Distribution",
      "Timeseries"
    ],
    "options": [
      "Query Value",
      "Heatmap",
      "Distribution",
      "Timeseries"
    ],
    "correctIndex": 0,
    "explanation_es": "El widget **Query Value** muestra un valor numérico único y prominente, ideal para métricas clave de resumen (KPIs) con códigos de color condicionales según umbrales.",
    "explanation_en": "The **Query Value** widget displays a single prominent numeric value, ideal for high-level summary KPIs with optional conditional threshold coloring.",
    "explanation": "El widget **Query Value** muestra un valor numérico único y prominente, ideal para métricas clave de resumen (KPIs) con códigos de color condicionales según umbrales."
  },
  {
    "id": 101,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Widget Heatmap",
    "topic_en": "Heatmap Widget",
    "topic": "Widget Heatmap",
    "question_es": "¿Cuál es el caso de uso primordial para un widget de tipo Heatmap en Datadog?",
    "question_en": "What is the primary use case for a Heatmap widget in Datadog?",
    "question": "¿Cuál es el caso de uso primordial para un widget de tipo Heatmap en Datadog?",
    "options_es": [
      "Mostrar la distribución temporal y la concentración de valores de una métrica para identificar patrones y percentiles en el tiempo.",
      "Mostrar un mapa geográfico de las oficinas de la empresa.",
      "Listar los nombres de los administradores que iniciaron sesión.",
      "Descargar un archivo de texto con el historial de eventos."
    ],
    "options_en": [
      "Visualizing the temporal distribution and concentration of metric values to identify patterns and percentiles over time.",
      "Displaying a geographical map of company office locations.",
      "Listing the names of administrators who logged in.",
      "Downloading a text file containing event histories."
    ],
    "options": [
      "Mostrar la distribución temporal y la concentración de valores de una métrica para identificar patrones y percentiles en el tiempo.",
      "Mostrar un mapa geográfico de las oficinas de la empresa.",
      "Listar los nombres de los administradores que iniciaron sesión.",
      "Descargar un archivo de texto con el historial de eventos."
    ],
    "correctIndex": 0,
    "explanation_es": "Un **Heatmap** representa gráficamente la distribución de una métrica a lo largo del tiempo utilizando intensidades de color, lo que permite visualizar la densidad de valores de latencia o tamaño de peticiones para múltiples hosts a la vez.",
    "explanation_en": "A **Heatmap** visualizes metric distribution over time using color intensity to show the density of latency or size samples across many hosts simultaneously.",
    "explanation": "Un **Heatmap** representa gráficamente la distribución de una métrica a lo largo del tiempo utilizando intensidades de color, lo que permite visualizar la densidad de valores de latencia o tamaño de peticiones para múltiples hosts a la vez."
  },
  {
    "id": 102,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Conceptos de APM: Traces y Spans",
    "topic_en": "APM Concepts: Traces & Spans",
    "topic": "Conceptos de APM: Traces y Spans",
    "question_es": "En Application Performance Monitoring (APM), ¿cuál es la relación entre un Trace (Traza) y un Span?",
    "question_en": "In Application Performance Monitoring (APM), what is the relationship between a Trace and a Span?",
    "question": "En Application Performance Monitoring (APM), ¿cuál es la relación entre un Trace (Traza) y un Span?",
    "options_es": [
      "Un Trace representa el viaje de una solicitud de principio a fin, y está compuesto por uno o más Spans que representan unidades individuales de trabajo dentro de ese viaje.",
      "Un Span contiene muchos Traces independientes.",
      "Son dos nombres idénticos que representan exactamente la misma entidad en APM.",
      "Un Trace solo aplica a bases de datos, mientras que un Span solo aplica a servidores web."
    ],
    "options_en": [
      "A Trace represents the end-to-end journey of a request, composed of one or more Spans that represent individual units of work within that journey.",
      "A Span contains multiple independent Traces.",
      "They are identical terms representing the exact same entity in APM.",
      "A Trace only applies to databases, while a Span only applies to web servers."
    ],
    "options": [
      "Un Trace representa el viaje de una solicitud de principio a fin, y está compuesto por uno o más Spans que representan unidades individuales de trabajo dentro de ese viaje.",
      "Un Span contiene muchos Traces independientes.",
      "Son dos nombres idénticos que representan exactamente la misma entidad en APM.",
      "Un Trace solo aplica a bases de datos, mientras que un Span solo aplica a servidores web."
    ],
    "correctIndex": 0,
    "explanation_es": "Un **Trace** describe el recorrido completo de una petición distribuida a través de todos los microservicios. Cada **Span** representa una unidad de ejecución individual o llamada concreta (ej. consulta SQL, llamada HTTP a otro servicio) con su hora de inicio y duración.",
    "explanation_en": "A **Trace** represents the full execution lifecycle of a request as it traverses distributed services. Each **Span** represents a discrete unit of execution (e.g., SQL query, HTTP call) within that trace.",
    "explanation": "Un **Trace** describe el recorrido completo de una petición distribuida a través de todos los microservicios. Cada **Span** representa una unidad de ejecución individual o llamada concreta (ej. consulta SQL, llamada HTTP a otro servicio) con su hora de inicio y duración."
  },
  {
    "id": 103,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Flame Graph en APM",
    "topic_en": "Flame Graph in APM",
    "topic": "Flame Graph en APM",
    "question_es": "¿Qué información transmite el ancho horizontal de una barra en un gráfico de llama (Flame Graph) en el visor de trazas de APM de Datadog?",
    "question_en": "In the Datadog APM trace explorer, what information is conveyed by the horizontal width of a bar in a Flame Graph?",
    "question": "¿Qué información transmite el ancho horizontal de una barra en un gráfico de llama (Flame Graph) en el visor de trazas de APM de Datadog?",
    "options_es": [
      "La duración en tiempo que tomó la ejecución de ese Span específico.",
      "La cantidad de memoria RAM consumida por la tarjeta madre.",
      "El número de líneas de código que contiene la función.",
      "El ancho de banda de red en gigabits por segundo."
    ],
    "options_en": [
      "The duration of time that specific Span took to execute.",
      "The amount of RAM memory consumed by the motherboard.",
      "The number of lines of source code in the function.",
      "Network bandwidth in gigabits per second."
    ],
    "options": [
      "La duración en tiempo que tomó la ejecución de ese Span específico.",
      "La cantidad de memoria RAM consumida por la tarjeta madre.",
      "El número de líneas de código que contiene la función.",
      "El ancho de banda de red en gigabits por segundo."
    ],
    "correctIndex": 0,
    "explanation_es": "En un Flame Graph, el eje horizontal representa la dimensión temporal: cuanto más ancha sea la barra de un Span, mayor fue el tiempo de ejecución de esa operación dentro de la solicitud total.",
    "explanation_en": "In an APM Flame Graph, the horizontal axis represents time; wider bars indicate longer execution durations relative to the overall request.",
    "explanation": "En un Flame Graph, el eje horizontal representa la dimensión temporal: cuanto más ancha sea la barra de un Span, mayor fue el tiempo de ejecución de esa operación dentro de la solicitud total."
  },
  {
    "id": 104,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Synthetic Monitoring",
    "topic_en": "Synthetic Monitoring",
    "topic": "Synthetic Monitoring",
    "question_es": "¿Cuál es la diferencia entre un Synthetic API Test y un Synthetic Browser Test?",
    "question_en": "What is the difference between a Synthetic API Test and a Synthetic Browser Test in Datadog?",
    "question": "¿Cuál es la diferencia entre un Synthetic API Test y un Synthetic Browser Test?",
    "options_es": [
      "Un API Test valida respuestas HTTP individuales o endpoints de red, mientras que un Browser Test ejecuta escenarios de navegación de usuario reales simulando clics y formularios con un navegador headless.",
      "Un API Test solo funciona con internet deshabilitado.",
      "Un Browser Test no puede ejecutarse desde múltiples ubicaciones geográficas.",
      "Un API Test solo se puede programar una vez al mes."
    ],
    "options_en": [
      "An API Test validates individual HTTP responses or network endpoints, while a Browser Test executes complete multi-step user journeys simulating clicks and form inputs in a headless browser.",
      "An API Test only works when internet connectivity is disabled.",
      "A Browser Test cannot run from multiple geographic locations.",
      "An API Test can only be scheduled once a month."
    ],
    "options": [
      "Un API Test valida respuestas HTTP individuales o endpoints de red, mientras que un Browser Test ejecuta escenarios de navegación de usuario reales simulando clics y formularios con un navegador headless.",
      "Un API Test solo funciona con internet deshabilitado.",
      "Un Browser Test no puede ejecutarse desde múltiples ubicaciones geográficas.",
      "Un API Test solo se puede programar una vez al mes."
    ],
    "correctIndex": 0,
    "explanation_es": "Los Synthetic API Tests verifican la disponibilidad, latencia y respuestas de endpoints de red (HTTP, SSL, DNS, TCP, WebSocket). Los Synthetic Browser Tests ejecutan secuencias completas de pasos de usuario (iniciar sesión, añadir al carrito, checkout) en un navegador real.",
    "explanation_en": "Synthetic API Tests verify individual endpoint health (HTTP, SSL, DNS, TCP). Synthetic Browser Tests simulate real user interactions (login, cart checkout) using headless Chrome/Firefox instances.",
    "explanation": "Los Synthetic API Tests verifican la disponibilidad, latencia y respuestas de endpoints de red (HTTP, SSL, DNS, TCP, WebSocket). Los Synthetic Browser Tests ejecutan secuencias completas de pasos de usuario (iniciar sesión, añadir al carrito, checkout) en un navegador real."
  },
  {
    "id": 105,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Synthetic Private Locations",
    "topic_en": "Synthetic Private Locations",
    "topic": "Synthetic Private Locations",
    "question_es": "¿Cuándo es necesario configurar una 'Private Location' en Datadog Synthetic Monitoring?",
    "question_en": "When is it necessary to configure a 'Private Location' in Datadog Synthetic Monitoring?",
    "question": "¿Cuándo es necesario configurar una 'Private Location' en Datadog Synthetic Monitoring?",
    "options_es": [
      "Cuando se requiere probar aplicaciones o APIs internas que no están expuestas a internet público (ej. dentro de una VPC privada o red corporativa).",
      "Cuando se desea evitar pagar por las pruebas sintéticas.",
      "Cuando el sitio web a monitorear tiene más de 10 usuarios concurrentes.",
      "Cuando el proveedor de internet no admite conexiones HTTPS."
    ],
    "options_en": [
      "When testing internal applications or private APIs not exposed to the public internet (e.g., inside a private VPC or corporate intranet).",
      "When attempting to bypass Synthetic Monitoring usage fees.",
      "When the target website has more than 10 concurrent users.",
      "When an internet service provider does not support HTTPS."
    ],
    "options": [
      "Cuando se requiere probar aplicaciones o APIs internas que no están expuestas a internet público (ej. dentro de una VPC privada o red corporativa).",
      "Cuando se desea evitar pagar por las pruebas sintéticas.",
      "Cuando el sitio web a monitorear tiene más de 10 usuarios concurrentes.",
      "Cuando el proveedor de internet no admite conexiones HTTPS."
    ],
    "correctIndex": 0,
    "explanation_es": "Las **Private Locations** son contenedores ligeros de Datadog que despliegas dentro de tu propia red privada (VPC/on-premise) para ejecutar pruebas sintéticas sobre endpoints y sistemas internos inaccesibles desde los servidores públicos de Datadog.",
    "explanation_en": "**Private Locations** are worker containers deployed within your own private network infrastructure to run synthetic tests against internal endpoints inaccessible to Datadog's public vantage points.",
    "explanation": "Las **Private Locations** son contenedores ligeros de Datadog que despliegas dentro de tu propia red privada (VPC/on-premise) para ejecutar pruebas sintéticas sobre endpoints y sistemas internos inaccesibles desde los servidores públicos de Datadog."
  },
  {
    "id": 106,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Service Level Objectives (SLOs)",
    "topic_en": "Service Level Objectives (SLOs)",
    "topic": "Service Level Objectives (SLOs)",
    "question_es": "¿Qué tipo de monitores de Datadog son compatibles para construir un Service Level Objective (SLO) basado en monitores?",
    "question_en": "Which Datadog monitor types are supported when creating a monitor-based Service Level Objective (SLO)?",
    "question": "¿Qué tipo de monitores de Datadog son compatibles para construir un Service Level Objective (SLO) basado en monitores?",
    "options_es": [
      "Monitores de tipo Metric, Integration, APM Metric, Anomaly, Outlier, Forecast y Synthetic Service Checks.",
      "Únicamente monitores de tipo Event.",
      "Exclusivamente monitores de auditoría de logs manuales.",
      "Cualquier monitor sin importar su tipo ni configuración."
    ],
    "options_en": [
      "Metric, Integration, APM Metric, Anomaly, Outlier, Forecast, and Synthetic Service Checks.",
      "Event monitors exclusively.",
      "Manual log audit monitors exclusively.",
      "Any monitor without regard to its type or configuration."
    ],
    "options": [
      "Monitores de tipo Metric, Integration, APM Metric, Anomaly, Outlier, Forecast y Synthetic Service Checks.",
      "Únicamente monitores de tipo Event.",
      "Exclusivamente monitores de auditoría de logs manuales.",
      "Cualquier monitor sin importar su tipo ni configuración."
    ],
    "correctIndex": 0,
    "explanation_es": "Los SLOs basados en monitores admiten monitores de estado claro (OK/Alert) como métricas, checks de integración, APM, anomalías, outliers, forecast y checks de Synthetic Monitoring.",
    "explanation_en": "Monitor-based SLOs support deterministic monitor types including Metric, Integration, APM, Anomaly, Outlier, Forecast, and Synthetic Service Checks.",
    "explanation": "Los SLOs basados en monitores admiten monitores de estado claro (OK/Alert) como métricas, checks de integración, APM, anomalías, outliers, forecast y checks de Synthetic Monitoring."
  },
  {
    "id": 107,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Pipelines y Procesadores de Logs",
    "topic_en": "Log Pipelines & Processors",
    "topic": "Pipelines y Procesadores de Logs",
    "question_es": "¿Qué procesador de Datadog Log Management se utiliza para parsear y extraer campos estructurados a partir de cadenas de texto de logs no estructuradas utilizando expresiones regulares?",
    "question_en": "Which processor in Datadog Log Management is used to parse and extract structured attributes from unstructured text strings using regex patterns?",
    "question": "¿Qué procesador de Datadog Log Management se utiliza para parsear y extraer campos estructurados a partir de cadenas de texto de logs no estructuradas utilizando expresiones regulares?",
    "options_es": [
      "Grok Parser",
      "Status Remapper",
      "Date Remapper",
      "Service Remapper"
    ],
    "options_en": [
      "Grok Parser",
      "Status Remapper",
      "Date Remapper",
      "Service Remapper"
    ],
    "options": [
      "Grok Parser",
      "Status Remapper",
      "Date Remapper",
      "Service Remapper"
    ],
    "correctIndex": 0,
    "explanation_es": "El **Grok Parser** extrae atributos estructurados a partir de texto de log no estructurado mediante patrones y reglas de Grok (basadas en regex optimizadas), transformando líneas de texto sin formato en pares clave-valor indexables.",
    "explanation_en": "The **Grok Parser** extracts structured attributes from raw, unstructured log lines using Grok patterns (optimized regular expressions), turning text into queryable key-value pairs.",
    "explanation": "El **Grok Parser** extrae atributos estructurados a partir de texto de log no estructurado mediante patrones y reglas de Grok (basadas en regex optimizadas), transformando líneas de texto sin formato en pares clave-valor indexables."
  },
  {
    "id": 108,
    "domain_es": "Dominio 6: Visualization, Monitors & Observability",
    "domain_en": "Domain 6: Visualization, Monitors & Observability",
    "domain": "Dominio 6: Visualization, Monitors & Observability",
    "topic_es": "Facetas vs Medidas en Logs (Facets vs Measures)",
    "topic_en": "Facets vs Measures in Logs",
    "topic": "Facetas vs Medidas en Logs (Facets vs Measures)",
    "question_es": "En Datadog Log Management, ¿cuándo debes crear una 'Medida' (Measure) en lugar de una 'Faceta' (Facet) para un atributo de log?",
    "question_en": "In Datadog Log Management, when should you create a 'Measure' instead of a 'Facet' for a log attribute?",
    "question": "En Datadog Log Management, ¿cuándo debes crear una 'Medida' (Measure) en lugar de una 'Faceta' (Facet) para un atributo de log?",
    "options_es": [
      "Cuando el atributo contiene valores numéricos continuos sobre los cuales se necesitan realizar agregaciones matemáticas como promedios, sumas o percentiles (ej. duración en ms).",
      "Cuando el atributo es una cadena de texto como el nombre de usuario.",
      "Cuando el log proviene de un contenedor Docker apagado.",
      "Cuando se desea eliminar el atributo de la vista de búsqueda."
    ],
    "options_en": [
      "When the attribute contains continuous numerical values needed for mathematical aggregations such as averages, sums, or percentiles (e.g., duration in ms).",
      "When the attribute is a string such as a username.",
      "When the log originates from a terminated Docker container.",
      "When you wish to remove the attribute from the search view."
    ],
    "options": [
      "Cuando el atributo contiene valores numéricos continuos sobre los cuales se necesitan realizar agregaciones matemáticas como promedios, sumas o percentiles (ej. duración en ms).",
      "Cuando el atributo es una cadena de texto como el nombre de usuario.",
      "Cuando el log proviene de un contenedor Docker apagado.",
      "Cuando se desea eliminar el atributo de la vista de búsqueda."
    ],
    "correctIndex": 0,
    "explanation_es": "Las **Facetas** se utilizan para filtrar y agrupar por valores discretos cualitativos o identificadores (strings, status, ids). Las **Medidas** se definen sobre atributos numéricos para permitir cálculos estadísticos y agregaciones (avg, min, max, sum) en gráficos y métricas generadas de logs.",
    "explanation_en": "**Facets** are used to filter and group by discrete qualitative values (strings, IDs, status). **Measures** are created for continuous numerical values to enable mathematical aggregations (avg, min, max, sum) in log analytics.",
    "explanation": "Las **Facetas** se utilizan para filtrar y agrupar por valores discretos cualitativos o identificadores (strings, status, ids). Las **Medidas** se definen sobre atributos numéricos para permitir cálculos estadísticos y agregaciones (avg, min, max, sum) en gráficos y métricas generadas de logs."
  }
];

// Helper para obtener textos según el idioma activo ('es' o 'en')
QUESTION_BANK.forEach(q => {
  q.getDomain = function(lang = 'es') { return lang === 'en' ? this.domain_en : this.domain_es; };
  q.getTopic = function(lang = 'es') { return lang === 'en' ? this.topic_en : this.topic_es; };
  q.getQuestion = function(lang = 'es') { return lang === 'en' ? this.question_en : this.question_es; };
  q.getOptions = function(lang = 'es') { return lang === 'en' ? this.options_en : this.options_es; };
  q.getExplanation = function(lang = 'es') { return lang === 'en' ? this.explanation_en : this.explanation_es; };
});

// Exportación compatible tanto con navegadores (window.QUESTION_BANK) como con Node/CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTION_BANK;
}
