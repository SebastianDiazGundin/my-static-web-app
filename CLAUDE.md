# Reglas de código

Repo: apps de ejemplo (Angular, React, Svelte, Vue) desplegadas en Azure Static Web Apps.
Cada app vive en su carpeta (`*-app/`) con su propio `package.json`, linter y `.prettierrc`.
Antes de tocar una app, usa sus scripts (`npm run lint`, `npm run format`, `npm test`) y su
configuración existente; no la mezcles con la de otra app.

## Ponytail: la solución más simple que funcione

Adoptado de [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) (MIT).
Nivel por defecto: **full**. Se puede cambiar con `/ponytail lite|full|ultra` (requiere el plugin,
ver `.claude/settings.json`).

### La escalera

Primero entiende el problema: lee la tarea y el código que toca y sigue el flujo real de punta a punta.
Después, detente en el primer escalón que resuelva:

1. **¿Hace falta que exista?** Si la necesidad es especulativa, no lo hagas y dilo en una línea (YAGNI).
2. **¿Ya existe en este repo?** Reutiliza el helper, servicio, store o patrón que ya está en la app.
3. **¿Lo hace la librería estándar?** Úsala (`Intl`, `URLSearchParams`, `structuredClone`, `fetch`, `Array` APIs…).
4. **¿Lo cubre la plataforma?** HTML/CSS nativo antes que JS (`<input type="date">`, `<dialog>`,
   `loading="lazy"`), reglas de `staticwebapp.config.json` antes que código.
5. **¿Lo resuelve una dependencia ya instalada?** Úsala (Bulma, Font Awesome, el router/store de la app).
   Nunca agregues una dependencia nueva para algo que se resuelve con unas pocas líneas.
6. **¿Cabe en una línea?** Una línea.
7. **Solo entonces:** el mínimo código que funcione.

Si dos escalones sirven, toma el más alto y sigue.

### Reglas

- **Bugs: arregla la causa raíz, no el síntoma.** Antes de editar una función, busca todos sus llamadores
  y arréglala una vez en el punto compartido.
- Sin abstracciones que nadie pidió: nada de interfaces con una sola implementación, factories de un solo
  producto ni config para valores que no cambian.
- Sin boilerplate ni andamiaje "para después".
- Mejor borrar que agregar. Mejor aburrido que ingenioso. La menor cantidad de archivos posible.
- Gana el diff más corto que funcione, pero solo cuando entiendes el problema: el cambio mínimo en el
  lugar equivocado es un segundo bug.
- Pedido complejo: entrega la versión simple y cuestiona el resto en la misma respuesta
  ("Hice X; Y lo cubre. ¿Necesitas X completo?"). No te frenes por algo que tiene un default razonable.
- Si dos opciones estándar tienen el mismo tamaño, elige la correcta en los casos borde.
- Marca los atajos deliberados que tienen un límite conocido con un comentario `ponytail:` que diga
  el límite y cuándo mejorarlo:
  `// ponytail: búsqueda O(n²), indexar por id si la lista supera ~1k items`.
  `/ponytail-debt` los junta en un registro de deuda técnica.

### Con qué nunca recortar

- Entender el problema: lee todo lo que toca el cambio antes de elegir un escalón.
- Validación de entrada en los límites de confianza (formularios, respuestas de la API, query params).
- Manejo de errores que evita perder datos.
- Seguridad: auth/roles de Static Web Apps, secretos fuera del código, nada de `innerHTML`/`v-html`/
  `{@html}`/`dangerouslySetInnerHTML` con datos del usuario.
- Accesibilidad básica: labels, `alt`, navegación por teclado, foco visible.
- Cualquier cosa que el usuario pidió explícitamente. Si insiste en la versión completa, se construye
  sin volver a discutir.

### Un chequeo mínimo

Si la lógica no es trivial (un branch, un loop, un parser, dinero o seguridad), deja **una** prueba
ejecutable, lo mínimo que falle si la lógica se rompe, con el runner que la app ya tiene
(`react-scripts test`, `ng test`). No agregues frameworks ni fixtures. Los one-liners triviales no necesitan test.

### Formato de respuesta

Primero el código. Después, como máximo tres líneas cortas: qué se omitió y cuándo agregarlo
(`omitido: X, agregar cuando Y`). Las explicaciones que el usuario pidió explícitamente van completas.

## Revisiones

- `/ponytail-review`: revisa el diff y busca solo sobreingeniería (tags `delete:` `stdlib:` `native:`
  `yagni:` `shrink:`). No cubre bugs ni seguridad; para eso usa `/code-review` y `/security-review`.
- `/ponytail-audit`: auditoría de todo el repo con lo que se puede borrar o simplificar. Solo reporta.
