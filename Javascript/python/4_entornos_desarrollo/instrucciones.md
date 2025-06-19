# Guía para Crear un Entorno de Desarrollo

## 1. ¿Qué es un entorno de desarrollo?
Un entorno de desarrollo virtual permite aislar las dependencias de un proyecto para evitar conflictos con otras aplicaciones o proyectos en tu sistema.

---

## 2. Crear un entorno de desarrollo en diferentes sistemas operativos

### **Windows**
1. Abre una terminal (puedes usar `cmd`, PowerShell o Windows Terminal).
2. Asegúrate de tener Python instalado. Verifica con:
   ```bash
   python --version
   ```
   Si no está instalado, descárgalo desde [python.org](https://www.python.org/).
3. Navega al directorio de tu proyecto:
   ```bash
   cd ruta\de\tu\proyecto
   ```
4. Crea un entorno virtual:
   ```bash
   python -m venv venv
   ```
5. Activa el entorno virtual:
   ```bash
   venv\Scripts\activate
   ```

### **macOS**
1. Abre la terminal.
2. Verifica que Python esté instalado:
   ```bash
   python3 --version
   ```
   Si no está instalado, puedes usar `brew` para instalarlo:
   ```bash
   brew install python
   ```
3. Navega al directorio de tu proyecto:
   ```bash
   cd /ruta/de/tu/proyecto
   ```
4. Crea un entorno virtual:
   ```bash
   python3 -m venv venv
   ```
5. Activa el entorno virtual:
   ```bash
   source venv/bin/activate
   ```

### **Linux**
1. Abre la terminal.
2. Verifica que Python esté instalado:
   ```bash
   python3 --version
   ```
   Si no está instalado, usa tu gestor de paquetes para instalarlo. Por ejemplo, en Ubuntu:
   ```bash
   sudo apt update
   sudo apt install python3 python3-venv
   ```
3. Navega al directorio de tu proyecto:
   ```bash
   cd /ruta/de/tu/proyecto
   ```
4. Crea un entorno virtual:
   ```bash
   python3 -m venv venv
   ```
5. Activa el entorno virtual:
   ```bash
   source venv/bin/activate
   ```

---

## 3. Instalar paquetes con `pip` y `requirements.txt`

### **Instalar paquetes manualmente**
1. Asegúrate de que el entorno virtual esté activado.
2. Usa `pip` para instalar paquetes:
   ```bash
   pip install nombre_del_paquete
   ```

### **Crear un archivo `requirements.txt`**
1. Después de instalar los paquetes necesarios, genera un archivo `requirements.txt` con:
   ```bash
   pip freeze > requirements.txt
   ```

### **Instalar paquetes desde `requirements.txt`**
1. Asegúrate de que el entorno virtual esté activado.
2. Instala los paquetes listados en el archivo:
   ```bash
   pip install -r requirements.txt
   ```

---

## 4. Desactivar el entorno virtual
Cuando termines de trabajar, puedes desactivar el entorno virtual con:
```bash
deactivate
```

---

## 5. Eliminar el entorno virtual
Si necesitas eliminar el entorno virtual, simplemente borra la carpeta `venv`:
```bash
rm -rf venv
```
(En Windows, puedes eliminarla desde el Explorador de Archivos).

---

¡Y eso es todo! Ahora tienes un entorno de desarrollo configurado y sabes cómo gestionar dependencias.