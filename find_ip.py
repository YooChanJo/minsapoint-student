#!/usr/bin/env python3
'''
    This Python script forwards finds the current ip address
    External devices on LAN can access localhost via this way.
    since backend runs at localhost:3000 --> devices can access via current_ip:3000

    example usage:
    Linux:
    ./find_ip.py
    Windows/Mac:
    py ./find_ip.py
        or
    python3 ./find_ip.py

    The current ip address of the computer on LAN is displayed when program is run.
'''
# find_ip.py
import http.server
import socketserver
import http.client
import socket
import sys

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

if __name__ == "__main__":
    local_ip = get_local_ip()
    print(f"Access from other devices on LAN at: http://{local_ip}:3000")





# '''
#     USELESS --> NestJS already does this
#     This Python script forwards localhost(127.0.0.1) to LAN(0.0.0.0)
#     External devices on LAN can access localhost via this way.
#     localhost:XXXX --> Current Program --> 0.0.0.0:XXXX --> can be read by <current_computer_ip_address>:XXXX from other devices.

#     example usage:
#     Linux:
#     ./localhost_lan_forwarder.py 3000
#     Windows/Mac:
#     py ./localhost_lan_forwarder.py 3000
#         or
#     python3 ./localhost_lan_forwarder.py 3000

#     The current ip address of the computer on LAN is displayed when program is run.
# '''
# # localhost_lan_forwarder.py
# import http.server
# import socketserver
# import http.client
# import socket
# import sys

# # Target server running on localhost
# TARGET_HOST = '127.0.0.1'
# TARGET_PORT = 3000  # the port your app is running on

# def get_local_ip():
#     s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
#     try:
#         s.connect(('8.8.8.8', 80))
#         ip = s.getsockname()[0]
#     except Exception:
#         ip = '127.0.0.1'
#     finally:
#         s.close()
#     return ip

# def get_listen_port():
#     if len(sys.argv) > 1:
#         try:
#             return int(sys.argv[1])
#         except ValueError:
#             print("Invalid port argument. Must be an integer.")
#     # Ask user if not provided or invalid
#     while True:
#         port_str = input("Enter the port number to listen on: ")
#         try:
#             return int(port_str)
#         except ValueError:
#             print("Please enter a valid integer port.")

# class ProxyHandler(http.server.BaseHTTPRequestHandler):
#     def do_GET(self):
#         conn = http.client.HTTPConnection(TARGET_HOST, TARGET_PORT)
#         conn.request("GET", self.path, headers=self.headers)
#         response = conn.getresponse()

#         self.send_response(response.status, response.reason)
#         for key, val in response.getheaders():
#             self.send_header(key, val)
#         self.end_headers()
#         self.wfile.write(response.read())
#         conn.close()

#     def do_POST(self):
#         length = int(self.headers.get('Content-Length', 0))
#         post_data = self.rfile.read(length)

#         conn = http.client.HTTPConnection(TARGET_HOST, TARGET_PORT)
#         conn.request("POST", self.path, body=post_data, headers=self.headers)
#         response = conn.getresponse()

#         self.send_response(response.status, response.reason)
#         for key, val in response.getheaders():
#             self.send_header(key, val)
#         self.end_headers()
#         self.wfile.write(response.read())
#         conn.close()

# if __name__ == "__main__":
#     LISTEN_PORT = get_listen_port()
#     local_ip = get_local_ip()
#     with socketserver.TCPServer(("0.0.0.0", LISTEN_PORT), ProxyHandler) as httpd:
#         print(f"Proxy running on 0.0.0.0:{LISTEN_PORT} → forwarding to {TARGET_HOST}:{TARGET_PORT}")
#         print(f"Access from other devices on LAN at: http://{local_ip}:{LISTEN_PORT}")
#         httpd.serve_forever()

