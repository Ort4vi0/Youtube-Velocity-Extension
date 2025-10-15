# 🎬 Control de Velocidad para YouTube

Extensión para Chrome/Edge que añade un botón al reproductor de YouTube para controlar la velocidad del vídeo usando la rueda del ratón.

## ✨ Características

- 🖱️ **Control por scroll**: Usa la rueda del ratón para ajustar rápidamente la velocidad de reproducción
- 🎯 **Botón integrado**: Botón elegante que se integra con los controles del reproductor de YouTube
- 🌍 **Soporte multilenguaje**: El tooltip se traduce automáticamente a 16 idiomas
- ⚡ **Velocidades personalizadas**: Configura velocidades desde 0.25x hasta 4x
- 🎮 **Compatible con la barra espaciadora**: Mantiene tu velocidad personalizada al usar la función de la barra espaciadora
- 💎 **Diseño moderno**: Tooltip con efecto de vidrio (efecto esmerilado)

## 📦 Instalación

### Método 1: Instalación manual (Desarrollador)

1. **Descarga los archivos**
   - Descarga o clona este repositorio
   - Asegúrate de tener los siguientes archivos:
     - `manifest.json`
     - `content.js`
     - `styles.css`

2. **Abre Chrome/Edge**
   - Escribe `chrome://extensions/` (Chrome) o `edge://extensions/` (Edge) en la barra de direcciones
   - Pulsa Enter

3. **Activa el Modo de Desarrollador**
   - En la esquina superior derecha, activa "Developer mode"

4. **Carga la extensión**
   - Haz clic en "Load unpacked" (Chrome) o "Load unpacked" (Edge)
   - Selecciona la carpeta que contiene los archivos de la extensión

5. **¡Listo!**
   - La extensión está instalada y activa
   - Abre cualquier vídeo de YouTube para probarla

## 🎯 Cómo usar

### Control básico

1. **Abre un vídeo en YouTube**
   - Ve a [youtube.com](https://youtube.com)
   - Reproduce cualquier vídeo

2. **Encuentra el botón**
   - Busca el botón de velocidad (por ejemplo "1x", "2x") en los controles del reproductor
   - Está ubicado junto a otros controles (volumen, calidad, etc.)

3. **Ajusta la velocidad**
   - Coloca el cursor sobre el botón de velocidad
   - **Scroll arriba** = aumenta la velocidad (+0.25x)
   - **Scroll abajo** = disminuye la velocidad (-0.25x)

### Funciones avanzadas

#### 🎮 Función de la barra espaciadora

YouTube tiene un comportamiento donde, al mantener la barra espaciadora, la reproducción se pone temporalmente a 2x. Esta extensión mejora esa función:

- **Sin la extensión**: Al soltar la barra espaciadora, la reproducción vuelve a 1x
- **Con la extensión**: Al soltar la barra espaciadora, la reproducción vuelve a tu velocidad personalizada

**Ejemplo:**
1. Configura el vídeo a 3x usando el scroll
2. Mantén la barra espaciadora (el vídeo pasa a 2x temporalmente)
3. Suelta la barra espaciadora (el vídeo vuelve a 3x automáticamente)

#### 🌍 Idiomas soportados

La extensión detecta el idioma de tu navegador y muestra el tooltip en el idioma correcto:

- 🇧🇷 Portugués: "Alterar velocidade"
- 🇺🇸 Inglés: "Change speed"
- 🇪🇸 Español: "Cambiar velocidad"
- 🇫🇷 Francés: "Modifier la vitesse"
- 🇩🇪 Alemán: "Geschwindigkeit ändern"
- 🇮🇹 Italiano: "Modifica velocità"
- 🇯🇵 Japonés: "速度を変更"
- 🇰🇷 Coreano: "속도 변경"
- 🇨🇳 Chino: "更改速度"
- 🇷🇺 Ruso: "Изменить скорость"
- 🇸🇦 Árabe: "تغيير السرعة"
- 🇮🇳 Hindi: "गति बदलें"
- 🇳🇱 Neerlandés: "Snelheid wijzigen"
- 🇵🇱 Polaco: "Zmień prędkość"
- 🇹🇷 Turco: "Hızı değiştir"

## ⚙️ Límites de velocidad

- **Mínimo**: 0.25x (4x más lento)
- **Máximo**: 4x (4x más rápido)
- **Incremento**: 0.25x por cada scroll

## 🔧 Solución de problemas

### La extensión no aparece en YouTube

1. Verifica que la extensión esté habilitada en `chrome://extensions/`
2. Recarga la página de YouTube (F5)
3. Asegúrate de estar en una página de vídeo (no en la página principal)

### El botón no responde al scroll

1. Asegúrate de que el cursor esté sobre el botón de velocidad
2. Verifica si hay otras extensiones en conflicto
3. Intenta recargar la extensión

### La velocidad no se conserva después de usar la barra espaciadora

1. Configura la velocidad usando el scroll de la extensión (no el menú de YouTube)
2. Espera unos segundos para que la configuración se guarde
3. Prueba la barra espaciadora de nuevo

## 🛠️ Desarrollo

### Estructura del proyecto

```
Youtube-Velocity-Extension/
├── manifest.json           # Configuración de la extensión
├── README.md               # README principal (Inglés)
├── src/                    # Archivos fuente
│   ├── content.js          # Script principal
│   ├── styles.css          # Estilos del botón y tooltip
│   ├── icon48.png          # Icono de la extensión 48x48
│   └── icon128.png         # Icono de la extensión 128x128
└── docs/                   # Documentación
    ├── README.pt.md        # README en Portugués
    └── README.es.md        # README en Español
```

### Tecnologías utilizadas

- **Manifest V3**: Última versión de la plataforma de extensiones de Chrome
- **Content Scripts**: Inyección de código en páginas de YouTube
- **MutationObserver**: Detección dinámica del reproductor
- **CSS Backdrop Filter**: Efecto de vidrio (esmerilado) en el tooltip

## 📝 Licencia

Este proyecto es de código abierto. Siéntete libre de usar, modificar y distribuir.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de:
- Reportar errores
- Sugerir nuevas funciones
- Enviar pull requests
- Traducir a nuevos idiomas

## 📧 Soporte

Si encuentras algún problema o tienes sugerencias, abre un issue en el repositorio.

---

Hecho con ❤️ para mejorar tu experiencia en YouTube
