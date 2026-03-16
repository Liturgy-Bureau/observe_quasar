# Observe Quasar

> ## ⚠️ ARCHIVED — THIS PROJECT IS OBSOLETE
>
> **This repository has been made public and is no longer actively maintained.**
> The *Observe Quasar* platform has been rendered obsolete and will receive no further development, bug fixes, or security updates.
>
> The source code is published here for reference, archival, and educational purposes only.
> **Do not use this codebase in production.**

---

## About

**Observe Quasar** is a web-based platform built for real-time telemetry and control. It provides users with authentication, real-time dashboards, community chat and forums, financial tracking, and object management — all served through a microservices backend and a modern Angular frontend.

The system was deployed on a Google Cloud Compute Engine (GCE) virtual machine at **<YOUR_APP_SUBDOMAIN>** (domain: <YOUR_DOMAIN>), with NGINX acting as a reverse proxy in front of all Node.js microservices.

---

## Architecture

The platform follows a **microservices architecture**. Every domain concern is handled by a dedicated Node.js (Express / Socket.io) server, all fronted by a single Angular SPA.

```
Browser
  │
  └─► NGINX (<YOUR_APP_SUBDOMAIN>)
        │
        ├─ /            ─► Angular SPA (built static files)
        ├─ /auth        ─► Auth HTTP Server         (port 3000)
        ├─ /memb        ─► User Socket Server       (port 3001)
        ├─ /dash        ─► Dashboard Socket Server  (port 3002)
        ├─ /chfm        ─► Chat & Forum Server      (port 3003)
        ├─ /pand        ─► Pandora AI Server        (port 3004)
        ├─ /fin         ─► Finance HTTP Server      (port 3005)
        └─ /obj         ─► Object Socket Server     (port 3006)
```

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| Angular | 11.2.14 | SPA framework |
| TypeScript | 4.1.5 | Language |
| Angular CDK | 11.2.13 | Responsive layouts & breakpoint detection |
| RxJS | 6.6.0 | Reactive programming |
| Karma / Jasmine | — | Unit testing |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js / Express | 4.18.2 | HTTP REST servers |
| Socket.io | 4.5.3 | Real-time bidirectional communication |
| MongoDB (Atlas) | 4.9–4.11 | Cloud NoSQL database |
| Python | — | Pandora AI/tensor server (not actively used) |

### Infrastructure
| Tool | Purpose |
|---|---|
| NGINX | Reverse proxy & static file serving |
| PM2 | Node.js process management |
| nodemon | Development auto-reload |
| GCE VM | Hosting (IP: `<VM_IP>`) |

---

## Services

| # | Directory | Port | Protocol | Responsibility |
|---|---|---|---|---|
| 0 | `0web-interface-angular/` | 4200 (dev) | HTTP | Angular SPA — the user-facing interface |
| 1 | `1auth_http_server/` | 3000 | HTTP | Authentication & authorization |
| 2 | `2user_socket_server/` | 3001 | Socket.io | Member/user management |
| 3 | `3dashboard_socket_server/` | 3002 | Socket.io | Real-time dashboard updates |
| 4 | `4chatf_socket_server/` | 3003 | Socket.io | Community chat & forum |
| 5 | `5pandora_AI_tensor_server/` | 3004 | HTTP | AI / tensor operations (unused) |
| 6 | `6pay_http_server/` | 3005 | HTTP | Financial transactions |
| 7 | `7object_socket_server/` | 3006 | Socket.io | Generic object management |

---

## Frontend Structure

The Angular application (`0web-interface-angular/`) is organized as lazily-loaded feature modules.

```
src/app/
├── standalone-components/
│   ├── home/           # Landing / main page
│   ├── login/          # User authentication
│   ├── register/       # New user registration
│   ├── account/        # User profile management
│   ├── dashboard/      # Data visualization & metrics
│   └── error/          # 404 / error page
├── nested-components/
│   ├── overview/       # System overview display
│   └── xchange/        # Exchange component
├── services/
│   ├── auth.service    # Authentication logic
│   ├── theme.service   # Light/dark theme switching (CSS variables)
│   └── ux.service      # UI/UX state (sidebar, layout)
├── var/
│   └── var.ts          # Theme colour palette & supported languages
└── app-routing.module.ts
```

**Theme:** Light and dark modes supported, toggled via CSS variables.

**Languages supported:** English, French, Greek, Spanish, German, Portuguese, Russian.

---

## Project Structure

```
observe_quasar/
├── 0web-interface-angular/      # Angular 11 frontend SPA
├── 1auth_http_server/           # Authentication service
├── 2user_socket_server/         # User/member management service
├── 3dashboard_socket_server/    # Dashboard real-time service
├── 4chatf_socket_server/        # Chat & forum service
├── 5pandora_AI_tensor_server/   # AI/ML service (Python, unused)
├── 6pay_http_server/            # Payment / finance service
├── 7object_socket_server/       # Object management service
├── readme                       # Original deployment notes
└── start_servers.sh             # Helper script to launch all services locally
```

---

## Local Development

### Prerequisites
- Node.js ≥ 14
- Angular CLI (`npm install -g @angular/cli`)
- nodemon (`npm install -g nodemon`)
- MongoDB Atlas connection (set via `MONGODB_URI` environment variable in each service's `.env` file)

**Environment Variables:**
Services that connect to MongoDB require a `MONGODB_URI` environment variable. Copy the `.env.example` file in each service directory to `.env` and fill in your credentials:
```bash
cp 1auth_http_server/.env.example 1auth_http_server/.env
cp 6pay_http_server/.env.example 6pay_http_server/.env
```
Then edit each `.env` file with your actual MongoDB Atlas connection string.

### Run Everything at Once

The `start_servers.sh` script opens a dedicated gnome-terminal tab for each service:

```bash
chmod +x start_servers.sh
./start_servers.sh
```

### Run Services Individually

**Angular frontend:**
```bash
cd 0web-interface-angular
npm install
ng serve          # Available at http://localhost:4200
```

**Any Node.js microservice:**
```bash
cd <service-directory>      # e.g. cd 1auth_http_server
npm install
nodemon app.js              # Starts with auto-reload
```

---

## Production Deployment

The production environment runs on a GCE VM with NGINX and PM2.

### Infrastructure Details
| Item | Value |
|---|---|
| VM IP | `<VM_IP>` |
| Domain | `<YOUR_DOMAIN>` |
| App subdomain | `<YOUR_APP_SUBDOMAIN>` |
| NGINX config | `/etc/nginx/sites-available/<YOUR_DOMAIN>` |
| PM2 ecosystem config | `/var/www/observe/ecosystem.config.js` |

### PM2 Commands
```bash
# Start all services
pm2 start ecosystem.config.js

# Stop all services
pm2 stop ecosystem.config.js

# Check running processes
pm2 list

# View logs
pm2 logs
```

### Useful Debugging Commands
```bash
# Find which process is using a port
sudo lsof -i:<PORT_NO>

# Kill a process by PID
sudo kill <PID>
```

---

## Database

All persistent data is stored in **MongoDB Atlas** (cloud-hosted).

- **Cluster:** `<YOUR_MONGODB_CLUSTER>`
- **Primary database:** `conn.members`

---

## Testing

```bash
# Angular unit tests
cd 0web-interface-angular
ng test

# Angular end-to-end tests
ng e2e
```

> **Note:** Backend services have no automated tests configured.

---

## License

See individual `license.txt` files within service directories.
