import sys

PORT = 8000

if(sys.version_info.major == 3):
	import http.server
	import socketserver
	
	Handler = http.server.SimpleHTTPRequestHandler

	with socketserver.TCPServer(("", PORT), Handler) as httpd:
		print("Serving at port", PORT,"; go to http://localhost:8000/html/index.html in your web browser.")
		httpd.serve_forever()
	
elif(sys.version_info.major == 2):
	import SimpleHTTPServer
	import SocketServer

	Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

	httpd = SocketServer.TCPServer(("", PORT), Handler)

	print ("Serving at port", PORT, "; go to http://localhost:8000/html/index.html in your web browser.")
	httpd.serve_forever()