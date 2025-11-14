# 📝 Examen Parcial - Gestor de Estudiantes Simplificado

## 🎯 **Consigna del Examen**

### **Tiempo:** 2 horas
### **Objetivo:** 
Desarrollar una aplicación web para gestionar estudiantes con búsqueda, filtros y cambio de estado.

---

## 📋 **Descripción del Problema**

Debes crear un **Gestor de Estudiantes** que permita:
- 📄 Ver lista completa de estudiantes
- 🔍 Buscar estudiantes por nombre y mostrar sus detalles
- ✅ Cambiar estado de aprobado/reprobado
- 🎚️ Filtrar por estado (todos/aprobados/reprobados)
- ➕ Agregar nuevos estudiantes

---

## 🎓 **Array de Estudiantes (Base Inicial)**

```javascript
let estudiantes = [
    { id: 1, nombre: "Ana García", nota: 8, aprobado: true },
    { id: 2, nombre: "Carlos López", nota: 5, aprobado: false },
    { id: 3, nombre: "María Rodríguez", nota: 7, aprobado: true },
    { id: 4, nombre: "Pedro Martínez", nota: 4, aprobado: false },
    { id: 5, nombre: "Laura Fernández", nota: 9, aprobado: true },
    { id: 6, nombre: "Diego Silva", nota: 6, aprobado: true },
    { id: 7, nombre: "Sofía Castro", nota: 3, aprobado: false }
];




## 🛠️ **Requisitos Técnicos**

### **1. Mostrar Lista de Estudiantes**
- Mostrar en una lista o tabla: nombre, nota y estado
- Diferenciar visualmente aprobados (verde) vs reprobados (rojo)

### **2. Sistema de Búsqueda**
- Campo de texto para escribir nombre del estudiante
- Botón "Buscar" que muestre los detalles del estudiante encontrado en pantalla
- Mostrar: **ID, Nombre completo, Nota, Estado actual**
- Botón para cambiar estado (Aprobar/Reprobar)

### **3. Filtros de Estado**
- **Todos** - mostrar todos los estudiantes
- **Aprobados** - mostrar solo estudiantes aprobados
- **Reprobados** - mostrar solo estudiantes reprobados

### **4. Agregar Nuevos Estudiantes**
- Formulario con: nombre (texto) y nota (número 0-10)
- Al agregar, calcular automáticamente si está aprobado (nota >= 6)
- Actualizar la lista inmediatamente



## 📊 **Criterios de Evaluación**

| **Mostrar lista** | 2 pts | Lista funcional con estados visuales |
| **Búsqueda y detalles** | 2,5 pts | Búsqueda funciona y muestra detalles correctos |
| **Cambio de estado** | 2 pts | Botón cambia estado correctamente |
| **Filtros** | 1,5 pts | Los 3 filtros funcionan correctamente |
| **Agregar estudiantes** | 1,5 pts | Formulario funciona y valida datos |
| **Calidad del código** | 0,5 pts | Código organizado y legible |

**Total: 10 puntos**
