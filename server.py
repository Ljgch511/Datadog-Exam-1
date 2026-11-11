import http.server
import socketserver
import webbrowser
import threading
import os

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def open_browser():
    webbrowser.open(f"http://localhost:{PORT}/index.html")

if __name__ == "__main__":
    print(f"🚀 Iniciando servidor para el Simulador de Datadog en http://localhost:{PORT}")
    print("Presiona Ctrl+C para detener el servidor.")
    threading.Timer(1.0, open_browser).start()
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")
