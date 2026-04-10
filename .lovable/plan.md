## Plan: Agregar Sesión 5 (Feedback Lab) y reordenar sesiones

### Cambios en `src/components/ContentSection.tsx`

1. **Insertar nueva sesión 5** entre la sesión 4 (Sábado 23 de Mayo) y la actual sesión 5 (N8N), con:
  - id: "week5"
  - icon: `MessageCircle` (de lucide-react, representa feedback/conversación)
  - title: "Sesión 5: Feedback Lab – ¡Mejora tu producto con claridad y foco!"
  - date: "Sábado 30 de Mayo"
  - description: sobre refinar proyecto, feedback estructurado, framework Idea-Producto-Impacto, método Start-Stop-Continue
  - activity: presentación 1-2 min, retroalimentación estructurada, Mini Roadmap de Mejora
2. **Renumerar y recalcular fechas** de las sesiones posteriores:
3. **Actualizar ids** de week5 a week8 para reflejar el nuevo orden.
4. **Agregar import** de `MessageCircle` desde lucide-react.

### Resultado

8 sesiones totales, cada sábado desde el 9 de Mayo hasta el 20 de Junio.