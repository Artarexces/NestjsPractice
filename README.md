# 🚀 NestJS Practice

Proyecto de práctica desarrollado con **NestJS**, enfocado en comprender la estructura modular, el uso de servicios, controladores y decoradores. Este proyecto sirve como base para futuros desarrollos backend escalables con TypeScript.

---

## 🧠 Objetivo

El propósito de este repositorio es practicar los fundamentos de **NestJS**, incluyendo:
- Creación y organización de módulos
- Implementación de controladores y servicios
- Uso de decoradores (`@Controller()`, `@Get()`, `@Injectable()`, etc.)
- Manejo básico de rutas y respuestas HTTP

---

## ⚙️ Tecnologías utilizadas

- 🟣 **NestJS** – Framework progresivo para Node.js  
- 🔷 **TypeScript** – Tipado estático para JavaScript  
- 🌐 **Express** – Motor HTTP subyacente  
- 💾 **Node.js** – Entorno de ejecución  
- 📦 **npm** – Gestión de dependencias  

---

## 🧩 Estructura del proyecto

```bash
src/
 ├── app.controller.ts      # Controlador principal con rutas de ejemplo
 ├── app.service.ts         # Lógica del servicio
 ├── app.module.ts          # Módulo raíz
 ├── main.ts                # Punto de entrada de la aplicación
```
---

## 🧰 Instalación y ejecución local

1.  Clonar el repositorio:

```bash
git clone https://github.com/Artarexces/NestjsPractice.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el servidor en modo desarrollo:

```bash
npm run start:dev
```

4. Accede a la API:

```arduino
http://localhost:3000
```
---

## 📡 Endpoints de ejemplo

| Método | Ruta     | Descripción                          |
| ------ | -------- | ------------------------------------ |
| `GET`  | `/`      | Retorna un mensaje de bienvenida     |
| `GET`  | `/users` | Retorna una lista de usuarios (mock) |

---

## 📚 Aprendizajes clave

- Comprensión de la arquitectura modular de NestJS

- Separación de responsabilidades entre controladores y servicios

- Uso de decoradores para definir rutas y dependencias

👨‍💻 Autor

Es un proyecto en desarrollo el cual implemento nuevos metodos e utilizo para aprender a utilizar el Framework.


**Martin Rodriguez (Artarexces)**

💼 [GitHub](https://github.com/Artarexces/NestjsPractice)

🌐 [Portfolio](https://portfolio-v03-eight.vercel.app/)
