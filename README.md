# Candy & Love - API
Servidor encargado de la lógica de negocio y gestión de datos (En desarrollo).

## Stack
- NestJS 11.1.17
- Prisma 7.6.0 (PostgreSQL)
- TypeScript 5.9.3
- Node.js 22.x
- AWS S3

## En desarrollo
- [x] Arquitectura de categorías recursivas
- [x] Modelado de base de datos (Users, Roles, Items)
- [/] CRUD de Items (Básico)
- [ ] Integración para subida de imágenes a S3

## Configuración local
1. **Instalar dependencias:**
   npm install

2. **Preparar entorno:**
   Configurar archivo `.env` (usar `.env.example` como guía).

3. **Base de datos:**
   npx prisma migrate dev

4. **Correr servidor:**
   npm run start:dev